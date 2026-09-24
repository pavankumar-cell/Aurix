import Image from "next/image";
import { BrainIcon, DeployIcon, LockIcon, ModularIcon, SmartHomeIcon } from "../common/svgs";

type ComparisonRow = {
	feature: string;
	icon: React.ComponentType<React.HTMLAttributes<HTMLSpanElement>>;
	aurix: string;
	typical: string;
};

const comparisonRows: ComparisonRow[] = [
	{ feature: "User Data Control", icon: LockIcon, aurix: "Yes", typical: "No" },
	{ feature: "Offline Mode", icon: SmartHomeIcon, aurix: "Yes", typical: "Limited" },
	{ feature: "Custom Intelligence", icon: BrainIcon, aurix: "Fully", typical: "Fixed" },
	{ feature: "Modular Design", icon: ModularIcon, aurix: "Yes", typical: "No" },
	{ feature: "Local Processing", icon: DeployIcon, aurix: "Yes", typical: "Cloud-only" },
];

export default function ComparisonTable() {
	return (
		<section className="comparison-section" aria-labelledby="comparison-title">
            <p className="products-eyebrow">THE AURIX ECOSYSTEM</p>
			<h2 id="comparison-title">Aurix, built differently.</h2>
			<p className="comparison-intro">A more capable desktop experience, with control that stays in your hands.</p>
			<div className="comparison-table-wrap">
				<table className="comparison-table">
					<thead>
						<tr>
							<th scope="col">Feature</th>
							<th scope="col"className="comparison-brand">
								<span className="comparison-brand-content">
									<Image src="/aurixlogo.png" alt="" width={30} height={30} />
									<span>AURIX</span>
								</span>
							</th>
							<th scope="col">Typical AI</th>
						</tr>
					</thead>
					<tbody>
						{comparisonRows.map((row, index) => (
							<tr key={row.feature} style={{ "--comparison-delay": `${index * 70}ms` } as React.CSSProperties}>
								<th scope="row">
									<row.icon aria-hidden="true" />
									<span>{row.feature}</span>
								</th>
								<td className="comparison-positive"><span aria-hidden="true">✓</span>{row.aurix}</td>
								<td className="comparison-negative"><span aria-hidden="true">×</span>{row.typical}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
