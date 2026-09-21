import PrivacyPage from "./privacy-page";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/privacy",
  "Privacy Policy - AURIX",
  "Read the AURIX privacy policy and learn how we handle data, security, and user rights.",
);

export default function Page() {
  return <PrivacyPage />;
}