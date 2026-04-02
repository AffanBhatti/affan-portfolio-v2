"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(245,240,232,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(14,14,14,0.08)" : "none",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "5px" }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>Affan</span>
          <span style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em" }}>Bhatti</span>
        </a>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: "36px" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--sans)", fontSize: "0.83rem", fontWeight: 500,
              color: "var(--ink3)", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink3)")}
            >{l.label}</a>
          ))}
          <a href="/Affan_Bhatti_Resume.pdf" target="_blank" style={{
            fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.08em",
            padding: "8px 18px", background: "var(--ink)", color: "var(--cream)",
            textDecoration: "none", borderRadius: "2px", transition: "background 0.2s",
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--ink)")}
          >Résumé ↗</a>
        </div>

        <button onClick={() => setOpen(!open)} className="flex md:hidden flex-col gap-1.5" style={{ background: "none", border: "none", cursor: "none", padding: "8px" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px", background: "var(--ink)", transition: "all 0.3s",
              transform: open ? (i === 0 ? "rotate(45deg) translate(3px,4px)" : i === 2 ? "rotate(-45deg) translate(3px,-4px)" : "scaleX(0)") : "none",
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--cream)", borderTop: "1px solid var(--border)", padding: "20px 48px 28px" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", fontFamily: "var(--sans)", fontSize: "1rem", fontWeight: 500,
              color: "var(--ink2)", padding: "12px 0", borderBottom: "1px solid var(--border)", textDecoration: "none",
            }}>{l.label}</a>
          ))}
          <a href="/Affan_Bhatti_Resume.pdf" target="_blank" style={{
            display: "inline-block", marginTop: "20px", fontFamily: "var(--mono)", fontSize: "0.72rem",
            padding: "10px 20px", background: "var(--ink)", color: "var(--cream)", textDecoration: "none", borderRadius: "2px",
          }}>Résumé ↗</a>
        </div>
      )}
    </nav>
  );
}