const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  return BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

export function stripBase(pathname: string): string {
  const trimmed = BASE.replace(/\/$/, '');
  if (!trimmed) return pathname;
  return pathname.startsWith(trimmed) ? pathname.slice(trimmed.length) || '/' : pathname;
}
