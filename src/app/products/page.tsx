import SneakPeek from "../Components/products-components/aurixinterface";
import ExploreFeatures from "../Components/products-components/explorefeatues";
import Experience from "../Components/products-components/expreince";
import ProductsHero from "../Components/products-components/hero";
import ComparisonTable from "../Components/products-components/table";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
	"/products",
	"Products - AURIX",
	"Discover the innovative products offered by AURIX, the AI-powered platform that transforms your digital experience. Explore our cutting-edge tools and solutions designed to enhance productivity and creativity.",
);
export default function ProductsPage() {
	return <>
	<ProductsHero />
	<SneakPeek />
	<ExploreFeatures />
	<Experience />
	<ComparisonTable />
	</>
}