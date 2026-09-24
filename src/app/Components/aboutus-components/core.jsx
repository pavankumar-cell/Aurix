import { Brain1Icon, LightingIcon, MobileAppIcon, ModularIcon, PeopleIcon, ShildIcon } from "../common/svgs";

const values = [
	["Privacy First", "Your data is yours alone. AURIX processes everything locally, keeping your information secure and private.", ShildIcon],
	["Performance", "We build technology that is fast, reliable, efficient, and built to perform.", LightingIcon],
	["Accessibility", "Advanced AI technology should be available to everyone, regardless of technical expertise or resources.", PeopleIcon],
	["Modularity", "Fully customizable and modular architecture that adapts to your unique needs and workflows.", ModularIcon],
	["Innovation", "We continuously explore new ideas, technologies, and possibilities to create what comes next.", Brain1Icon],
	["Inclusivity", "Built for a global audience with support for multiple languages, cultures, and use cases.", MobileAppIcon],
];

export default function CoreValues() {
	return (
		<section className="about-values" aria-labelledby="values-heading">
			<div className="about-section-heading">
				<p className="about-kicker">What we believe</p>
				<h2 id="values-heading">Our Core Values</h2>
			</div>
			<div className="values-grid">
				{values.map(([title, text, Icon]) => (
					<article className="value-item" key={title}>
						<div className="value-icon"><Icon aria-hidden="true" /></div>
						<h3>{title}</h3>
						<p>{text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
