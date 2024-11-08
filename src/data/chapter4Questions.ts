import { QuizCategory } from '../types/quiz';

export const chapter4Questions: QuizCategory = {
  id: 'network-rigor',
  title: 'Chapter 4',
  description: 'Evalúa tus conocimientos sobre los conceptos básicos de redes.',
  icon: 'Orbit',
  color: 'indigo',
  questions: [
    {
      id: "netRigor1",
      question: "¿Qué método pueden utilizar dos computadoras para garantizar que no se pierdan paquetes porque se envían demasiados datos demasiado rápido?",
      options: ["encapsulamiento", "control de flujo", "método de acceso", "tiempo de espera de respuesta"],
      correctAnswer: 1,
      explanation: "El control de flujo permite que la fuente y el destino establezcan el tiempo de transmisión y recepción de datos, garantizando que los datos no se envíen demasiado rápido.",
      type: "single"
    },
    {
      id: "netRigor2",
      question: "¿Qué tipo de comunicación enviará un mensaje a todos los dispositivos en una red de área local?",
      options: ["transmisión", "multidifusión", "unidifusión", "Todo transmitido"],
      correctAnswer: 0,
      explanation: "La comunicación de difusión es una comunicación de uno a todos. Es diferente de unidifusión y multidifusión.",
      type: "single"
    },
    {
      id: "netRigor",
      question: "¿Qué proceso se utiliza para colocar un mensaje dentro de otro mensaje para transferirlo desde el origen al destino?",
      options: ["control de acceso", "descodificación", "encapsulamiento", "control de flujo"],
      correctAnswer: 2,
      explanation: "La encapsulación es el proceso de colocar un mensaje dentro de otro mensaje. Un ejemplo es cómo se coloca un paquete en un campo de datos cuando se encapsula en un marco.",
      type: "single"
    }
  ]
};
