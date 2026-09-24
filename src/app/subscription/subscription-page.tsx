"use client";

import { useState, type FormEvent } from "react";
import SubscriptionAccount from "../Components/subscription-components/account";
import SubscriptionHero from "../Components/subscription-components/hero";
import SubscriptionPlans from "../Components/subscription-components/plans";
import SubscriptionTrust from "../Components/subscription-components/trust";


const API_BASE = "https://aurix-backend-vkmx.onrender.com";

type Account = {
    id: string;
    username: string;
    email?: string;
    plan?: string;
    renewalDate: string;
};

type Plan = {
    name: string;
};

export default function SubscriptionPage() {
    const [searchValue, setSearchValue] = useState("");
    const [account, setAccount] = useState<Account | null>(null);
    const [status, setStatus] = useState("");

    async function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const value = searchValue.trim();
        if (!value) {
            setStatus("Please enter a User ID or Email.");
            return;
        }

        setStatus("Searching...");
        try {
            let response = await fetch(`${API_BASE}/api/user/search?id=${encodeURIComponent(value)}`);
            if (response.status === 404) response = await fetch(`${API_BASE}/api/user/search?email=${encodeURIComponent(value)}`);
            if (!response.ok) throw new Error("User not found.");
            const { user } = await response.json();
            setAccount({ id: user._id, username: user.username, email: user.email, plan: user.subscription?.plan, renewalDate: user.subscription?.renewalDate ? new Date(user.subscription.renewalDate).toLocaleDateString() : "N/A" });
            setStatus("User found. Choose a plan to upgrade.");
        } catch (error) {
            setAccount(null);
            setStatus(error instanceof Error ? error.message : "Unable to find that account.");
        }
    }

    function resetSearch() {
        setAccount(null);
        setSearchValue("");
        setStatus("");
    }

    function choosePlan(plan: Plan) {
        if (!account) {
            setStatus("Please search for your account first.");
            return;
        }
        setStatus(`${plan.name} selected. Checkout will be available after payment setup.`);
    }

    return (
        <div className="subscription-page">
            <SubscriptionHero searchValue={searchValue} onSearchValueChange={setSearchValue} onSearch={handleSearch} />
            <p className={`subscription-page-status ${status.includes("found") ? "success" : ""}`} role="status">{status}</p>
            <SubscriptionAccount account={account} onReset={resetSearch} />
            <SubscriptionPlans currentPlan={account?.plan} onChoose={choosePlan} />
            <SubscriptionTrust />
        </div>
    );
}