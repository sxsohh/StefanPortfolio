"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Laptop,
  Globe,
  Linkedin,
  ChevronRight,
  BookOpen,
  Trophy,
  FileDown,
  PlayCircle,
} from "lucide-react";

// Types
type IconType = React.ComponentType<{ className?: string }>;
type LinkItem = { label: string; href: string };

// ---- Profile Data (from your résumé) ---- //
const PROFILE = {
  name: "Stefan Soh",
  tagline: "Student-Athlete • Computer Science & Physics",
  location: "Elmhurst, IL",
  email: "stefanxsoh@gmail.com",
  linkedin: "https://www.linkedin.com/in/stefanxsoh/",
  github: "https://github.com/sxsohh",
  blurb:
    "Data-driven, detail-oriented student-athlete (CS & Physics, 3.6 GPA) with hands-on experience in research, reporting, and analytics. Building projects at the intersection of sports, data, and real-world impact.",
  resumePath: "/StefanSohResume.pdf",
  scholarshipVideo: "https://youtu.be/lsdA_NqvzGw",
};

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Data Tools", items: ["Excel (PivotTables, VLOOKUP, charts)", "Google Sheets"] },
  { group: "Programming", items: ["Python (pandas, matplotlib)", "SQL (beginner)"] },
  { group: "Workflow", items: ["Git/GitHub", "Google Workspace", "Microsoft 365"] },
];

const ACHIEVEMENTS: {
  title: string;
  org?: string;
  description: string;
  icon: IconType;
  links?: LinkItem[];
}[] = [
  {
    title: "$20,000 Scholarship Winner",
    org: "(2025)",
    description:
      "Awarded for a video + prototype demonstrating data-driven late-game fouling strategy using Python and computer vision.",
    icon: Trophy,
    links: [
      { label: "Scholarship Video", href: PROFILE.scholarshipVideo },
      { label: "LinkedIn Post", href: PROFILE.linkedin },
    ],
  },
  {
    title: "Dean's List",
    org: "Elmhurst University",
    description: "Recognized for academic excellence (GPA 3.6).",
    icon: GraduationCap,
  },
];

const PROJECTS: {
  title: string;
  year: string;
  description: string;
  tags: string[];
  links?: LinkItem[];
}[] = [
  {
    title: "Late-Game Fouling Assistant",
    year: "2025",
    description:
      "Computer-vision prototype that identifies players and surfaces real-time FT% to guide intentional fouling decisions.",
    tags: ["Python", "OpenCV", "Model Serving", "Sports Analytics"],
    links: [{ label: "GitHub", href: "https://github.com/sxsohh" }],
  },
  {
    title: "NBA CBA & Roster Depth Analysis",
    year: "2024–25",
    description:
      "Explores how the new CBA affects roster construction, depth, and cap efficiency with reproducible notebooks.",
    tags: ["Pandas", "Visualization", "Data Story"],
    links: [{ label: "Notebook", href: "#" }],
  },
  {
    title: "NCAA Transfer Trends 2014–2024",
    year: "2024",
    description:
      "Data structures project analyzing D1 men's transfer portal patterns and rule changes over a decade.",
    tags: ["SQL", "ETL", "Altair"],
    links: [{ label: "Report", href: "#" }],
  },
];

const EXPERIENCE: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Intern",
    org: "Move For Hunger (Remote, NJ)",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Researched 100+ potential donor leads and expanded the CRM.",
      "Analyzed impact metrics in Excel and produced reports for planning.",
      "Supported social media and event coordination to increase engagement.",
    ],
  },
  {
    role: "Intern",
    org: "Cannataro Family Partnership (New York, NY)",
    period: "June 2021",
    bullets: [
      "Built Excel-based performance reports to analyze investment trends.",
      "Presented insights that informed quarterly strategy adjustments.",
      "Observed client meetings to understand data-driven communication.",
    ],
  },
  {
    role: "Student-Athlete (Point Guard)",
    org: "Elmhurst University • Allegheny College",
    period: "2024 – Present",
    bullets: [
      "30+ hrs/week training, film study, and competition while balancing full-time academics.",
      "Led on-court communication; applied analytics to training loads and film study.",
    ],
  },
];

const LINKS: { label: string; href: string; icon: IconType }[] = [
  { label: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin },
  { label: "GitHub", href: PROFILE.github, icon: Github },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
];

// ---- UI Helpers ---- //
const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-14 sm:py-20" aria-label={title}>
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
        <span className="inline-block rounded-2xl bg-gray-100 px-3 py-1 text-sm">{id}</span>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border shadow-sm p-5 sm:p-6 bg-white/60 backdrop-blur">
    {children}
  </div>
);

