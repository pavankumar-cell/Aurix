"use client";

import { useRef, useState } from "react";

export default function ApplicationForm() {
	const resumeInputRef = useRef<HTMLInputElement>(null);
	const [resumeName, setResumeName] = useState("");
	const [resumeError, setResumeError] = useState("");

	const removeResume = () => {
		setResumeName("");
		setResumeError("");
		if (resumeInputRef.current) resumeInputRef.current.value = "";
	};

	const handleResumeChange = (file: File | undefined) => {
		const extension = file?.name.toLowerCase().split(".").pop();
		const allowedExtensions = ["pdf", "doc", "docx"];

		if (!file || !extension || !allowedExtensions.includes(extension)) {
			setResumeName("");
			setResumeError("Please upload a PDF, DOC, or DOCX file.");
			if (resumeInputRef.current) resumeInputRef.current.value = "";
			return;
		}

		setResumeError("");
		setResumeName(file.name);
	};

	return (
		<section className="careers-application" id="application-form" aria-labelledby="application-title">
			<div className="careers-application-heading"><p className="careers-eyebrow">Apply now</p><h2 id="application-title">Tell Us About Yourself</h2><p>Fill in your details and we&apos;ll get back to you soon.</p></div>
			<form className="careers-form" onSubmit={(event) => event.preventDefault()}>
				<div className="careers-form-column">
					<div className="careers-form-field"><label htmlFor="full-name">Full Name *</label><input id="full-name" name="full-name" required placeholder="Enter your full name" /></div>
					<div className="careers-form-field"><label htmlFor="phone">Phone Number *</label><input id="phone" name="phone" required type="tel" placeholder="+91 98765 43210" /></div>
					<div className="careers-form-field"><label htmlFor="email">Email Address *</label><input id="email" name="email" required type="email" placeholder="you@example.com" /></div>
				</div>
				<div className="careers-form-column">
					<div className="careers-form-field"><label htmlFor="linkedin">LinkedIn Profile URL</label><input id="linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/yourname" /></div>
					<div className="careers-form-field careers-resume-field">
					<label htmlFor="resume">Resume *</label>
					<div className={`careers-resume-dropzone${resumeName ? " has-file" : ""}`}>
						<input ref={resumeInputRef} id="resume" name="resume" required type="file" accept=".pdf,.doc,.docx" onChange={(event) => handleResumeChange(event.target.files?.[0])} />
						{resumeName ? (
							<div className="careers-selected-resume"><span title={resumeName}>{resumeName}</span><button type="button" aria-label="Remove attached resume" onClick={removeResume}>×</button></div>
						) : (
							<div className="careers-dropzone-copy"><strong aria-hidden="true">⇧</strong><span>Drag &amp; drop your resume here<br /><u>or click to browse</u></span><small>Supported formats: PDF, DOC, DOCX (Max 5MB)</small></div>
						)}
					</div>
					{resumeError ? <p className="careers-resume-error" role="alert">{resumeError}</p> : null}
					</div>
				</div>
				<label className="careers-consent"><input type="checkbox" required /> <span>I agree to the terms and conditions and consent to being contacted about this application.</span></label>
				<button className="careers-submit-button" type="submit">Submit Application <span aria-hidden="true">→</span></button>
			</form>
		</section>
	);
}
