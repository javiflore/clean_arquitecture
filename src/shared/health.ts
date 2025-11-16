/**
 * Función trivial para verificar el correcto funcionamiento del tooling y arranque
 * @returns {object} Objeto con estado de salud
 */
export function checkHealth(): { status: string; timestamp: Date } {
  return {
    status: 'ok',
    timestamp: new Date(),
  };
};
