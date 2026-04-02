"use client";
import { useEffect, useState } from "react";

const roles = ["Software Developer", "AI Engineer", "Full-Stack Builder", "CS @ UofT"];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [role, setRole] = useState(0);
  const [typed, setTyped] = useState("");
  const [del, setDel] = useState(false);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const cur = roles[role];
    let t: NodeJS.Timeout;
    if (!del && char <= cur.length) {
      setTyped(cur.slice(0, char));
      t = setTimeout(() => setChar(c => c + 1), 55);
    } else if (!del && char > cur.length) {
      t = setTimeout(() => setDel(true), 2200);
    } else if (del && char > 0) {
      setTyped(cur.slice(0, char - 1));
      t = setTimeout(() => setChar(c => c - 1), 30);
    } else {
      setDel(false);
      setRole(r => (r + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [char, del, role]);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", padding: "140px 48px 80px",
      maxWidth: "1320px", margin: "0 auto",
    }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "auto" }}>
        <div className="eyebrow">Software Developer · AI Engineer</div>
        <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent3)", display: "inline-block", boxShadow: "0 0 0 2px rgba(42,140,80,0.2)" }}/>
          Available for opportunities
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "56px", paddingTop: "60px" }}>

        <h1 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(4.5rem, 11vw, 10.5rem)",
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          color: "var(--ink)",
          flexShrink: 0,
        }}>
          Affan
          <br />
          <span style={{ WebkitTextStroke: "2px var(--ink)", color: "transparent" }}>Bhatti</span>
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "10px",
          flex: 1,
          alignSelf: "center",
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "var(--mono)",
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              aspectRatio: "2 / 1",
              border: "1px solid var(--border2)",
              borderRadius: "3px",
              color: "var(--ink2)",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "14px 16px",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ink2)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
              }}
            >
              <span style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "inherit" }}>{link.label}</span>
              <span style={{ opacity: 0.4, fontSize: "0.7rem" }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", alignItems: "end", borderTop: "1px solid var(--border2)", paddingTop: "32px" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: "8px" }}>Currently</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink2)", minHeight: "1.4rem" }}>
            {typed}<span>|</span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: "8px" }}>Based in</div>
          <div style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 500, color: "var(--ink2)" }}>Mississauga, ON</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", color: "var(--ink4)", marginTop: "3px" }}>University of Toronto</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
          <a href="#projects" style={{
            fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.08em",
            padding: "12px 24px", background: "var(--ink)", color: "var(--cream)",
            textDecoration: "none", borderRadius: "2px", transition: "background 0.2s", display: "inline-block"
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--ink)")}
          >View Work →</a>
          <a href="#contact" style={{
            fontFamily: "var(--mono)", fontSize: "0.72rem", letterSpacing: "0.08em",
            padding: "12px 24px", border: "1px solid var(--border2)", color: "var(--ink3)",
            textDecoration: "none", borderRadius: "2px", transition: "all 0.2s", display: "inline-block"
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--ink3)"; }}
          >Get in touch</a>
        </div>
      </div>
    </section>
  );
}