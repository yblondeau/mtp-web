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
