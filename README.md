# Proyecto de Pruebas de Carga - Siigo-K6-Automation

Este proyecto está diseñado para realizar pruebas de rendimiento y carga utilizando la herramienta **K6**, enfocadas en los servicios del entorno Siigo. Incluye distintos tipos de pruebas como *Smoke*, *Load*, *Stress*, *Spike* y *Soak* para evaluar la estabilidad, rendimiento y tolerancia del sistema ante diferentes condiciones de uso.

## Tecnologías Utilizadas

- **K6**: Herramienta de pruebas de carga de código abierto.
- **JavaScript**: Lenguaje de scripting utilizado para escribir los scripts de prueba.
- **Node.js**: Gestión de scripts y dependencias.
- **PowerShell / VSCode**: Herramientas recomendadas para ejecución y desarrollo.


## Estructura del Proyecto

```
Siigo-K6-Automation/

├── tests/                      # Scripts de prueba
│   ├── smoke_test.js           # Prueba rápida (Smoke)
│   ├── load_test.js            # Prueba de carga (Load)
│   ├── stress_test.js          # Prueba de estrés (Stress)
│   ├── spike_test.js           # Prueba de picos (Spike)
│   └── soak_test.js            # Prueba de resistencia (Soak)

├── reports/                    # Resultados exportados en formato JSON
│   ├── load_test_results.json
│   ├── stress_test_results.json
│   └── ...

├── config/                     # Configuraciones y variables de entorno
│   └── env.json

├── utils/                      # Funciones auxiliares y helpers
│   └── helpers.js

├── dashboards/                 # Dashboards personalizados para Grafana
│   └── grafana_dashboard.json

├── .gitignore                  # Archivos ignorados por Git
├── package.json                # Scripts npm y dependencias
└── README.md                   # Documentación principal
```

## Configuración y Dependencias

Asegúrate de tener instalado en tu equipo:

- [K6](https://k6.io/docs/getting-started/installation/)
- [Node.js](https://nodejs.org)

Opcional:

- [Grafana](https://grafana.com/)

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/wilmarly/Siigo-K6-Automation.git
cd Siigo-K6-Automation

# Instala las dependencias necesarias (si aplica)
npm install
```

## Ejecución de Pruebas

Desde la raíz del proyecto, puedes ejecutar cada tipo de prueba con los siguientes comandos:

```bash
npm run smoke      # Prueba Smoke
npm run load       # Prueba de Carga
npm run stress     # Prueba de Estrés
npm run spike      # Prueba de Picos
npm run soak       # Prueba de Resistencia
```

## Reportes

Los resultados se guardan en la carpeta `/reports` en formato `.json`.  
Puedes visualizarlos utilizando:

- [`xk6-dashboard`](https://grafana.com/blog/2021/07/21/how-to-visualize-your-k6-test-results/)
- Grafana con el archivo de dashboard exportado en `/dashboards/grafana_dashboard.json`
