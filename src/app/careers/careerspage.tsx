"use client";

import { useState } from "react";
import CareerPath from "../Components/careers-components/careerpath";
import CareersHero from "../Components/careers-components/hero";
import ApplicationForm from "../Components/careers-components/start";
import Opportunity from "../Components/careers-components/theopp";

export default function CareersPage() {
    const [showApplication, setShowApplication] = useState(false);

    const openApplication = () => {
        setShowApplication(true);
        window.setTimeout(() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    };

    return (
        <div className="careers-page">
            <CareersHero onExplore={openApplication} />
            <Opportunity />
            <CareerPath onApply={openApplication} />
            {showApplication ? <ApplicationForm /> : null}
        </div>
    );
}
