"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type Feature = {
	id: string;
	name: string;
	shortName: string;
	strapline: string;
	description: string;
	points: string[];
	image: string;
	videoUrl: string;
	accent: string;
	icon: string;
};

const features: Feature[] = [
	{ id: "assistant", name: "Windows Assistant", shortName: "Assistant", strapline: "A second mind for your everyday work.", description: "Ask, create, search, and take action without breaking your flow. Aurix brings calm, capable intelligence to the place where you already work.", points: ["Instant desktop assistance", "Ask, create, and search faster", "Stay focused without leaving your workflow", "Quick System Actions", "Smart PC Control", "Control Any Application"], image: "/windows assistant.PNG", videoUrl: "https://www.youtube.com/embed?listType=search&list=Windows%20Assistant%20Aurix", accent: "#54a8ff", icon: "✦" },
	{ id: "games", name: "GAMES LAUNCHER", shortName: "Games", strapline: "Entertainment Built Into Aurix.", description: "Aurix Games Launcher brings entertainment directly into the Aurix ecosystem. Launch built-in games, explore immersive experiences, and enjoy casual gaming without leaving your desktop.", points: ["One-Click Game Launcher", "Classic Casual Games", "Aurix World", "Fast & Lightweight", "Offline Ready", "And much more..."], image: "/game launcher.PNG", videoUrl: "https://www.youtube.com/embed?listType=search&list=Games%20Launcher%20Aurix", accent: "#38df91", icon: "◆" },
	{ id: "documents", name: "UNIVERSAL FILE READER", shortName: "Documents", strapline: "Understand. Interact. Assist.", description: "Aurix Universal File Reader transforms documents into interactive knowledge. Open multiple file formats, extract content and can customaize for presenting.", points: ["Universal File Support", "Read Aloud", "Productivity Tools", "OFFLINE model", "text Converter", "And much more..."], image: "/doc reader.PNG", videoUrl: "https://www.youtube.com/embed?listType=search&list=Universal%20File%20Reader%20Aurix", accent: "#6f9cff", icon: "▤" },
	{ id: "media", name: "MEDIA CENTER", shortName: "Media", strapline: "Every Media Experience.", description: "Play, organize, and enjoy your music, videos, and images with smooth playback, intelligent controls, and a playlist that feels like yours.", points: ["Universal Media Playback", "Music & Video Player", "Smart Playlist Management", "Lightweight & Fast", "Playback Controls", "And much more..."], image: "/media player.PNG", videoUrl: "https://www.youtube.com/embed?listType=search&list=Media%20Center%20Aurix", accent: "#b34dff", icon: "▶" },
	{ id: "audio", name: "AUDIO COMMANDER", shortName: "Audio", strapline: "Speak Naturally to Control things.", description: "Aurix Audio Commander transforms natural speech into instant actions. search the web, launch websites, convert speech to text, and automate daily tasks—all through your voice.", points: ["Natural voice commands", "Launch websites instantly", "Convert speech to text", "Automate daily tasks", "Hands-free desktop control","Words Per Minute (WPM)"], image: "/audio commander.PNG", videoUrl: "https://www.youtube.com/embed?listType=search&list=Audio%20Commander%20Aurix", accent: "#f28bff", icon: "♫" },
];

export default function ExploreFeatures() {
	const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
	const [isVideoVisible, setIsVideoVisible] = useState(false);

	const selectFeature = (feature: Feature) => {
		setSelectedFeature(feature);
		setIsVideoVisible(false);
	};

	return (
		<section id="product-explorer" className={`product-explorer ${selectedFeature ? "is-selected" : ""}`}>
			<div className="product-explorer-heading">
				<p className="products-eyebrow">EXPLORE THE SUITE</p>
				{/* <h2>Five tools. <span>One rhythm.</span></h2> */}
				{/* <p>Choose a product to see how Aurix fits into your day.</p> */}
			</div>

			<div className="product-stage">
				<div className="product-orbit" aria-label="Aurix products">
					<div className="orbit-ring orbit-ring-large" aria-hidden="true" />
					<div className="orbit-ring orbit-ring-small" aria-hidden="true" />
					<div className="aurix-product-logo"><img src="/aurixlogo.png" alt="Aurix" /><span>INTELLIGENCE, IN ONE PLACE</span></div>
					<div className="feature-nodes">
						{features.map((feature, index) => (
							<button key={feature.id} type="button" className={`feature-node feature-node-${index + 1} ${selectedFeature?.id === feature.id ? "is-active" : ""}`} style={{ "--feature-accent": feature.accent } as CSSProperties} onClick={() => selectFeature(feature)} aria-label={`Show ${feature.name}`}>
								<span className="feature-node-content">
									<span className="feature-icon2" aria-hidden="true">{feature.icon}</span>
									<span className="feature-node-label">{feature.shortName}</span>
								</span>
							</button>
						))}
					</div>
					{selectedFeature && (
						<button type="button" className="product-reset product-reset-rail" onClick={() => { setSelectedFeature(null); setIsVideoVisible(false); }}>
							Back to all products <span aria-hidden="true">↗</span>
						</button>
					)}
				</div>

				<div className={`product-detail ${selectedFeature ? "is-visible" : ""}`} aria-live="polite">
					{selectedFeature ? (
						<>
							<div className="product-detail-copy">
								<p className="product-detail-kicker" style={{ color: selectedFeature.accent }}>{selectedFeature.shortName}</p>
								<h3>{selectedFeature.name}</h3>
								<p className="product-detail-strapline">{selectedFeature.strapline}</p>
								<p className="product-detail-description">{selectedFeature.description}</p>
								<ul className="product-detail-points" style={{ "--feature-accent": selectedFeature.accent } as CSSProperties}>
									{selectedFeature.points.map((point) => <li key={point}>{point}</li>)}
								</ul>
								<div className="product-detail-actions">
									<button type="button" className="product-watch" onClick={() => setIsVideoVisible(true)}>Watch video <span aria-hidden="true">▶</span></button>
								</div>
							</div>
							<div className="product-detail-image" style={{ "--feature-accent": selectedFeature.accent } as CSSProperties}>
								{isVideoVisible ? (
									<iframe className="product-detail-video" src={selectedFeature.videoUrl} title={`${selectedFeature.name} video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
								) : <img src={selectedFeature.image} alt={`${selectedFeature.name} interface`} />}
							</div>
						</>
					) : <div className="product-detail-prompt">Select a product to open its experience <span aria-hidden="true">→</span></div>}
				</div>
			</div>
		</section>
	);
}
