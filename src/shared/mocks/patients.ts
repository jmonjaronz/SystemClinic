export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: 'activo' | 'inactivo';
    lastVisit: string;
}

export const MOCK_PATIENTS: Patient[] = [
    {
        id: '1',
        firstName: 'Ana',
        lastName: 'García',
        email: 'ana.garcia@email.com',
        phone: '+51 987 654 321',
        status: 'activo',
        lastVisit: '2023-10-15',
    },
    {
        id: '2',
        firstName: 'Carlos',
        lastName: 'López',
        email: 'carlos.lopez@email.com',
        phone: '+51 987 654 322',
        status: 'activo',
        lastVisit: '2023-10-20',
    },
    {
        id: '3',
        firstName: 'María',
        lastName: 'Rodríguez',
        email: 'maria.rodriguez@email.com',
        phone: '+51 987 654 323',
        status: 'inactivo',
        lastVisit: '2023-09-01',
    },
    {
        id: '4',
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@email.com',
        phone: '+51 987 654 324',
        status: 'activo',
        lastVisit: '2023-10-25',
    },
    {
        id: '5',
        firstName: 'Lucía',
        lastName: 'Fernández',
        email: 'lucia.fernandez@email.com',
        phone: '+51 987 654 325',
        status: 'activo',
        lastVisit: '2023-10-22',
    }
];
