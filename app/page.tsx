import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GetInTouch } from "@/components/MessageBox";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeDownload } from "@/components/ResumeDownload";
import { profile, readyProjects } from "@/lib/profile";

const projects = readyProjects().filter((project) => project.showOnHome);

export default function HomePage() {
  return (
    <div className="site-shell">
      <Hero />
      <ProofPoints />
      <About />
      <Skills />
      <SelectedWork />
      <Resume />
      <Contact />
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-profile">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            width={88}
            height={88}
            priority
            className="hero-portrait"
          />
          <div>
            <p className="hero-greeting">{profile.greeting}</p>
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {profile.badge}
            </p>
          </div>
        </div>
        <h1 id="hero-title">
          Full-Stack
          <br />
          <span className="hero-last-line">Developer.</span>
        </h1>
        <p className="hero-intro">{profile.bio}</p>
        <div className="hero-actions">
          <GetInTouch className="button button-primary" label="Get in touch" />
          <Link href="/projects" className="button button-outline">
            View my work <span aria-hidden="true">↗</span>
          </Link>
          <a
            className="button button-outline"
            href={profile.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-note"><span /> Building great products for both web and mobile</div>
      </div>
      <HeroArtwork />
      <div className="hero-index" aria-hidden="true">PORTFOLIO — 2026</div>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Illustrated software dashboard">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-spark spark-one">✳</div>
      <div className="art-spark spark-two">✦</div>
      <div className="art-chip chip-code"><span>&lt;/&gt;</span> building products</div>
      <div className="art-dashboard">
        <div className="art-windowbar"><span /><span /><span /><b>product / overview</b><i>•••</i></div>
        <div className="art-windowbody">
          <div className="art-rail"><strong>EU</strong><span className="rail-selected">⌂</span><span>▤</span><span>◉</span><span>⚙</span></div>
          <div className="art-content">
            <div className="art-greeting"><div><small>PRODUCT ENGINEERING</small><b>Ideas into reliable software.</b></div><span>EU</span></div>
            <div className="art-summary">
              <div><small>AREAS OF FOCUS</small><strong>Full stack<span>↗</span></strong><p>Web · mobile · fintech</p></div>
              <div className="art-activity"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="art-task"><span className="task-icon">✳</span><div><small>THE APPROACH</small><b>Make the complex feel simple</b></div><span className="task-arrow">↗</span></div>
          </div>
        </div>
      </div>
      <div className="art-floating-note"><span className="note-icon">✦</span><span><b>Thoughtful by design</b><small>Built with people in mind.</small></span></div>
      <div className="art-sticker">CURIOUS<br />BY NATURE<span>↘</span></div>
    </div>
  );
}

function ProofPoints() {
  return (
    <section className="proof-strip" aria-label="Experience at a glance">
      <ul>
        {profile.stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-space" id="about">
      <div className="about-topline">
        <Eyebrow>01 / THE WAY I BUILD</Eyebrow>
        <span>GOOD PRODUCTS START WITH GOOD QUESTIONS</span>
      </div>
      <div className="about-main">
        <h2>
          I make the
          <br />
          complicated
          <br />
          <span>feel clear.</span>
        </h2>
        <div className="about-copy">
          <p className="about-lede">{profile.about.paragraph}</p>
          <p className="about-detail">
            My work spans full-stack web and mobile apps, fintech integrations,
            authentication, payments, and the product details that help software
            feel dependable.
          </p>
          <Link href="#skills" className="underlined-link">
            Explore my technical toolkit <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="about-principles">
        <article>
          <span>01</span>
          <h3>Understand the workflow</h3>
          <p>Start with the people, constraints, and problem behind the brief.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Build for confidence</h3>
          <p>Make complex journeys clear, reliable, and secure.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Stay end to end</h3>
          <p>Bring product thinking and engineering together through delivery.</p>
        </article>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="work-section section-space" id="work">
      <div className="work-heading">
        <div className="section-head">
          <Eyebrow>03 / A FEW THINGS I’VE MADE</Eyebrow>
          <h2>Ideas, meet <span>execution.</span></h2>
        </div>
        <Link href="/projects" className="button button-outline">
          All projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            imageFirst={index % 2 === 1}
            highlight={index === 0}
            projectNumber={index + 1}
            zoomOnHover
          />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section section-space" id="skills">
      <div className="section-head">
        <Eyebrow>02 / HOW I CAN HELP</Eyebrow>
        <h2>
          From first idea
          <br />
          <span>to working product.</span>
        </h2>
      </div>
      <div className="skills-content">
        <p>Full-stack, mobile, and fintech product work backed by a practical toolkit.</p>
        <ul className="service-list">
          {profile.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <ul className="skill-groups">
          {profile.stack.map((group) => (
            <li key={group.category}>
              <span>{group.category}</span>
              <div>{group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="resume-panel section-space" id="resume">
      <div className="section-head">
        <h2>Resume</h2>
      </div>
      <ResumeDownload
        href="/portfolio/resume.pdf"
        label="View / download résumé"
        fileName="Emmanuel_Udeka_Resume.pdf"
        className="button button-primary"
      />
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-panel section-space" id="contact">
      <div className="contact-shape" aria-hidden="true" />
      <Eyebrow>05 / GET IN TOUCH</Eyebrow>
      <div className="contact-content">
        <h2>
          Let’s make
          <br />
          <span>what’s next.</span>
        </h2>
        <div className="contact-action">
          <p>Have a product to build or a technical challenge to solve? Let’s build.</p>
          <GetInTouch className="button button-light" label="Let’s build" />
        </div>
      </div>
      <span className="contact-signoff">GOOD THINGS START SOMEWHERE ✳</span>
    </section>
  );
}
