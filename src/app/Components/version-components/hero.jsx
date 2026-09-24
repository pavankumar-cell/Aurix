import Link from "next/link";

export default function VersionHero() {
	return (
		<section className="version-hero" aria-labelledby="version-heading">
			<div className="version-hero-content">
				<p className="version-eyebrow">Version History</p>
				<h1 id="version-heading">Builds that keep getting smarter.</h1>
				<p>
					AURIX continues to grow with new features, improved privacy, smoother automation, and faster everyday performance.
				</p>
				{/* <div className="version-actions">
					<Link href="/download" className="version-primary-button">Download Latest</Link>
				</div> */}
			</div>

			<div className="version-current-card">
				<span className="version-badge">Current Release</span>
				<h2>v1.2.0</h2>
				<p>Smarter conversations, improved local workflows, and a faster interface.</p>
			</div>
		</section>
	);
}