// ---- Page ---- //
export default function Portfolio() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query) return PROJECTS;
    const q = query.toLowerCase();
    return PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:opacity-70">
              Projects
            </a>
            <a href="#achievements" className="hover:opacity-70">
              Achievements
            </a>
            <a href="#media" className="hover:opacity-70">
              Media
            </a>
            <a href="#skills" className="hover:opacity-70">
              Skills
            </a>
            <a href="#experience" className="hover:opacity-70">
              Experience
            </a>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
            <a
              href={PROFILE.resumePath}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 inline-flex items-center gap-2"
            >
              <FileDown className="h-4 w-4" /> Résumé
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-16 sm:py-24"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm mb-4">
              <Laptop className="h-4 w-4" />
              <span>Data Science Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              {PROFILE.tagline}
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-prose">
              {PROFILE.blurb}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Chip>
                <MapPin className="h-4 w-4 mr-1" /> {PROFILE.location}
              </Chip>
              {LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm hover:shadow"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
              >
                Explore projects <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
              >
                <FileDown className="h-4 w-4" />
                Download Résumé
              </a>
              <a
                href={PROFILE.scholarshipVideo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
              >
                <PlayCircle className="h-4 w-4" />
                Scholarship Video
              </a>
            </div>
          </div>

          <Card>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gray-100 p-3">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">$20,000 Scholarship Winner</h3>
                <p className="text-gray-700 mt-1">
                  Recognized for an applied analytics project blending Python, computer vision, and basketball strategy.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={PROFILE.scholarshipVideo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm underline"
                  >
                    Watch Video <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm underline"
                  >
                    Read on LinkedIn <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <input
            type="text"
            placeholder="Filter by title or tag (e.g., OpenCV, SQL)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-96 rounded-xl border px-4 py-2"
          />
          <div className="text-sm text-gray-600">{filtered.length} shown</div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <Card key={p.title}>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-gray-500">{p.year}</span>
                </div>
                <p className="mt-2 text-gray-700 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm underline"
                    >
                      {l.label} <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements">
        <div className="grid md:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a) => (
            <Card key={a.title}>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-gray-100 p-3">
                  <a.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{a.title}</h3>
                  {a.org && <p className="text-sm text-gray-600">{a.org}</p>}
                  <p className="mt-1 text-gray-700 text-sm">{a.description}</p>
                  {!!a.links?.length && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {a.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm underline"
                        >
                          {l.label} <ExternalLink className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Media (YouTube embed) */}
      <Section id="media" title="Media">
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <PlayCircle className="h-5 w-5" />
            <span className="font-medium">Scholarship Video</span>
          </div>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="Scholarship Video"
              src={`https://www.youtube.com/embed/${PROFILE.scholarshipVideo.split("youtu.be/")[1] || ""}`}
              className="absolute left-0 top-0 h-full w-full rounded-xl border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-3">
            <a
              href={PROFILE.scholarshipVideo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm underline"
            >
              Open on YouTube <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((s) => (
            <Card key={s.group}>
              <h3 className="font-semibold mb-2">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-5">
          {EXPERIENCE.map((e) => (
            <Card key={e.role}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-sm text-gray-600">{e.org}</p>
                </div>
                <div className="text-xs text-gray-500">{e.period}</div>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About">
        <Card>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 text-gray-800 leading-relaxed">
              <p>
                I’m Stef — a point guard who loves pace, pressure, and playmaking, and a builder who turns data into
                decisions. I’m pursuing a B.S. in Computer Science & Physics (GPA 3.6/4.0), graduating May 2028.
              </p>
              <p className="mt-3">
                Recent experience includes research and reporting with Move For Hunger and investment analytics
                reporting with Cannataro Family Partnership. I’m actively building projects in sports analytics and
                data visualization and looking for roles in data analysis/science and analytics engineering.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> <span>Open to remote & Chicago area</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> <span>CS & Physics double major</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" /> <span>$20K scholarship for applied analytics</span>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Let’s talk</h3>
              <p className="text-sm text-gray-700 mt-1">
                I’m always down to chat about internships, analytics projects, or hoops. Shoot me an email and I’ll get
                back soon.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 hover:shadow text-sm"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div>
                <label className="text-sm">Your email</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@domain.com" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border px-3 py-2 h-28"
                  placeholder="Tell me about the role or project"
                />
              </div>
              <button
                className="rounded-2xl border px-4 py-2 inline-flex items-center gap-2 hover:shadow"
                type="submit"
              >
                Send (disabled demo)
                <ExternalLink className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <a href="#top" className="underline">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
