import { BrainIcon, LightingIcon, ModularIcon, ShildIcon } from "../common/svgs";

type ExperienceCard = {
	title: string;
	description: string;
	icon: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
	accent: string;
};

const experienceCards: ExperienceCard[] = [
	{
		title: "Do More. With Less Effort.",
		description: "Stop searching for the right app or repeating the same actions. Aurix helps you get things done faster through intelligent assistance and connected tools.",
		icon: LightingIcon,
		accent: "#a56bff",
	},
	{
		title: "One Intelligent Companion.",
		description: "Your desktop becomes easier to interact with. Ask Aurix to help, search, create, open, and perform actions across your digital workspace.",
		icon: BrainIcon,
		accent: "#3e9cff",
	},
	{
		title: "Everything in One Place.",
		description: "Work, entertainment, documents, media and more. Instead of jumping between disconnected applications, Aurix brings useful experiences together.",
		icon: ModularIcon,
		accent: "#9b65ff",
	},
	{
		title: "Built Around You.",
		description: "Your digital experience should feel personal. Aurix is designed to adapt to your workflow and become a more natural and intelligent way to interact with your device.",
		icon: ShildIcon,
		accent: "#15e0c0",
	},
];

export default function Experience() {
	return (
		<section className="experience-section" aria-labelledby="experience-title">
			<div className="experience-heading">
				<h2 id="experience-title">
					Your digital life shouldn&apos;t feel <span>fragmented.</span>
				</h2>
				<p>Aurix brings more of those experiences into one intelligent ecosystem.</p>
			</div>

			<div className="experience-grid">
				{experienceCards.map((card, index) => (
					<article
						key={card.title}
						className="experience-card"
						style={{ "--experience-accent": card.accent, "--experience-delay": `${index * 90}ms` } as React.CSSProperties}
					>
						<div className="experience-icon">
							<card.icon aria-hidden="true" />
						</div>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
