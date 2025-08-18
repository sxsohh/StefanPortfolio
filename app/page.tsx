"use client";

import Image from "next/image";

const PROFILE = {
  name: "Stefan Soh",
  title: "Student-Athlete • Computer Science & Physics",
  email: "stefanxsoh@gmail.com",
  linkedin: "https://www.linkedin.com/in/stefanxsoh/",
  github: "https://github.com/sxsohh",
  resume: "/StefanSohResume.pdf",
  video: "https://www.youtube.com/embed/lsdA_NqvzGw",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO — big color + CTA */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Retro • Modern • You</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-[1.05]">
              Data, Hoops, <span className="opacity-90">and Drive.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-95">
              I build data stories and tools that make decisions faster—on the court and in code.
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

          {/* Hero photo with “polaroid” frame */}
          <div className="justify-self-center">
            <div className="polaroid rotate-2">
              <Image
                src="/b2d57fba-3143-420a-82bd-79fc4a804852.jpg" /* your vertical hoops shot */
                alt="Stef—court work"
                width={420}
                height={520}
                className="rounded-md object-cover"
                priority
              />
              <p className="text-center mt-2 text-sm text-[var(--stef-ink)]">
                Late-night reps • keep the rhythm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE PANEL — quick stats/links */}
      <section className="mx-auto max-w-6xl px-6 -mt-8">
        <div className="panel p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="badge">CS & Physics @ Elmhurst</span>
            <span className="badge">$20K Scholarship Winner</span>
            <a className="badge hover:brightness-110" href={PROFILE.github} target="_blank">GitHub</a>
            <a className="badge hover:brightness-110" href={PROFILE.linkedin} target="_blank">LinkedIn</a>
            <a className="badge hover:brightness-110" href="/projects.json" target="_blank">projects.json</a>
          </div>
        </div>
      </section>

      {/* MEDIA — scholarship video */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="panel p-5 sm:p-6">
          <h2 className="text-2xl font-bold mb-3 text-[var(--stef-ink)]">Scholarship Video</h2>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
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

      {/* GALLERY — make it POP with color cards */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold mb-4 text-[var(--stef-ink)]">Throwback Gallery</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="panel overflow-hidden">
            <Image
              src="/5Y2A6586_Original.JPG"
              alt="Gym jumper"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[var(--stef-ink)]">Gym Nights</h3>
              <p className="text-sm mt-1">Reps, rhythm, repeat.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="panel overflow-hidden">
            <Image
              src="/20230515181649_IMG_0429 (2).jpeg"
              alt="On the move"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[var(--stef-ink)]">Road Work</h3>
              <p className="text-sm mt-1">Travel. Train. Tinker.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="panel overflow-hidden">
            <Image
              src="/4B59FFD2-E6BF-4F06-BDE6-2772AF5ADCF9.jpg"
              alt="Early days"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[var(--stef-ink)]">Throwback</h3>
              <p className="text-sm mt-1">Patience. Pace. Perspective.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="panel overflow-hidden">
            <Image
              src="/IMG_5782.JPG"
              alt="Sunrise / clouds"
              width={900}
              height={700}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[var(--stef-ink)]">Above the Clouds</h3>
              <p className="text-sm mt-1">Breathe. Climb. Repeat.</p>
            </div>
          </div>

          {/* Card 5 (your vertical shot again with polaroid treatment) */}
          <div className="panel p-4 sm:p-6 flex items-center justify-center">
            <div className="polaroid -rotate-1">
              <Image
                src="/b2d57fba-3143-420a-82bd-79fc4a804852.jpg"
                alt="Court work"
                width={320}
                height={420}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm">
        <div className="panel p-4 text-center">
          © {new Date().getFullYear()} {PROFILE.name} ·{" "}
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
      </footer>
    </main>
  );
}
