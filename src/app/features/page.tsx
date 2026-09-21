import Bottom from "../Components/features-components/bottom";
import FeatureCards from "../Components/features-components/featurescards";
import Hero from "../Components/features-components/hero";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/features",
	"Features - AURIX",
	"Discover the cutting-edge features of AURIX, the AI-powered platform that revolutionizes your digital experience. Explore our advanced tools and capabilities designed to enhance productivity and creativity.",
);

export default function FeaturesPage() {
	return (
		<div className="features-page">
			<Hero />
			<FeatureCards />
			<Bottom />
		</div>
	);
}
