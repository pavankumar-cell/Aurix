"use client";

import { useState } from "react";
import { LinuxIcon, MacosIcon, WindowsIcon } from "../common/svgs";

const platforms = [
	{
		name: "Windows",
		description: "Windows 10 & 11 (64-bit)",
		version: "Download v0.2",
		icon: WindowsIcon,
		download: true,
	},
	{
		name: "macOS",
		description: "macOS 11+ (Intel & Apple Silicon)",
		version: "Download v0.2",
		icon: MacosIcon,
	},
	{
		name: "Linux",
		description: "Ubuntu 20.04+ & Debian",
		version: "Download v0.2",
		icon: LinuxIcon,
	},
];

export default function DownloadHero() {
	const [comingSoon, setComingSoon] = useState("");

	const downloadWindows = () => {
		const link = document.createElement("a");
		link.href = "/aurixsetup.exe";
		link.download = "aurixsetup.exe";
		document.body.appendChild(link);
		link.click();
		link.remove();
		window.setTimeout(() => document.getElementById("instructions")?.scrollIntoView({ behavior: "smooth" }), 500);
	};

	return (
		<>
			<section className="download-hero" aria-labelledby="download-heading">
				{/* <p className="download-eyebrow">Personal AI, ready when you are</p> */}
				<h1 id="download-heading">Download AURIX  Core Product </h1>
				<p>Get started with Aurix today — download the platform, explore flexible subscription plans and experience a smarter way to get things done. </p>
			</section>

			<section className="download-options" aria-labelledby="downloads-heading">
				<div className="download-section-heading">
					<p className="download-eyebrow">Choose your platform</p>
					{/* <h2 id="downloads-heading">Available Downloads</h2> */}
				</div>
				<div className="download-grid">
					{platforms.map(({ icon: Icon, ...platform }) => (
						<article className="download-card" key={platform.name}>
							<div className="download-card-icon"><Icon aria-hidden="true" /></div>
							<h3>{platform.name}</h3>
							<p>{platform.description}</p>
							{platform.download ? (
								<button type="button" className="download-button" onClick={downloadWindows}>{platform.version}</button>
							) : (
								<button type="button" className="download-button" onClick={() => setComingSoon(platform.name)}>{platform.version}</button>
							)}
							{comingSoon === platform.name && <p className="download-coming-soon" role="status">Coming Soon</p>}
						</article>
					))}
				</div>
			</section>
		</>
	);
}