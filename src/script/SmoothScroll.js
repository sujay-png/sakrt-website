import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  autoRaf: true,      // Lenis runs its own requestAnimationFrame loop internally
  anchors: true,       // makes href="#id" links scroll smoothly automatically
  duration: 1.2,        // scroll "weight" — higher = slower/floatier
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out
  smoothWheel: true,
});

// Optional: expose for debugging / other scripts (e.g. GSAP ScrollTrigger sync)
window.lenis = lenis;