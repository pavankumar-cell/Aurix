type CareersHeroProps = {
	onExplore: () => void;
};

export default function CareersHero({ onExplore }: CareersHeroProps) {
	return (
		<section className="careers-hero" aria-labelledby="careers-title">
			<div className="careers-hero-copy">
				<p className="careers-eyebrow">Careers at Aurix</p>
				<h1 id="careers-title">Start close to<br /><span>the future.</span></h1>
				<p className="careers-hero-text">
					Our first internship is designed for freshers and people with less than one year of experience who want to learn by building meaningful AI products. At Aurix, you&apos;ll gain real experience, mentorship, and the chance to make an impact.
				</p>
				<div className="careers-actions">
					<button type="button" className="careers-primary-button" onClick={onExplore}>Explore Openings <span aria-hidden="true">↓</span></button>
					<a className="careers-secondary-button" href="#opportunity">Life at Aurix</a>
				</div>
			</div>
			<div className="careers-hero-art" aria-hidden="true">
				<div className="careers-orbit careers-orbit-one" />
				<div className="careers-orbit careers-orbit-two" />
				<div className="careers-art-card"><small>01</small><strong>LEARN<br />BY<br />DOING</strong><span>Real Projects.<br />Real Growth.<br />A Brighter You.</span></div>
				<p>More<br />Possibilities<br />Together.</p>
			</div>
		</section>
	);
}
