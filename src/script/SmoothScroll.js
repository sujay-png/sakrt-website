import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Guard: this module is imported globally from Layout.astro, so make sure two
// imports on one page can't spin up two rAF loops fighting each other.
if (!window.lenis) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    // Respect the OS setting — no inertial smoothing, native anchor jumps.
    window.lenis = null;
  } else {
    const lenis = new Lenis({
      autoRaf: true, // Lenis runs its own requestAnimationFrame loop internally
      anchors: true, // makes href="#id" links scroll smoothly automatically
      duration: 1.15, // scroll "weight" — higher = slower/floatier
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Expose for debugging / other scripts (e.g. GSAP ScrollTrigger sync)
    window.lenis = lenis;
  }
}
