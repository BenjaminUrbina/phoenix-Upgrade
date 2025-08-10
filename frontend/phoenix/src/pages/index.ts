// Barrel export for Pages
// Este archivo centraliza todas las exportaciones de páginas

// Página principal
export { default as Home } from './Home';

// Páginas de Alumnos (desde subcarpeta)
export { 
  // Alias cortos para compatibilidad
  Alumnos,
  Inicio,
  Notas
} from './alumnos';