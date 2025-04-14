import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * Configuración del escenario de carga con etapas (stages):
 * - Permite simular aumentos y reducciones progresivas del tráfico.
 */
export const options = {
    stages: [
        { duration: '5s', target: 10 },   // Fase de rampa: sube a 10 usuarios virtuales en 5 segundos
        { duration: '5s', target: 100 },  // Carga máxima: mantiene 100 usuarios por 5 segundos
        { duration: '5s', target: 10 },   // Descenso: reduce a 10 usuarios en los últimos 5 segundos
    ],
};

/**
 * Función principal ejecutada por cada VU (usuario virtual) en cada iteración.
 * Simula una solicitud HTTP GET y realiza una validación del estado de la respuesta.
 */
export default function () {
    // Realiza una solicitud GET al endpoint de usuario
    let res = http.get('https://reqres.in/api/users/2');

    // Verifica que la respuesta tenga un estado 200 (OK)
    check(res, {
        'status was 200': (r) => r.status === 200
    });

    // Pausa de 1 segundo entre solicitudes para simular comportamiento humano
    sleep(1);
}
