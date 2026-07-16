"use client";

import { FormEvent, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    copy: "We evaluate the available facts and identify credible recovery paths using disciplined research and proprietary technology.",
  },
  {
    number: "02",
    title: "Verify",
    copy: "Every lead is reviewed for ownership, documentation, and risk before we recommend a path forward.",
  },
  {
    number: "03",
    title: "Recover",
    copy: "We coordinate the recovery process with discretion, clear communication, and a client-first standard of care.",
  },
];

const principles = ["Confidentiality", "Integrity", "Professional competence", "Client-first service"];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Confidential Lost Asset Inquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nOrganization: ${data.get("organization")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nAsset overview:\n${data.get("overview")}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:psewal@adauditservintl.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lost Assets Division home">
          <span className="brand-mark" aria-hidden="true">LA</span>
          <span className="brand-copy">
            <strong>Lost Assets</strong>
            <span>Division of AASI</span>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">Our approach</a>
          <a href="#probate">Probate support</a>
          <a href="#aasi">About AASI</a>
          <a className="nav-cta" href="#contact">Start an inquiry <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Lost Assets Division of AASI</div>
          <h1>Proprietary Tech<br />for <em>Asset Recovery.</em></h1>
          <p className="hero-lede">
            Advanced research meets professional rigor. We help identify, verify, and pursue overlooked assets with discretion and clarity.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss a potential asset <span>↗</span></a>
            <a className="text-link" href="#approach">See our process <span>↓</span></a>
          </div>
          <div className="trust-line">
            <span className="shield" aria-hidden="true">◆</span>
            <span><strong>Confidential by design</strong><small>Every inquiry is handled with professional discretion.</small></span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated asset intelligence visualization">
          <div className="radar">
            <div className="radar-ring ring-1" />
            <div className="radar-ring ring-2" />
            <div className="radar-ring ring-3" />
            <div className="radar-cross horizontal" />
            <div className="radar-cross vertical" />
            <div className="scan-beam" />
            <div className="orbit orbit-1"><span className="node node-a" /></div>
            <div className="orbit orbit-2"><span className="node node-b" /></div>
            <div className="orbit orbit-3"><span className="node node-c" /></div>
            <div className="radar-core">
              <span className="core-pulse" />
              <strong>Signal</strong>
              <small>verified</small>
            </div>
            <div className="data-tag tag-a"><small>TRACE</small><strong>04.782</strong></div>
            <div className="data-tag tag-b"><small>STATUS</small><strong>VALIDATED</strong></div>
            <div className="data-tag tag-c"><small>CONFIDENCE</small><strong>HIGH</strong></div>
          </div>
        </div>

        <div className="hero-footnote">
          <span>AASI</span>
          <p>Backed by a firm built on experience, trust, and stability.</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Service qualities">
        <span>Asset intelligence</span><i>✦</i><span>Ownership verification</span><i>✦</i><span>Discreet recovery</span><i>✦</i><span>Professional oversight</span>
      </section>

      <section className="approach section" id="approach">
        <div className="section-intro">
          <div className="eyebrow dark"><span /> The recovery framework</div>
          <h2>From overlooked<br />to <em>within reach.</em></h2>
          <p>Lost assets rarely surface through one search. Our framework combines technology, judgment, and careful verification to turn fragmented information into an actionable recovery path.</p>
        </div>
        <div className="steps">
          {processSteps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-symbol" aria-hidden="true">{step.number === "01" ? "⌕" : step.number === "02" ? "✓" : "↗"}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="probate-section section" id="probate">
        <div className="probate-heading">
          <div>
            <div className="eyebrow dark"><span /> Probate &amp; estate coordination</div>
            <h2>A clear path through a<br /><em>complex process.</em></h2>
          </div>
          <div className="probate-lede">
            <p>Recovering an asset connected to a deceased owner can require more than a claim. When probate or estate administration is necessary, we help organize the work and coordinate with a licensed probate attorney in the applicable state.</p>
            <p>Requirements and timing vary by jurisdiction and by estate. Our role is to keep the process moving, the documentation organized, and the family or fiduciary informed from initial review through final recovery.</p>
          </div>
        </div>

        <div className="probate-workflow">
          <aside className="workflow-summary">
            <div className="summary-icon" aria-hidden="true">§</div>
            <h3>White-glove coordination</h3>
            <p>A single point of contact helps connect the people, records, and milestones involved in a multi-month recovery.</p>
            <div className="summary-promise">
              <span>What you can expect</span>
              <strong>Transparent status updates</strong>
              <strong>Document-by-document guidance</strong>
              <strong>Professional attorney coordination</strong>
              <strong>Responsive, discreet support</strong>
            </div>
          </aside>

          <div className="probate-timeline">
            <article className="timeline-item">
              <div className="timeline-marker"><span>01</span></div>
              <div>
                <small>Case assessment</small>
                <h3>Determine the proper recovery path</h3>
                <p>We review the asset, ownership trail, date and state of domicile, known will or trust information, named beneficiaries, and the current status of the estate. With counsel, we help identify whether a direct claim, small-estate procedure, probate, or another authorized process may apply.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><span>02</span></div>
              <div>
                <small>Attorney-led initiation</small>
                <h3>Open or continue the estate proceeding</h3>
                <p>When court involvement is required, a licensed probate attorney advises the client and handles legal filings. We support the process by organizing available facts, coordinating requested records, and tracking the next action required under the applicable state and local court rules.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><span>03</span></div>
              <div>
                <small>Documentation &amp; authority</small>
                <h3>Assemble the complete recovery file</h3>
                <p>Depending on the matter, the file may include a certified death certificate, original will or trust documents, court-issued letters of authority, heir and beneficiary information, asset statements, ownership evidence, tax identification, affidavits, and claim-specific forms.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><span>04</span></div>
              <div>
                <small>Claim, follow-through &amp; recovery</small>
                <h3>Manage the details through resolution</h3>
                <p>We help coordinate the recovery submission, respond to non-legal documentation requests, maintain a clear case record, and communicate progress through review, approval, transfer, and receipt—while counsel and the court-appointed fiduciary retain their respective legal responsibilities.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="probate-note">
          <span>Important</span>
          <p>Lost Assets is not a law firm and does not provide legal advice. Probate legal services are provided by an independently engaged, licensed attorney. Court procedures, required documents, costs, and timelines vary by state, county, asset, and estate.</p>
          <a href="#contact">Discuss your circumstances <b>↗</b></a>
        </div>
      </section>

      <section className="aasi-section" id="aasi">
        <div className="aasi-panel">
          <div className="aasi-monogram" aria-hidden="true"><span>AASI</span></div>
          <div className="aasi-copy">
            <div className="eyebrow light"><span /> Institutional credibility</div>
            <h2>A specialist division.<br /><em>A proven standard.</em></h2>
            <p>Lost Assets operates as a division of Advertising Audit Services International, a contract compliance firm specializing in advertising and marketing, risk management, and media performance.</p>
            <p>Our work reflects AASI&apos;s published professional principles and client-first service philosophy.</p>
            <a className="button button-outline" href="/aasi">Meet the AASI team <span>↗</span></a>
          </div>
          <div className="principles">
            {principles.map((principle, index) => (
              <div className="principle" key={principle}>
                <span>0{index + 1}</span><strong>{principle}</strong><i>✓</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-copy">
          <div className="eyebrow dark"><span /> Confidential inquiry</div>
          <h2>There may be more<br />to <em>your story.</em></h2>
          <p>Share what you know. We&apos;ll review the initial details and respond with a clear, discreet next step.</p>
          <div className="contact-direct">
            <small>Prefer a direct conversation?</small>
            <a href="tel:+14158280779">+1 415 828 0779</a>
            <a href="mailto:psewal@adauditservintl.com">psewal@adauditservintl.com</a>
          </div>
        </div>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
            <label>Organization <span>Optional</span><input name="organization" type="text" autoComplete="organization" placeholder="Company or family office" /></label>
          </div>
          <div className="form-row">
            <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>Phone <span>Optional</span><input name="phone" type="tel" autoComplete="tel" placeholder="+1 000 000 0000" /></label>
          </div>
          <label>What can you tell us about the potential asset?<textarea name="overview" rows={5} placeholder="A brief, non-sensitive overview is enough to begin." required /></label>
          <div className="form-footer">
            <p><span>◆</span> Please do not include account numbers or sensitive personal data.</p>
            <button className="button button-primary" type="submit">Prepare secure inquiry <span>↗</span></button>
          </div>
          {submitted && <p className="form-status" role="status">Your email application is opening with the inquiry details prepared.</p>}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">LA</span>
          <span className="brand-copy"><strong>Lost Assets</strong><span>Division of AASI</span></span>
        </a>
        <p>Proprietary tech. Professional judgment. Discreet recovery.</p>
        <div className="footer-links">
          <a href="/aasi">Explore AASI ↗</a>
          <span>© {new Date().getFullYear()} Advertising Audit Services International</span>
        </div>
      </footer>
    </main>
  );
}
