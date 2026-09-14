const trustItems = [
	["🔒", "Secure & Private", "Your data stays on your device."],
	["⚡", "Offline First", "Works without internet."],
	["🔄", "No Auto-Renewal", "Cancel anytime."],
	["💬", "24/7 Support", "We're here whenever you need us."],
];

export default function SubscriptionTrust() {
	return <section className="subscription-trust" aria-label="Subscription benefits">{trustItems.map(([icon, title, text]) => <div key={title}><strong><span>{icon}</span>{title}</strong><p>{text}</p></div>)}</section>;
}