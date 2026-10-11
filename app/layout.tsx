import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Syne } from "next/font/google";
import Link from "next/link";
import { profile } from "@/lib/profile";
import "./globals.css";

// Outfit carries the body copy; Syne gives the display type extra character.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.bio,
  openGraph: {
    title,
    description: profile.bio,
    siteName: profile.name,
    type: "website",
    url: profile.siteUrl,
  },
};

// This layout wraps every page. {children} is whichever page is open.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <header className="site-header">
          <nav aria-label="Primary" className="header-inner">
            <Link href="/" className="brand-link">
              <span className="brand-mark" aria-hidden="true">
                EU
              </span>
              {profile.name}
            </Link>
            <div className="header-nav">
              <span className="header-availability">
                <span className="availability-dot" aria-hidden="true" /> Available
              </span>
              {profile.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.href === "/contact" ? "header-contact" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <footer className="site-footer">
          <div className="footer-inner">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="footer-note">Full-stack development · Great Products!</p>
            <nav aria-label="Social links">
              <ul className="footer-links">
                {profile.socials.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
