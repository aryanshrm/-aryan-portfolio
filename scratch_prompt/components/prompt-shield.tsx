"use client"

import { useState } from "react"
import { Loader2, ShieldCheck, ShieldAlert, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Verdict = "BLOCK" | "REVIEW" | "MONITOR" | "ALLOW"
type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"

interface ContributingSignal {
  rule_id: string
  severity: string
  confidence: number
  weight: number
  score: number
}

interface TriggeredRule {
  rule_id: string
  severity: string
  confidence: number
}

interface ScanResult {
  verdict: Verdict
  risk_score: number
  threshold_used: number
  rules_evaluated: number
  rules_skipped: number
  total_rules: number
  input_context: string
  triggered_rules: TriggeredRule[]
  contributing_signals: ContributingSignal[]
  latency_ms: number
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"

const CONTEXT_OPTIONS: { value: string; label: string }[] = [
  { value: "user_prompt", label: "User prompt" },
  { value: "tool_descriptor", label: "Tool descriptor (MCP)" },
  { value: "tool_output", label: "Tool output" },
  { value: "rag_chunk", label: "RAG chunk" },
  { value: "mcp_registration", label: "MCP registration" },
  { value: "agent_handoff", label: "Agent handoff" },
  { value: "system_prompt", label: "System prompt" },
  { value: "memory_write", label: "Memory write" },
  { value: "retrieved_attachment", label: "Retrieved attachment" },
]

const VERDICT_STYLES: Record<Verdict, { label: string; bg: string; text: string; border: string }> = {
  BLOCK: { label: "BLOCK", bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  REVIEW: { label: "REVIEW", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  MONITOR: { label: "MONITOR", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  ALLOW: { label: "ALLOW", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
}

const SEVERITY_STYLES: Record<Severity, string> = {
  CRITICAL: "bg-red-100 text-red-700",
  HIGH: "bg-orange-100 text-orange-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  LOW: "bg-slate-100 text-slate-600",
}

function severityClass(severity: string): string {
  return SEVERITY_STYLES[severity.toUpperCase() as Severity] ?? "bg-slate-100 text-slate-600"
}

export function PromptShield() {
  const [input, setInput] = useState("")
  const [context, setContext] = useState("user_prompt")
  const [profile, setProfile] = useState("default")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleScan() {
    if (!input.trim() || loading) return
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/evaluate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          context: context,
          profile: profile,
          source: "web_ui",
        }),
      })

      if (!res.ok) {
        throw new Error(`API responded with status ${res.status}`)
      }

      const data: ScanResult = await res.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reach the PromptShield API.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-[900px] px-4 py-10">
      {/* Header */}
      <header className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <ShieldCheck className="size-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">PromptShield</h1>
          <p className="text-sm text-muted-foreground">AI Prompt Injection Detection Engine</p>
        </div>
      </header>
      <div className="mt-6 border-t border-border" />

      {/* Input Card */}
      <section className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
        <label htmlFor="prompt-input" className="block text-sm font-medium text-card-foreground">
          Input Prompt
        </label>
        <textarea
          id="prompt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={7}
          placeholder="Paste user input, tool output, or system prompt here..."
          className="mt-2 w-full resize-y rounded-md border border-input bg-background px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
        />

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="context-select" className="block text-xs font-medium text-muted-foreground">
              Context
            </label>
            <select
              id="context-select"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            >
              {CONTEXT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="profile-select" className="block text-xs font-medium text-muted-foreground">
              Profile
            </label>
            <select
              id="profile-select"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            >
              <option value="default">Default</option>
              <option value="strict">Strict</option>
              <option value="lenient">Lenient</option>
            </select>
          </div>
        </div>

        <Button
          onClick={handleScan}
          disabled={!input.trim() || loading}
          className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Analyzing input...
            </>
          ) : (
            "Scan Prompt"
          )}
        </Button>
      </section>

      {/* States */}
      {!result && !loading && !error && (
        <div className="mt-6 rounded-lg border border-border bg-secondary/60 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            PromptShield analyzes prompts, tool outputs, and system messages for prompt injection,
            instruction override, data exfiltration, and jailbreak attempts. Paste content above and run a
            scan to receive a verdict, a risk score, and the top contributing detection signals.
          </p>
        </div>
      )}

      {error && !loading && (
        <section className="mt-6 rounded-lg border border-red-200 bg-red-50 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-600" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-red-700">Scan failed</h2>
              <p className="mt-1 text-sm text-red-700">{error}</p>
              <p className="mt-3 text-xs leading-relaxed text-red-600">
                Is the PromptShield API running at {API_URL}? Start it with:{" "}
                <code className="rounded bg-red-100 px-1.5 py-0.5 font-mono">
                  uvicorn api.main:app --reload
                </code>
              </p>
            </div>
          </div>
        </section>
      )}

      {result && !loading && <ResultCard result={result} />}
    </div>
  )
}

function ResultCard({ result }: { result: ScanResult }) {
  const v = VERDICT_STYLES[result.verdict]
  const topSignals = result.contributing_signals.slice(0, 3)

  return (
    <section className="mt-6 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-semibold ${v.bg} ${v.text} ${v.border}`}
          >
            {v.label}
          </span>
          <div>
            <div className="text-xs font-medium text-muted-foreground">Risk Score</div>
            <div className="text-3xl font-semibold leading-tight text-foreground">
              {result.risk_score.toFixed(2)}
              <span className="text-base font-normal text-muted-foreground">
                {" "}
                / {result.threshold_used}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Latency {result.latency_ms} ms</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {result.rules_evaluated} of {result.total_rules} rules evaluated
          </div>
        </div>
      </div>

      <div className="my-5 border-t border-border" />

      <h2 className="text-sm font-semibold text-card-foreground">Top Contributing Signals</h2>

      {topSignals.length === 0 ? (
        <div className="mt-3 flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3">
          <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" />
          <p className="text-sm text-emerald-700">No detection rules triggered. Input appears clean.</p>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-border">
          {topSignals.map((s) => (
            <li key={s.rule_id} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div className="flex items-center gap-3">
                <ShieldAlert className="size-4 text-muted-foreground" aria-hidden="true" />
                <span className="font-mono text-sm font-semibold text-foreground">{s.rule_id}</span>
                <span
                  className={`rounded px-2 py-0.5 text-xs font-medium ${severityClass(s.severity)}`}
                >
                  {s.severity.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>
                  <span className="text-foreground">{(s.confidence * 100).toFixed(0)}%</span> confidence
                </span>
                <span>
                  <span className="text-foreground">+{s.score.toFixed(2)}</span> score
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
