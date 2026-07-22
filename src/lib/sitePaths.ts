export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${base}${cleanPath}`;
}

export function rewriteRootLinks(html: string) {
  return html
    .replaceAll('href="/exercises/', `href="${withBase("/exercises/")}`)
    .replaceAll('href="/routines/', `href="${withBase("/routines/")}`)
    .replaceAll('href="/"', `href="${withBase("/")}"`);
}

export function markExercisesWithAlternates(html: string, slugsWithAlternates: Set<string>) {
  return html.replace(
    /<a href="\/exercises\/([a-z0-9-]+)\/">([^<]*)<\/a>/g,
    (match, slug: string) =>
      slugsWithAlternates.has(slug)
        ? `${match}<sup class="alt-marker" title="Alternate/modification version available">⇄</sup>`
        : match,
  );
}
