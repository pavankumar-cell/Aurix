type CareerPathProps = {
	onApply: () => void;
};

const roles = [
	{ icon: "▥", title: "Sales Person (Intern)", tags: ["Sales", "Business Development", "Growth"], color: "violet", description: "Help more people discover Aurix. Learn real-world sales, communication, and customer engagement from industry experts." },
	{ icon: "✿", title: "AI Engineer (Intern)", tags: ["AI/ML", "LLMs", "Research"], color: "blue", description: "Work on cutting-edge AI models, agent systems, and multimodal capabilities. Learn, experiment, and build features that power the next generation of Aurix." },
	{ icon: "</>", title: "Developer (Intern)", tags: ["Frontend", "Backend", "Full Stack"], color: "green", description: "Build beautiful, high-performance applications. Work with modern technologies like Next.js, Python, and more, and turn ideas into real products." },
];

export default function CareerPath({ onApply }: CareerPathProps) {
	return (
		<section className="careers-path" aria-labelledby="roles-title">
			<p className="careers-rule-label">Choose your path</p>
			<h2 id="roles-title">Open Internship Roles</h2>
			<div className="careers-role-grid">
				{roles.map((role) => (
					<article className={`careers-role-card careers-role-${role.color}`} key={role.title}>
						<div className="careers-role-icon" aria-hidden="true">{role.icon}</div>
						<h3>{role.title}</h3>
						<div className="careers-tags">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
						<p>{role.description}</p>
					</article>
				))}
			</div>
			<div className="careers-apply-banner">
				<div><p>Start Your Journey with an</p><h2>Internship</h2><span>New to the industry? We&apos;ve got you. Our internship program is designed to ignite your mentor, and help you build real-world skills in AI, development, product, and more.</span></div>
				<div className="careers-benefits"><span>◈<small>Structured<br />Training</small></span><span>♧<small>Mentorship<br />from Experts</small></span><span>▤<small>Real Projects<br />&amp; Experience</small></span><span>ϟ<small>Path to<br />Full-time Roles</small></span></div>
				<button type="button" className="careers-apply-button" onClick={onApply}>Apply for Internship <span aria-hidden="true">→</span></button>
			</div>
		</section>
	);
}
