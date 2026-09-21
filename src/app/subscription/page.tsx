import SubscriptionPage from "./subscription-page";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/subscription",
  "Subscription - AURIX",
  "Manage your AURIX subscription and explore available plans. Upgrade or renew your subscription to unlock premium features and enhance your experience with our AI-powered platform.",
);

export default function Page() {
  return <SubscriptionPage />;
}