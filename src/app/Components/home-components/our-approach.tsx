import { Brain1Icon, LightingIcon, SettingIcon, ShildIcon, StarsIcon, MicrophoneIcon } from "../common/svgs";

type Step = [React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>, string, string, string];

const steps: Step[] = [
	[MicrophoneIcon, "User command", "Voice • Text • Image • File", "You give a command using voice, text, images, or files."],
	[Brain1Icon, "Understand Intent", "Natural Language Understanding", "Aurix analyzes meaning, context, and your goal and also matches the intent keywords."],
	[LightingIcon, "Plan & Reason", "AI Decision Engine", "Creates the best execution plan, chooses the right tools, checks permissions, and reasons about the task."],
	[SettingIcon, "Execute Actions", "Apps • Files • Web • Automation", "Opens applications, edits files, searches the web, automates workflows, or controls your computer."],
	[ShildIcon, "Verify Results", "Smart Validation", "Checks outputs, verifies accuracy, fixes issues when possible, and confirms completion."],
	[StarsIcon, "Deliver Response", "Results + Conversation", "Returns the final result, explains what happened, and remembers useful context for future requests."],
];

export default function OurApproach() {
	return (
		<section className="possibilities">
			<header className="possibilities-header">
				<p className="eyebrow">OUR APPROACH</p>
				<h2>From Your Command <span>to Intelligent Results</span></h2>
			</header>
			<div className="timeline">
				<div className="timeline-line" aria-hidden="true" />
				{steps.map(([Icon, title, subtitle, description], index) => (
					<div className="timeline-group" key={title}>
						<article className="step">
							<div className="step-icon"><Icon aria-hidden="true" /></div>
							<h3>{title}</h3>
							<h4>{subtitle}</h4>
							<p>{description}</p>
						</article>
						{index < steps.length - 1 && <div className="timeline-dot" aria-hidden="true" />}
					</div>
				))}
			</div>
		</section>
	);
}
