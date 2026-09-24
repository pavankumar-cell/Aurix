import Image from "next/image";
import Link from "next/link";

export default function SneakPeek() {
	return (
		<section className="preview-section">
			<div className="preview-copy">
				<span className="section-tag">Aurix Interface</span>
				<h2>Everything You Need.<br />All in <span>One</span> Assistant.</h2>
				<p>Aurix brings all the tools you need into one beautiful interface. Chat, manage files, use tools, and more, all powered by local AI.</p>
				<ul className="feature-list">
					<li>AI Chat Companion</li>
					<li>File &amp; Document Assistant</li>
					<li>System Control &amp; Automation</li>
					<li>Voice Commands</li>
					<li>Plugin &amp; Tool Support</li>
					<li>And much more...</li>
				</ul>
				<Link href="/features" className="explore-btn">Explore All Features <span>→</span></Link>
			</div>
			<div className="preview-image">
				<Image src="/interface.png" alt="AURIX application interface" width={900} height={600} />
			</div>
		</section>
	);
}
