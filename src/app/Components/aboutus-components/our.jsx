import { DeployIcon, GrowthIcon, PeopleIcon, RocketIcon } from "../common/svgs";

const milestones = [
	["2023", "The Beginning", "AURIX project launches with the vision to create a privacy-first personal AI assistant for Windows.", RocketIcon],
	["2024", "Core Release", "Launch of AURIX with AI Assistant, Voice Assistant, and File Reader modules. Introduce AURIX LLM.", DeployIcon],
	["2025", "Expansion", "Add Media Center, System Control, Audio Commander, and Games Launcher. Growing user base across multiple regions.", PeopleIcon],
	["2026", "Global Growth", "Expanding to mobile and enterprise solutions. AURIX becomes the leading privacy-first AI assistant.", GrowthIcon],
];

export default function OurStory() {
	return (
		<section className="about-story" aria-labelledby="story-heading">
			<div className="about-section-heading">
				<p className="about-kicker">Our story</p>
				<h2 id="story-heading">The <span>Journey</span> of Aurix</h2>
			</div>
			<div className="story-intro">
				<div>
					<p>AURIX was born from a simple observation: <strong>existing AI assistants compromise on privacy, performance, and control.</strong></p>
					<p>We envisioned a different approach - an AI assistant that respects user privacy, runs efficiently on local machines, and empowers users with complete control over their data.</p>
					<p>Since our inception, we've been dedicated to building the most <strong>intelligent, private, and user-centric AI assistant</strong> on the market. Our team of passionate engineers and AI researchers work tirelessly to bring cutting-edge artificial intelligence to your desktop.</p>
					<p>Today, AURIX represents <strong>the future of personal AI</strong> - powerful, private, and truly yours.</p>
				</div>
				<div className="story-image"><img src="/aurixlogo.png" alt="AURIX AI" /></div>
			</div>
			<div className="timeline2">
				<div className="timeline-line" />
				{milestones.map(([year, title, text, Icon]) => (
					<article className="step" key={year}>
						<div className="step-icon"><Icon aria-hidden="true" /></div>
						<h3>{year}</h3>
						<h4>{title}</h4>
						<p>{text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
