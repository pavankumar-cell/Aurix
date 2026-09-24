import Link from "next/link";
import Image from "next/image";
export default function Bottom() {
	return (
		<section className="features-bottom">
			<div className="features-bottom-icon">✦</div>
			<div>
				<p className="features-bottom-eyebrow">Built for a smarter tomorrow</p>
				<h2>Do More with <span>Aurix.</span></h2>
				<p>Your AI assistant. On your terms.</p>
			</div>

			{/* <a className="features-download-button" href="/download">
				<Image src="/windows.png" alt="" width={22} height={22} />
				<span>Download for windows</span>
			</a> */}

			<Link href="/download" className="features-download-button">
				<Image src="/windows.png" alt="" width={22} height={22} />
			{/* ▣&nbsp;  */}
			Download for Windows <span>→</span></Link>
		</section>
	);
}
