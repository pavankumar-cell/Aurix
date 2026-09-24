import Link from "next/link";
import { BrainIcon, LockIcon, ModularIcon, RocketIcon } from "../common/svgs";

type Feature = [React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>, string, string];

const features: Feature[] = [
	[BrainIcon, "AI Assistant", "Natural language, voice interaction & real-time images"],
	[LockIcon, "Privacy First", "Aurix provides a secure environment for your data and interactions."],
	[RocketIcon, "Blazing Fast", "Optimized for speed and efficiency. Instant responses."],
	[ModularIcon, "Fully Modular", "Extend, customize and build with Aurix. Upgrade to explore."],
];

export default function Powered() {
	return (
		<section className="features-section">
			<div className="feature-grid">
				<div className="feature-intro">
					<span className="section-tag">POWERED FOR YOU</span>
					<h2>Smart. <span>Private.</span> Powerful.</h2>
					<p>Aurix is fully modular and runs locally on your device. No data leaves your system. You&apos;re always in control.</p>
					<Link href="/features" className="feature-btn">Explore All Features →</Link>
				</div>
				{features.map(([Icon, title, description]) => (
					<article className="feature-card" key={title}>
						<div className="feature-icon"><Icon aria-hidden="true" /></div>
						<h3>{title}</h3>
						<p>{description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
