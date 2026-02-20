import {
    Users,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Target,
    ShieldCheck,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Hero Hub */}
            <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165833267-023063510c49?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 border-blue-400/30 text-blue-400 bg-blue-400/10 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full">
                        Ecosistema de Bienestar Montero
                    </Badge>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                        Soluciones para cada <br />
                        <span className="text-blue-400 text-glow">dimensión humana.</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Desde el equilibrio emocional profundo para individuos, hasta la
                        transformación estratégica de organizaciones de alto nivel.
                    </p>
                </div>
            </section>

            {/* Selection Hub */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Personal Card */}
                        <div className="group relative bg-white rounded-[4rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden hover:border-blue-200 transition-all duration-700 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-100 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-blue-900 rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Users size={40} />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Bienestar Personal <br /> <span className="text-blue-900">& Familiar</span></h2>
                                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                                    Acompañamiento psicológico de excelencia para adultos, jóvenes y niños.
                                    Enfoque clínico riguroso con calidez humana.
                                </p>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Psicoterapia Integral Individual",
                                        "Terapia de Pareja y Familia",
                                        "Desarrollo Infantil y Juvenil",
                                        "Talleres de Salud Mental"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                            <CheckCircle2 className="text-blue-900" size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/servicios/bienestar-personal">
                                    <Button className="w-full h-16 bg-blue-900 hover:bg-blue-800 text-white font-black rounded-3xl text-lg flex items-center justify-center gap-3 group transition-all shadow-lg active:scale-95">
                                        Explorar Servicios Personales <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Corporate Card */}
                        <div className="group relative bg-white rounded-[4rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden hover:border-indigo-200 transition-all duration-700 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-indigo-100 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-indigo-700 rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Briefcase size={40} />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Soluciones <br /> <span className="text-indigo-700">Corporativas</span></h2>
                                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                                    Consultoría estratégica y gestión del talento humano con base científica.
                                    Transformamos el clima organizacional y el liderazgo.
                                </p>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Consultoría de Clima & Cultura",
                                        "Evaluación de Riesgos Psicosociales",
                                        "Executive & Team Coaching",
                                        "Programas de Salud Ocupacional"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                            <CheckCircle2 className="text-indigo-700" size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/servicios/soluciones-corporativas">
                                    <Button className="w-full h-16 bg-indigo-700 hover:bg-indigo-600 text-white font-black rounded-3xl text-lg flex items-center justify-center gap-3 group transition-all shadow-lg active:scale-95">
                                        Explorar Soluciones Empresas <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Montero Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">¿Por qué elegir Montero and Company?</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Nuestro compromiso es con la excelencia clínica y estratégica en cada intervención.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-slate-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Ética & Rigor</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Metodologías basadas en evidencia científica y un código ético inquebrantable.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-slate-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                                <Target size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Estrategia Real</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">No solo acompañamos; diseñamos planes de acción con resultados medibles.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-slate-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                                <Star size={32} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Experiencia Senior</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">Especialistas con trayectoria internacional en salud mental y negocios.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
