const releases = [
	{
		version: "v1.2.0",
		label: "Latest",
		items: [
			"Improved voice command accuracy",
			"Faster response handling for daily tasks",
			"Refined privacy settings and local controls",
		],
		featured: true,
	},
	{
		version: "v0.5",
		label: "Major Update",
		items: [
			"New AI assistant experience",
			"Better file reading and context understanding",
			"Expanded automation tools",
		],
	},
	{
		version: "v0.1",
		label: "Performance",
		items: [
			"Improved startup speed",
			"More stable desktop integrations",
			"Enhanced voice output quality",
		],
	},
];

export default function VersionHistory() {
	return (
		<section className="version-history" aria-labelledby="history-heading">
			<div className="version-section-heading">
				<p className="version-eyebrow">Release notes</p>
				<h2 id="history-heading">A clearer path forward.</h2>
			</div>
			<div className="version-list">
				{releases.map((release) => (
					<article className={`version-card${release.featured ? " version-card-featured" : ""}`} key={release.version}>
						<div className="version-card-top">
							<h3>{release.version}</h3>
							<span>{release.label}</span>
						</div>
						<ul>
							{release.items.map((item) => <li key={item}>{item}</li>)}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}
