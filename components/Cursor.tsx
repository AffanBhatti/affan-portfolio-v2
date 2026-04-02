"use client";
import { useEffect, useRef } from "react";
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dot = dotRef.current; const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.left = mx+"px"; dot.style.top = my+"px"; };
    document.addEventListener("mousemove", move);
    const over = () => { dot.classList.add("cur-big"); ring.classList.add("cur-ring-big"); };
    const out = () => { dot.classList.remove("cur-big"); ring.classList.remove("cur-ring-big"); };
    const bind = () => { document.querySelectorAll("a,button,[data-h]").forEach(el=>{ el.addEventListener("mouseenter",over); el.addEventListener("mouseleave",out); }); };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body,{childList:true,subtree:true});
    let raf: number;
    const tick = () => { rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1; ring.style.left=rx+"px"; ring.style.top=ry+"px"; raf=requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove",move); cancelAnimationFrame(raf); obs.disconnect(); };
  }, []);
  return (<><div ref={dotRef} className="cur"/><div ref={ringRef} className="cur-ring"/></>);
}
