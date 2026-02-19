export interface MedicalRecord {
    id: string;
    patientId: string;
    date: string;
    type: 'Consulta General' | 'Urgencia' | 'Control' | 'Examen';
    description: string;
    diagnosis?: string;
    treatment?: string;
    doctor: string;
}

export const MOCK_MEDICAL_HISTORY: MedicalRecord[] = [
    {
        id: '1',
        patientId: '1', // Ana García
        date: '2023-10-15',
        type: 'Consulta General',
        description: 'Paciente presenta dolor de cabeza persistente y fatiga.',
        diagnosis: 'Cefalea tensional',
        treatment: 'Paracetamol 500mg cada 8 horas por 3 días. Descanso.',
        doctor: 'Dr. Montero'
    },
    {
        id: '2',
        patientId: '1',
        date: '2023-09-10',
        type: 'Control',
        description: 'Revisión anual de rutina. Signos vitales normales.',
        doctor: 'Dr. Montero'
    },
    {
        id: '3',
        patientId: '2', // Carlos López
        date: '2023-10-20',
        type: 'Urgencia',
        description: 'Dolor abdominal agudo en fosa ilíaca derecha.',
        diagnosis: 'Posible apendicitis (descartada tras ecografía)',
        treatment: 'Observación y dieta blanda.',
        doctor: 'Dra. Pérez'
    }
];
