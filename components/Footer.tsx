"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border2)", background:"var(--cream2)" }}>
      <div style={{ maxWidth:"1320px",margin:"0 auto",padding:"40px 48px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px" }}>
        <div style={{ display:"flex",alignItems:"baseline",gap:"5px" }}>
          <span style={{ fontFamily:"var(--serif)",fontSize:"1rem",fontWeight:700,color:"var(--ink)" }}>Affan</span>
          <span style={{ fontFamily:"var(--serif)",fontSize:"1rem",fontWeight:700,color:"var(--accent)" }}>Bhatti</span>
        </div>

        <div style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",letterSpacing:"0.08em",color:"var(--ink4)",textAlign:"center" }}>
          © 2026 · Built with Next.js · Deployed on Vercel
        </div>

        <div style={{ display:"flex",gap:"24px" }}>
          {[
            { label:"LinkedIn", href:"https://linkedin.com/in/affan-bhatti-561206311" },
            { label:"Email", href:"mailto:affanbhattizemail@gmail.com" },
            { label:"Résumé", href:"/Affan_Bhatti_Resume.pdf" },
          ].map(l=>(
            <a key={l.label} href={l.href} target={l.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              style={{ fontFamily:"var(--mono)",fontSize:"0.65rem",letterSpacing:"0.08em",color:"var(--ink4)",textDecoration:"none",transition:"color 0.2s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--ink)")}
              onMouseLeave={e=>(e.currentTarget.style.color="var(--ink4)")}
            >{l.label} ↗</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
