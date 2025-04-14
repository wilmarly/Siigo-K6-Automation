import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * Configuración del escenario de carga:
 * - vus: número de usuarios virtuales simultáneos (10).
 * - duration: duración total del test (5 minutos).
 */
export const options = {
    vus: 10,               // Ejecutar con 10 usuarios virtuales simultáneamente
    duration: '5m',        // Durante 5 minutos
};

/**
 * Función principal ejecutada por cada VU (Virtual User).
 * Simula una solicitud GET a un endpoint y valida la respuesta.
 */
export default function () {
    // Realiza una solicitud GET al endpoint del usuario con ID 2
    let res = http.get('https://reqres.in/api/users/2');

    // Verifica que el código de estado sea 200 (OK)
    check(res, {
        'status was 200': (r) => r.status === 200
    });

    // Pausa de 1 segundo entre solicitudes para simular el tiempo de pensamiento del usuario
    sleep(1);
}
