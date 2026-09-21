import VersionHistory from "../Components/version-components/history";
import VersionHero from "../Components/version-components/hero";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/version",
	"AURIX Versions | Release History",
	"View AURIX version history, updates, and upcoming improvements.",
);

export default function VersionPage() {
	return (
		<div className="version-page">
			<VersionHero />
			<VersionHistory />
		</div>
	);
}
