import Link from "next/link";

export default function ProductsHero() {
	return (
		<section className="products-hero" aria-labelledby="products-title">
			<div className="products-hero-glow" aria-hidden="true" />
			<p className="products-eyebrow">THE AURIX ECOSYSTEM</p>
			<h1 id="products-title">
				One intelligent home.
				<span>Everything you need to do more.</span>
			</h1>
			<p className="products-hero-copy">
				Meet a suite of focused tools built to make your desktop feel more capable,
				more personal, and unmistakably yours.
			</p>
			<Link href="#product-explorer" className="products-hero-link">
				Explore the Aurix suite <span aria-hidden="true">↓</span>
			</Link>
		</section>
	);
}
