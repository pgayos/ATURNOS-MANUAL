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

// Primera letra de un texto, en may\u00fascula y sin tildes (p. ej. para agrupar
// t\u00e9rminos de glosario por inicial: "\u00c1rea" -> "A"). Se calcula siempre desde
// el texto real, nunca depende de un campo que alguien tenga que mantener a mano.
export function firstLetter(value: string): string {
  return value.trim().charAt(0).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
