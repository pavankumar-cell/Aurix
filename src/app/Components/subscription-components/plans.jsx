const plans = [
	{
		id: "free",
		name: "Free Plan",
		badge: "FREE FOREVER",
		description: "Explore AURIX with essential features and local AI power.",
		price: "₹0",
		billing: "Forever Free",
		button: "Get Started Free",
		features: ["Core model", "More messages and uploads", "Image processing", "PDF/Doc to Text Conversion", "Voice Input (Limited)", "Offline System Control (Basic)", "Limited Memory"],
		variant: "free",
	},
	{
		id: "pro",
		name: "Pro Plan",
		badge: "MONTHLY PLAN",
		offer: "Special Offer",
		description: "Unlock more power with advanced features and productivity tools.",
		price: "₹199",
		oldPrice: "₹499",
		billing: "Billed monthly",
		button: "Choose Pro Monthly",
		features: ["Advanced Model", "Unlimited Voice Assistant", "Extended Memory", "More Image Processing", "Voice commander feature unlock", "Priority Support", "Unlocked pro Avatar, Banner"],
		variant: "pro",
	},
	{
		id: "ultimate",
		name: "Ultimate Plan",
		badge: "MONTHLY PLAN",
		offer: "Special Offer",
		description: "Maximum power, complete control, and premium support.",
		price: "₹299",
		oldPrice: "₹999",
		billing: "Billed monthly",
		button: "Choose Ultimate Monthly",
		features: ["Unlimited Everything", "Multi-Device Sync", "Fast Image Processing", "Unlocked audio to text conversion", "Maximum memory and context", "Unlocked ultimate Avatar, Banner", "Dedicated Support", "Early access to experimental features"],
		variant: "ultimate",
	},
	{
		id: "pro-plus",
		name: "Pro Plus Plan",
		badge: "ANNUAL PLAN",
		offer: "Save 20%",
		description: "Get the best value with annual access and priority benefits.",
		price: "₹4,790",
		billing: "Billed annually",
		button: "Choose Pro Plus Annual",
		features: ["20% Savings", "Early Access to New Features", "Aurix Cloud Sync", "Backup & Restore", "Advanced Customization", "Priority Support"],
		variant: "pro-plus",
		image: "/brain bg remv.png",
	},
	{
		id: "ultimate-plus",
		name: "Ultimate Plus Plan",
		badge: "ANNUAL PLAN",
		offer: "Save 20%",
		description: "The ultimate experience with annual benefits and exclusive perks.",
		price: "₹9,590",
		billing: "Billed annually",
		button: "Choose Ultimate Plus Annual",
		features: ["20% Savings", "Priority Feature Requests", "Beta Access", "Enterprise Licensing (Optional)", "1-on-1 Onboarding", "VIP Support"],
		variant: "ultimate-plus",
		image: "/brain bg 2.png",
	},
];

export default function SubscriptionPlans({ currentPlan, onChoose }) {
	return (
		<section className="subscription-plans" aria-labelledby="plans-title">
			<div className="subscription-section-heading">
				<p className="subscription-eyebrow">Flexible access</p>
				{/* <h2 id="plans-title">Choose your AURIX plan</h2> */}
			</div>
			<div className="plans-grid">
				{plans.map((plan) => {
					const isCurrent = currentPlan?.toLowerCase().includes(plan.id.replace("-", " "));
					return (
						<article className={`plan-card ${plan.variant} ${plan.image ? "annual-plan" : ""} ${isCurrent ? "current-plan" : ""}`} key={plan.id}>
							<div className={plan.image ? "annual-plan-content" : undefined}>
								<div className="plan-card-labels"><span className="plan-badge">{plan.badge}</span>{plan.offer && <span className="plan-offer">{plan.offer}</span>}</div>
								<div className="plan-title">Aurix<br /><strong>{plan.name}</strong>{plan.id !== "free" && <span> / {plan.id.includes("plus") ? "year" : "month"}</span>}</div>
								<p className="plan-sub">{plan.description}</p>
								<div className="plan-price">{plan.price} {plan.oldPrice && <><span>/ month</span> <del>{plan.oldPrice}</del></>}</div>
								<div className="plan-billing">{plan.billing}</div>
								<div>
								<button type="button" className={`plan-cta ${plan.id === "free" ? "plan-cta-start" : ""} ${isCurrent ? "current-plan-btn" : ""}`} onClick={() => onChoose(plan)} disabled={isCurrent}>
									{isCurrent ? "Your Current Plan" : plan.button}
								</button>
								<div className="plan-heading">{plan.id === "free" ? "Includes:" : plan.id.includes("plus") ? "Everything in Pro, but:" : plan.id === "ultimate" ? "Everything in Pro, and:" : "Everything in Free, and:"}</div>
								<div className="plan-features"><ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
							</div>
							</div>
							{plan.image && <img className="brain-orb" src={plan.image} alt="AURIX AI illustration" />}
						</article>
					);
				})}
			</div>
		</section>
	);
}