export interface PsychologicalTest {
    id: string;
    name: string;
    date: string;
    score: string;
    interpretation: string;
}

export interface SessionNote {
    id: string;
    date: string;
    sessionNumber: number;
    objective: string;
    description: string;
    observations: string;
    agreements: string; // What was agreed for next session / homework
}

export interface ClinicalRecord {
    patientId: string;
    diagnosis: string;
    treatmentPhase: string;
    initialDemand: string; // Why they came
    history: SessionNote[];
    tests: PsychologicalTest[];
    nextSessionPlan: {
        focus: string;
        materials: string[];
    };
}

export const MOCK_CLINICAL_RECORDS: ClinicalRecord[] = [
    {
        patientId: '1', // Ana García
        diagnosis: 'Trastorno de Ansiedad Generalizada (F41.1)',
        treatmentPhase: 'Intervención Cognitivo-Conductual',
        initialDemand: 'Paciente refiere "sentirse preocupada por todo" y problemas para dormir.',
        history: [
            {
                id: 's3',
                sessionNumber: 3,
                date: '2023-10-25',
                objective: 'Reestructuración cognitiva de pensamientos catastróficos.',
                description: 'Se revisó el registro de pensamientos. La paciente identifica disparadores en el trabajo.',
                observations: 'Más tranquila que sesión anterior. Buena adherencia a tareas.',
                agreements: 'Completar registro de pensamientos (columna de respuesta racional). Leer capítulo 3.'
            },
            {
                id: 's2',
                sessionNumber: 2,
                date: '2023-10-18',
                objective: 'Psicoeducación sobre la ansiedad.',
                description: 'Se explicó el modelo cognitivo de la ansiedad. Diferencia entre miedo y ansiedad.',
                observations: 'Paciente receptiva, hace preguntas pertinentes.',
                agreements: 'Identificar 3 situaciones de ansiedad en la semana y puntuarlas (0-10).'
            },
            {
                id: 's1',
                sessionNumber: 1,
                date: '2023-10-11',
                objective: 'Evaluación inicial y establecimiento de rapport.',
                description: 'Entrevista clínica. Recopilación de antecedentes familiares y motivo de consulta.',
                observations: 'Contacto visual adecuado, discurso coherente pero acelerado.',
                agreements: 'Traer resultados de exámenes médicos previos.'
            }
        ],
        tests: [
            {
                id: 't1',
                name: 'Inventario de Ansiedad de Beck (BAI)',
                date: '2023-10-11',
                score: '28',
                interpretation: 'Ansiedad Moderada'
            },
            {
                id: 't2',
                name: 'Escala de Depresión de Beck (BDI-II)',
                date: '2023-10-11',
                score: '12',
                interpretation: 'Mínima depresión'
            }
        ],
        nextSessionPlan: {
            focus: 'Técnicas de relajación progresiva (Jacobson).',
            materials: ['Guía de relajación impresa', 'Audio de práctica', 'Colchoneta (si presencial)']
        }
    }
];
