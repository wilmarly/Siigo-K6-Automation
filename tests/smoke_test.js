import http from 'k6/http';
import { check } from 'k6';

/**
 * Configuración del escenario de prueba:
 * - vus: número de usuarios virtuales simultáneos (1 en este caso).
 * - duration: duración total de la prueba (10 segundos).
 */
export const options = {
    vus: 1,                // Ejecutar con 1 usuario virtual
    duration: '10s',       // Durante 10 segundos
};

/**
 * Función principal que ejecuta el usuario virtual.
 * Realiza una solicitud GET a un endpoint y valida el código de estado.
 */
export default function () {
    // Solicitud HTTP GET al endpoint de usuario específico
    let res = http.get('https://reqres.in/api/users/2');

    // Validación de que el código de estado de la respuesta sea 200 (OK)
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
