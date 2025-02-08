import { QuizCategory } from '../types/quiz';

export const FinalOptimizacion01: QuizCategory = {
    id: 'Final-IA-Linealidad',
    title: 'Linealidad',
    description: 'Prueba final de Optimizacion',
    icon: 'BookCheck',
    color: 'indigo',
    questions: [
        {
            id: 'q1',
            question: '¿Cuál de las siguientes afirmaciones es correcta sobre la linealidad en problemas de optimización?',
            options: [
                'Un problema de optimización lineal siempre tiene una solución única.',
                'La linealidad implica que tanto la función objetivo como las restricciones deben ser lineales.',
                'La linealidad solo se aplica a problemas de maximización, no de minimización.',
                'Los problemas no lineales no pueden ser resueltos mediante métodos de optimización.'
            ],
            correctAnswer: 1,
            explanation: 'La linealidad implica que tanto la función objetivo como las restricciones deben ser funciones lineales.',
            type: 'single'
        },
        {
            id: 'q2',
            question: 'En un problema de optimización lineal, la región factible siempre es un conjunto convexo.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 0,
            explanation: 'La región factible de un problema de optimización lineal siempre es convexa debido a la naturaleza de las restricciones lineales.',
            type: 'single'
        },
        {
            id: 'q3',
            question: '¿Qué condición es necesaria para que un problema de optimización sea considerado lineal?',
            options: [
                'La función objetivo debe ser cuadrática.',
                'Las variables de decisión deben ser enteras.',
                'Tanto la función objetivo como las restricciones deben ser lineales.',
                'El problema debe tener al menos una restricción no lineal.'
            ],
            correctAnswer: 2,
            explanation: 'Para que un problema sea lineal, tanto la función objetivo como las restricciones deben ser expresiones lineales.',
            type: 'single'
        },
        {
            id: 'q4',
            question: '¿Qué implica la propiedad de linealidad en un modelo de programación lineal?',
            options: [
                'Que la función objetivo y las restricciones pueden incluir términos cuadráticos o cúbicos.',
                'Que la función objetivo y las restricciones deben ser funciones lineales de las variables de decisión.',
                'Que las restricciones pueden ser no lineales, siempre y cuando la función objetivo sea lineal.',
                'Que la función objetivo puede ser no lineal, siempre y cuando las restricciones sean lineales.'
            ],
            correctAnswer: 1,
            explanation: 'En programación lineal, todas las expresiones deben ser combinaciones lineales de las variables de decisión.',
            type: 'single'
        },
        {
            id: 'q5',
            question: '¿Cuál de las siguientes expresiones representa una función lineal en el contexto de la programación lineal?',
            options: [
                'Z = 3x₁² + 2x₂',
                'Z = 5x₁ + 7x₂ - 4x₃',
                'Z = 4x₁x₂ + x₃',
                'Z = ln(x₁) + 3x₂'
            ],
            correctAnswer: 1,
            explanation: 'La función Z = 5x₁ + 7x₂ - 4x₃ es una combinación lineal de las variables sin exponentes ni productos entre ellas.',
            type: 'single'
        },
        {
            id: 'q6',
            question: 'En el método simplex, ¿por qué es esencial que tanto la función objetivo como las restricciones sean lineales?',
            options: [
                'Porque el método simplex está diseñado para optimizar funciones no lineales.',
                'Porque la linealidad garantiza que el espacio de soluciones factibles sea una región convexa.',
                'Porque la linealidad asegura que todas las soluciones posibles sean igualmente óptimas.',
                'Porque la linealidad permite que el método simplex ignore las restricciones y se enfoque solo en la función objetivo.'
            ],
            correctAnswer: 1,
            explanation: 'La convexidad de la región factible permite que el método simplex encuentre la solución óptima en uno de sus vértices.',
            type: 'single'
        },
        {
            id: 'q7',
            question: '¿Qué representa una "variable de holgura" en programación lineal?',
            options: [
                'Una variable que se añade para convertir una restricción de desigualdad en una igualdad.',
                'Una variable que multiplica a otra en la función objetivo.',
                'Una variable que siempre toma valores negativos.',
                'Una variable que se elimina para simplificar el modelo.'
            ],
            correctAnswer: 0,
            explanation: 'Las variables de holgura permiten transformar restricciones de desigualdad en igualdades para facilitar los cálculos.',
            type: 'single'
        },
        {
            id: 'q8',
            question: 'En la programación lineal, ¿qué método se usa comúnmente para resolver problemas?',
            options: [
                'Método de Newton',
                'Método del gradiente descendente',
                'Método Simplex',
                'Transformada de Fourier'
            ],
            correctAnswer: 2,
            explanation: 'El método Simplex es el más utilizado para resolver problemas de programación lineal.',
            type: 'single'
        },
        {
            id: 'q9',
            question: 'En un problema de programación lineal, si una variable de decisión tiene un valor óptimo de cero, su correspondiente variable dual también será cero.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 1,
            explanation: 'No siempre es cierto que una variable primal con valor cero implique una variable dual con valor cero.',
            type: 'single'
        },
        {
            id: 'q10',
            question: 'La linealidad en un problema de optimización implica que la relación entre las variables es aditiva y proporcional.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 0,
            explanation: 'La linealidad implica que las variables afectan la función objetivo y restricciones de manera aditiva y proporcional.',
            type: 'single'
        },
        {
            id: 'q11',
            question: '¿Cómo es la representación gráfica de una función lineal?',
            options: [
                'Un paraboloide',
                'Un plano',
                'Una superficie esférica',
                'Una curva exponencial'
            ],
            correctAnswer: 1,
            explanation: 'Las funciones lineales en programación lineal se representan como planos en espacios multidimensionales.',
            type: 'single'
        },
        {
            id: 'q12',
            question: 'Si un problema de programación lineal tiene soluciones múltiples óptimas, esto significa que:',
            options: [
                'No tiene solución factible.',
                'Todas las soluciones óptimas tienen el mismo valor de función objetivo.',
                'No se puede resolver con el método simplex.',
                'Solo hay una solución óptima en la región factible.'
            ],
            correctAnswer: 1,
            explanation: 'Cuando hay múltiples soluciones óptimas, todas tienen el mismo valor de la función objetivo.',
            type: 'single'
        },
        {
            id: 'q13',
            question: 'En un problema de Programación Lineal, ¿qué condición debe cumplirse para que exista una solución óptima única?',
            options: [
                'La región factible debe ser acotada.',
                'La función objetivo debe ser paralela a una de las restricciones.',
                'La región factible debe ser no vacía y la función objetivo no debe ser paralela a ninguna restricción en el óptimo.',
                'El problema debe tener al menos tres variables.'
            ],
            correctAnswer: 2,
            explanation: 'Para una solución óptima única, la región factible debe ser no vacía y la función objetivo no debe ser paralela a una restricción en el óptimo.',
            type: 'single'
        },
        {
            id: 'q14',
            question: 'En un problema de Programación Lineal, si la región factible es no acotada, entonces el problema no tiene solución óptima.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 1,
            explanation: 'Una región factible no acotada aún puede tener una solución óptima si la función objetivo está acotada en la dirección de optimización.',
            type: 'single'
        },
        {
            id: 'q15',
            question: 'En el método gráfico para resolver problemas de Programación Lineal con dos variables, ¿qué representa la intersección de dos restricciones?',
            options: [
                'Un punto factible.',
                'Un vértice de la región factible.',
                'Un punto óptimo.',
                'Un punto no factible.'
            ],
            correctAnswer: 1,
            explanation: 'La intersección de dos restricciones puede ser un vértice de la región factible, pero no necesariamente es un punto óptimo o factible (depende de las demás restricciones).',
            type: 'single'
        }        
    ]
};