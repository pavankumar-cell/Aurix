const policySections = [
  {
    title: "1. Information we collect",
    text:
      "We may collect information that you provide directly, such as your name, email address, account details, and usage preferences. We also gather limited device and product diagnostics to improve the quality, reliability, and security of AURIX.",
  },
  {
    title: "2. How we use data",
    text:
      "Your information helps us provide core functionality, personalize your experience, troubleshoot issues, improve features, and communicate important product updates. We do not sell personal information to third parties.",
  },
  {
    title: "3. Security and storage",
    text:
      "We use reasonable administrative, technical, and physical safeguards to protect personal data. Sensitive information may be encrypted in transit and at rest, and we limit access to authorized personnel and systems only.",
  },
  {
    title: "4. Your choices and rights",
    text:
      "You can update your profile, change communication preferences, review account data, and request deletion or correction of personal information in line with your regional privacy rights and applicable laws.",
  },
  {
    title: "5. Cookies and analytics",
    text:
      "We may use cookies, device identifiers, and analytics tools to understand product performance, remember settings, and improve user experience. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "6. Contact us",
    text:
      "If you have questions, concerns, or requests regarding this policy, please contact us through the support channels listed in our contact page. We are committed to addressing privacy concerns promptly and transparently.",
  },
];

const privacyPrinciples = [
  "Privacy by design",
  "Limited data collection",
  "Transparent processing",
  "User control and access",
];

export const metadata = {
  title: "Privacy Policy | AURIX",
  description:
    "Read the AURIX privacy policy and learn how we handle data, security, and user rights.",
};

export default function PrivacyPage() {
  return (
    <div className="support-page privacy-page">
      <section className="support-hero compact-hero">
        <p className="support-kicker">Privacy Policy</p>
        <h1>Your privacy is built into everything we do.</h1>
        <p className="support-subtitle">
          We are committed to responsible data practices, user transparency, and strong privacy
          safeguards across the AURIX experience.
        </p>
      </section>

      <section className="privacy-principles">
        {privacyPrinciples.map((principle) => (
          <div key={principle} className="principle-pill">
            {principle}
          </div>
        ))}
      </section>

      <section className="privacy-content">
        <div className="privacy-copy">
          {policySections.map((section) => (
            <article key={section.title} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <aside className="privacy-sidebar">
          <div className="sidebar-card">
            <p className="support-kicker">Summary</p>
            <h3>What matters most</h3>
            <ul>
              <li>We collect only necessary information for core product functionality.</li>
              <li>We never sell personal data to advertisers or third parties.</li>
              <li>You retain control over your account, settings, and privacy preferences.</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <p className="support-kicker">Policy updates</p>
            <h3>Stay informed</h3>
            <p>
              We may update this policy occasionally to reflect new features, legal requirements,
              or product improvements. Significant changes will be communicated through the app or
              email when appropriate.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
