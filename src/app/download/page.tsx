import DownloadHero from "../Components/download-components/hero";
import Requirements from "../Components/download-components/requirements";
import InstallationInstructions from "../Components/download-components/instructions";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/download",
	"Download AURIX | Personal AI Assistant",
	"Download AURIX, your personal AI assistant for Windows. Get started with voice conversations, automation, and productivity tools.",
);

export default function DownloadPage() {
	return (
		<div className="download-page">
			<DownloadHero />
			<Requirements />
			<InstallationInstructions />
		</div>
	);
}