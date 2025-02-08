import { QuizCategory } from '../types/quiz';

export const FinalOptimizacion03: QuizCategory = {
    id: 'Final-IA-Simulacion',
    title: 'Simulacion',
    description: 'Prueba final de Optimizacion',
    icon: 'Graph',
    color: 'indigo',
    questions: [
        {
            id: 'q1',
            question: 'Un modelo de simulación solo puede representar sistemas físicos reales.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 1,
            explanation: 'Un modelo de simulación también puede representar sistemas abstractos, no solo físicos.',
            type: 'single'
        },
        {
            id: 'q2',
            question: 'La simulación permite realizar experimentos sin afectar el sistema real.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 0,
            explanation: 'La simulación ofrece una manera de analizar distintos escenarios sin riesgo para el sistema original.',
            type: 'single'
        },
        {
            id: 'q3',
            question: 'Los modelos de simulación siempre ofrecen soluciones óptimas a los problemas analizados.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 1,
            explanation: 'Los modelos de simulación pueden proporcionar información útil, pero no necesariamente garantizan una solución óptima.',
            type: 'single'
        },
        {
            id: 'q4',
            question: '¿Cuál de los siguientes elementos forma parte del proceso de validación de un modelo de simulación?',
            options: [
                'a) Pruebas estadísticas de medias y varianzas.',
                'b) Cambio aleatorio de los datos de entrada.',
                'c) Omitir la fase de experimentación.',
                'd) Utilizar solo un único conjunto de datos de prueba.'
            ],
            correctAnswer: 0,
            explanation: 'Las pruebas estadísticas de medias y varianzas ayudan a evaluar la precisión del modelo y su validez en diferentes escenarios.',
            type: 'single'
        },
        {
            id: 'q5',
            question: '¿Cuál de las siguientes afirmaciones describe mejor la experimentación en simulación?',
            options: [
                'a) Permite analizar el comportamiento del sistema en distintos escenarios y condiciones.',
                'b) Es innecesaria si el modelo ya ha sido desarrollado.',
                'c) No permite evaluar diferentes estrategias operativas.',
                'd) Solo se usa cuando no hay datos históricos disponibles.'
            ],
            correctAnswer: 0,
            explanation: 'La experimentación permite analizar el comportamiento del sistema en distintos escenarios y condiciones.',
            type: 'single'
        },
        {
            id: 'q6',
            question: 'La validación del modelo tiene una única prueba estándar para garantizar su precisión.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 1,
            explanation: 'No existe una única prueba de validación; se realizan múltiples pruebas a lo largo del proceso de desarrollo del modelo.',
            type: 'single'
        },
        {
            id: 'q7',
            question: 'El análisis de sensibilidad implica variar sistemáticamente los valores de los parámetros del modelo y observar los efectos en su respuesta.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 0,
            explanation: 'El análisis de sensibilidad estudia cómo los cambios en los parámetros afectan los resultados del modelo.',
            type: 'single'
        },
        {
            id: 'q8',
            question: 'Uno de los métodos de validación es verificar si el modelo produce respuestas absurdas cuando se usan valores extremos en los parámetros.',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 0,
            explanation: 'Un modelo debe ser capaz de manejar valores extremos sin generar resultados ilógicos.',
            type: 'single'
        },
        {
            id: 'q9',
            question: '¿Cuál de los siguientes NO es un método para validar un modelo de simulación?',
            options: [
                'a) Pruebas estadísticas de medias y varianzas.',
                'b) Análisis de sensibilidad.',
                'c) Ejecutar el modelo sin verificar sus parámetros.',
                'd) Prueba de transformaciones de entrada-salida.'
            ],
            correctAnswer: 2,
            explanation: 'Ejecutar el modelo sin verificar sus parámetros puede llevar a errores y resultados no confiables.',
            type: 'single'
        },
        {
            id: 'q10',
            question: '¿Cuál es el propósito de la validación del modelo en la simulación?',
            options: [
                'a) Asegurar que el modelo sea visualmente atractivo.',
                'b) Generar confianza en los resultados y permitir inferencias correctas sobre el sistema.',
                'c) Garantizar que el modelo genere siempre soluciones óptimas.',
                'd) Evitar cualquier tipo de experimentación adicional.'
            ],
            correctAnswer: 1,
            explanation: 'La validación busca generar confianza en los resultados y asegurar que el modelo represente la realidad de manera precisa.',
            type: 'single'
        },
        {
            id: 'q11',
            question: '¿Cuál de las siguientes afirmaciones sobre la validación de modelos de simulación es correcta?',
            options: [
                'a) Si el modelo se ejecuta sin errores, se considera automáticamente válido.',
                'b) Un modelo válido debe generar exactamente el mismo resultado en todas las ejecuciones.',
                'c) Un modelo de simulación debe ser probado con diferentes técnicas antes de considerarse válido.',
                'd) La validación solo es necesaria si el modelo será utilizado en entornos críticos.'
            ],
            correctAnswer: 2,
            explanation: 'No basta con que el modelo funcione sin errores; requiere pruebas para comprobar su precisión y representatividad.',
            type: 'single'
        },
        {
            id: 'q12',
            question: '¿Cuál es el propósito del análisis de sensibilidad en un modelo de simulación?',
            options: [
                'a) Asegurar que el modelo siempre genere el mismo resultado.',
                'b) Evaluar el impacto de la variación de los parámetros en la salida del modelo.',
                'c) Evitar la experimentación en sistemas reales.',
                'd) Acelerar la ejecución del modelo.'
            ],
            correctAnswer: 1,
            explanation: 'El análisis de sensibilidad ayuda a comprender cómo los cambios en los parámetros afectan los resultados del modelo.',
            type: 'single'
        },
        {
            id: 'q13',
            question: 'Si el análisis de sensibilidad muestra que algunos parámetros tienen poco impacto en los resultados, ¿qué se debería hacer?',
            options: [
                'a) Eliminar esos parámetros del modelo sin más análisis.',
                'b) Considerar reducir su importancia, pero verificar si afectan en ciertos escenarios.',
                'c) Recalibrar el modelo para forzar su influencia.',
                'd) Ignorar el análisis y usar valores predeterminados.'
            ],
            correctAnswer: 1,
            explanation: 'No siempre es adecuado eliminarlos sin analizar su efecto en distintos casos.',
            type: 'single'
        },
        {
            id: 'q14',
            question: 'Un modelo de simulación es considerado estable si:',
            options: [
                'a) Siempre genera el mismo resultado, sin importar los parámetros.',
                'b) Sus resultados cambian drásticamente ante pequeñas modificaciones.',
                'c) Responde de manera predecible y coherente a cambios en los parámetros.',
                'd) No necesita análisis de sensibilidad.'
            ],
            correctAnswer: 2,
            explanation: 'Un modelo estable tiene respuestas lógicas y consistentes ante variaciones en los parámetros.',
            type: 'single'
        },
        {
            id: 'q15',
            question: 'Si el análisis de sensibilidad muestra que el modelo cambia poco ante grandes variaciones de los parámetros, esto indica que:',
            options: [
                'a) El modelo es inútil y debe ser descartado.',
                'b) Los parámetros elegidos no afectan significativamente los resultados.',
                'c) Es posible que el modelo no esté capturando correctamente la dinámica del sistema.',
                'd) No es necesario modificar el modelo.'
            ],
            correctAnswer: 2,
            explanation: 'Si el modelo no cambia ante variaciones importantes, podría no estar considerando correctamente los parámetros clave.',
            type: 'single'
        }
    ]
};