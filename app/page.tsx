"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type LinkItem = { label: string; href: string };
type Project = { title: string; year: string; description: string; tags: string[]; links?: LinkItem[] };

const PROFILE = {
  name: "Stefan Soh",
  handle: "Stefanso",
  title: "Student-Athlete • Computer Science & Physics",
  email: "stefanxsoh@gmail.com",
  linkedin: "https://www.linkedin.com/in/stefanxsoh/",
  github: "https://github.com/sxsohh",
  resume: "/StefanSohResume.pdf",
  video: "https://www.youtube.com/embed/lsdA_NqvzGw",
};

const DEFAULT_PROJECTS: Project[] = [
  {
    title: "Late-Game Fouling Assistant",
    year: "2025",
    description:
      "Computer-vision prototype that identifies players and surfaces real-time FT% to guide intentional fouling.",
    tags: ["Python", "OpenCV", "Sports Analytics"],
    links: [{ label: "GitHub", href: "https://github.com/sxsohh" }],
  },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/projects.json", { cache: "no-store" });
        if (r.ok) setProjects(await r.json());
      } catch {}
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return q
      ? projects.filter(
          p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))
        )
      : projects;
  }, [projects, query]);

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Retro • Modern • You</span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-[1.05]">
              {PROFILE.handle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-95">
              I’m Stefan—student-athlete and builder. I use code, data, and discipline from the court to
              turn curiosity into useful tools, clear stories, and real impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.resume}
                target="_blank"
                className="rounded-xl bg-white/95 text-[var(--stef-ink)] px-4 py-2 font-semibold shadow hover:bg-white"
              >
                Download Résumé
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                className="rounded-xl bg-white/15 border border-white/40 px-4 py-2 font-semibold hover:bg-white/20"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-xl bg-white/15 border border-white/40 px-4 py-2 font-semibold hover:bg-white/20"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Hero photo */}
          <div className="justify-self-center">
            <div className="polaroid rotate-2">
              <Image
                src="/b2d57fba-3143-420a-82bd-79fc4a804852.jpg"
                alt="Stefan on court"
                width={420}
                height={520}
                className="rounded-md object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CS & PHYSICS */}
      <section className="mx-auto max-w-6xl px-6 -mt-8">
        <div className="panel p-6">
          <h2 className="text-2xl font-bold mb-2 text-[var(--stef-ink)]">Why CS & Physics @ Elmhurst</h2>
          <p className="leading-relaxed">
            I study Computer Science and Physics because I care about **truth and tools**—understanding how
            systems work and building software that helps people make better decisions. My goals are to grow
            into a thoughtful engineer, contribute to open analytics in sport and education, and mentor
            younger students from minority communities so the path into tech feels visible, supported, and
            achievable. I want my work to create **meaningful change**: clearer data for coaches and
            teammates, accessible learning resources, and opportunities for kids who look like me to see
            themselves in STEM.
          </p>
        </div>
      </section>

      {/* SCHOLARSHIP EXPLAINER */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="panel p-6">
          <h2 className="text-2xl font-bold mb-3 text-[var(--stef-ink)]">$20K Scholarship — What it Means</h2>
          <p className="leading-relaxed">
            I received a competitive **$20,000 scholarship** recognizing applied analytics and potential for impact.
            My submission combined basketball strategy with computer vision and data storytelling—showing how
            real-time information can drive smarter late-game decisions. The award helps fund my education and
            gives me the runway to keep building projects that blend sport, science, and community benefit.
          </p>
          <div className="relative w-full mt-5" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg border-2 border-[var(--stef-ice)]"
              src={PROFILE.video}
              title="Scholarship Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* PROJECTS (own section like Media) */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="panel p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="text-2xl font-bold text-[var(--stef-ink)]">Projects</h2>
            <div className="grow" />
            <input
              placeholder="Filter by title or tag (e.g., OpenCV)"
              className="polaroid p-2 w-full sm:w-80"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <hr className="my-4" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(p => (
              <div key={p.title} className="panel overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--stef-ink)]">{p.title}</h3>
                    <span className="text-xs text-gray-500">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                  {!!p.links?.length && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {p.links.map(l => (
                        <a key={l.label} href={l.href} target="_blank" className="underline text-[var(--stef-ink)]">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (simple) */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold mb-4 text-[var(--stef-ink)]">Gallery of me</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="panel overflow-hidden">
            <Image src="/5Y2A6586_Original.JPG" alt="gallery image" width={900} height={700} className="w-full h-64 object-cover" />
          </div>
          <div className="panel overflow-hidden">
            <Image src="/20230515181649_IMG_0429 (2).jpeg" alt="gallery image" width={900} height={700} className="w-full h-64 object-cover" />
          </div>
          <div className="panel overflow-hidden">
            <Image src="/4B59FFD2-E6BF-4F06-BDE6-2772AF5ADCF9.jpg" alt="gallery image" width={900} height={700} className="w-full h-64 object-cover" />
          </div>
          <div className="panel overflow-hidden">
            <Image src="/IMG_5782.JPG" alt="gallery image" width={900} height={700} className="w-full h-64 object-cover" />
          </div>
          <div className="panel overflow-hidden">
            <Image src="/b2d57fba-3143-420a-82bd-79fc4a804852.jpg" alt="gallery image" width={900} height={700} className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm">
        <div className="panel p-4 text-center">
          © {new Date().getFullYear()} {PROFILE.name} ·{" "}
          <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
      </footer>
    </main>
  );
}
