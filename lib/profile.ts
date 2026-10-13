const githubUrl = "https://github.com/TrustEmmanuel";
const linkedinUrl = "https://www.linkedin.com/in/emmanuel-udeka/";
const emailAddress = "udekaem@gmail.com";
const basePath = "/portfolio";
const siteUrl = `https://trustemmanuel.github.io${basePath}`;

export const profile = {
  name: "Emmanuel Udeka",
  siteUrl,
  headline: "Full-Stack Developer",
  badge: "Available for projects",
  greeting: "Hi, I'm Emmanuel Udeka",
  photo: `${basePath}/images/emmanuel-udeka.jpg`,
  photoAlt: "Portrait of Emmanuel Udeka",
  bio: "I'm Emmanuel, a software and product developer with 6 years of experience building software and fintech products. I turn ideas into secure, reliable web and mobile apps.",
  email: emailAddress,
  nav: [
    { label: "Home", href: "/" },
    { label: "Featured projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "GitHub", href: githubUrl },
    { label: "LinkedIn", href: linkedinUrl },
  ],
  stats: [
    { value: "6+", label: "Years" },
    { value: "19", label: "Projects" },
    { value: "Full stack web applications", label: "Focus" },
  ],
  about: {
    paragraph:
      "I'm a software and product developer with six years of experience building software and fintech products. I turn ideas into secure, reliable web and mobile apps.",
  },
  stack: [
    {
      category: "FRONTEND & MOBILE",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Flutter",
        "Expo",
      ],
    },
    {
      category: "BACKEND & DATA",
      items: ["Java", "Node.js", "MySQL", "PostgreSQL", "Supabase"],
    },
    {
      category: "AUTH & SECURITY",
      items: [
        "OAuth 2.0",
        "OpenID Connect",
        "JWT",
        "Google Sign-In",
        "Role-Based Access Control",
      ],
    },
    {
      category: "PAYMENTS & DELIVERY",
      items: ["Payment API Integration", "Mailgun", "Git", "GitHub", "Vercel", "Netlify"],
    },
  ],
  services: [
    "Web and mobile application development",
    "Product management and consultancy",
    "Payment, banking and fintech integration",
    "Enterprise application integration and support",
  ],
} as const;

export type ProjectNote = {
  label: string;
  text: string;
};

export type Project = {
  title: string;
  summary: string;
  description: string;
  audience?: string;
  tech: string[];
  image: string;
  mockup: "bloom" | "market" | "mono" | "orbit";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy?: ProjectNote[];
  storyOnHome?: boolean;
  showOnHome?: boolean;
  highlightOnHome?: boolean;
};

