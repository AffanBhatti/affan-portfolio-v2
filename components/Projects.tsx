"use client";
import { useState } from "react";

const projects = [
  {
    num:"01",
    name:"Nyvo",
    sub:"AI-Enhanced Messaging Application",
    tag:"FLAGSHIP · IN DEVELOPMENT",
    year:"2025–",
    color:"#c8502a",
    desc:"Next-generation cross-platform messaging app (Flutter/Firebase) targeting iOS and Android — competing with WhatsApp and iMessage via AI-powered differentiation. Sole Project Head directing Claude as AI Project Manager to orchestrate multiple specialized agents across a 6-sprint roadmap.",
    detail:["Flutter frontend + Firebase backend (Auth, Firestore, Storage, FCM)","Node.js AI microservices: OpenAI GPT-4, Whisper, Google Translate","Agora/WebRTC for real-time voice & video calling","AI features: smart replies, voice transcription, mood-adaptive themes","6-sprint roadmap with full architecture, code gen & sprint execution"],
    stack:["Flutter","Firebase","Node.js","OpenAI GPT-4","Whisper","Agora/WebRTC","Google Translate"],
  },
  {
    num:"02",
    name:"JPMorgan Chase SWE Simulation",
    sub:"Financial Transaction Processing Microservice",
    tag:"FORAGE · FEB 2026",
    year:"2026",
    color:"#2a5cc8",
    desc:"Spring Boot financial transaction processing microservice with Apache Kafka for high-volume message ingestion. Implemented transaction validation, JPA persistence, entity modeling across relational User records, and a REST controller — verified end-to-end with Maven test suites.",
    detail:["Apache Kafka high-volume message ingestion & deserialization","Spring Data JPA + H2 SQL entity modeling and balance updates","External REST Incentive API integration via RestTemplate","REST controller for balance queries","End-to-end verification with embedded Kafka test framework & Maven"],
    stack:["Spring Boot","Apache Kafka","Spring Data JPA","H2 SQL","RestTemplate","Maven"],
  },
  {
    num:"03",
    name:"Portfolio Website",
    sub:"This site — v2",
    tag:"PERSONAL · 2026",
    year:"2026",
    color:"#2a8c50",
    desc:"Fully responsive editorial portfolio built with Next.js, TypeScript, and Tailwind CSS. Features custom cursor, typewriter effect, animated ticker, and tab-based sections. Deployed to Vercel with CI/CD via GitHub.",
    detail:["Custom lerp-smoothed cursor with blend-mode multiply","Playfair Display + DM Mono type pairing for editorial feel","Responsive layout with full mobile nav","Vercel deployment with GitHub CI/CD"],
    stack:["Next.js","TypeScript","React","Tailwind CSS v4","Vercel"],
  },
  {
    num:"04",
    name:"Learning Management System",
    sub:"Client-Tailored Education Platform",
    tag:"CLIENT PROJECT",
    year:"2025",
    color:"#7a5cc8",
    desc:"Client-tailored LMS with AI-powered real-time learning assistance, course enrollment, content delivery, and detailed progress tracking. Delivered as a production-ready, scalable platform aligned to the client's educational objectives.",
    detail:["AI-powered real-time learning assistance","Course enrollment and content delivery system","Detailed student progress tracking","Scalable, production-ready architecture"],
    stack:["Next.js","TypeScript","React","AI Integration"],
  },
];

export default function Projects() {
  const [hover, setHover] = useState<number|null>(null);

  return (
    <section id="projects" style={{ maxWidth:"1320px",margin:"0 auto",padding:"120px 48px" }}>
      <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"64px",borderBottom:"1px solid var(--border2)",paddingBottom:"32px" }}>
        <div>
          <div className="num" style={{ marginBottom:"12px" }}>03</div>
          <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--ink)" }}>
            Selected<br /><em>Projects</em>
          </h2>
        </div>
        <div className="eyebrow" style={{ paddingBottom:"4px" }}>{projects.length} projects</div>
      </div>

      {/* Project rows */}
      <div style={{ display:"flex",flexDirection:"column",gap:"0px" }}>
        {projects.map((p,i)=>(
          <div key={i} onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
            style={{
              borderBottom:"1px solid var(--border)",
              transition:"all 0.2s",
              background: hover===i ? "var(--cream2)":"transparent",
              borderRadius: hover===i ? "4px":"0",
              padding: hover===i ? "40px 24px":"40px 0",
              cursor:"default",
            }}
          >
            <div style={{ display:"grid",gridTemplateColumns:"80px 1fr auto",gap:"32px",alignItems:"start" }}>
              <div style={{ fontFamily:"var(--serif)",fontSize:"2.5rem",fontWeight:700,color:"var(--cream3)",lineHeight:1,letterSpacing:"-0.04em",userSelect:"none" }}>{p.num}</div>

              <div>
                <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",marginBottom:"8px" }}>
                  <h3 style={{ fontFamily:"var(--serif)",fontSize:"clamp(1.4rem,2.5vw,1.9rem)",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em" }}>{p.name}</h3>
                  <span style={{ fontFamily:"var(--mono)",fontSize:"0.6rem",letterSpacing:"0.12em",padding:"4px 10px",border:`1px solid ${p.color}`,color:p.color,borderRadius:"2px" }}>{p.tag}</span>
                </div>
                <div style={{ fontFamily:"var(--sans)",fontSize:"0.88rem",fontWeight:500,color:"var(--ink3)",marginBottom:"12px" }}>{p.sub}</div>
                <p style={{ fontFamily:"var(--sans)",fontSize:"0.9rem",fontWeight:300,lineHeight:1.7,color:"var(--ink3)",maxWidth:"640px",marginBottom:"16px" }}>{p.desc}</p>

                {hover===i && (
                  <div style={{ animation:"fadeUp 0.3s ease forwards" }}>
                    <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:"6px",marginBottom:"16px" }}>
                      {p.detail.map((d,j)=>(
                        <li key={j} style={{ display:"flex",gap:"10px",alignItems:"flex-start" }}>
                          <span style={{ fontFamily:"var(--mono)",fontSize:"0.55rem",color:p.color,marginTop:"5px",flexShrink:0 }}>◆</span>
                          <span style={{ fontFamily:"var(--mono)",fontSize:"0.7rem",color:"var(--ink3)",lineHeight:1.6 }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:"6px" }}>
                      {p.stack.map(s=>(
                        <span key={s} style={{ fontFamily:"var(--mono)",fontSize:"0.62rem",padding:"3px 9px",background:"var(--cream3)",border:"1px solid var(--border2)",borderRadius:"2px",color:"var(--ink3)" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ fontFamily:"var(--mono)",fontSize:"0.7rem",color:"var(--ink4)",textAlign:"right",whiteSpace:"nowrap",paddingTop:"6px" }}>{p.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
