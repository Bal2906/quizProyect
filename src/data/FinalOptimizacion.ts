import { QuizCategory } from '../types/quiz';

export const FinalOptimizacion: QuizCategory = {
    id: 'Final-IA-Dualidad',
    title: 'Dualidad',
    description: 'Prueba final de Optimizacion',
    icon: 'BookCheck',
    color: 'indigo',
    questions: [
        {
            id: 'q1',
            question: '¿Qué es el problema dual en optimización?',
            options: [
                'Un problema que tiene el mismo objetivo que el problema primal, pero con variables diferentes.',
                'Un problema relacionado con el primal que ofrece una cota superior o inferior al valor óptimo del problema primal.',
                'Un problema que no tiene ninguna relación con el problema primal.',
                'Un problema que no tiene solución cuando el primal no tiene solución.'
            ],
            correctAnswer: 1,
            explanation: 'Un problema dual es un problema relacionado con el primal que ofrece una cota superior o inferior al valor óptimo del problema primal.',
            type: 'single'
        },
        {
            id: 'q2',
            question: 'En programación lineal, si el problema primal es de minimización, ¿qué tipo de límite proporciona el problema dual?',
            options: [
                'Un límite inferior.',
                'Un límite superior.',
                'Ningún límite.',
                'Un límite exacto de la solución óptima.'
            ],
            correctAnswer: 0,
            explanation: 'El problema dual proporciona un límite inferior en problemas de minimización.',
            type: 'single'
        },
        {
            id: 'q3',
            question: '¿Cuál de las siguientes afirmaciones es verdadera sobre la dualidad fuerte en optimización?',
            options: [
                'La dualidad fuerte siempre se cumple, sin importar las condiciones del problema primal.',
                'La dualidad fuerte establece que la solución óptima del problema primal coincide con la solución óptima del problema dual bajo ciertas condiciones.',
                'La dualidad fuerte nunca se cumple en programación convexa.',
                'La dualidad fuerte implica que la solución dual es siempre mejor que la primal.'
            ],
            correctAnswer: 1,
            explanation: 'La dualidad fuerte establece que la solución óptima del problema primal coincide con la del problema dual bajo ciertas condiciones.',
            type: 'single'
        },
        {
            id: 'q4',
            question: 'Completa la oración: Las variables duales en un problema de optimización lineal representan _____ de las restricciones en el problema primal.',
            options: [
                'Penalizaciones o costos asociados.',
                'Las soluciones óptimas para cada restricción.',
                'Las variables primales del problema.',
                'El valor de la función objetivo primal.'
            ],
            correctAnswer: 0,
            explanation: 'Las variables duales representan penalizaciones o costos asociados a las restricciones del problema primal.',
            type: 'single'
        },
        {
            id: 'q5',
            question: '¿Cuál de las siguientes afirmaciones describe correctamente la relación entre un problema primal y su problema dual en programación lineal?',
            options: [
                'Si el problema primal tiene una solución óptima acotada, el problema dual es siempre infactible.',
                'Si el problema dual tiene una solución óptima acotada, el problema primal puede no tener solución.',
                'Si el problema primal es infactible, el problema dual es infactible o tiene una solución óptima infinita.',
                'Si ambos problemas tienen soluciones óptimas finitas, las funciones objetivo en sus soluciones óptimas son iguales.'
            ],
            correctAnswer: 3,
            explanation: 'Si ambos problemas tienen soluciones óptimas finitas, los valores de sus funciones objetivo son iguales.',
            type: 'single'
        },
        {
            id: 'q6',
            question: '¿Qué implica la condición de complementariedad en la teoría de dualidad de programación lineal?',
            options: [
                'Que la suma de las soluciones óptimas del primal y el dual es siempre cero.',
                'Que el producto de cada restricción no satisfecha en el primal con su correspondiente variable dual es igual a cero.',
                'Que todas las restricciones del problema dual se cumplen estrictamente.',
                'Que la solución del primal es óptima solo si la solución dual es infactible.'
            ],
            correctAnswer: 1,
            explanation: 'La condición de complementariedad establece que el producto de una restricción no satisfecha con su variable dual es igual a cero.',
            type: 'single'
        },
        {
            id: 'q7',
            question: 'En la dualidad débil de programación lineal, ¿cuál de las siguientes afirmaciones es siempre verdadera?',
            options: [
                'El valor óptimo del problema dual siempre es menor o igual al valor óptimo del problema primal.',
                'El valor óptimo del problema primal siempre es mayor que el valor óptimo del problema dual.',
                'Los valores óptimos del primal y dual son siempre iguales.',
                'Si el primal es infactible, el dual necesariamente tiene un valor óptimo finito.'
            ],
            correctAnswer: 0,
            explanation: 'La dualidad débil establece que el valor óptimo del dual es menor o igual al del primal.',
            type: 'single'
        },
        {
            id: 'q8',
            question: 'En términos de interpretación económica, ¿qué representa la variable dual en un problema de programación lineal?',
            options: [
                'La cantidad total de recursos utilizados en la solución óptima.',
                'La sensibilidad del valor óptimo del problema primal respecto a cambios en los coeficientes de la función objetivo.',
                'La tasa de cambio en el valor óptimo del problema primal por unidad adicional del recurso disponible.',
                'La distancia entre las soluciones óptimas del problema primal y dual.'
            ],
            correctAnswer: 2,
            explanation: 'La variable dual representa la tasa de cambio del valor óptimo del problema primal por unidad adicional de recurso.',
            type: 'single'
        },
        {
            id: 'q9',
            question: '¿Cómo se interpretan los valores de las variables duales?',
            options: [
                'Como precios sombra que indican la variación en la función objetivo si se relaja una restricción.',
                'Como los coeficientes de la función objetivo en el problema primal.',
                'Como valores arbitrarios sin interpretación económica.',
                'Como la cantidad total de restricciones activas en el problema primal.'
            ],
            correctAnswer: 0,
            explanation: 'Los valores de las variables duales son conocidos como precios sombra y reflejan el cambio en la función objetivo si se relaja una restricción.',
            type: 'single'
        },
        {
            id: 'q10',
            question: '¿Cuál de las siguientes afirmaciones es correcta sobre el teorema de la dualidad débil?',
            options: [
                'El valor óptimo del problema dual nunca es mayor que el del problema primal en un problema de maximización.',
                'El problema dual siempre tiene una solución única.',
                'Si el problema primal tiene solución óptima, el problema dual es infactible.',
                'El problema primal y dual tienen la misma solución óptima en todos los casos.'
            ],
            correctAnswer: 0,
            explanation: 'La dualidad débil establece que en problemas de maximización, el valor óptimo del dual nunca supera al del primal.',
            type: 'single'
        },
        {
            id: 'q11',
            question: 'Si el problema dual tiene múltiples soluciones óptimas, ¿qué se puede decir del problema primal?',
            options: [
                'Tiene soluciones múltiples.',
                'Es infactible.',
                'Es no acotado.',
                'Tiene una única solución.'
            ],
            correctAnswer: 0,
            explanation: 'Si el problema dual tiene múltiples soluciones óptimas, el problema primal también tiene múltiples soluciones óptimas.',
            type: 'single'
        },
        {
            id: 'q12',
            question: 'Si el problema dual tiene una solución óptima finita, ¿qué se puede concluir sobre el problema primal?',
            options: [
                'Siempre tiene solución óptima finita con el mismo valor óptimo.',
                'No tiene restricciones activas.',
                'Es infactible.',
                'Siempre tiene solución infinita.'
            ],
            correctAnswer: 0,
            explanation: 'Si el problema dual tiene una solución óptima finita, el problema primal también tiene una solución óptima finita con el mismo valor óptimo.',
            type: 'single'
        },
        {
            id: 'q13',
            question: 'La dualidad en optimización se refiere a la relación entre un problema primal y su problema dual, donde el valor óptimo de la función objetivo del problema dual sirve como un límite para el valor óptimo del problema:',
            options: [
                'Primal',
                'Dual',
                'Ambos',
                'Ninguno'
            ],
            correctAnswer: 0,
            explanation: 'El valor óptimo del problema dual establece un límite para el problema primal.',
            type: 'single'
        },
        {
            id: 'q14',
            question: 'El teorema de la dualidad fuerte establece que si el problema primal tiene una solución óptima, entonces el problema dual también tiene una solución óptima y los valores óptimos de ambos problemas son:',
            options: [
                'Iguales',
                'Diferentes',
                'Independientes',
                'Incomparables'
            ],
            correctAnswer: 0,
            explanation: 'Según el teorema de la dualidad fuerte, los valores óptimos del primal y dual son iguales.',
            type: 'single'
        },
        {
            id: 'q15',
            question: 'En el contexto de la dualidad, si el problema primal es un problema de maximización, el problema dual será siempre un problema de:',
            options: [
                'Minimización',
                'Maximización',
                'Optimización combinatoria',
                'Inexistente'
            ],
            correctAnswer: 0,
            explanation: 'En la dualidad, los problemas primal y dual son de naturaleza opuesta: si uno es de maximización, el otro es de minimización.',
            type: 'single'
        },
        {
            id: 'q16',
            question: 'El valor óptimo del problema dual siempre es mayor o igual al valor óptimo del problema primal en un problema de optimización convexa. Esto es:',
            options: [
                'Verdadero',
                'Falso'
            ],
            correctAnswer: 0,
            explanation: 'En optimización convexa, el valor óptimo del dual es siempre mayor o igual al del primal según la dualidad débil.',
            type: 'single'
        }
    ]
};
