import Image from "next/image";
import type { Project } from "@/lib/profile";

export function ProjectCard({
  project,
  headingLevel = 3,
  imageFirst = false,
  showStory = false,
  highlight = false,
  zoomOnHover = false,
  projectNumber = 1,
}: {
  project: Project;
  headingLevel?: 2 | 3;
  imageFirst?: boolean;
  showStory?: boolean;
  highlight?: boolean;
  zoomOnHover?: boolean;
  projectNumber?: number;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const projectId = project.title.toLowerCase().replaceAll(" ", "-");

  return (
    <article
      id={projectId}
      className={`project-card${highlight ? " project-card-highlight" : ""}${imageFirst ? " project-card-image-first" : ""}`}
    >
      <div
        className={`project-visual visual-${project.mockup}`}
        role="img"
        aria-label={`${project.title} product interface preview`}
      >
        <div
          className={`project-art-window${project.mockup === "mono" ? " project-art-phone" : ""}`}
        >
          <div className="project-window-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <b>{project.title}</b>
            <i>
              {project.mockup === "market"
                ? "LAGOS · GROCERY STOREFRONT"
                : project.mockup === "mono"
                  ? "FRESH · LAGOS"
                  : "PRODUCT WORKSPACE"}
            </i>
          </div>
          <div className="project-window-screen">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 850px) 42vw, 90vw"
              className={`project-image${zoomOnHover ? " project-image-zoom" : ""}`}
            />
          </div>
        </div>
        <span className="project-art-label" aria-hidden="true">
          {project.mockup === "bloom"
            ? "MATERIALS · INVENTORY"
            : project.mockup === "market"
              ? "GROCERIES · DELIVERED"
              : "TREASURY · OVERVIEW"}
        </span>
      </div>
      <div className="project-copy">
        <div className="project-kicker">
          <span className="project-index">0{projectNumber}</span>
          <span>SELECTED PROJECT</span>
        </div>
        <Heading className="project-title">{project.title}</Heading>
        <p className="project-summary">{project.summary}</p>
        <p className="project-description">{project.description}</p>
        {project.audience ? (
          <p className="project-audience">{project.audience}</p>
        ) : null}
        <ul className="project-tags">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-link"
            >
              Visit live project <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View source <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
      {showStory && project.caseStudy?.length ? (
        <dl className="project-notes">
          {project.caseStudy.map((note) => (
            <div key={note.label}>
              <dt>{note.label}</dt>
              <dd>{note.text}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  );
}
