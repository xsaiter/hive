export function isNullOrEmpty(s: string | null | undefined): boolean {
  return s === null || s === undefined || s.trim().length === 0;
}
