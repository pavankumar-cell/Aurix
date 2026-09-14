const helpCategories = [
  {
    title: "Getting started",
    description: "Set up your workspace, install AURIX, and learn the basics.",
    icon: "⚡",
  },
  {
    title: "Account & billing",
    description: "Manage plans, subscriptions, invoices, and account access.",
    icon: "💳",
  },
  {
    title: "Security & privacy",
    description: "Learn how we protect your data and manage device permissions.",
    icon: "🔒",
  },
  {
    title: "Advanced features",
    description: "Explore automation, smart suggestions, and productivity workflows.",
    icon: "🧠",
  },
];

const faqItems = [
  {
    question: "How do I install AURIX on my device?",
    answer:
      "Download the installer from the download page, follow the guided steps, and sign in with your account. Most users are ready in under 10 minutes.",
  },
  {
    question: "Can I use AURIX without a subscription?",
    answer:
      "Yes. AURIX offers a free tier with essential features, and premium plans unlock expanded AI memory, automation, and advanced productivity tools.",
  },
  {
    question: "Is my data stored locally or in the cloud?",
    answer:
      "AURIX is designed with privacy-first principles. Sensitive data can remain on-device, and cloud processing is only used when you choose it or when it is necessary for a feature you enable.",
  },
  {
    question: "What if I need help with a technical issue?",
    answer:
      "Use our contact form or support email and include your OS version, device details, and any screenshots. Our team will respond with a troubleshooting path and next steps.",
  },
];

const quickGuides = [
  "Set up your first AI workspace",
  "Invite teammates and share workflows",
  "Connect external tools and automations",
  "Troubleshoot performance issues",
];


export default function HelpPage() {
  return (
    <div className="support-page help-page">
      <section className="support-hero compact-hero">
        <p className="support-kicker">Help Center</p>
        <h1>Support that keeps your workflow moving.</h1>
        <p className="support-subtitle">
          Browse guides, explore common questions, and get the answers you need to unlock the
          full power of AURIX.
        </p>

        <div className="search-shell" aria-label="Help search">
          <span>⌕</span>
          <input type="text" placeholder="Search for setup, billing, or troubleshooting" />
        </div>
      </section>

      <section className="help-categories">
        {helpCategories.map((category) => (
          <article key={category.title} className="help-card">
            <div className="info-icon large-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </section>

      <section className="faq-layout">
        <div className="faq-panel">
          <div className="panel-heading">
            <p className="support-kicker">Frequently asked questions</p>
            <h2>Answers for every stage of your journey.</h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item" open={item.question === faqItems[0].question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="guide-panel">
          <p className="support-kicker">Quick guides</p>
          <h3>Popular help topics</h3>
          <ul>
            {quickGuides.map((guide) => (
              <li key={guide}>{guide}</li>
            ))}
          </ul>
          <a href="/contact" className="primary-button">
            Contact support
          </a>
        </aside>
      </section>
    </div>
  );
}
