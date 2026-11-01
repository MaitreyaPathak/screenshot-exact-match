import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site, projects, experience, principles, isPlaceholder, type Project } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maitreya Pathak — Product, Growth & Business Strategy" },
      { name: "description", content: "Portfolio of Maitreya Pathak, IIT Indore graduate. Product teardowns, CRO, process design and builds for Founder's Office and product roles." },
      { property: "og:title", content: "Maitreya Pathak — I find problems worth solving." },
      { property: "og:description", content: "Product strategy, growth and business case studies by Maitreya Pathak, IIT Indore." },
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
        <a href="#top" className="text-sm font-extrabold tracking-[0.2em]">MAITREYA PATHAK</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => <a key={n.href} href={n.href} className={link}>{n.label}</a>)}
          <ExtLink href={site.resumeUrl} className={link}>Resume{isPlaceholder(site.resumeUrl) && " (soon)"}</ExtLink>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" /> Open to opportunities
          </span>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-5 md:hidden" aria-label="Mobile">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={link}>{n.label}</a>)}
          <ExtLink href={site.resumeUrl} className={link}>Resume{isPlaceholder(site.resumeUrl) && " (soon)"}</ExtLink>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to opportunities
          </span>
        </nav>
      )}
    </header>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const soon = isPlaceholder(p.url);
  const inner = (
    <>
      <div className="relative overflow-hidden border transition-colors duration-300 group-hover:border-primary">
        <img src={p.cover} alt={`${p.title} cover`} width={1600} height={912} loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="label">{p.category}</p>
        <span className="label shrink-0">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-3xl">{p.title}</h3>
      <p className="mt-1 text-sm text-foreground/80">{p.subtitle}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => <span key={t} className="border px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground">{t}</span>)}
      </div>
      <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {soon ? "Deck coming soon" : <>{p.linkLabel} <ArrowUpRight size={14} /></>}
      </p>
    </>
  );
  return soon ? (
    <article className="group reveal block">{inner}</article>
  ) : (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="group reveal block" aria-label={`${p.title} — ${p.linkLabel} (opens in new tab)`}>{inner}</a>
  );
}

function Index() {
  useReveal();
  const mail = `mailto:${site.email}`;
  return (
    <div id="top">
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-36 md:pt-36">
          <p className="label reveal">Maitreya Pathak — IIT Indore '25</p>
          <h1 className="reveal mt-8 max-w-6xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[7.5rem]">
            I find problems worth solving.{" "}
            <span className="text-primary">Then figure out what to do about them.</span>
          </h1>
          <p className="reveal mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm an IIT Indore graduate interested in the intersection of product, growth, and business strategy. I enjoy breaking down complex problems, identifying opportunities, and turning ideas into actionable solutions.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
              Explore my work <ArrowUpRight size={16} className="rotate-90" />
            </a>
            <a href={mail} className="inline-flex items-center gap-2 border px-6 py-3.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary">
              Get in touch
            </a>
          </div>
          <p className="label reveal mt-16">Product Thinking / Growth / Business Strategy</p>
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
              {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-t">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <p className="label">(02) — About</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">A little about me.</h2>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                <p>I'm a 2025 B.Tech graduate from IIT Indore in Metallurgical Engineering and Materials Science.</p>
                <p>My experience spans product growth, business strategy, and analytical problem-solving. I've worked with teams across early-stage environments and enjoy figuring out how businesses can build better products, improve processes, and grow.</p>
                <p className="text-foreground">I'm particularly interested in working closely with founders and small teams where I can take ownership, move across different problem areas, and turn ambiguous challenges into tangible outcomes.</p>
              </div>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {experience.map((e) => (
                <li key={e.org} className="reveal grid gap-2 border-t py-7 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="text-lg font-bold">{e.org} <span className="font-normal text-muted-foreground">— {e.role}</span></h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  </div>
                  {e.period && <p className="label sm:text-right">{e.period}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="label reveal">(03) — Approach</p>
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
            <p className="label reveal">(04) — Contact</p>
            <h2 className="reveal mt-6 max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Have an interesting problem to <span className="text-primary">solve?</span>
            </h2>
            <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground">
              I'm always interested in connecting with founders and teams building ambitious products and businesses.
            </p>
            <a href={mail} className="reveal mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90">
              Let's talk <ArrowUpRight size={18} />
            </a>
            <div className="reveal mt-16 grid gap-px border sm:grid-cols-3">
              {[
                { k: "Email", v: site.email, href: mail, ext: false },
                { k: "LinkedIn", v: isPlaceholder(site.linkedin) ? "Coming soon" : "linkedin.com", href: site.linkedin, ext: true },
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
            <p className="text-sm font-extrabold tracking-[0.2em]">MAITREYA PATHAK</p>
            <p className="label mt-1">Product / Growth / Business Strategy</p>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Maitreya Pathak</p>
        </div>
      </footer>
    </div>
  );
}
