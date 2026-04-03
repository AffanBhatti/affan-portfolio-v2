"use client";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const jobs = [
  {
    co:"Freelance",role:"Software Developer & AI Engineer",period:"Apr 2025 – Present",loc:"Toronto, ON",tag:"Full-Stack · AI",
    desc:"Design and develop custom websites and software solutions tailored to each client's goals, managing the full lifecycle from requirements through deployment and post-launch support. Apply AI engineering practices — including prompt engineering, multi-agent orchestration, and LLM-integrated workflow design — to build intelligent products, most notably as sole Project Head of Nyvo.",
    pts:["Full lifecycle development: requirements → deployment → post-launch","Multi-agent orchestration & LLM-integrated workflow design","Managing multiple concurrent client projects simultaneously","Sole Project Head of Nyvo — AI-enhanced cross-platform messaging app"],
  },
  {
    co:"Kustomade Renovations",role:"Social Media Content Manager",period:"Jul 2024 – May 2025",loc:"Toronto, ON",tag:"Marketing · Strategy",
    desc:"Developed and maintained content calendars showcasing renovation projects; created engaging before-and-after posts that boosted brand visibility. Handled client inquiries, preliminary estimates, and collaborated with ownership to align online marketing with business goals.",
    pts:["Content calendars and before/after renovation posts across platforms","Client inquiry handling, estimates & consultation scheduling","Aligned online marketing strategy with business growth goals"],
  },
  {
    co:"IAAA Construction",role:"Designing Assistant & Assistant Project Manager",period:"Mar 2022 – Apr 2024",loc:"Mississauga, ON",tag:"Design · PM",
    desc:"Assisted architects and engineers with CAD drawings and design revisions for residential and commercial projects. Helped prepare schedules, budgets, and material lists; coordinated with subcontractors and suppliers on timelines and site requirements.",
    pts:["CAD drawings & design revisions for residential and commercial projects","Schedule, budget, and material list preparation","Subcontractor and supplier coordination on timelines and requirements"],
  },
  {
    co:"Trillium Health Partners",role:"Information Desk & Wayfinding · Volunteer",period:"Nov 2023 – Jun 2024",loc:"Mississauga, ON",tag:"Community",
    desc:"Assisted patients, families, and visitors with wayfinding and hospital information. Promoted the MyChart patient portal and provided customer service in the hospital gift shop.",
    pts:["Patient and visitor wayfinding and support","MyChart portal promotion and digital health engagement","Gift shop customer service and operations"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();
  const j = jobs[active];

  return (
    <section id="experience" style={{ background:"var(--cream2)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1320px",margin:"0 auto",padding: isMobile ? "80px 24px" : "120px 48px" }}>

        <div style={{ marginBottom:"48px" }}>
          <div className="num" style={{ marginBottom:"12px" }}>02</div>
          <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--ink)" }}>
            Work<br /><em>Experience</em>
          </h2>
        </div>

        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr",gap: isMobile ? "24px" : "64px",alignItems:"start" }}>

          {/* Tabs */}
          <div style={{ display:"flex",flexDirection: isMobile ? "row" : "column",gap:"6px",overflowX: isMobile ? "auto" : "visible",paddingBottom: isMobile ? "8px" : "0" }}>
            {jobs.map((j,i)=>(
              <button key={i} onClick={()=>setActive(i)} style={{
                cursor:"none",
                textAlign:"left" as const,
                padding:"16px 20px",
                borderRadius:"4px",
                transition:"all 0.2s",
                background: active===i ? "var(--ink)" : "var(--cream)",
                border: `1px solid ${active===i ? "var(--ink)" : "var(--border2)"}`,
                flexShrink: isMobile ? 0 : 1,
                minWidth: isMobile ? "160px" : "auto",
                width: isMobile ? "auto" : "100%",
              }}>
                <div style={{ fontFamily:"var(--sans)",fontSize:"0.92rem",fontWeight:700,color:active===i?"var(--cream)":"var(--ink2)",marginBottom:"4px",whiteSpace: isMobile ? "nowrap" as const : "normal" as const }}>{j.co}</div>
                <div style={{ fontFamily:"var(--mono)",fontSize:"0.62rem",letterSpacing:"0.06em",color:active===i?"rgba(245,240,232,0.6)":"var(--ink4)" }}>{j.tag} · {j.period.split("–")[0].trim()}</div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div key={active} style={{ animation:"fadeUp 0.35s cubic-bezier(0.22,1,0.36,1) forwards" }}>
            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"20px",gap:"12px" }}>
              <div>
                <h3 style={{ fontFamily:"var(--serif)",fontSize: isMobile ? "1.2rem" : "1.5rem",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em",marginBottom:"5px" }}>{j.role}</h3>
                <div style={{ fontFamily:"var(--mono)",fontSize:"0.72rem",color:"var(--accent)",letterSpacing:"0.05em" }}>{j.co} · {j.loc}</div>
              </div>
              <span style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",color:"var(--ink4)",background:"var(--cream3)",border:"1px solid var(--border2)",padding:"5px 12px",borderRadius:"2px",whiteSpace:"nowrap" }}>{j.period}</span>
            </div>

            <p style={{ fontFamily:"var(--sans)",fontSize:"0.95rem",fontWeight:300,lineHeight:1.75,color:"var(--ink3)",marginBottom:"24px" }}>{j.desc}</p>

            <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:"10px" }}>
              {j.pts.map((p,i)=>(
                <li key={i} style={{ display:"flex",gap:"12px",alignItems:"flex-start" }}>
                  <span style={{ fontFamily:"var(--mono)",fontSize:"0.6rem",color:"var(--accent)",marginTop:"5px",flexShrink:0 }}>◆</span>
                  <span style={{ fontFamily:"var(--sans)",fontSize:"0.9rem",color:"var(--ink2)",lineHeight:1.65 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}