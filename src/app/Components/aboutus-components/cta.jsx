import Link from "next/link";
import { WindowsIcon } from "../common/svgs";

export default function AboutCta() {
	return (
		<section className="about-cta" aria-labelledby="cta-heading">
			<div>
				<p className="about-kicker">Your assistant, your rules</p>
				<h2 id="cta-heading">Experience AURIX Today</h2>
				<p>Join thousands of users who have already switched to the smarter, more private AI assistant.</p>
			</div>
			<Link href="/download" className="about-download-button">
				<WindowsIcon aria-hidden="true" />
				<span>Download for Windows</span>
			</Link>
		</section>
	);
}
