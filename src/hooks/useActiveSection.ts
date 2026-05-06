import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const offset = 140;
      const current = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);
        if (!section) {
          return active;
        }

        const top = section.getBoundingClientRect().top;
        return top <= offset ? id : active;
      }, sectionIds[0]);

      setActiveSection(current);
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}
