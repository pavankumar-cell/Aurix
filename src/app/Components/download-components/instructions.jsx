const steps = [
	{
		number: "1",
		title: "Download Aurix",
		items: ["Click Download for Windows on the Aurix website.", "Save aurixlauncher.exe to your PC."],
		image: "/dwn1.PNG",
		alt: "Download step",
	},
	{
		number: "2",
		title: "Run the Installer",
		items: ["Double-click aurixlauncher.exe.", "If Windows shows Windows protected your PC, click More info, then Run anyway."],
		image: "/dwn3.PNG",
		alt: "Installer step",
	},
	{
		number: "3",
		title: "Complete Installation",
		items: ["Aurix Launcher will automatically download and install the required files.", "Wait for the setup to finish.", "Launch Aurix from the Desktop shortcut or Start Menu."],
		image: "/dwn4.PNG",
		alt: "Installation completion step",
	},
];

export default function InstallationInstructions() {
	return (
		<section className="download-instructions" id="instructions" aria-labelledby="instructions-heading">
			<div className="download-section-heading">
				<p className="download-eyebrow">Three quick steps</p>
				<h2 id="instructions-heading">Installation Instructions</h2>
			</div>
			<div className="instruction-list">
				{steps.map((step, index) => (
					<article className={`instruction-step${index % 2 ? " instruction-step-reversed" : ""}`} key={step.number}>
						<div className="instruction-copy">
							<h3><span>{step.number}</span>{step.title}</h3>
							<ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
						</div>
						<div className="instruction-image"><img src={step.image} alt={step.alt} /></div>
					</article>
				))}
			</div>
		</section>
	);
}