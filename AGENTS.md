<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep portfolio content, capabilities, experience highlights and project summaries in the central site configuration so missing deliverables can be connected without changing presentation.
- Use accessible project dialogs on the single-page portfolio rather than empty detail routes; only display supplied project evidence and conditionally render real external deliverables.
- Use design-system Button and Dialog components for portfolio actions and overlays, with semantic color tokens in the global stylesheet to preserve the existing theme.
