import CoreValues from "../Components/aboutus-components/core";
import AboutCta from "../Components/aboutus-components/cta";
import Founder from "../Components/aboutus-components/founder";
import AboutHero from "../Components/aboutus-components/hero";
import Mission from "../Components/aboutus-components/misson";
import OurStory from "../Components/aboutus-components/our";
import WhyChooseAurix from "../Components/aboutus-components/why";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/about",
	"About AURIX | Our Story, Mission & Vision",
	"Learn about AURIX, our mission to democratize AI, and how we're building the future of personal AI assistants.",
);

export default function AboutPage() {
	return (
		<div className="about-page">
			<AboutHero />
			<Mission />
			<CoreValues />
			<OurStory />
			<WhyChooseAurix />
			<AboutCta />
			<Founder />
		</div>
	);
}