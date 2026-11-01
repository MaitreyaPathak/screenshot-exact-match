import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { site, projects, experience, principles, capabilities, problemInterests, isPlaceholder, type Project } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ProjectDialog } from "@/components/project-dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maitreya Pathak | Product, Growth & Business Strategy" },
      { name: "description", content: "IIT Indore graduate exploring product strategy, growth, business analysis, and execution. View selected case studies, projects, and experience." },
      { property: "og:title", content: "Maitreya Pathak | Product, Growth & Business Strategy" },
      { property: "og:description", content: "IIT Indore graduate exploring product strategy, growth, business analysis, and execution. View selected case studies, projects, and experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ExtLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  if (isPlaceholder(href)) return <span className={className} title="Link coming soon">{children}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const link = "text-sm text-muted-foreground transition-colors hover:text-foreground";
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-extrabold">MAITREYA PATHAK</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => <a key={n.href} href={n.href} className={link}>{n.label}</a>)}
          {!isPlaceholder(site.resumeUrl) && <ExtLink href={site.resumeUrl} className={link}>Resume</ExtLink>}
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" /> Open to opportunities
          </span>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-5 md:hidden" aria-label="Mobile">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={link}>{n.label}</a>)}
          {!isPlaceholder(site.resumeUrl) && <ExtLink href={site.resumeUrl} className={link}>Resume</ExtLink>}
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to opportunities
          </span>
        </nav>
      )}
    </header>
  );
}

function ProjectCard({ p, i, onSelect }: { p: Project; i: number; onSelect: () => void }) {
  return (
    <article className="group reveal relative flex flex-col">
      <div className="relative overflow-hidden border transition-colors duration-300 group-hover:border-primary">
        <img src={p.cover} alt={i === 3 ? "ATLAS concept illustration: documents organised into a shortlist" : `${p.title} — illustrated project cover`} width={1600} height={912} loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="label">{p.category}</p>
        <span className="label shrink-0">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-3 font-bold"><Button variant="link" onClick={onSelect} className="h-auto whitespace-normal p-0 text-left text-2xl font-bold leading-tight text-foreground hover:text-primary hover:no-underline after:absolute after:inset-0 focus-visible:after:ring-2 focus-visible:after:ring-ring md:text-3xl">{p.title}</Button></h3>
      <p className="mt-1 text-sm text-foreground/80">{p.subtitle}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => <span key={t} className="border px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground">{t}</span>)}
      </div>
      <div className="mt-auto pt-6">
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-primary">{p.linkLabel} <ArrowUpRight size={14} /></p>
        {i === 3 && <p className="mt-2 text-xs text-muted-foreground">Self-initiated build · Concept cover</p>}
      </div>
    </article>
  );
}

