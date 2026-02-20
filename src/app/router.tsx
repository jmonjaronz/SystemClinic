import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/shared/layouts/PublicLayout";
import HomePage from "@/modules/public/pages/HomePage";
import ServicesPage from "@/modules/public/pages/ServicesPage";
import PersonalServicesPage from "@/modules/public/pages/PersonalServicesPage";
import CorporateServicesPage from "@/modules/public/pages/CorporateServicesPage";
import ContactPage from "@/modules/public/pages/ContactPage";
import TeamPage from "@/modules/public/pages/TeamPage";

// Admin Imports
import DashboardLayout from "@/shared/layouts/DashboardLayout";
import DashboardHome from "@/modules/admin/appointments/pages/DashboardHome";
import AppointmentsPage from "@/modules/admin/appointments/pages/AppointmentsPage";
import PatientsPage from "@/modules/admin/patients/pages/PatientsPage";
import PatientDetailsPage from "@/modules/admin/patients/pages/PatientDetailsPage";
import SettingsPage from "@/modules/admin/settings/pages/SettingsPage";
import LoginPage from "@/modules/admin/auth/pages/LoginPage";

// Patient Imports
import PatientLoginPage from "@/modules/patient/auth/pages/PatientLoginPage";
import PatientRegisterPage from "@/modules/patient/auth/pages/PatientRegisterPage";
import PatientDashboardLayout from "@/modules/patient/dashboard/layouts/PatientDashboardLayout";
import PatientHome from "@/modules/patient/dashboard/pages/PatientHome";
import BookingWizard from "@/modules/patient/dashboard/pages/BookingWizard";
import PatientAppointments from "@/modules/patient/dashboard/pages/PatientAppointments";
import PatientFamily from "@/modules/patient/dashboard/pages/PatientFamily";
import PatientTracking from "@/modules/patient/dashboard/pages/PatientTracking";
import PatientTests from "@/modules/patient/dashboard/pages/PatientTests";

// Corporate Imports
import CorporateLoginPage from "@/modules/corporate/auth/pages/CorporateLoginPage";
import CorporateDashboardLayout from "@/modules/corporate/dashboard/layouts/CorporateDashboardLayout";
import CorporateHome from "@/modules/corporate/dashboard/pages/CorporateHome";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/paciente/login",
        element: <PatientLoginPage />,
    },
    {
        path: "/paciente/registro",
        element: <PatientRegisterPage />,
    },
    {
        path: "/empresa/login",
        element: <CorporateLoginPage />,
    },
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "servicios",
                element: <ServicesPage />,
            },
            {
                path: "servicios/bienestar-personal",
                element: <PersonalServicesPage />,
            },
            {
                path: "servicios/soluciones-corporativas",
                element: <CorporateServicesPage />,
            },
            {
                path: "contacto",
                element: <ContactPage />,
            },
            {
                path: "equipo",
                element: <TeamPage />,
            },
        ],
    },
    // Admin App
    {
        path: "/app",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                path: "citas",
                element: <AppointmentsPage />
            },
            {
                path: "pacientes",
                element: <PatientsPage />
            },
            {
                path: "pacientes/:id",
                element: <PatientDetailsPage />
            },
            {
                path: "configuracion",
                element: <SettingsPage />
            }
        ]
    },
    // Patient App
    {
        path: "/paciente/app",
        element: <PatientDashboardLayout />,
        children: [
            {
                index: true,
                element: <PatientHome />
            },
            {
                path: "agendar",
                element: <BookingWizard />
            },
            {
                path: "citas",
                element: <PatientAppointments />
            },
            {
                path: "familia",
                element: <PatientFamily />
            },
            {
                path: "seguimiento",
                element: <PatientTracking />
            },
            {
                path: "tests",
                element: <PatientTests />
            }
        ]
    },
    // Corporate App
    {
        path: "/empresa/app",
        element: <CorporateDashboardLayout />,
        children: [
            {
                index: true,
                element: <CorporateHome />
            },
            {
                path: "personal",
                element: <div className="p-8"><h1 className="text-2xl font-bold italic">Gestión de Personal</h1><p className="text-slate-500 mt-2">Modulo en construcción.</p></div>
            },
            {
                path: "analitica",
                element: <div className="p-8"><h1 className="text-2xl font-bold italic">Reportes & Analíticas</h1><p className="text-slate-500 mt-2">Modulo en construcción.</p></div>
            },
            {
                path: "evaluaciones",
                element: <div className="p-8"><h1 className="text-2xl font-bold italic">Evaluaciones Asignadas</h1><p className="text-slate-500 mt-2">Modulo en construcción.</p></div>
            },
            {
                path: "configuracion",
                element: <div className="p-8"><h1 className="text-2xl font-bold italic">Configuración Empresa</h1><p className="text-slate-500 mt-2">Modulo en construcción.</p></div>
            }
        ]
    },
    {
        path: "*",
        element: <div>404 - No encontrado</div>,
    }
]);

