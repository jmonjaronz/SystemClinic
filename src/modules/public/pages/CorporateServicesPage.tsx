import {
    TrendingUp,
    ShieldCheck,
    Users,
    Globe,
    BarChart3,
    Briefcase,
    Scale,
    Stethoscope,
    Presentation,
    Target,
    Zap,
    ArrowRight,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const corporateServices = [
    {
        category: "Liderazgo & Desarrollo de Equipos",
        services: [
            { title: "Executive Coaching", description: "Acompañamiento a líderes de alto nivel para potenciar su toma de decisiones y visión estratégica.", icon: TrendingUp },
            { title: "Team Coaching", description: "Metodologías de intervención para maximizar la cohesión y el alto rendimiento de equipos clave.", icon: Users },
            { title: "Gestión del Cambio", description: "Estrategias psicológicas para facilitar transiciones organizacionales y adaptación cultural.", icon: Zap },
            { title: "Team Building Estratégico", description: "Experiencias diseñadas para fortalecer la confianza clínica y el propósito grupal.", icon: Globe },
        ]
    },
    {
        category: "Salud Ocupacional & Riesgos",
        services: [
            { title: "Evaluación de Riesgos Psicosociales", description: "Diagnóstico profundo bajo normativa vigente para identificar factores de estrés y fatiga.", icon: ShieldCheck },
            { title: "Programas de Wellness", description: "Implementación de sistemas de bienestar continuo para reducir el ausentismo laboral.", icon: Stethoscope },
            { title: "Intervención en Crisis", description: "Soporte especializado ante eventos críticos o cambios disruptivos en la organización.", icon: Target },
        ]
    },
    {
        category: "Cultura & Gestión del Talento",
        services: [
            { title: "Diagnóstico de Clima Laboral", description: "Medición científica de la percepción interna para optimizar la retención de talento.", icon: BarChart3 },
            { title: "Evaluaciones Psicolaborales", description: "Procesos de selección de alto nivel con baterías de tests especializados.", icon: Award },
            { title: "Consultoría de Valores", description: "Alineación de la cultura organizacional con los objetivos estratégicos del negocio.", icon: Scale },
            { title: "Optimización de Estructuras", description: "Rediseño de roles y procesos desde una perspectiva humano-céntrica.", icon: Briefcase },
        ]
    }
];

export default function CorporateServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section - Business Focused */}
            <section className="relative py-24 md:py-32 bg-indigo-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 border-indigo-400/30 text-indigo-400 bg-indigo-400/10 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full">
                        Soluciones Corporativas Estratégicas
                    </Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-none">
                        Potenciamos el activo <br />
                        <span className="text-indigo-400">más valioso: tu equipo.</span>
                    </h1>
                    <p className="text-indigo-100/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 italic">
                        Transformamos la cultura organizacional a través de la ciencia del comportamiento
                        y la consultoría estratégica de alto nivel.
                    </p>
                    <Link to="/empresa/login">
                        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-black h-16 px-10 rounded-2xl shadow-2xl shadow-indigo-500/20 transition-all hover:-translate-y-1 text-lg">
                            Solicitar Consultoría
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="aspect-video bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                    alt="Colaboración en equipo"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                                Consultoría basada en <br />
                                <span className="text-indigo-700">evidencia y resultados.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                En Montero and Company, no solo impartimos talleres. Co-creamos estrategias
                                que impactan directamente en el KPI más importante de tu empresa: la salud
                                y el compromiso de tus colaboradores.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <Target className="text-indigo-700" size={32} />
                                    <h4 className="font-black text-slate-900">Enfoque ROI</h4>
                                    <p className="text-sm text-slate-500">Programas diseñados para retornar valor tangible al negocio.</p>
                                </div>
                                <div className="space-y-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <Presentation className="text-indigo-700" size={32} />
                                    <h4 className="font-black text-slate-900">Expertos Senior</h4>
                                    <p className="text-sm text-slate-500">Consultores con experiencia en empresas multinacionales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services B2B Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Portafolio Estratégico</h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Soluciones integrales para los desafíos del capital humano en el siglo XXI.
                            </p>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <div className="w-12 h-1 bg-indigo-700 rounded-full"></div>
                            <div className="w-4 h-1 bg-indigo-200 rounded-full"></div>
                            <div className="w-4 h-1 bg-indigo-200 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {corporateServices.map((group, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-indigo-100 transition-colors"></div>
                                <h3 className="text-2xl font-black text-indigo-900 mb-10 flex items-center gap-4 relative z-10">
                                    <div className="w-2 h-8 bg-indigo-700 rounded-full"></div>
                                    {group.category}
                                </h3>
                                <div className="space-y-8 relative z-10">
                                    {group.services.map((service, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-6 group/item">
                                            <div className="w-14 h-14 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-indigo-700 group-hover/item:text-white transition-all duration-300 shadow-sm">
                                                <service.icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-xl tracking-tight mb-2 group-hover/item:text-indigo-700 transition-colors">{service.title}</h4>
                                                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Corporate */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-indigo-950 rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-transparent"></div>
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight relative z-10 leading-tight">
                            Diseñamos una propuesta <br /> <span className="text-indigo-400">a tu medida.</span>
                        </h2>
                        <p className="text-indigo-100/60 max-w-2xl mx-auto text-lg mb-12 relative z-10">
                            Agenda una sesión de diagnóstico sin costo con uno de nuestros consultores senior
                            y descubre cómo podemos potenciar tu organización.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/empresa/login">
                                <Button className="bg-white text-indigo-950 hover:bg-indigo-50 font-black h-16 px-12 rounded-2xl shadow-2xl transition-all hover:scale-105 text-lg flex items-center gap-3">
                                    Solicitar Propuesta <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link to="/contacto">
                                <Button className="bg-black text-white hover:bg-indigo-600 font-black h-16 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 text-lg flex items-center gap-3">
                                    Contáctanos
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
