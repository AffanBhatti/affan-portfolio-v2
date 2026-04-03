"use client";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
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
      justifyContent: "flex-end", padding: isMobile ? "100px 24px 48px" : "140px 48px 80px",
      maxWidth: "1320px", margin: "0 auto",
    }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "auto", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ fontFamily:"var(--mono)",fontSize:"0.72rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--ink)",fontWeight:700 }}>Software Developer · AI Engineer</div>
        <div style={{ fontFamily:"var(--mono)",fontSize:"0.72rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--ink)",fontWeight:700,display:"flex",alignItems:"center",gap:"8px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent3)", display: "inline-block" }}/>
          Available for opportunities
        </div>
      </div>

      <div style={{
        flex: 1, display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "32px" : "56px",
        paddingTop: "40px",
      }}>

        {/* Big name — black and orange */}
        <h1 style={{
          fontFamily: "var(--serif)",
          fontSize: isMobile ? "clamp(3.5rem, 18vw, 5rem)" : "clamp(4.5rem, 11vw, 10.5rem)",
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          flexShrink: 0,
        }}>
          <span style={{ color: "var(--ink)" }}>Affan</span>
          <br />
          <span style={{ color: "var(--accent)" }}>Bhatti</span>
        </h1>

        {/* Nav grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: isMobile ? "8px" : "10px",
          width: isMobile ? "100%" : undefined,
          flex: isMobile ? undefined : 1,
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "var(--mono)",
              fontSize: isMobile ? "0.7rem" : "0.82rem",
              letterSpacing: "0.04em",
              aspectRatio: "2 / 1",
              border: "1px solid var(--border2)",
              borderRadius: "3px",
              color: "var(--ink2)",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: isMobile ? "8px 10px" : "14px 16px",
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
              <span style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "0.75rem" : "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "inherit" }}>{link.label}</span>
              <span style={{ opacity: 0.4, fontSize: "0.7rem" }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
        gap: isMobile ? "20px" : "40px",
        alignItems: "end",
        borderTop: "1px solid var(--border2)",
        paddingTop: "24px",
        marginTop: "40px",
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: "6px" }}>Currently</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.82rem", color: "var(--ink2)", minHeight: "1.2rem" }}>
            {typed}<span>|</span>
          </div>
        </div>

        <div style={{ textAlign: isMobile ? "left" : "center" }}>
          <div className="eyebrow" style={{ marginBottom: "6px" }}>Based in</div>
          <div style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 500, color: "var(--ink2)" }}>Mississauga, ON</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", color: "var(--ink4)", marginTop: "3px" }}>University of Toronto</div>
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: "10px", alignItems: isMobile ? "center" : "flex-end" }}>
          <a href="#projects" style={{
            fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.08em",
            padding: "10px 20px", background: "var(--ink)", color: "var(--cream)",
            textDecoration: "none", borderRadius: "2px", transition: "background 0.2s", display: "inline-block"
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--ink)")}
          >View Work →</a>
          <a href="#contact" style={{
            fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.08em",
            padding: "10px 20px", border: "1px solid var(--border2)", color: "var(--ink3)",
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