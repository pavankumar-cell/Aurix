import CareersPage from "./careerspage";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/careers",
	"Careers at AURIX | Join Our Team",
	"Explore career opportunities at AURIX and join our mission to democratize AI. Discover how you can contribute to the future of personal AI assistants.",
);

export default function Page() {
	return <CareersPage />;
}