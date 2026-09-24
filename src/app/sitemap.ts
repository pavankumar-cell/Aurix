import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurixai.tech";

// Example static routes mapping
const staticRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/careers", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/download", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/features", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/help", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/products", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/subscription", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/version", changeFrequency: "monthly" as const, priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static Pages
  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  // Example: Dynamic API / CMS Fetch for Products or Resources
  // const products = await getProducts(); // Replace with your fetch call
  // const dynamicEntries = products.map((product) => ({
  //   url: new URL(`/products/${product.slug}`, siteUrl).toString(),
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.8,
  // }));

  return [...staticEntries];
}
