"use client";

import { useState } from "react";

type Feature = {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	accent: string;
	icon: string;
	points: string[];
};

const features: Feature[] = [
	{
		id: "conversation",
		title: "Natural Conversations",
		shortDescription: "Talk to Aurix like a friend. Ask anything, get instant answers, solve problems, and let Aurix handle complex instructions naturally.",
		description: "Ask anything, get instant answers, solve problems, and let Aurix understand and respond naturally, just like a real companion.",
		accent: "#299cff",
		icon: "···",
		points: ["Understands natural language", "Handles multi-step tasks", "Remembers your preferences", "Gives instant, accurate answers", "Works across apps and files", "Available anytime, right on your desktop"],
	},
	{
		id: "automation",
		title: "Task Automation",
		shortDescription: "Automate repetitive tasks and complex workflows with simple commands. Save time and get more done effortlessly.",
		description: "Turn a multi-step workflow into one simple command. Aurix takes care of the busywork while you stay focused on the outcome.",
		accent: "#ff9b29",
		icon: "⚡",
		points: ["Build repeatable workflows", "Run tasks from one command", "Reduce repetitive work", "Keep complex actions organized"],
	},
	{
		id: "apps",
		title: "App Control",
		shortDescription: "Open, close, and manage your applications. Launch tools, switch between apps, and streamline your workflow with just your voice.",
		description: "Move through your desktop without breaking your flow. Aurix can launch the right tool, switch context, and help you get straight to work.",
		accent: "#a855ff",
		icon: "▦",
		points: ["Launch apps by voice", "Switch between open windows", "Open tools and files quickly", "Keep your workflow moving"],
	},
	{
		id: "files",
		title: "File Intelligence",
		shortDescription: "Find, organize, and work with your files instantly. Search, summarize, convert, and extract information from documents with ease.",
		description: "Your documents become easier to find and more useful. Aurix can surface the right file, extract what matters, and help you work with it faster.",
		accent: "#19e6a0",
		icon: "▤",
		points: ["Search across your files", "Summarize long documents", "Extract useful information", "Organize work more quickly"],
	},
	{
		id: "research",
		title: "Web & Research",
		shortDescription: "Search, compare, and get answers from across the web. Aurix can summarize articles, analyze information, and bring you exactly what you need.",
		description: "Research with less tab-hopping. Aurix helps you explore sources, compare information, and turn a broad question into a clear next step.",
		accent: "#ff3f63",
		icon: "◎",
		points: ["Search the web conversationally", "Compare useful sources", "Summarize articles", "Bring findings into your workflow"],
	},
	{
		id: "media",
		title: "Media Center",
		shortDescription: "Play music, videos, and podcasts — your way. Control media apps, create playlists, and enjoy a seamless entertainment experience.",
		description: "Let Aurix handle the controls while you stay in the moment. Play what you want, create a queue, and move between media naturally.",
		accent: "#ff32ae",
		icon: "▶",
		points: ["Control music and video", "Manage playlists", "Play podcasts hands-free", "Move between media apps"],
	},
	{
		id: "games",
		title: "Game Launcher",
		shortDescription: "Launch and manage your games instantly. Open your favorite titles, manage libraries, and get back to gaming without the hassle.",
		description: "Your library is ready when you are. Aurix makes it quicker to find a title, launch it, and get back into the experience.",
		accent: "#8b45ff",
		icon: "⌁",
		points: ["Launch games quickly", "Find titles in your library", "Manage your game tools", "Get back to play faster"],
	},
	{
		id: "system",
		title: "System Control",
		shortDescription: "Adjust settings, monitor your PC, and take control. Manage Wi-Fi, Bluetooth, display, and more — all with simple commands.",
		description: "Control the parts of your computer that slow you down. Aurix puts common settings and system actions within easy conversational reach.",
		accent: "#299cff",
		icon: "⚙",
		points: ["Adjust common settings", "Manage Wi-Fi and Bluetooth", "Control display options", "Monitor your PC"],
	},
	{
		id: "personalization",
		title: "Personalization",
		shortDescription: "Make Aurix truly yours. Use custom commands, shortcuts, and themes to create a personalized experience that fits your style.",
		description: "Aurix adapts to the way you work. Shape your commands, shortcuts, and preferences into an assistant that feels like yours.",
		accent: "#ed3da4",
		icon: "●",
		points: ["Create custom commands", "Set useful shortcuts", "Tune your preferences", "Make your workflow personal"],
	},
];

export default function FeatureCards() {
	const [selectedId, setSelectedId] = useState(features[0].id);
	const selectedFeature = features.find((feature) => feature.id === selectedId) ?? features[0];
	const featureRows = [features.slice(0, 3), features.slice(3, 6), features.slice(6, 9)];

	const renderDetailPanel = (feature: Feature) => (
		<article className="feature-detail-panel" style={{ "--feature-accent": feature.accent } as React.CSSProperties} key={`${feature.id}-detail`}>
			<div className="feature-detail-intro">
				<div className="feature-detail-icon">{feature.icon}</div>
				<div>
					<p className="feature-detail-kicker">Selected feature</p>
					<h2>{feature.title}</h2>
				</div>
				<p className="feature-detail-description">{feature.description}</p>
			</div>
			<ul className="feature-detail-points">
				{feature.points.map((point) => <li key={point}>{point}</li>)}
			</ul>
			<div className="feature-detail-demo" aria-hidden="true">
				<div className="demo-bubble">Aurix, make this easier.</div>
				<div className="demo-response">Got it. I&apos;m on it now...</div>
				<div className="demo-actions"><span>Summarize</span><span>Analyze</span><span>Open</span></div>
				<div className="demo-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
			</div>
		</article>
	);

	return (
		<section className="features-showcase" aria-label="Aurix features">
			<div className="feature-grid-cards">
				{featureRows.map((row, rowIndex) => {
					const selectedRow = row.some((feature) => feature.id === selectedId);

					return (
						<div className="feature-card-row" key={`row-${rowIndex}`}>
							<div className="feature-card-row-grid">
								{row.map((feature) => (
									<button
										key={feature.id}
										type="button"
										className={`feature-card-select ${feature.id === selectedId ? "is-selected" : ""}`}
										style={{ "--feature-accent": feature.accent } as React.CSSProperties}
										onClick={() => setSelectedId(feature.id)}
										aria-pressed={feature.id === selectedId}
									>
										<span className="feature-card-icon">{feature.icon}</span>
										<span className="feature-card-title">{feature.title}</span>
										<span className="feature-card-description">{feature.shortDescription}</span>
									</button>
								))}
							</div>
							{selectedRow && renderDetailPanel(selectedFeature)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
