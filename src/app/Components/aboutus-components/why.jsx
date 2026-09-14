import { Brain1Icon, LightingIcon, LockIcon, SettingIcon, ShildIcon, SmartHomeIcon, StarsIcon } from "../common/svgs";

const reasons = [
	["100% Private", "Your data never leaves your device. No tracking, no cloud storage, no compromises.", LockIcon],
	["Lightning Fast", "Local processing means instant responses without network latency.", LightingIcon],
	["Powerful AI", "Powered by our proprietary AURIX LLM for superior understanding and responses.", Brain1Icon],
	["Fully Customizable", "Modular architecture lets you build exactly what you need.", SettingIcon],
	["Affordable", "Premium AI features at accessible pricing, with free options available.", StarsIcon],
	["Works Offline", "Full functionality without internet connection for complete independence.", SmartHomeIcon],
];

export default function WhyChooseAurix() {
	return (
		<section className="about-why" aria-labelledby="why-heading">
			<div className="about-section-heading">
				<p className="about-kicker">The Aurix difference</p>
				<h2 id="why-heading">Why Choose AURIX?</h2>
			</div>
			<div className="why-grid">
				{reasons.map(([title, text, Icon]) => (
					<article className="why-item" key={title}>
						<div className="why-icon"><Icon aria-hidden="true" /></div>
						<h3>{title}</h3>
						<p>{text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
