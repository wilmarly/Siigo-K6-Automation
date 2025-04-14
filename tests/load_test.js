import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * Configuración del escenario de carga:
 * - vus: número de usuarios virtuales simultáneos.
 * - duration: duración total de la prueba.
 */
export const options = {
    vus: 50,                // Ejecutar con 50 usuarios virtuales simultáneamente
    duration: '30s',        // Durante 30 segundos
};

/**
 * Función principal que ejecuta cada usuario virtual.
 * En este caso, cada VU realiza una solicitud GET a un endpoint y valida la respuesta.
 */
export default function () {
    // Realiza una solicitud HTTP GET al endpoint de usuarios de la API ReqRes
    let res = http.get('https://reqres.in/api/users/2');

    // Verifica que el código de estado de la respuesta sea 200 (OK)
    check(res, {
        'status was 200': (r) => r.status === 200
    });

    // Espera 1 segundo antes de la siguiente iteración (simula tiempo de pensamiento del usuario)
    sleep(1);
}
