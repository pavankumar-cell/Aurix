import HelpPage from "./help-page";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/help",
  "Help Center - AURIX",
  "Get the support you need with AURIX's Help Center. Browse guides, explore common questions, and find answers to unlock the full potential of our AI-powered platform.",
);


export default function Page() {
  return <HelpPage />;
}