import Link from "next/link";

const companyLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/careers", label: "Careers" },
	// { href: "https://anavisri.netlify.app/blog", label: "News & Press" },
];

const productLinks = [
	{ href: "/products", label: "Our Products" },
	{ href: "/features", label: "Features" },
	{ href: "/version", label: "Versions" },
	{ href: "/download", label: "Download" },
	{ href: "/subscription", label: "Subscription" },
];

const supportLinks = [
	{ href: "/contact", label: "Contact Us" },
	{ href: "/help", label: "Help Center" },
	{ href: "/privacy", label: "Privacy Policy" },
];

function FooterLinks({
	title,
	links,
}: {
	title: string;
	links: { href: string; label: string }[];
}) {
	return (
		<div>
			<h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
			<ul className="space-y-2">
				{links.map((link) => {
					const isExternal = link.href.startsWith("http");
					const className = "text-sm text-[#bac4e5] transition-colors hover:text-[#9D4DFF]";

					return (
						<li key={link.href}>
							{isExternal ? (
								<a href={link.href} target="_blank" rel="noreferrer" className={className}>
									{link.label}
								</a>
							) : (
								<Link href={link.href} className={className}>
									{link.label}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="border-t border-white/10 pt-16">
			<div className="mx-auto grid max-w-[1450px] gap-12 px-8 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr_1.3fr]">
				<div>
					<Link href="/" className="inline-block">
						<img src="/aurixlogo.png" alt="AURIX logo" className="h-14 w-auto" />
					</Link>
					<p className="mt-3 max-w-[280px] leading-7 text-[#9aa3b2]">
						A personal AI assistant built to think, learn, and assist, privately on your device.
					</p>

					<div className="mt-8">
						<h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
						<div className="flex gap-3">
							<a
								href="https://www.linkedin.com/company/a-u-r-i-x/?viewAsMember=true"
								aria-label="LinkedIn"
								target="_blank"
								rel="noreferrer"
								className="text-[#7e8cff] transition-colors hover:text-[#3ea6ff]"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5ZM8 19H5V8h3v11ZM6.5 6.732a1.764 1.764 0 1 1 0-3.528 1.764 1.764 0 0 1 0 3.528ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19Z" />
								</svg>
							</a>
							<a
								href="https://x.com/AurixOfficials"
								aria-label="X"
								target="_blank"
								rel="noreferrer"
								className="text-[#7e8cff] transition-colors hover:text-[#3ea6ff]"
							>
								<svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
									<path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"/>
								</svg>
							</a>
							<a
								href="https://www.youtube.com/@AurixOfficial-dev"
								aria-label="YouTube"
								target="_blank"
								rel="noreferrer"
								className="text-[#7e8cff] transition-colors hover:text-[#3ea6ff]"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
								</svg>
							</a>
							{/* <a
								href="https://www.github.com/AurixOfficial"
								aria-label="GitHub"
								target="_blank"
								rel="noreferrer"
								className="text-[#7e8cff] transition-colors hover:text-[#3ea6ff]"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</a> */}
						</div>
					</div>
				</div>

				<FooterLinks title="Company" links={companyLinks} />
				<FooterLinks title="Product" links={productLinks} />
				<FooterLinks title="Support" links={supportLinks} />

				<div>
					<h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
					<p className="mb-6 leading-7 text-[#9aa3b2]">Get the latest updates and news about Aurix.</p>
					<form className="flex overflow-hidden rounded-xl border border-white/10 bg-[#12162a]">
						<label htmlFor="footer-email" className="sr-only">Email address</label>
						<input
							id="footer-email"
							type="email"
							placeholder="Enter your email"
							className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#7e879c]"
						/>
						<button type="submit" className="bg-[#8b5cf6] px-5 font-semibold text-white transition-colors hover:bg-[#a855f7]">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div className="border-t border-white/10 px-6 py-5 text-center text-sm text-[#7e879c]">
				© 2026 Aurix AI. All Rights Reserved.
			</div>
		</footer>
	);
}
