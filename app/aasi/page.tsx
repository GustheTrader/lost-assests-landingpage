const capabilities = [
  ["Financial compliance", "Contract adherence, billing integrity, and recovery opportunity."],
  ["Risk analytics", "Advanced analysis to surface anomalies, overcharges, and control gaps."],
  ["Media performance", "KPI analysis and settings designed to improve marketing outcomes."],
  ["Contract development", "Commercial structures aligned to accountability and measurable value."],
  ["Remuneration consulting", "Agency economics, manpower utilization, and compensation assessment."],
  ["Dashboard performance", "Interactive visibility that turns complex findings into action."],
];

const ethics = [
  ["Honesty", "Straightforward and honest in every professional and business relationship."],
  ["Objectivity", "Independent judgment protected from bias and conflicts of interest."],
  ["Professional competence", "A continuing commitment to professional knowledge and skill."],
  ["Confidentiality", "Client information respected, protected, and disclosed only with proper authority."],
  ["Professional behavior", "Work conducted with respect for applicable laws and regulations."],
];

const clientVoices = [
  { role: "Senior Contract Manager", company: "Fortune 50 company", quote: "An invaluable resource for Supply Chain." },
  { role: "Group Category Manager, Agencies", company: "Fortune 50 company", quote: "A relevant, insightful presentation that engaged the entire audience." },
  { role: "Director, Internal Audit", company: "Fortune 50 company", quote: "Management saw clear value in the depth and quality of the audit data." },
  { role: "Chief Financial Officer", company: "Fortune 500 company", quote: "A well-executed audit that earned the opportunity for another engagement." },
];

