import ContactPage from "./contact-us";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/contact",
  "Contact AURIX | Support & Sales",
  "Reach the AURIX team for product support, partnerships, or general questions.",
);
export default function Contact() {
  return <ContactPage />;
}