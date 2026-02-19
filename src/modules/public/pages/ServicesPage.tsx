import {
    Brain,
    Heart,
    Baby,
    ClipboardCheck,
    Lightbulb,
    TrendingUp,
    ShieldCheck,
    Users,
    Presentation,
    Users2,
    BookOpen,
    Smile,
    UserCheck,
    BarChart3,
    Briefcase,
    Globe,
    Scale,
    Stethoscope,
    type LucideProps
} from "lucide-react";

// Fallback for School icon if it doesn't exist in standard lucide
const School = (props: LucideProps) => <BookOpen {...props} />;
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const personalServices = [
    {
        category: "Psicología & Psicoterapia",
        services: [
            { title: "Psicoterapia Integral", description: "Enfoque profundo para el tratamiento de trastornos emocionales y del comportamiento.", icon: Brain },
            { title: "Psicoterapia de Pareja", description: "Resolución de conflictos y fortalecimiento del vínculo afectivo.", icon: Heart },
            { title: "Consulta Psicológica", description: "Orientación profesional para situaciones puntuales y toma de decisiones.", icon: UserCheck },
            { title: "Evaluación Psicológica", description: "Aplicación de baterías de tests para diagnósticos precisos.", icon: ClipboardCheck },
        ]
    },
    {
        category: "Desarrollo Infantil y Juvenil",
        services: [
            { title: "Estimulación Temprana", description: "Potenciamos las capacidades motoras y cognitivas desde los primeros meses.", icon: Baby },
            { title: "Terapia Ocupacional", description: "Ayudamos a niños a desarrollar independencia en sus actividades diarias.", icon: Smile },
            { title: "Problemas de Aprendizaje", description: "Intervención en procesos de lectura, escritura y cálculo.", icon: BookOpen },
            { title: "Dificultades Académicas", description: "Estrategias de estudio y soporte en el rendimiento escolar.", icon: School },
        ]
    },
    {
        category: "Talleres y Potencial",
        services: [
            { title: "Talleres Psicopedagógicos", description: "Grupos de aprendizaje dinámico sobre habilidades blandas.", icon: Users },
            { title: "Talleres de Psicoterapia", description: "Espacios grupales para el manejo de ansiedad, duelo y más.", icon: Users2 },
            { title: "Coaching Personal", description: "Maximiza tu potencial y alcanza tus metas de vida.", icon: Lightbulb },
            { title: "Capacitaciones para Padres", description: "Escuela de padres para una crianza positiva y consciente.", icon: Heart },
        ]
    }
];

const corporateServices = [
    {
        category: "Liderazgo y Equipos",
        services: [
            { title: "Executive Coaching", description: "Acompañamiento a líderes para potenciar su toma de decisiones.", icon: TrendingUp },
            { title: "Team Coaching", description: "Mejora el rendimiento y la cohesión de equipos de alto nivel.", icon: Users },
            { title: "Team Building", description: "Experiencias outdoor o indoor para fortalecer la confianza grupal.", icon: Globe },
        ]
    },
    {
        category: "Riesgos y Salud Laboral",
        services: [
            { title: "Evaluación de Riesgos Psicosociales", description: "Identificación de factores que afectan la salud mental en el trabajo.", icon: ShieldCheck },
            { title: "Monitoreo de Salud Mental", description: "Seguimiento continuo del bienestar de tus colaboradores.", icon: Stethoscope },
        ]
    },
    {
        category: "Cultura y Gestión del Talento",
        services: [
            { title: "Evaluación de Clima Laboral", description: "Medición y diagnóstico de la atmósfera organizacional.", icon: BarChart3 },
            { title: "Selección de Personal", description: "Evaluaciones psicolaborales para encontrar el perfil ideal.", icon: UserCheck },
            { title: "Cultura y Valores", description: "Alineación de visiones y fortalecimiento del propósito corporativo.", icon: Scale },
            { title: "Consultoría Organizacional", description: "Mejora de procesos y estructura humana de la empresa.", icon: Briefcase },
        ]
    },
    {
        category: "Capacitación Corporativa",
        services: [
            { title: "Talleres para Colaboradores", description: "Formación en soft skills y bienestar emocional.", icon: Presentation },
            { title: "Capacitación a Medida", description: "Programas diseñados según los retos de tu industria.", icon: Lightbulb },
        ]
    }
];


export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-blue-600 hover:bg-blue-600 text-white border-none py-1 px-4 uppercase tracking-widest text-xs">Soluciones que Transforman</Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Nuestras Especialidades</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Soluciones profesionales en salud mental y consultoría estratégica,
                        diseñadas para transformar personas y organizaciones.
                    </p>

                    {/* Quick Navigation */}
                    <div className="flex justify-center mt-12">
                        <div className="inline-flex p-1 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                            <a href="#personal" className="flex items-center px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-slate-700 text-white">
                                <Users size={16} className="mr-2" />
                                Bienestar Personal
                            </a>
                            <a href="#empresas" className="flex items-center px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-slate-700 text-white">
                                <Briefcase size={16} className="mr-2" />
                                Soluciones Corporativas
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bienestar Personal Section */}
            <section className="py-24 bg-white" id="personal">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bienestar Personal y Familiar</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="mt-6 text-slate-600 text-lg max-w-3xl">
                            Acompañamos cada etapa de la vida con un enfoque ético, humano y altamente profesional.
                            Nuestro objetivo es brindarte las herramientas necesarias para una vida plena.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {personalServices.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                                    <span className="bg-blue-50 text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">{idx + 1}</span>
                                    {group.category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {group.services.map((service, sIdx) => (
                                        <Card key={sIdx} className="border-slate-100 hover:border-blue-100 transition-all hover:shadow-lg group">
                                            <CardHeader className="pb-2">
                                                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                                    <service.icon size={20} />
                                                </div>
                                                <CardTitle className="text-lg font-bold text-slate-900 line-clamp-1">{service.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-slate-500 text-sm leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner Intermedio */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Deseas iniciar un proceso terapéutico?</h2>
                    <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                        Estás a un paso de comenzar tu transformación. Agenda una sesión de orientación inicial con nuestros especialistas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-white text-blue-800 hover:bg-slate-100 font-bold px-8">
                            Hablar con un Especialista
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-black hover:bg-blue-700 hover:text-white font-bold px-8">
                            Ver Preguntas Frecuentes
                        </Button>
                    </div>
                </div>
            </section>

            {/* Soluciones Corporativas Section */}
            <section className="py-24 bg-slate-50" id="empresas">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones Corporativas</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="mt-6 text-slate-600 text-lg max-w-3xl">
                            Transformamos organizaciones a través de la gestión estratégica del talento y el bienestar.
                            Potencia el capital humano de tu empresa con resultados medibles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {corporateServices.map((group, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                                    <Presentation className="mr-3" />
                                    {group.category}
                                </h3>
                                <div className="space-y-6">
                                    {group.services.map((service, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <service.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">{service.title}</h4>
                                                <p className="text-slate-500">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate CTA */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">Lleva a tu empresa al siguiente nivel</h3>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Diseñamos propuestas personalizadas basadas en el diagnóstico real de tu organización.
                            Contáctanos para una sesión de consultoría inicial sin costo.
                        </p>
                        <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white font-bold h-14 px-10 rounded-xl shadow-xl shadow-blue-100">
                            Solicitar propuesta corporativa
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
