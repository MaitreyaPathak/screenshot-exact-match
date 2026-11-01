import { ArrowUpRight, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { isPlaceholder, type Project } from "@/config/site";

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => { if (!open) onClose(); }}>
      {project && <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto p-0">
        <div className="px-6 pb-7 pt-12 sm:px-9">
          <p className="label">{project.category}</p>
          <DialogTitle className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">{project.title}</DialogTitle>
          <DialogDescription className="mt-3 leading-relaxed">{project.subtitle}</DialogDescription>
        </div>
        <img src={project.cover} alt={project.url.includes("github.com") ? "ATLAS conceptual cover: scattered documents organised into a shortlist; not a dashboard screenshot" : `${project.title} — illustrated project cover`} width={1600} height={912} loading="lazy" className="aspect-video w-full object-cover" />
        {project.url.includes("github.com") && <p className="px-6 text-xs text-muted-foreground sm:px-9">Concept illustration · not a screenshot of the tool</p>}
        <div className="space-y-7 px-6 pb-9 pt-3 sm:px-9">
          {[
            ["01", "Context", project.context],
            ["02", "Problem", project.problem],
            ["03", "Analysis & approach", project.approach],
          ].map(([n, title, body]) => <section key={n} className="grid gap-3 border-t pt-5 sm:grid-cols-[150px_1fr]"><h3 className="text-sm font-bold"><span className="mr-3 font-mono text-primary">{n}</span>{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{body}</p></section>)}
          {!isPlaceholder(project.url) ? <Button asChild className="h-11"><a href={project.url} target="_blank" rel="noopener noreferrer">{project.url.includes("github.com") ? <><Github /> View on GitHub</> : <>Open presentation <ArrowUpRight /></>}</a></Button> : <div className="border-t pt-5"><h3 className="text-sm font-bold">Deliverable</h3><p className="mt-2 text-sm text-muted-foreground">Presentation not yet linked. Detailed findings and recommendations will accompany the original deck.</p></div>}
        </div>
      </DialogContent>}
    </Dialog>
  );
}