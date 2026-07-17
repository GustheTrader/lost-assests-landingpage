"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "fallback" | "error";

export function AasiContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setMessage("Sending your confidential inquiry…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; delivery?: string; mailtoUrl?: string; message?: string };

      if (!response.ok || !result.ok) throw new Error(result.message || "We could not send your inquiry.");

      if (result.delivery === "email") {
        form.reset();
        setState("sent");
        setMessage("Thank you. Your inquiry has been delivered to the AASI team.");
      } else if (result.mailtoUrl) {
        setState("fallback");
        setMessage("Your email application is opening with the inquiry prepared for review.");
        window.location.href = result.mailtoUrl;
      }
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please email psewal@adauditservintl.com directly.");
    }
  }

  return (
    <form className="aasi-contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-head">
        <span>Confidential engagement inquiry</span>
        <small>Required fields are marked *</small>
      </div>
      <div className="contact-form-grid">
        <label>Full name *<input name="name" type="text" autoComplete="name" required maxLength={100} /></label>
        <label>Work email *<input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
        <label>Company *<input name="company" type="text" autoComplete="organization" required maxLength={140} /></label>
        <label>Role / title<input name="role" type="text" autoComplete="organization-title" maxLength={120} /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>How can we help? *
          <select name="inquiryType" required defaultValue="">
            <option value="" disabled>Select an area</option>
            <option>Advertising or media audit</option>
            <option>Contract compliance</option>
            <option>Risk analytics</option>
            <option>Marketing performance</option>
            <option>Schedule a consultation</option>
            <option>Other inquiry</option>
          </select>
        </label>
        <fieldset className="appointment-fields">
          <legend>Preferred consultation window <span>Optional</span></legend>
          <label>Date<input name="preferredDate" type="date" /></label>
          <label>Time<input name="preferredTime" type="time" /></label>
          <label>Timezone<input name="timezone" type="text" placeholder="e.g. Pacific Time" maxLength={80} /></label>
        </fieldset>
        <label className="contact-message">Briefly describe your goals *<textarea name="message" rows={5} required maxLength={1800} placeholder="A high-level, non-confidential overview is enough to begin." /></label>
        <label className="contact-consent"><input name="consent" type="checkbox" value="yes" required /><span>I consent to AASI contacting me about this inquiry. *</span></label>
        <label className="contact-honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="contact-form-footer">
        <p><span>◆</span> Do not include account credentials, payment data, or confidential contract terms.</p>
        <button className="aasi-button primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Submit inquiry"} <span>↗</span></button>
      </div>
      {message && <p className={`contact-status ${state}`} role="status">{message}</p>}
    </form>
  );
}
