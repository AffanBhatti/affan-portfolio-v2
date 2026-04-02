"use client";

const education = [
  {
    school:"University of Toronto",
    degree:"Honours BSc — Computer Science & Economics",
    note:"Research in Astronomy",
    period:"Sept 2024 – Apr 2028",
    detail:["CS / Programming","Differential & Integral Calculus","Discrete Mathematics","Principles of Physics","Astronomy","Linear Algebra","Macroeconomics","University-level Writing"],
  },
  {
    school:"Stephen Lewis Secondary School",
    degree:"Ontario Secondary School Diploma",
    note:"Honour Roll · Ontario Scholar",
    period:"Sept 2020 – Jun 2024",
    detail:["Honour Roll — 4 consecutive years","Ontario Scholar","General Executive — Grad Council & Athletic Committee","Senior Male Athlete of the Year (Grade 11)"],
  },
];

const certs = [
  { name:"Intro to Agent Skills", issuer:"Anthropic Academy", date:"Apr 2026", logo:"/anthropic.webp", fit:"cover" },
  { name:"Software Engineering Job Simulation", issuer:"JPMorgan Chase · Forage", date:"Feb 2026", logo:"/JPMorgan-Chase.jpg", fit:"contain" },
{ name:"Admin Beginner Badge", issuer:"Salesforce Trailhead", date:"2025", logo:"/salesforce.png", fit:"contain" },  { name:"Introduction to Data Science", issuer:"Cisco Networking Academy", date:"2024", logo:"/cisco.jpg", fit:"cover" },
  { name:"Introduction to IoT", issuer:"Cisco Networking Academy", date:"2024", logo:"/cisco.jpg", fit:"cover" },
  { name:"Introduction to Cybersecurity", issuer:"Cisco Networking Academy", date:"2024", logo:"/cisco.jpg", fit:"cover" },
  { name:"Physics & Scientific Research", issuer:"CERN–Solvay Education Programme", date:"2023", logo:"/cern.png", fit:"cover" },
];

export default function Education() {
  return (
    <>
      <section id="education" style={{ maxWidth:"1320px",margin:"0 auto",padding:"120px 48px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 2fr",gap:"80px",alignItems:"start" }}>
          <div>
            <div className="num" style={{ marginBottom:"12px" }}>05</div>
            <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--ink)" }}>
              Education &amp;<br /><em>Credentials</em>
            </h2>
          </div>
          <div>
            {education.map((e,i)=>(
              <div key={i} style={{ borderBottom:"1px solid var(--border)",paddingBottom:"40px",marginBottom:"40px" }}>
                <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"12px",marginBottom:"16px" }}>
                  <div>
                    <h3 style={{ fontFamily:"var(--serif)",fontSize:"1.3rem",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em",marginBottom:"4px" }}>{e.school}</h3>
                    <div style={{ fontFamily:"var(--sans)",fontSize:"0.88rem",fontWeight:500,color:"var(--ink2)" }}>{e.degree}</div>
                    <div style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",color:"var(--ink4)",marginTop:"3px" }}>{e.note}</div>
                  </div>
                  <span style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",color:"var(--ink4)",background:"var(--cream3)",border:"1px solid var(--border2)",padding:"5px 12px",borderRadius:"2px",whiteSpace:"nowrap",alignSelf:"flex-start" }}>{e.period}</span>
                </div>
                <div style={{ display:"flex",flexWrap:"wrap",gap:"6px" }}>
                  {e.detail.map(d=>(
                    <span key={d} style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",padding:"4px 10px",background:"var(--cream2)",border:"1px solid var(--border)",borderRadius:"2px",color:"var(--ink3)" }}>{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" style={{ background:"var(--cream2)",borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:"1320px",margin:"0 auto",padding:"80px 48px" }}>
<div style={{ fontFamily:"var(--serif)",fontSize:"1.4rem",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em",marginBottom:"32px" }}>Certifications &amp; Programs</div>          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1px",background:"var(--border)",border:"1px solid var(--border)",borderRadius:"4px",overflow:"hidden" }}>
            {certs.map((c,i)=>(
              <div key={i}
                style={{ background:"var(--cream2)",padding:"24px",transition:"background 0.2s",display:"flex",flexDirection:"column",gap:"16px" }}
                onMouseEnter={e=>((e.currentTarget as HTMLElement).style.background="var(--cream)")}
                onMouseLeave={e=>((e.currentTarget as HTMLElement).style.background="var(--cream2)")}
              >
                <img
                  src={c.logo}
                  alt={c.issuer}
                  style={{
                    width:"72px",
                    height:"72px",
                    objectFit: c.fit as "cover" | "contain",
                    borderRadius:"18px",
                    background: c.fit === "contain" ? "#fff" : "transparent",
                    flexShrink:0,
                  }}
                />

                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"var(--mono)",fontSize:"0.6rem",letterSpacing:"0.08em",color:"var(--accent)",marginBottom:"6px",textTransform:"uppercase" }}>{c.issuer}</div>
                  <div style={{ fontFamily:"var(--sans)",fontSize:"0.92rem",fontWeight:600,color:"var(--ink2)",lineHeight:1.3 }}>{c.name}</div>
                </div>

                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                  <span style={{ fontFamily:"var(--mono)",fontSize:"0.62rem",color:"var(--ink4)" }}>{c.date}</span>
                  <span style={{ fontFamily:"var(--mono)",fontSize:"0.56rem",letterSpacing:"0.1em",color:"var(--accent3)",background:"rgba(42,140,80,0.08)",border:"1px solid rgba(42,140,80,0.25)",padding:"2px 7px",borderRadius:"2px" }}>VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}