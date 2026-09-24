import Image from "next/image";

const visions = [
	["Photo-1.png", "Aurix LLM", "Aurix LLM aims to build AI that empowers people, businesses, and developers worldwide."],
	["Photo-2.png", "Execution platform", "Aurix transforms intelligence into action, from idea to execution, from request to completion."],
	["Photo-3.png", "Advanced Technology Center", "Aurix aims to become a global technology ecosystem that creates the next generation of products, platforms, infrastructure, and intelligent systems across every area of technology."],
];

export default function Future() {
	return (
		<section className="future-vision">
			<h2>Future Vision</h2>
			<p className="section-sub">AURIX is built with a long-term vision of intelligence, user control and privacy.</p>
			<div className="future-grid">
				{visions.map(([image, title, description]) => (
					<article className="future-card" key={title}>
						<Image src={`/${image}`} alt={title} width={500} height={300} />
						<h3>{title}</h3>
						<p>{description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
