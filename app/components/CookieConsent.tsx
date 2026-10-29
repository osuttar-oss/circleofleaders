"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("circleofleaders-cookie-choice") === null);
  }, []);

  function choose(choice: "accepted" | "essential-only") {
    localStorage.setItem("circleofleaders-cookie-choice", choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-modal="true" aria-label="Cookie consent">
      <p>
        We use essential cookies and, with your consent, analytics cookies. See our{" "}
        <a href="https://circleofleaders.co.uk/cookies">Cookie Policy</a>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Accept</button>
        <button type="button" className="cookie-essential" onClick={() => choose("essential-only")}>Essential only</button>
      </div>
    </aside>
  );
}