export const projects: Project[] = [
  {
    title: "PetroVault",
    summary: "Materials control from the supply base to the wellhead.",
    description:
      "PetroVault is a web-based inventory management tool for upstream oil and gas teams. It gives the Inventory Officer one place to monitor materials such as drilling consumables, spares, and chemicals, so stock levels stay accurate and shortages or over-ordering are caught early. It is hosted on Netlify and works on desktop and mobile, so it can be used in the office or in the field.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Zod"],
    mockup: "bloom",
    caseStudy: [
      {
        label: "The job",
        text: "Keep custody of tubulars, MRO, chemicals, and serialized assets from a supply base to a rig or well.",
      },
      {
        label: "The scope",
        text: "The live workspace is overview, inventory, transfers, and repurchase. An offshore issue needs a well. A SKU already stocked at a location is received against that line.",
      },
      {
        label: "The rule",
        text: "Role limits are checked when the action runs, not only hidden in the menu. Every movement is appended, and each row is tied to the one before it. Procurement can verify the chain and see the row where it breaks.",
      },
      {
        label: "The recovery",
        text: "The workspace is saved in the browser and checked against the register shape. If that saved book no longer matches, PetroVault reloads the sample book instead of opening a damaged one.",
      },
      {
        label: "The limit",
        text: "Sign-in accepts any password of four or more characters. The stock is a sample book for U.S. Gulf and onshore locations, not a company ledger. A shared register and a real sign-in are the next step.",
      },
    ],
    storyOnHome: true,
    showOnHome: true,
    image: `${basePath}/images/petrovault.png`,
    liveUrl: "https://petrovault-inventory.netlify.app/",
    githubUrl: "https://github.com/TrustEmmanuel/petrovault",
    featured: true,
  },
  {
    title: "TajMart",
    summary: "Groceries for the way Lagos cooks.",
    description:
      "TajMart is an e-commerce grocery storefront built for Nigerian shoppers. It lets customers browse and order familiar staples like garri, Indomie, Peak milk, Coca-Cola, and bread, plus household essentials, for delivery in Lagos. It has a deep green brand look and is built to work on mobile, where most grocery shopping happens.",
    tech: ["JavaScript", "React", "Vite", "Supabase", "Google Sign-In", "Mailgun"],
    mockup: "market",
    caseStudy: [
      {
        label: "The job",
        text: "Shoppers add what the kitchen is short on and place a delivery order across Lagos. Prices are in naira.",
      },
      {
        label: "The scope",
        text: "The shelf, a basket kept on the device, and Google sign-in so that basket is there on the next device. Delivery is ₦1,200 across Lagos and free from ₦15,000. Payment is transfer or cash when the bag arrives. The site does not collect cards.",
      },
      {
        label: "The rule",
        text: "The browser can read the shelf. It cannot write shoppers or orders. Sign-in and checkout check the Google token again before anything is saved, and the price on the order comes from the database, not from the page.",
      },
      {
        label: "The recovery",
        text: "A receipt email goes out after the order is saved, with the items, the total, and the delivery address. If that email fails, the order stays saved and the confirmation says the email did not send.",
      },
      {
        label: "The limit",
        text: "Without the connected services, the site runs on the sample shelf. Saved shoppers, saved orders, and receipt emails need those services.",
      },
    ],
    image: `${basePath}/images/tajmart.png`,
    liveUrl: "https://grocery-store-hng.netlify.app/",
    githubUrl: "https://github.com/TrustEmmanuel/hng-grocery-store",
    featured: true,
  },
  {
    title: "Oakwood",
    summary: "A specimen treasury for dollars, sterling, and naira.",
    description:
      "A multi-currency banking platform for Oakwood Finance.",
    audience:
      "Authorize single, multiple, and bulk payments, pay bills, and download receipts from a client-side ledger in USD, GBP, and NGN.",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    mockup: "orbit",
    caseStudy: [
      {
        label: "The job",
        text: "A treasurer sees dollars, sterling, and naira in one book and authorizes what leaves each account.",
      },
      {
        label: "The scope",
        text: "Single, multiple, and bulk payments, bills, beneficiaries, statements, and credit facilities. A naira payment carries a NIP charge. A cross-border wire carries a cable charge. A move between the company's own accounts does not. A value date can be today, or scheduled within 30 days.",
      },
      {
        label: "The rule",
        text: "The amount, the narration, the value date, the available balance, and the mandate PIN are checked when the instruction runs. A wrong PIN is refused and written to the audit. A cross-currency payment uses the specimen board rate.",
      },
      {
        label: "The recovery",
        text: "The book is saved in this browser. If that saved book no longer matches the specimen shape, Oakwood opens a fresh one. Reset demo data puts back the opening ledger, payees, and facilities, and keeps the signed-in mandate.",
      },
      {
        label: "The limit",
        text: "It is a specimen. No bank is contacted and no payment is sent. Sign-in is a specimen mandate stored in the browser.",
      },
    ],
    image: `${basePath}/images/oakwood.png`,
    liveUrl: "https://oakwood-banking-management-system.netlify.app/",
    githubUrl: "https://github.com/TrustEmmanuel/oakwood-banking-management-system",
    featured: true,
    showOnHome: true,
    highlightOnHome: true,
    storyOnHome: true,
  },
];

export function isUnfilled(value: string) {
  return value.includes("[");
}

export function readyProjects() {
  return projects.filter(
    (project) =>
      !isUnfilled(project.title) &&
      !isUnfilled(project.summary) &&
      !isUnfilled(project.description) &&
      project.tech.every((item) => !isUnfilled(item)),
  );
}
