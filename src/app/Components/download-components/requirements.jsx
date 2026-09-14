const requirements = [
	"Minimum 4GB RAM (8GB recommended)",
	"10GB free disk space",
	"Internet connection for setup",
	"Processor: Intel/AMD/Apple Silicon (2018+)",
];

export default function Requirements() {
	return (
		<section className="download-requirements" aria-labelledby="requirements-heading">
			<div>
				<p className="download-eyebrow">Before you install</p>
				<h2 id="requirements-heading">System Requirements</h2>
			</div>
			<ul>
				{requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
			</ul>
		</section>
	);
}