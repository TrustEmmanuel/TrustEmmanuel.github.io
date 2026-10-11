import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, readyProjects } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Selected work",
  description: `Product design and engineering case studies from ${profile.name}.`,
};

export default function ProjectsPage() {
  const items = readyProjects();

  return (
    <section className="site-shell projects-page">
      <div className="section-heading">
        <p className="eyebrow">A FEW THINGS I’VE MADE</p>
        <h1>
          Ideas, meet
          <br />
          <span className="muted-heading">execution.</span>
        </h1>
        <p className="projects-intro">
          A selection of products I’ve built.
        </p>
      </div>
      {items.length > 0 ? (
        <div className="project-list">
          {items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              headingLevel={2}
              projectNumber={index + 1}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
