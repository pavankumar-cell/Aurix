import Image from "next/image";

const testimonials = [
	["user1.png", "Rohit Sharma", "Developer", "Aurix changed the way I work. It's like having a genius assistant who never sleeps."],
	["user2.png", "Sneha Reddy", "Designer", "Private, fast, and powerful. Finally, an AI assistant I can actually trust."],
	["user3.png", "Arjun Verma", "Student", "I use Aurix every day for coding, writing, and productivity. Highly recommended!"],
];

export default function WhatUsersSay() {
	return (
		<section className="testimonials">
			<span className="section-tag">WHAT USERS SAY</span>
			<h2>Loved by Users Around the World</h2>
			<div className="testimonial-grid">
				{testimonials.map(([image, name, role, review]) => (
					<article className="testimonial-card" key={name}>
						<div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
						<p className="review">&quot;{review}&quot;</p>
						<div className="user">
							<Image src={`/${image}`} alt="" width={54} height={54} />
							<div><h3>{name}</h3><span>{role}</span></div>
						</div>
					</article>
				))}
			</div>
			<div className="slider-dots" aria-hidden="true"><span className="active" /><span /><span /></div>
		</section>
	);
}
