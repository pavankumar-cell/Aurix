import { EyeIcon, TargetIcon } from "../common/svgs";

const missionCards = [
	{
		title: "Our Mission",
		icon: TargetIcon,
		text: "To build innovative technology that solves real-world problems, empowers people, and creates meaningful impact at scale.",
	},
	{
		title: "Our Vision",
		icon: EyeIcon,
		text: "To build Aurix into a globally recognized technology powerhouse originating from India and shaping the future through innovation.",
	},
];

export default function Mission() {
	return (
		<section className="about-mission" aria-labelledby="mission-heading">
			<div className="about-section-heading">
				<p className="about-kicker">What guides us</p>
				<h2 id="mission-heading">Built to Create. Driven to <span>Innovate</span>.</h2>
			</div>
			<div className="mission-grid">
				{missionCards.map((card) => (
					<article className="mission-card" key={card.title}>
						<div className="mission-icon"><card.icon aria-hidden="true" /></div>
						<div className="mission-separator" />
						<h3>{card.title}</h3>
						<p>{card.text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
