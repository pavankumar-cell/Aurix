import Link from "next/link";


const contactMethods = [
  {
    label: "Email",
    value: "aurix.ai.2026@gmail.com",
    detail: "Reply within 24 hours",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+91 9704961172",
    detail: "Mon–Fri • 9am–6pm PST",
    icon: "☎",
  },
  {
    label: "Office",
    value: "Gachibowli, Hyderabad, India",
    detail: "Remote-first, global support",
    icon: "⌂",
  },
];

const quickStats = [
  { value: "24h", label: "Average response time" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "12k+", label: "Support conversations" },
];

export const metadata = {
  title: "Contact AURIX | Support & Sales",
  description:
    "Reach the AURIX team for product support, partnerships, or general questions.",
};


export default function ContactPage() {
  return (
    <div className="support-page contact-page">
      <section className="support-hero">
        <p className="support-kicker">Contact Us</p>
        <h1>Let’s build a smarter AI experience together.</h1>
        <p className="support-subtitle">
          Whether you need help with setup, want to discuss partnerships, or have a question
          about the platform, our team is ready to help.
        </p>
      </section>

      <section className="support-metrics">
        {quickStats.map((stat) => (
          <div key={stat.label} className="metric-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="support-grid">
        <div className="contact-card-panel">
          {contactMethods.map((method) => (
            <div key={method.label} className="info-card">
              <div className="info-icon">{method.icon}</div>
              <div>
                <p>{method.label}</p>
                <h3>{method.value}</h3>
                <span>{method.detail}</span>
              </div>
            </div>
          ))}

          <div className="support-cta-box">
            <p>Need a faster answer?</p>
            <Link href="/help" className="primary-button">
              Visit Help Center
            </Link>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-header">
            <p className="support-kicker">Send a message</p>
            <h2>Talk to the AURIX team</h2>
          </div>

          <form className="support-form">
            <div className="field-row">
              <label>
                <span>Full name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>

            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Optional" />
            </label>

            <label>
              <span>How can we help?</span>
              <textarea rows={6} name="message" placeholder="Tell us about your project, question, or concern..." />
            </label>

            <button type="submit" className="primary-button submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
