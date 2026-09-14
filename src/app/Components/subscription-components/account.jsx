export default function SubscriptionAccount({ account, onReset }) {
	if (!account) return null;

	return (
		<section className="subscription-account" aria-labelledby="account-title">
			<div className="subscription-account-card">
				<div className="subscription-account-heading">
					<div>
						<p className="subscription-eyebrow">Account found</p>
						<h2 id="account-title">Your Account Details</h2>
					</div>
					<button type="button" className="subscription-reset" onClick={onReset}>Search Different User</button>
				</div>
				<div className="account-details">
					<div><span>Username</span><strong>{account.username || "N/A"}</strong></div>
					<div><span>Email</span><strong>{account.email || "No email"}</strong></div>
					<div><span>Current Plan</span><strong className="account-plan">{account.plan || "Free"}</strong></div>
					<div><span>Renewal Date</span><strong>{account.renewalDate || "N/A"}</strong></div>
				</div>
			</div>
		</section>
	);
}