function Index() {
  useReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mail = `mailto:${site.email}`;
  return (
    <div id="top">
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-10 md:pb-20 md:pt-20">
          <p className="label reveal">Maitreya Pathak — IIT Indore '25</p>
          <h1 className="reveal mt-6 max-w-6xl text-4xl font-extrabold leading-[1.05] sm:text-6xl md:mt-8 lg:text-7xl xl:text-8xl">
            I find problems worth solving.{" "}
            <span className="text-primary">Then figure out what to do about them.</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
            I'm an IIT Indore graduate with experience across product growth, business strategy, and analytical problem-solving. I've worked on growth experiments, business processes, and product strategy, and enjoy taking ambiguous problems from analysis to execution.
          </p>
          <div className="reveal mt-6 flex flex-wrap gap-3 md:mt-10">
            <Button asChild className="h-12 px-4 font-bold md:px-6"><a href="#work">Explore My Work <ArrowUpRight className="rotate-90" /></a></Button>
            {!isPlaceholder(site.resumeUrl) && <Button asChild variant="outline" className="h-12 px-6 font-bold"><a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" download><Download /> Download Resume</a></Button>}
            <Button asChild variant="outline" className="h-12 px-4 font-bold md:px-6"><a href={mail}>Get in Touch <ArrowUpRight /></a></Button>
          </div>
          <p className="reveal mt-6 text-sm leading-relaxed text-foreground md:mt-10">Product Strategy · Growth · Business Analysis · Founder's Office</p>
          <p className="reveal mt-3 text-sm text-muted-foreground">Based in India · Open to remote opportunities</p>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 border-t">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="reveal grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="label">(01) — Work</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">Selected Work</h2>
              </div>
              <p className="max-w-md text-muted-foreground md:justify-self-end">
                A collection of problems I've explored, systems I've examined, and ideas I've developed.
              </p>
            </div>
            <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2">
              {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} onSelect={() => setSelectedProject(p)} />)}
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="label reveal">(02) — Capabilities</p>
            <h2 className="reveal mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">What I Can Bring to a Team</h2>
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c, i) => <div key={c.title} className="reveal border-t pt-6"><p className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-4 text-lg font-bold uppercase">{c.title}</h3><ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">{c.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-16 border-t">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12">
            <div className="reveal lg:col-span-4"><p className="label">(03) — Experience</p><h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Thinking.<br />Doing.<br /><span className="text-primary">Learning.</span></h2><p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">Product growth, business strategy and analytical problem-solving across teams.</p></div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {experience.map((e, i) => <li key={e.org} className="reveal relative grid grid-cols-[2rem_1fr] gap-4 pb-12 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-6"><div className="relative"><span className="relative z-10 block bg-background pb-3 font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>{i < experience.length - 1 && <span className="absolute bottom-0 left-2 top-8 w-px bg-border" />}</div><div className="border-t pt-5"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold">{e.org}</h3>{e.period && <p className="text-xs text-muted-foreground">{e.period}</p>}</div><p className="mt-2 text-sm text-muted-foreground">{e.role}</p><p className="mt-5 text-lg font-bold text-primary">{e.highlight}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p><p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.detail}</p></div></li>)}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-t">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <p className="label">(04) — About</p>
              <div className="mt-8 flex items-start gap-6">
                <figure className="shrink-0">
                  {isPlaceholder(site.portraitUrl) ? (
                    <div aria-label="Photograph placeholder" className="flex h-28 w-24 items-center justify-center border bg-card md:h-32 md:w-28">
                      <span className="font-mono text-lg text-muted-foreground">MP</span>
                    </div>
                  ) : (
                    <img src={site.portraitUrl} alt="Portrait of Maitreya Pathak" width={224} height={256} className="h-28 w-24 border object-cover md:h-32 md:w-28" />
                  )}
                  <figcaption className="label mt-2">Maitreya Pathak</figcaption>
                </figure>
                <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">A little about me.</h2>
              </div>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                <p>I'm a 2025 B.Tech graduate from IIT Indore in Metallurgical Engineering and Materials Science.</p>
                <p>My experience spans product growth, business strategy, and analytical problem-solving. I'm interested in early-stage and growth-stage companies building better products and processes.</p>
                <p className="text-foreground">I enjoy working closely with founders and small teams, taking ownership across different problem areas, and turning ambiguous challenges into tangible outcomes.</p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7"><h3 className="reveal text-2xl font-bold">Problems I Enjoy Working On</h3><ul className="mt-7">{problemInterests.map((problem, i) => <li key={problem} className="reveal flex gap-5 border-t py-6"><span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span><p className="text-base leading-relaxed">{problem}</p></li>)}</ul></div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="label reveal">(05) — Approach</p>
            <h2 className="reveal mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">How I approach problems.</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {principles.map((p) => (
                <div key={p.n} className="reveal border-t pt-6">
                  <p className="font-mono text-sm text-primary">{p.n}</p>
                  <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 border-t">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <p className="label reveal">(06) — Contact</p>
            <h2 className="reveal mt-6 max-w-5xl text-4xl font-extrabold leading-[1.05] md:text-7xl">
              Have an interesting problem to <span className="text-primary">solve?</span>
            </h2>
            <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground">
              I'm always interested in connecting with founders and teams building ambitious products and businesses. If you're hiring for a role across product, growth, strategy, or the Founder's Office, I'd love to connect.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3"><Button asChild className="h-12 px-8 font-bold"><a href={mail}>Let's talk <ArrowUpRight /></a></Button><Button asChild variant="outline" className="h-12 px-6"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight /></a></Button></div>
            <div className="reveal mt-16 grid gap-px border sm:grid-cols-3">
              {[
                { k: "Email", v: site.email, href: mail, ext: false },
                { k: "LinkedIn", v: isPlaceholder(site.linkedin) ? "Coming soon" : "https://www.linkedin.com/in/maitreyapathak", href: site.linkedin, ext: true },
                { k: "GitHub", v: "github.com/MaitreyaPathak", href: site.github, ext: true },
              ].map((c) => {
                const cls = "group flex items-center justify-between p-6 transition-colors hover:bg-card";
                const body = (<><span><span className="label block">{c.k}</span><span className="mt-2 block break-all text-sm">{c.v}</span></span><ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary" /></>);
                return c.ext ? <ExtLink key={c.k} href={c.href} className={cls}>{body}</ExtLink> : <a key={c.k} href={c.href} className={cls}>{body}</a>;
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold">MAITREYA PATHAK</p>
            <p className="label mt-1">Product / Growth / Business Strategy</p>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Maitreya Pathak</p>
        </div>
      </footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
