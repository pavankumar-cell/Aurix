"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundLines = [
	["AURIX", "PERSONAL", "LOCAL", "PRIVATE"],
	["INTELLIGENCE", "AI SYSTEM", "KNOWLEDGE", "AUTOMATION"],
	["ASSISTANT", "COMPANION", "ENGINE", "CORE"],
];

export default function Hero() {
	const [lineIndex, setLineIndex] = useState(0);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setLineIndex((currentIndex) => (currentIndex + 1) % backgroundLines[0].length);
		}, 20000);

		return () => window.clearInterval(intervalId);
	}, []);

	return (
		<section className="hero" aria-labelledby="hero-title">
			<h1 id="hero-title">
				Powering Efficiency with Smart Technology
				<span>Built to Think, Learn, and Assist.</span>
			</h1>

			<a className="hero-download" href="/download">
				{/* <Image src="/windows.png" alt="" width={22} height={22} /> */}
				<span>Download Aurix now</span>
			</a>

			<div className="features-badges" aria-label="AURIX benefits">
				<div className="badge"><span>🛡️</span>Secure by Design</div>
				<div className="badge-divider" />
				<div className="badge"><span>⚡</span>Lightning Fast</div>
				<div className="badge-divider" />
				<div className="badge"><span>🔒</span>Private &amp; Local</div>
				<div className="badge-divider" />
				<div className="badge"><span>⚙️</span>Fully Modular</div>
			</div>

			<div className="hero-background-text" aria-hidden="true">
				{backgroundLines.map((line, index) => (
					<div key={line[0]}>{line[lineIndex]}</div>
				))}
			</div>

			<div className="hero-orb">
				<Image src="/brain bg remv.png" alt="" width={380} height={380} priority />
				{/* <Image src="/brain bg remv.png" alt="" width={380} height={380} priority style={{ width: "min(380px, 75vw)", height: "auto" }} /> */}
			</div>
		</section>
	);
}