export default function AasiAboutPage() {
  return (
    <main className="aasi-page">
      <header className="aasi-nav">
        <a className="aasi-brand" href="#aasi-top" aria-label="AASI home">
          <span className="aasi-brand-mark">A</span>
          <span><strong>AASI</strong><small>Advertising Audit Services International</small></span>
        </a>
        <nav aria-label="AASI navigation">
          <a href="#expertise">Expertise</a>
          <a href="#impact">Impact</a>
          <a href="#team">Leadership</a>
          <a href="#principles">Principles</a>
          <a className="aasi-nav-cta" href="mailto:psewal@adauditservintl.com?subject=AASI%20Inquiry">Start a conversation <b>↗</b></a>
        </nav>
      </header>

      <section className="aasi-hero" id="aasi-top">
        <div className="aasi-grid" aria-hidden="true" />
        <div className="aasi-hero-copy">
          <div className="aasi-eyebrow"><span /> Global marketing accountability</div>
          <h1>Clarity across<br />every <em>dollar.</em></h1>
          <p>AASI gives global marketers the evidence, analytics, and independent perspective to strengthen contract compliance, reduce risk, and realize greater value from every marketing investment.</p>
          <div className="aasi-actions">
            <a className="aasi-button primary" href="#expertise">Explore our expertise <span>↗</span></a>
            <a className="aasi-text-link" href="#impact">See our global impact <span>↓</span></a>
          </div>
          <div className="aasi-triad"><span>Transparency</span><i>•</i><span>Accountability</span><i>•</i><span>Value</span></div>
        </div>

        <div className="audit-visual" aria-label="Animated marketing spend audit visualization">
          <div className="audit-orbit orbit-large"><span className="audit-node n1" /></div>
          <div className="audit-orbit orbit-mid"><span className="audit-node n2" /></div>
          <div className="audit-orbit orbit-small"><span className="audit-node n3" /></div>
          <div className="audit-axis horizontal" /><div className="audit-axis vertical" />
          <div className="audit-sweep" />
          <div className="audit-core"><small>MARKETING SPEND</small><strong>VERIFIED</strong><span>Control signal active</span></div>
          <div className="audit-card card-one"><small>CONTRACT</small><strong>COMPLIANT</strong><i>+ value</i></div>
          <div className="audit-card card-two"><small>RISK SIGNAL</small><strong>ANALYZED</strong><i>reviewed</i></div>
          <div className="audit-card card-three"><small>MARKETS</small><strong>80+</strong><i>global breadth</i></div>
        </div>

        <div className="aasi-hero-stat stat-one"><small>Billings under audit</small><strong>$300B+</strong></div>
        <div className="aasi-hero-stat stat-two"><small>Combined experience</small><strong>100+ yrs</strong></div>
      </section>

      <section className="credential-rail" aria-label="AASI credentials">
        <div><strong>100+</strong><span>Years of combined industry experience</span></div>
        <div><strong>$300B+</strong><span>Billings under audit</span></div>
        <div><strong>80+</strong><span>Countries with audit engagements</span></div>
        <div><strong>Fortune 50</strong><span>Executive-level client perspectives</span></div>
      </section>

      <section className="aasi-section expertise-section" id="expertise">
        <div className="aasi-section-heading">
          <div>
            <div className="aasi-eyebrow dark"><span /> Full-spectrum oversight</div>
            <h2>Where complexity<br />meets <em>control.</em></h2>
          </div>
          <p>Marketing investment spans agencies, platforms, markets, and commercial models. AASI brings financial rigor and operational insight across creative, production, media, digital, search, mobile, direct marketing, research, promotions, public relations, and public affairs.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, copy], index) => (
            <article className="capability-card" key={title}>
              <span>0{index + 1}</span><i aria-hidden="true">{index % 2 ? "↗" : "⌁"}</i><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-intro">
          <div className="aasi-eyebrow mint"><span /> Enterprise confidence</div>
          <h2>Trusted inside the world&apos;s<br /><em>most demanding organizations.</em></h2>
          <p>AASI&apos;s published client perspectives include leaders at Fortune 50 and Fortune 500 companies across supply chain, procurement, internal audit, advertising, finance, and global brand services.</p>
        </div>
        <div className="voice-stage">
          <div className="voice-track">
            {[...clientVoices, ...clientVoices].map((voice, index) => (
              <article className="voice-card" key={`${voice.role}-${index}`}>
                <div className="voice-quote">“</div>
                <p>{voice.quote}</p>
                <div><strong>{voice.role}</strong><span>{voice.company}</span></div>
              </article>
            ))}
          </div>
        </div>
        <p className="impact-note">Client identities are presented by company ranking and role, consistent with AASI&apos;s published confidentiality approach.</p>
      </section>

      <section className="technology-section">
        <div className="tech-diagram" aria-hidden="true">
          <div className="tech-ring tr1" /><div className="tech-ring tr2" /><div className="tech-ring tr3" />
          <div className="tech-center"><span>AASI</span><small>ANALYTICS</small></div>
          <div className="tech-label tl1"><b>01</b>VALUE</div><div className="tech-label tl2"><b>02</b>ANALYTICS</div><div className="tech-label tl3"><b>03</b>VISUALIZATION</div><div className="tech-label tl4"><b>04</b>TECHNOLOGY</div>
        </div>
        <div className="tech-copy">
          <div className="aasi-eyebrow dark"><span /> Tools &amp; technology</div>
          <h2>Evidence you can<br /><em>act on.</em></h2>
          <p>AASI develops proprietary analytics and visualization tools around individual client needs—turning complex marketing data into an intelligible view of compliance, anomalies, overcharges, and corrective action.</p>
          <ul>
            <li><span>01</span><div><strong>Find the signal</strong><small>Advanced risk analytics surface non-compliance and irregularities.</small></div></li>
            <li><span>02</span><div><strong>Make it visible</strong><small>Interactive dashboards connect findings to business decisions.</small></div></li>
            <li><span>03</span><div><strong>Realize the value</strong><small>Independent review supports savings, transparency, and stronger controls.</small></div></li>
          </ul>
        </div>
      </section>

      <section className="leadership-section aasi-section" id="team">
        <div className="founder-card">
          <div className="founder-monogram">PS</div>
          <div className="founder-years"><strong>35+</strong><span>Years of industry experience</span></div>
        </div>
        <div className="founder-copy">
          <div className="aasi-eyebrow dark"><span /> Audit leadership</div>
          <h2>Experience at the<br /><em>point of decision.</em></h2>
          <h3>Pankaj Sewal</h3><small>Chief Auditing Officer &amp; Founder</small>
          <p>AASI&apos;s audit team brings more than a century of hands-on experience across CFO, finance director, and senior finance roles. Management oversight stays close to each engagement—connecting strategy, staffing, industry knowledge, and problem solving.</p>
          <div className="founder-contact"><a href="tel:+14158280779">+1 415 828 0779</a><a href="mailto:psewal@adauditservintl.com">psewal@adauditservintl.com</a></div>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="principles-head">
          <div><div className="aasi-eyebrow mint"><span /> Ethics &amp; conduct</div><h2>The standard behind<br /><em>every engagement.</em></h2></div>
          <p>As an independent compliance partner, how we work matters as much as what we find.</p>
        </div>
        <div className="principles-list">
          {ethics.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><i>✓</i></article>)}
        </div>
        <div className="diversity-band">
          <div><small>Certified diversity</small><strong>Minority Business Enterprise</strong></div>
          <p>AASI is certified as a bona fide Minority Business Enterprise by the National Minority Supplier Development Council and the Supplier Clearinghouse for the California Public Utilities Commission&apos;s Utility Supplier Diversity Program.</p>
        </div>
      </section>

      <section className="aasi-cta">
        <div className="aasi-eyebrow"><span /> Start with clarity</div>
        <h2>Make every marketing<br />investment <em>accountable.</em></h2>
        <p>Bring independent evidence, global experience, and proprietary analytics to your next audit engagement.</p>
        <a className="aasi-button primary" href="mailto:psewal@adauditservintl.com?subject=AASI%20Engagement%20Inquiry">Speak with AASI <span>↗</span></a>
      </section>

      <footer className="aasi-footer">
        <a className="aasi-brand" href="#aasi-top"><span className="aasi-brand-mark">A</span><span><strong>AASI</strong><small>Advertising Audit Services International</small></span></a>
        <p>Transparency. Accountability. Value.</p>
        <div><a href="/">Lost Assets Division</a><span>© {new Date().getFullYear()} AASI, LLC</span></div>
      </footer>
    </main>
  );
}
