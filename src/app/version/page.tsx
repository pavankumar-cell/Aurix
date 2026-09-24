import VersionHistory from "../Components/version-components/history";
import VersionHero from "../Components/version-components/hero";

export const metadata = {
	title: "AURIX Versions | Release History",
	description: "View AURIX version history, updates, and upcoming improvements.",
};

export default function VersionPage() {
	return (
		<div className="version-page">
			<VersionHero />
			<VersionHistory />
		</div>
	);
}
