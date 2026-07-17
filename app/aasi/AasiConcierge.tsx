"use client";

import { FormEvent, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const starters = ["What does AASI audit?", "How does an engagement begin?", "Can I schedule a consultation?"];

export function AasiConcierge() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Welcome to AASI. I can answer questions about our audit capabilities, global experience, and consultation process." },
  ]);

  async function ask(question: string) {
    const clean = question.trim();
    if (!clean || busy) return;
    const nextMessages = [...messages, { role: "user" as const, content: clean }];
    setMessages(nextMessages);
    setInput("");
    setBusy(true);

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const result = (await response.json()) as { reply?: string };
      if (!response.ok || !result.reply) throw new Error();
      setMessages((current) => [...current, { role: "assistant", content: result.reply! }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I’m unable to answer that right now. Please use the consultation form and the AASI team will respond directly." }]);
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <aside className={`aasi-concierge ${open ? "is-open" : ""}`} aria-label="AASI virtual concierge">
      {open && (
        <div className="concierge-panel">
          <header><div><span className="concierge-mark">A</span><span><strong>AASI Concierge</strong><small><i /> Available now</small></span></div><button type="button" onClick={() => setOpen(false)} aria-label="Close concierge">×</button></header>
          <div className="concierge-messages" aria-live="polite">
            {messages.map((item, index) => <div className={`concierge-message ${item.role}`} key={`${item.role}-${index}`}>{item.content}</div>)}
            {busy && <div className="concierge-message assistant typing"><span /><span /><span /></div>}
          </div>
          {messages.length < 3 && <div className="concierge-starters">{starters.map((starter) => <button type="button" key={starter} onClick={() => void ask(starter)}>{starter}</button>)}</div>}
          <a className="concierge-appointment" href="#contact" onClick={() => setOpen(false)}>Request a consultation <span>↗</span></a>
          <form onSubmit={handleSubmit}><label className="sr-only" htmlFor="concierge-question">Ask AASI a question</label><input id="concierge-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about AASI…" maxLength={600} /><button type="submit" disabled={busy || !input.trim()} aria-label="Send question">↑</button></form>
          <small className="concierge-disclaimer">General information only. Do not share confidential or sensitive data.</small>
        </div>
      )}
      <button className="concierge-launcher" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><span className="launcher-pulse" /><b>A</b><span><strong>Ask AASI</strong><small>Questions &amp; appointments</small></span></button>
    </aside>
  );
}
