import { QuizCategory } from '../types/quiz';

export const FinalOptimizacion02: QuizCategory = {
    id: 'Final-IA-Gomory',
    title: 'Gomory',
    description: 'Prueba final de Optimizacion',
    icon: 'Graph',
    color: 'indigo',
    questions: [
        {
            id: 'q1',
            question: '¿Cuál es el objetivo principal del método de Gomory?',
            options: [
                'Transformar restricciones lineales en cuadráticas',
                'Resolver problemas de optimización continua',
                'Encontrar soluciones enteras en problemas de programación lineal entera',
                'Eliminar variables de un problema de optimización'
            ],
            correctAnswer: 2,
            explanation: 'El método de Gomory se usa para encontrar soluciones enteras en problemas de programación lineal entera.',
            type: 'single'
        },
        {
            id: 'q2',
            question: '¿Qué tipo de problemas resuelve el método de Gomory?',
            options: [
                'Problemas exclusivamente de programación lineal',
                'Problemas de optimización en grafos',
                'Problemas de programación entera mixta',
                'Problemas de optimización sin restricciones'
            ],
            correctAnswer: 2,
            explanation: 'El método de Gomory se emplea para resolver problemas de programación entera mixta.',
            type: 'single'
        },
        {
            id: 'q3',
            question: '¿Qué técnica usa el método de Gomory para garantizar soluciones enteras?',
            options: [
                'Aplica un proceso de eliminación de restricciones',
                'Se basa en métodos heurísticos',
                'Redondea las soluciones de un modelo lineal',
                'Usa cortes de planos, llamados "cortes de Gomory"'
            ],
            correctAnswer: 3,
            explanation: 'El método de Gomory usa cortes de planos, también llamados "cortes de Gomory", para garantizar soluciones enteras.',
            type: 'single'
        },
        {
            id: 'q4',
            question: '¿Cómo afecta un corte de Gomory a un problema de programación lineal?',
            options: [
                'Agrega una restricción que elimina soluciones no enteras',
                'Convierte el problema en un modelo cuadrático',
                'Reduce el número de variables',
                'Hace que el problema sea más fácil de resolver siempre'
            ],
            correctAnswer: 0,
            explanation: 'Un corte de Gomory agrega una restricción adicional que elimina soluciones no enteras, acercando la solución a la entera óptima.',
            type: 'single'
        },
        {
            id: 'q5',
            question: '¿Cuál es una desventaja del método de Gomory?',
            options: [
                'No puede aplicarse a problemas de gran escala',
                'Puede requerir muchas iteraciones si hay muchas variables fraccionarias',
                'No garantiza soluciones enteras en todos los casos',
                'Solo funciona para problemas sin restricciones'
            ],
            correctAnswer: 1,
            explanation: 'El método de Gomory puede requerir muchas iteraciones si hay muchas variables fraccionarias, lo que puede hacerlo ineficiente en problemas grandes.',
            type: 'single'
        },
        {
            id: 'q6',
            question: '¿Cuál es la relación entre el método simplex y el método de Gomory?',
            options: [
                'Gomory se basa en simplex, para encontrar soluciones fraccionarias iniciales',
                'Simplex solo se usa para verificar la factibilidad en Gomory',
                'Son métodos completamente independientes',
                'Gomory es una variante del simplex dual'
            ],
            correctAnswer: 0,
            explanation: 'El método de Gomory utiliza simplex para encontrar una solución fraccionaria inicial antes de aplicar los cortes.',
            type: 'single'
        },
        {
            id: 'q7',
            question: '¿En qué momento se aplican los cortes de Gomory?',
            options: [
                'Cuando se obtiene una solución óptima, fraccionaria',
                'Antes de resolver el problema con el método simplex',
                'Después de eliminar variables redundantes',
                'Solo cuando no existe una solución factible'
            ],
            correctAnswer: 0,
            explanation: 'Los cortes de Gomory se aplican cuando la solución óptima encontrada por simplex aún contiene valores fraccionarios.',
            type: 'single'
        },
        {
            id: 'q8',
            question: '¿Qué sucede si, después de aplicar cortes de Gomory, la solución sigue siendo fraccionaria?',
            options: [
                'Se agregan más cortes, hasta obtener una solución entera',
                'Se usa el método de Monte Carlo',
                'Se descarta el problema porque no tiene solución',
                'Se redondean los valores a los enteros más cercanos'
            ],
            correctAnswer: 0,
            explanation: 'Se siguen agregando cortes hasta que todas las variables sean enteras.',
            type: 'single'
        },
        {
            id: 'q9',
            question: '¿Qué tipo de cortes genera el método de Gomory?',
            options: [
                'Cortes de partición',
                'Cortes de relajación lagrangiana',
                'Cortes fraccionarios, basados en la parte decimal de las soluciones',
                'Cortes de planos válidos'
            ],
            correctAnswer: 2,
            explanation: 'Los cortes de Gomory se generan a partir de la parte fraccionaria de las soluciones óptimas encontradas.',
            type: 'single'
        },
        {
            id: 'q10',
            question: '¿Cuál es una condición para aplicar un corte de Gomory?',
            options: [
                'Que todas las variables sean enteras desde el inicio',
                'Que el problema tenga más restricciones que variables',
                'Que se trate de un problema de programación cuadrática',
                'Que al menos una variable de la solución óptima sea fraccionaria'
            ],
            correctAnswer: 3,
            explanation: 'Los cortes de Gomory solo se aplican si alguna variable en la solución óptima es fraccionaria.',
            type: 'single'
        },
        {
            id: 'q11',
            question: '¿Cómo se comporta el método de Gomory en problemas de gran escala?',
            options: [
                'Puede ser ineficiente, porque requiere demasiados cortes',
                'No se puede aplicar a problemas grandes',
                'Se vuelve más rápido con más variables',
                'Se comporta de la misma manera sin importar el tamaño del problema'
            ],
            correctAnswer: 0,
            explanation: 'En problemas de gran escala, el método de Gomory puede ser ineficiente debido a la necesidad de múltiples cortes.',
            type: 'single'
        },
        {
            id: 'q12',
            question: '¿Qué pasa si se aplican demasiados cortes de Gomory?',
            options: [
                'El problema puede volverse computacionalmente costoso',
                'Se eliminan soluciones factibles',
                'Se convierte en un problema no lineal',
                'La solución se encuentra más rápido siempre'
            ],
            correctAnswer: 0,
            explanation: 'Demasiados cortes pueden hacer que la resolución del problema sea muy costosa computacionalmente.',
            type: 'single'
        },
        {
            id: 'q13',
            question: '¿Cuál es una ventaja del método de Gomory?',
            options: [
                'Puede aplicarse en conjunto con otros métodos de optimización entera',
                'Funciona mejor con variables continuas',
                'No depende del método simplex',
                'Siempre encuentra soluciones exactas en una sola iteración'
            ],
            correctAnswer: 0,
            explanation: 'Gomory puede combinarse con otros métodos para mejorar su eficiencia en programación entera.',
            type: 'single'
        },
        {
            id: 'q14',
            question: '¿En qué tipo de problemas es más eficiente el método de Gomory?',
            options: [
                'Problemas de programación lineal con pocas variables fraccionarias',
                'Problemas sin restricciones',
                'Problemas de optimización en grafos',
                'Problemas de programación lineal sin variables enteras'
            ],
            correctAnswer: 0,
            explanation: 'Gomory es más eficiente en problemas con pocas variables fraccionarias.',
            type: 'single'
        },
        {
            id: 'q15',
            question: '¿Cómo se construye un corte de Gomory?',
            options: [
                'Usando la derivada de la función objetivo',
                'A partir de la parte fraccionaria de las soluciones de las restricciones',
                'Mediante combinaciones lineales de restricciones existentes',
                'Eliminando restricciones innecesarias'
            ],
            correctAnswer: 1,
            explanation: 'Los cortes de Gomory se basan en la parte fraccionaria de la solución óptima obtenida.',
            type: 'single'
        }
    ]
};