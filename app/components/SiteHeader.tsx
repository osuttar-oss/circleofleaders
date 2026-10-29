"use client";

import Image from "next/image";
import { useState } from "react";
import InterestTrigger from "./InterestTrigger";

const links = [
  { label: "CFO Summit", href: "https://circleofleaders.co.uk/events/circle-of-cfos-london" },
  { label: "About", href: "https://circleofleaders.co.uk/about" },
  { label: "Partnership Enquiries", href: "https://circleofleaders.co.uk/partnership" },
  { label: "Contact", href: "https://circleofleaders.co.uk/contact" },
  { label: "Upcoming Events", href: "https://circleofleaders.co.uk/events" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Circle of Leaders home">
          <Image
            src="https://circleofleaders.co.uk/assets/images/logos/circle-of-leaders-icon.svg"
            alt=""
            width={40}
            height={40}
            unoptimized
          />
          <span>Circle of Leaders</span>
        </a>
        <div className="header-actions">
          <InterestTrigger className="header-register">Register</InterestTrigger>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <nav className="menu-panel" id="primary-menu" aria-label="Primary">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
            <InterestTrigger className="menu-register">Register Interest</InterestTrigger>
          </nav>
        )}
      </div>
    </header>
  );
}