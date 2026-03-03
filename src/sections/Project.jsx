import { useState } from "react";
import ProjectRotator from "../components/ProjectRotator";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Project = () => {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      className="relative c-space section-spacing overflow-hidden"
      id="projects"
    >
      <h2 className="text-heading mb-10">My Selected Projects</h2>
      <div
        ref={sectionRef}
        className={`bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-12 h-[1px] w-full scroll-reveal-fade ${isVisible ? "visible" : ""
          }`}
      />

      <div className="fade-in-up">
        <ProjectRotator />
      </div>

    </section>
  );
};

export default Project;
