import type { Metadata } from "next";
import { GetInTouch } from "@/components/MessageBox";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} about your next product or engineering opportunity.`,
};

export default function ContactPage() {
  return (
    <section className="site-shell contact-page">
      <h1 className="contact-page-title">Contact</h1>
      <div className="contact-card">
        <h2>I’m a Forward Deployed Engineer.</h2>
        <p>
          I work from product constraints to shipped software, and explain what
          broke in plain language.
        </p>
        <p>
          I build web, mobile, and fintech products, and stay with the work
          until it finds its way.
        </p>
        <p>
          Send a message and I’ll get back to you, so we can shape the work and
          see it through.
        </p>
        <GetInTouch className="button button-dark" label="Get in touch" />
      </div>
    </section>
  );
}
