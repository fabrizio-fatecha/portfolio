import { useEffect, useRef, useState } from "react";

// Adds a "reveal-visible" class the first time the element scrolls into
// view, for a subtle fade/slide-in effect that guides the eye down the
// page. Falls back to always-visible if IntersectionObserver is missing.
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " reveal-visible" : ""}` };
}
