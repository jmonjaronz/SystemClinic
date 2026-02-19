import { type Patient, MOCK_PATIENTS } from "./patients";

export interface Appointment {
    id: string;
    patientId: string;
    patient?: Patient;
    date: string;
    time: string;
    type: 'Consulta Inicial' | 'Terapia' | 'Seguimiento';
    status: 'confirmado' | 'pendiente' | 'cancelado' | 'completado';
    notes?: string;
    company?: string;
    psychologist?: string;
}

export const MOCK_APPOINTMENTS: Appointment[] = [
    {
        id: '101',
        patientId: '1',
        patient: MOCK_PATIENTS.find(p => p.id === '1'),
        date: '2023-10-26',
        time: '09:00',
        type: 'Terapia',
        status: 'confirmado',
        company: 'TechSolutions Inc.',
        psychologist: 'Dra. Elena Vega',
    },
    {
        id: '102',
        patientId: '2',
        patient: MOCK_PATIENTS.find(p => p.id === '2'),
        date: '2023-10-26',
        time: '10:00',
        type: 'Consulta Inicial',
        status: 'pendiente',
        company: 'Global Corp',
        psychologist: 'Dr. Roberto Montero',
    },
    {
        id: '103',
        patientId: '4',
        patient: MOCK_PATIENTS.find(p => p.id === '4'),
        date: '2023-10-26',
        time: '11:00',
        type: 'Seguimiento',
        status: 'confirmado',
        company: 'TechSolutions Inc.',
        psychologist: 'Dra. Elena Vega',
    },
    {
        id: '104',
        patientId: '5',
        patient: MOCK_PATIENTS.find(p => p.id === '5'),
        date: '2023-10-27',
        time: '15:00',
        type: 'Terapia',
        status: 'confirmado',
        company: 'Innovatech',
        psychologist: 'Lic. Carlos Méndez',
    }
];
