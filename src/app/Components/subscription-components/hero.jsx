export default function SubscriptionHero({ searchValue, onSearchValueChange, onSearch }) {
	return (
		<section className="subscription-hero" aria-labelledby="subscription-title">
			{/* <p className="subscription-eyebrow">AURIX PLANS</p> */}
			<h1 id="subscription-title">AURIX Subscription Plans</h1>
			<p>Choose the perfect plan that fits your needs.</p>
			<form className="subscription-search" onSubmit={onSearch}>
				<label className="sr-only" htmlFor="subscription-search-input">Aurix user ID or email</label>
				<input
					id="subscription-search-input"
					value={searchValue}
					onChange={(event) => onSearchValueChange(event.target.value)}
					placeholder="Enter your Aurix User ID or Email"
					type="search"
				/>
				<button type="submit">Find My Plan</button>
			</form>
			<p className="subscription-status" role="status" aria-live="polite" />
		</section>
	);
}