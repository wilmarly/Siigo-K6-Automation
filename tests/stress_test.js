import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * Configuración del test de carga por etapas (stages):
 * - Simula un aumento progresivo de usuarios virtuales y luego una caída a cero.
 * - Este patrón se usa comúnmente en pruebas de estrés o pruebas de rampa.
 */
export const options = {
    stages: [
        { duration: '10s', target: 20 },   // Fase de calentamiento: sube a 20 usuarios virtuales
        { duration: '10s', target: 50 },   // Fase media: incrementa a 50 usuarios
        { duration: '10s', target: 100 },  // Pico de carga: prueba con 100 usuarios simultáneos
        { duration: '10s', target: 0 },    // Enfriamiento: reduce gradualmente a 0 usuarios
    ],
};

/**
 * Función ejecutada por cada usuario virtual durante el test.
 * Simula una solicitud HTTP GET y valida el estado de la respuesta.
 */
export default function () {
    // Solicitud GET al endpoint de un usuario específico
    let res = http.get('https://reqres.in/api/users/2');

    // Validación: se espera un código de estado 200 (OK)
    check(res, {
        'status was 200': (r) => r.status === 200
    });

    // Pausa entre solicitudes para simular tiempo de espera del usuario
    sleep(1);
}
