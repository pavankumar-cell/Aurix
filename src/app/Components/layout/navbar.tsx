"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/products", label: "Products" },
	{ href: "/download", label: "Download" },
	{ href: "/subscription", label: "Subscription" },
];

export default function Navbar() {
	const pathname = usePathname();
	const linksRef = useRef<HTMLDivElement>(null);
	const [slider, setSlider] = useState({ left: 0, width: 0, ready: false });

	useEffect(() => {
		setSlider((currentSlider) => ({ ...currentSlider, ready: false }));

		const linksElement = linksRef.current;
		const activeLink = linksElement?.querySelector<HTMLAnchorElement>(
			`a[href="${pathname}"]`,
		);

		if (!linksElement || !activeLink) return;

		const updateSlider = () => {
			setSlider({
				left: activeLink.offsetLeft,
				width: activeLink.offsetWidth,
				ready: true,
			});
		};

		updateSlider();
		window.addEventListener("resize", updateSlider);
		return () => window.removeEventListener("resize", updateSlider);
	}, [pathname]);

	return (
		<nav className="flex items-center justify-between px-16 py-5">
			<Link href="/" className="flex items-center gap-2 font-bold tracking-widest">
				<img src="/aurixlogo.png" alt="AURIX logo" className="h-7 w-auto" />
				<span>AURIX</span>
			</Link>

			<div ref={linksRef} className="nav-links flex items-center gap-7">
				{navigationLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="text-sm text-white/70 transition-colors hover:text-white"
						aria-current={pathname === link.href ? "page" : undefined}
					>
						{link.label}
					</Link>
				))}
				<span
					className="nav-slider"
					aria-hidden="true"
					style={{
						width: slider.width,
						transform: `translateX(${slider.left}px)`,
						opacity: slider.ready ? 1 : 0,
					}}
				/>
			</div>
		</nav>
	);
}
