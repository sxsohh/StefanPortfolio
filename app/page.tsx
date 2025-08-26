"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// simple profile info
const PROFILE = {
  name: "Stefan Soh",
  handle: "Stefan Soh",
  title: "Student-Athlete • Computer Science & Physics",
  email: "stefanxsoh@gmail.com",
  linkedin: "https://www.linkedin.com/in/stefanxsoh/",
  github: "https://github.com/sxsohh",
  resume: "/StefanSohResume.pdf",
  video: "https://www.youtube.com/embed/lsdA_NqvzGw",
};

// starter projects; replaced if /public/projects.json exists
const PROJECTS = [
  {
    title: "Late-Game Fouling Assistant",
    year: "2025",
    description:
      "Computer vision project that identifies players and shows FT% to guide late-game fouling choices.",
    tags: ["Python", "OpenCV", "Sports Analytics"],
    links: [{ label: "GitHub", href: "https://github.com/sxsohh" }],
  },
];

export default function Home() {
  const [projects, setProjects] = useState(PROJECTS);
  const [query, setQuery] = useState("");

  // try to load more projects from public/projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setProjects(data);
      })
      .catch(() => {});
  }, []);

  // quick filter
  const filtered = projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      q.length === 0 ||
      p.title.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Portfolio</span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold">
              {PROFILE.handle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              I’m Stefan, a student-athlete and builder. I use code, data, and
              lessons from basketball to create tools and tell stories with
              impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.resume}
                target="_blank"
                className="rounded-xl bg-white/95 text-[var(--stef-ink)] px-4 py-2 font-semibold shadow hover:bg-white"
              >
                Download Resume
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

          {/* hero photo (your vertical hoops shot) */}
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
          <h2 className="text-2xl font-bold mb-2 text-[var(--stef-ink)]">
            Why CS & Physics @ Elmhurst
          </h2>
          <p>
            I study Computer Science and Physics because I want to understand
            how systems work and build software that helps people make better
            decisions. My goal is to grow into a thoughtful engineer, contribute
            to analytics in sports and education, and mentor younger students
            from minority communities. I want my work to make real change:
            clearer data for coaches, accessible learning resources, and
            opportunities for kids who look like me in STEM.
          </p>
        </div>
      </section>

      {/* SCHOLARSHIP */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="panel p-6">
          <h2 className="text-2xl font-bold mb-3 text-[var(--stef-ink)]">
            $20K Scholarship and What it Means
          </h2>
          <p>
            I received a $20,000 scholarship recognizing applied analytics and
            potential for impact. My project combined basketball strategy with
            computer vision and data storytelling, showing how real-time info
            can drive smarter decisions. The award helps fund my education and
            gives me room to keep building projects that blend sport, science,
            and community.
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

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="panel p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="text-2xl font-bold text-[var(--stef-ink)]">Projects</h2>
            <div className="grow" />
            <input
              placeholder="Search projects..."
              className="polaroid p-2 w-full sm:w-80"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <hr className="my-4" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.title} className="panel overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--stef-ink)]">
                      {p.title}
                    </h3>
                    <span className="text-xs text-gray-500">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.links && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          className="underline text-[var(--stef-ink)]"
                        >
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

      {/* GALLERY (uses your repo's exact filenames) */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold mb-4 text-[var(--stef-ink)]">Gallery of me</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="panel overflow-hidden">
            <Image
              src="/5Y2A6586_Original.JPG"
              alt="gallery image"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="panel overflow-hidden">
            <Image
              src="/4B59FFD2-E6BF-4F06-BDE6-2772AF5ADCF9.jpg"
              alt="gallery image"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="panel overflow-hidden">
            <Image
              src="/IMG_5782.JPG"
              alt="gallery image"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="panel overflow-hidden">
            <Image
              src="/b2d57fba-3143-420a-82bd-79fc4a804852.jpg"
              alt="gallery image"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm">
        <div className="panel p-4 text-center">
          © {new Date().getFullYear()} {PROFILE.name} ·{" "}
          <a className="underline" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </div>
      </footer>
    </main>
  );
}
