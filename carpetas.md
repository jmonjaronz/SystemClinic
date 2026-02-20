# 📁 Estructura de Carpetas — Montero Clinic

> Última actualización: 19 de febrero de 2026

```
montero-clinic/
│
├── src/                            # Código fuente principal
│   │
│   ├── main.tsx                    # Punto de entrada de React (renderiza <App />)
│   ├── App.tsx                     # Componente raíz: monta el RouterProvider y el Toaster global
│   ├── App.css                     # Estilos globales de la aplicación
│   ├── index.css                   # Estilos base (Tailwind directives, tipografía, reset)
│   │
│   ├── app/                        # Configuración a nivel de aplicación
│   │   └── router.tsx              # Definición de todas las rutas (público, admin, paciente, empresa)
│   │
│   ├── lib/                        # Utilidades compartidas
│   │   └── utils.ts                # Función helper `cn()` para combinar clases CSS (clsx + twMerge)
│   │
│   ├── components/                 # Componentes reutilizables
│   │   └── ui/                     # Componentes UI de Shadcn/UI
│   │       ├── avatar.tsx          # Componente Avatar (foto de perfil, iniciales)
│   │       ├── badge.tsx           # Componente Badge (etiquetas de estado: activo, pendiente, etc.)
│   │       ├── button.tsx          # Componente Button (variantes: primary, ghost, outline, etc.)
│   │       ├── card.tsx            # Componente Card (tarjeta contenedora con header/content/footer)
│   │       ├── dialog.tsx          # Componente Dialog (modal emergente)
│   │       ├── dropdown-menu.tsx   # Componente DropdownMenu (menú desplegable)
│   │       ├── input.tsx           # Componente Input (campo de texto)
│   │       ├── label.tsx           # Componente Label (etiqueta para formularios)
│   │       ├── select.tsx          # Componente Select (selector desplegable)
│   │       ├── separator.tsx       # Componente Separator (línea divisoria)
│   │       ├── sheet.tsx           # Componente Sheet (panel lateral deslizable, usado en sidebar móvil)
│   │       ├── sonner.tsx          # Componente Toaster (notificaciones tipo toast)
│   │       ├── tabs.tsx            # Componente Tabs (pestañas de navegación)
│   │       └── textarea.tsx        # Componente Textarea (campo de texto multilínea)
│   │
│   ├── shared/                     # Recursos compartidos entre módulos
│   │   ├── layouts/                # Layouts reutilizables
│   │   │   ├── DashboardLayout.tsx # Layout del panel admin: sidebar con navegación + contenido principal
│   │   │   └── PublicLayout.tsx    # Layout público: navbar + footer + <Outlet /> para páginas públicas
│   │   │
│   │   └── mocks/                  # Datos ficticios para desarrollo (sin backend aún)
│   │       ├── patients.ts         # Interface Patient + array MOCK_PATIENTS (5 pacientes de ejemplo)
│   │       ├── appointments.ts     # Interface Appointment + array MOCK_APPOINTMENTS (4 citas de ejemplo)
│   │       ├── clinicalRecords.ts  # Interfaces SessionNote, PsychologicalTest, ClinicalRecord + datos mock
│   │       └── medicalHistory.ts   # Interface MedicalRecord + array MOCK_MEDICAL_HISTORY
│   │
│   └── modules/                    # Módulos de la aplicación (separados por rol de usuario)
│       │
│       ├── public/                 # 🌐 Sitio web público (landing page)
│       │   ├── components/         # Componentes específicos del sitio público
│       │   │   ├── Hero.tsx              # Sección hero principal con título, subtítulo y CTAs
│       │   │   ├── HeroImage.tsx         # Imagen/ilustración del hero
│       │   │   ├── ServicesTabSection.tsx # Sección de servicios con tabs (Personal / Corporativo)
│       │   │   ├── BenefitsSection.tsx   # Sección de beneficios de la clínica
│       │   │   ├── FeaturesSection.tsx   # Sección de características / diferenciadores
│       │   │   ├── ProcessSection.tsx    # Sección de "Cómo funciona" (pasos del proceso)
│       │   │   ├── SpecialistsSection.tsx # Sección del equipo de especialistas
│       │   │   ├── TrustSection.tsx      # Sección de confianza (testimonios, certificaciones)
│       │   │   └── ContactSection.tsx    # Sección formulario de contacto
│       │   │
│       │   └── pages/              # Páginas del sitio público
│       │       ├── HomePage.tsx            # Página principal: hero + servicios + beneficios + contacto
│       │       ├── ServicesPage.tsx        # Página general de servicios
│       │       ├── PersonalServicesPage.tsx # Página de servicios de bienestar personal
│       │       ├── CorporateServicesPage.tsx # Página de soluciones corporativas
│       │       ├── ContactPage.tsx        # Página de contacto
│       │       └── TeamPage.tsx           # Página del equipo profesional
│       │
│       ├── admin/                  # 🔒 Panel de administración (psicólogos/gestión)
│       │   ├── auth/
│       │   │   └── pages/
│       │   │       └── LoginPage.tsx          # Página de login para administradores
│       │   │
│       │   ├── appointments/
│       │   │   └── pages/
│       │   │       ├── DashboardHome.tsx      # Dashboard principal: resumen de citas del día, estadísticas
│       │   │       └── AppointmentsPage.tsx   # Agenda de citas: lista y gestión de citas
│       │   │
│       │   ├── patients/
│       │   │   └── pages/
│       │   │       ├── PatientsPage.tsx       # Lista de pacientes con búsqueda y filtros
│       │   │       └── PatientDetailsPage.tsx # Detalle del paciente: historial clínico, evolución, tests
│       │   │
│       │   └── settings/
│       │       └── pages/
│       │           └── SettingsPage.tsx       # Configuración del sistema
│       │
│       ├── patient/                # 👤 Portal del paciente
│       │   ├── auth/
│       │   │   └── pages/
│       │   │       ├── PatientLoginPage.tsx    # Página de login para pacientes
│       │   │       └── PatientRegisterPage.tsx # Página de registro de nuevos pacientes
│       │   │
│       │   └── dashboard/
│       │       ├── layouts/
│       │       │   └── PatientDashboardLayout.tsx # Layout con sidebar para el portal del paciente
│       │       │
│       │       └── pages/
│       │           ├── PatientHome.tsx        # Inicio del paciente: próxima cita, resumen
│       │           ├── BookingWizard.tsx      # Wizard para agendar nueva cita paso a paso
│       │           ├── PatientAppointments.tsx # Historial y próximas citas del paciente
│       │           ├── PatientFamily.tsx      # Gestión de familiares vinculados
│       │           ├── PatientTracking.tsx    # Seguimiento de progreso terapéutico
│       │           └── PatientTests.tsx       # Resultados de pruebas psicológicas
│       │
│       └── corporate/              # 🏢 Portal corporativo (empresas)
│           ├── auth/
│           │   └── pages/
│           │       └── CorporateLoginPage.tsx     # Página de login para empresas
│           │
│           └── dashboard/
│               ├── layouts/
│               │   └── CorporateDashboardLayout.tsx # Layout con sidebar para el portal corporativo
│               │
│               └── pages/
│                   └── CorporateHome.tsx          # Dashboard corporativo: métricas, estado del convenio
│
└── index.html                      # Punto de entrada HTML (carga main.tsx)
```

## 📋 Resumen por Módulo

| Módulo | Ruta base | Descripción |
|--------|-----------|-------------|
| **public** | `/` | Sitio web público de la clínica (landing, servicios, contacto, equipo) |
| **admin** | `/app` | Panel de gestión para psicólogos (dashboard, citas, pacientes, configuración) |
| **patient** | `/paciente/app` | Portal del paciente (agendar citas, seguimiento, tests, familia) |
| **corporate** | `/empresa/app` | Portal corporativo para empresas con convenio (métricas, personal, analítica) |
