// Convierte "Vacaciones y ausencias" -> "vacaciones-y-ausencias", igual que los
// nombres de carpeta de módulo (minúsculas, sin tildes, espacios -> guiones).
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
