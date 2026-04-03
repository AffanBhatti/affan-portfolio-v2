"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

const focuses = ["Software Development","AI & Machine Learning","Full-Stack Engineering","Multi-Agent Systems","Prompt Engineering","Data Structures & Algorithms","Astrophysics Research","Economics & Strategy","Scientific Computing","Entrepreneurship"];

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" style={{ maxWidth:"1320px",margin:"0 auto",padding: isMobile ? "80px 24px" : "120px 48px" }}>
      <div style={{ display:"grid",gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",gap: isMobile ? "40px" : "80px",alignItems:"center" }}>

        <div>
          <div className="num" style={{ marginBottom:"12px" }}>01</div>
          <h2 style={{ fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",color:"var(--ink)",marginBottom:"32px" }}>
            About<br /><em>me</em>
          </h2>

          <div style={{
            width:"100%",
            aspectRatio: isMobile ? "1/1" : "3/4",
            borderRadius:"4px",overflow:"hidden",
            background:"var(--cream3)",border:"1px solid var(--border2)",
          }}>
            <img
              src="/Affan.jpeg"
              alt="Affan Bhatti"
              style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 35%",display:"block" }}
            />
          </div>

          {/* Social links — bigger and more button-like */}
          <div style={{ display:"flex",gap:"8px",marginTop:"16px",flexWrap:"wrap" }}>
            {[
              { label:"Email", href:"mailto:affanbhattizemail@gmail.com" },
              { label:"LinkedIn", href:"https://linkedin.com/in/affan-bhatti-561206311" },
              { label:"Résumé", href:"/Affan_Bhatti_Resume.pdf" },
            ].map(l=>(
              <a key={l.label} href={l.href} target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{
                  fontFamily:"var(--mono)",fontSize:"0.72rem",letterSpacing:"0.06em",
                  color:"var(--ink2)",textDecoration:"none",
                  border:"1px solid var(--border2)",
                  borderRadius:"3px",
                  padding:"8px 14px",
                  transition:"all 0.2s",
                  fontWeight:500,
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="var(--ink)"; (e.currentTarget as HTMLElement).style.color="var(--cream)"; (e.currentTarget as HTMLElement).style.borderColor="var(--ink)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.color="var(--ink2)"; (e.currentTarget as HTMLElement).style.borderColor="var(--border2)"; }}
              >{l.label} ↗</a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily:"var(--sans)",fontSize:"1.15rem",fontWeight:300,lineHeight:1.8,color:"var(--ink2)",marginBottom:"28px",letterSpacing:"-0.01em" }}>
            I&apos;m a Software Developer and AI Engineer pursuing an Honours BSc in <strong style={{ fontWeight:600 }}>Computer Science & Economics</strong> at the University of Toronto, with a research focus in Astronomy.
          </p>
          <p style={{ fontFamily:"var(--sans)",fontSize:"1.05rem",fontWeight:300,lineHeight:1.8,color:"var(--ink3)",marginBottom:"28px" }}>
            My work lives at the intersection of engineering precision and product thinking — building full-stack systems, AI-powered applications, and experiences that feel inevitable. As a former full-time student athlete, I bring discipline and high-performance habits into every project.
          </p>
          <p style={{ fontFamily:"var(--sans)",fontSize:"1.05rem",fontWeight:300,lineHeight:1.8,color:"var(--ink3)",marginBottom:"48px" }}>
            I&apos;m driven by the belief that technology — built thoughtfully — can fundamentally change how people communicate, learn, and grow.
          </p>

          <div style={{ borderTop:"1px solid var(--border)",paddingTop:"32px",marginBottom:"32px" }}>
            <div className="eyebrow" style={{ marginBottom:"16px" }}>Focus Areas</div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:"8px" }}>
              {focuses.map(f=><span key={f} className="pill">{f}</span>)}
            </div>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)",border:"1px solid var(--border)",borderRadius:"4px",overflow:"hidden" }}>
            {[
              {k:"Location",v:"Mississauga, ON"},
              {k:"Status",v:"Open to opportunities"},
              {k:"Spoken",v:"English · Urdu"},
              {k:"Graduating",v:"April 2028"},
            ].map(item=>(
              <div key={item.k} style={{ background:"var(--cream)",padding:"18px 20px" }}>
                <div className="eyebrow" style={{ marginBottom:"5px" }}>{item.k}</div>
                <div style={{ fontFamily:"var(--sans)",fontSize:"0.88rem",fontWeight:500,color:"var(--ink2)" }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}