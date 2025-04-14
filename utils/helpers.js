/**
 * Genera un ID de usuario aleatorio dentro de un rango específico.
 *
 * @param {number} min - Valor mínimo del rango (incluido). Por defecto es 1.
 * @param {number} max - Valor máximo del rango (incluido). Por defecto es 12.
 * @returns {number} Un número entero aleatorio entre min y max, ambos inclusive.
 *
 * @example
 * const userId = getRandomUserId(); // Devuelve un número entre 1 y 12
 * const customUserId = getRandomUserId(5, 10); // Devuelve un número entre 5 y 10
 */
export function getRandomUserId(min = 1, max = 12) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
