// Barrel export principal del proyecto
// Este archivo puede ser útil para exportar elementos comunes

// Re-exportar las principales categorías
export * from './pages';
export * from './components';


// Configuraciones comunes que podrían necesitarse
export const appConfig = {
  name: 'Phoenix ULS',
  version: '1.0.0',
  routes: {
    home: '/',
    alumnos: '/alumnos',
    notas: '/alumnos/notas',
    inicio: '/alumnos/inicio',
    prueba: '/alumnos/prueba',
  }
} as const;
