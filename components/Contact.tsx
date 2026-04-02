"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText("affanbhattizemail@gmail.com"); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <section id="contact" style={{ maxWidth:"1320px",margin:"0 auto",padding:"140px 48px 100px" }}>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"end" }}>
        <div>
          <div className="num" style={{ marginBottom:"12px" }}>06</div>
          <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,5rem)",fontWeight:900,lineHeight:1.0,letterSpacing:"-0.04em",color:"var(--ink)",marginBottom:"28px" }}>
            Let&apos;s work<br /><em style={{ color:"var(--accent)" }}>together</em>
          </h2>
          <p style={{ fontFamily:"var(--sans)",fontSize:"1.05rem",fontWeight:300,lineHeight:1.75,color:"var(--ink3)",maxWidth:"400px" }}>
            Open to internships, freelance projects, research collaborations, and anything interesting. I reply fast.
          </p>
        </div>

        <div style={{ display:"flex",flexDirection:"column",gap:"16px" }}>
          {[
            { label:"Email", value:"affanbhattizemail@gmail.com", href:"mailto:affanbhattizemail@gmail.com" },
            { label:"Phone", value:"(437) 445-3315", href:"tel:4374453315" },
            { label:"LinkedIn", value:"affan-bhatti-561206311", href:"https://linkedin.com/in/affan-bhatti-561206311" },
          ].map(c=>(
            <a key={c.label} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 24px",border:"1px solid var(--border2)",borderRadius:"3px",textDecoration:"none",transition:"all 0.2s",background:"transparent",gap:"16px" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="var(--ink)"; (e.currentTarget as HTMLElement).style.background="var(--cream2)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="var(--border2)"; (e.currentTarget as HTMLElement).style.background="transparent"; }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom:"4px" }}>{c.label}</div>
                <div style={{ fontFamily:"var(--sans)",fontSize:"0.9rem",fontWeight:500,color:"var(--ink2)" }}>{c.value}</div>
              </div>
              <span style={{ fontFamily:"var(--mono)",fontSize:"0.8rem",color:"var(--ink4)" }}>↗</span>
            </a>
          ))}

          <button onClick={copy} style={{
            cursor:"none",background:"none",border:"1px solid var(--border)",borderRadius:"3px",
            padding:"14px 24px",fontFamily:"var(--mono)",fontSize:"0.68rem",letterSpacing:"0.1em",
            color: copied ? "var(--accent3)" : "var(--ink4)",
            borderColor: copied ? "var(--accent3)" : "var(--border)",
            transition:"all 0.2s",textAlign:"left",
          }}>
            {copied ? "✓ EMAIL COPIED!" : "COPY EMAIL ADDRESS"}
          </button>
        </div>
      </div>
    </section>
  );
}
