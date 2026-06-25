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
