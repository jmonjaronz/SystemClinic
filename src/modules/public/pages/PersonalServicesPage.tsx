import {
    Brain,
    Heart,
    Baby,
    ClipboardCheck,
    Lightbulb,
    Users,
    Users2,
    BookOpen,
    Smile,
    UserCheck,
    Star,
    ShieldCheck,
    Calendar,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const personalServices = [
    {
        category: "Psicología & Psicoterapia",
        services: [
            { title: "Psicoterapia Integral", description: "Enfoque profundo para el tratamiento de trastornos emocionales y del comportamiento.", icon: Brain },
            { title: "Psicoterapia de Pareja", description: "Resolución de conflictos y fortalecimiento del vínculo afectivo bajo guía profesional.", icon: Heart },
            { title: "Consulta Psicológica", description: "Orientación profesional para situaciones puntuales y apoyo en la toma de decisiones.", icon: UserCheck },
            { title: "Evaluación Psicológica", description: "Aplicación de baterías de tests científicos para diagnósticos clínicos precisos.", icon: ClipboardCheck },
        ]
    },
    {
        category: "Desarrollo Infantil y Juvenil",
        services: [
            { title: "Estimulación Temprana", description: "Potenciamos las capacidades motoras y cognitivas desde los primeros meses de vida.", icon: Baby },
            { title: "Terapia Ocupacional", description: "Ayudamos a niños a desarrollar independencia en sus actividades y juegos diarios.", icon: Smile },
            { title: "Problemas de Aprendizaje", description: "Intervención especializada en procesos de lectura, escritura y habilidades de cálculo.", icon: BookOpen },
            { title: "Habilidades Sociales", description: "Estrategias grupales para fortalecer la comunicación y la empatía en jóvenes.", icon: Users },
        ]
    },
    {
        category: "Talleres y Crecimiento",
        services: [
            { title: "Talleres Psicoeducativos", description: "Aprendizaje dinámico sobre manejo de emociones y habilidades blandas.", icon: Lightbulb },
            { title: "Grupos de Apoyo", description: "Espacios seguros guiados por profesionales para compartir vivencias y sanar.", icon: Users2 },
            { title: "Escuela para Padres", description: "Crianza positiva y consciente para fortalecer el entorno familiar.", icon: Heart },
            { title: "Mindfulness & Bienestar", description: "Técnicas de atención plena para reducir el estrés y conectar con el presente.", icon: Star },
        ]
    }
];

export default function PersonalServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 bg-blue-400/10 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full">
                        Bienestar Personal & Familiar
                    </Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-none">
                        Tu salud mental merece <br />
                        <span className="text-blue-400">el más alto estándar.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
                        Brindamos acompañamiento psicológico de excelencia,
                        basado en la ética y el rigor clínico para transformar tu vida.
                    </p>
                    <Link to="/paciente/login">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black h-16 px-10 rounded-2xl shadow-2xl shadow-blue-500/20 transition-all hover:-translate-y-1 text-lg">
                            Agendar Cita
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                                Un enfoque humano <br />
                                <span className="text-blue-900">orientado a resultados.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                En Montero and Company, entendemos que cada proceso es único. No solo escuchamos;
                                diseñamos una estrategia terapéutica personalizada que te brinde herramientas
                                tangibles para enfrentar los desafíos de la vida diaria.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: ShieldCheck, text: "Máxima confidencialidad y ética profesional." },
                                    { icon: Star, text: "Especialistas con posgrados y amplia trayectoria." },
                                    { icon: Users, text: "Atención cálida en un entorno clínico seguro." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                                        <div className="w-8 h-8 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center">
                                            <item.icon size={18} />
                                        </div>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=800"
                                    alt="Sesión de terapia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-blue-900 p-8 rounded-[40px] text-white shadow-2xl max-w-[280px]">
                                <Calendar className="mb-4 text-blue-400" size={32} />
                                <p className="font-bold text-lg leading-tight">Atención presencial en Chiclayo y modalidad Online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nuestras Especialidades</h2>
                        <div className="w-24 h-2 bg-blue-900 rounded-full mx-auto"></div>
                    </div>

                    <div className="space-y-24">
                        {personalServices.map((group, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="px-4 py-1.5 bg-blue-900 text-white rounded-xl text-xs font-black uppercase tracking-widest">{idx + 1}</div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{group.category}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {group.services.map((service, sIdx) => (
                                        <Card key={sIdx} className="border-none shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group rounded-[2.5rem] bg-white hover:bg-white border border-transparent hover:border-blue-100 hover:-translate-y-2 p-4">
                                            <CardHeader className="pb-4">
                                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                                                    <service.icon size={28} />
                                                </div>
                                                <CardTitle className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-2">{service.title}</CardTitle>
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

            {/* CTA Final */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-900 rounded-[60px] p-8 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-colors duration-1000 group-hover:bg-white/10"></div>
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight relative z-10 leading-tight">
                            ¿Listo para dar el <br /> <span className="text-blue-400">primer paso?</span>
                        </h2>
                        <p className="text-blue-100/70 max-w-xl mx-auto text-lg mb-12 relative z-10">
                            La salud emocional es la base de todo éxito. Permítenos acompañarte en este proceso de transformación personal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/paciente/login">
                                <Button className="bg-white text-blue-900 hover:bg-blue-50 font-black h-16 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 text-lg flex items-center gap-3">
                                    Reserva tu cita <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link to="/contacto">
                                <Button className="bg-black text-white hover:bg-blue-500 font-black h-16 px-12 rounded-2xl shadow-xl transition-all hover:scale-105 text-lg flex items-center gap-3">
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
