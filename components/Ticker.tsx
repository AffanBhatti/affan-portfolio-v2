"use client";
export default function Ticker() {
  const items = ["Python","TypeScript","React","Next.js","Flutter","Spring Boot","Firebase","Apache Kafka","OpenAI","Node.js","AI Engineering","Full-Stack","Vercel","Git","Tailwind CSS","Java","SQL","Framer Motion"];
  const doubled = [...items, ...items];
  return (
    <div style={{ borderTop:"1px solid var(--border2)",borderBottom:"1px solid var(--border2)",overflow:"hidden",padding:"14px 0",background:"var(--cream2)" }}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} style={{ display:"inline-flex",alignItems:"center",gap:"20px",paddingRight:"32px" }}>
            <span style={{ fontFamily:"var(--mono)",fontSize:"0.7rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--ink3)" }}>{item}</span>
            <span style={{ color:"var(--accent)",fontSize:"0.5rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
