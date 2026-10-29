"use client";

import { FormEvent, useId, useState } from "react";

export default function InterestForm() {
  const formId = useId();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setHasError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/invitations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "We couldn't send your request. Please try again.");
      }

      form.reset();
      setStatus("Thank you. Your interest has been received.");
    } catch (error) {
      setHasError(true);
      setStatus(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={`${formId}-name`}>Your name</label>
        <input id={`${formId}-name`} name="name" autoComplete="name" required maxLength={100} placeholder="Full name" />
      </div>
      <div className="field">
        <label htmlFor={`${formId}-email`}>Work email</label>
        <input id={`${formId}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
      </div>
      <div className="field">
        <label htmlFor={`${formId}-role`}>Your role</label>
        <input id={`${formId}-role`} name="role" autoComplete="organization-title" required maxLength={120} placeholder="e.g. CFO" />
      </div>
      <div className="field">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" autoComplete="organization" required maxLength={150} placeholder="Company name" />
      </div>
      <div className="field field-full">
        <label htmlFor={`${formId}-event`}>Gathering you are interested in</label>
        <select id={`${formId}-event`} name="event" defaultValue="london-2026" required>
          <option value="london-2026">CFO London Edition · 3 December 2026</option>
          <option value="london-2027-april">CFO London Edition · 8 April 2027</option>
          <option value="frankfurt-2027">CFO DACH Edition · 23 September 2027</option>
          <option value="london-2027-november">Circle of Leaders · 11 November 2027</option>
          <option value="partnership">Partnership conversation</option>
        </select>
      </div>
      <label className="honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-field">
        <input name="consent" type="checkbox" value="yes" required />
        <span>
          I agree to be contacted about this enquiry. See the{" "}
          <a href="https://circleofleaders.co.uk/privacy" target="_blank" rel="noreferrer">privacy notice</a>.
        </span>
      </label>
      <button className="form-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request an invitation"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className={`form-message${hasError ? " form-message-error" : ""}`} role={hasError ? "alert" : "status"}>
        {status}
      </p>
    </form>
  );
}