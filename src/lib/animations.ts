// IntersectionObserver reveal + parallax, sans dépendance externe
export function mountReveal(root: ParentNode = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  els.forEach((el) => io.observe(el));
}

export function mountParallax() {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]")
  );
  const speeds = els.map((el) => Number(el.dataset.speed || 0.15));
  const onScroll = () => {
    const y = window.scrollY;
    els.forEach((el, i) => {
      const speed = speeds[i];
      el.style.transform = `translate3d(0, ${Math.round(y * speed)}px, 0)`;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

const ROAD_LINE_VIEWBOX_HEIGHT = 1000;

// Draws the road-line signature in as the page is scrolled, by growing a clip-path
// rect over the dashed path. Fully drawn + static under prefers-reduced-motion.
export function mountRoadLine() {
  const wrap = document.getElementById("road-line");
  const reveal = document.getElementById("road-reveal-rect");
  if (!wrap || !reveal) return;

  const setHeight = () => {
    // Zero it first so its own height doesn't feed back into the measurement.
    wrap.style.height = "0px";
    wrap.style.height = `${document.documentElement.scrollHeight}px`;
  };
  setHeight();
  window.addEventListener("resize", setHeight, { passive: true });

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) {
    reveal.setAttribute("height", String(ROAD_LINE_VIEWBOX_HEIGHT));
    return;
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
    reveal.setAttribute("height", String(progress * ROAD_LINE_VIEWBOX_HEIGHT));
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}
