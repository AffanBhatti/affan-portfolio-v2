"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

const groups = [
  { label:"Languages", items:["Python","TypeScript","JavaScript","Java","SQL","HTML / CSS","Tailwind CSS"] },
  { label:"Frameworks & Libraries", items:["React","Next.js","Flutter","Node.js","Spring Boot","Apache Kafka","Spring Data JPA","Framer Motion"] },
  { label:"AI & Engineering", items:["Prompt Engineering","Multi-Agent Orchestration","LLM Integration","OpenAI API","Anthropic Claude","Agile / Scrum","REST APIs"] },
  { label:"Tools & Platforms", items:["Firebase","Vercel","Git / GitHub","AutoCAD","Salesforce","Google Workspace","Microsoft Office"] },
];

export default function Skills() {
  const isMobile = useIsMobile();

  return (
    <section id="skills" style={{ background:"var(--cream2)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1320px",margin:"0 auto",padding: isMobile ? "80px 24px" : "120px 48px" }}>
        <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",gap: isMobile ? "32px" : "80px",alignItems:"start" }}>

          {/* Left heading */}
          <div>
            <div className="num" style={{ marginBottom:"12px" }}>04</div>
            <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--ink)" }}>
              Skills &amp;<br /><em>Tools</em>
            </h2>
          </div>

          {/* Right grid */}
          <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",gap: isMobile ? "32px 24px" : "48px 64px" }}>
            {groups.map(g=>(
              <div key={g.label}>
                <div style={{ fontFamily:"var(--serif)",fontSize:"1rem",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.01em",marginBottom:"16px",borderBottom:"1px solid var(--border2)",paddingBottom:"10px" }}>{g.label}</div>
                <div style={{ display:"flex",flexDirection:"column",gap:"8px" }}>
                  {g.items.map(item=>(
                    <div key={item} style={{ display:"flex",alignItems:"center",gap:"10px" }}>
                      <span style={{ width:"4px",height:"4px",borderRadius:"50%",background:"var(--accent)",flexShrink:0 }}/>
                      <span style={{ fontFamily:"var(--sans)",fontSize:"0.85rem",color:"var(--ink2)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}