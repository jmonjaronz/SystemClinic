import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const clients = [
    { name: "Empresa A", industry: "Banca & Finanzas" },
    { name: "Empresa B", industry: "Tecnología" },
    { name: "Empresa C", industry: "Educación" },
    { name: "Empresa D", industry: "Retail" },
    { name: "Empresa E", industry: "Consumo Masivo" },
];

const testimonials = [
    {
        text: "La consultoría organizacional de Montero & Co. transformó nuestra cultura interna. Los resultados en el clima laboral fueron inmediatos.",
        author: "Gerente de Talento Humano",
        company: "Corporación Líder en Retail",
    },
    {
        text: "Un enfoque sumamente profesional y humano. El equipo clínico es excepcional en el trato y seguimiento de cada paciente.",
        author: "Director General",
        company: "Institución Educativa",
    }
];

export default function TrustSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Corporate Clients Side */}
                    <div className="lg:w-1/2">
                        <Badge variant="outline" className="mb-6 border-indigo-200 text-indigo-700 bg-white px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full shadow-sm">
                            Soluciones Corporativas
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Empresas que confían en <br />
                            <span className="text-indigo-700">nuestra visión estratégica.</span>
                        </h2>
                        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                            Acompañamos a organizaciones en su transformación a través de la gestión del bienestar
                            organizacional y el desarrollo del talento con base científica y ética.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center grayscale hover:grayscale-0 transition-all duration-700">
                            {clients.map((client, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 group">
                                    <span className="text-sm font-black text-slate-400 group-hover:text-indigo-900 uppercase tracking-tighter transition-colors">{client.name}</span>
                                    <span className="text-[9px] text-slate-300 uppercase font-bold mt-1 tracking-widest">{client.industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Side */}
                    <div className="lg:w-1/2 flex flex-col gap-8 relative">
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-30 select-none"></div>

                        {testimonials.map((testi, idx) => (
                            <div key={idx} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/30 relative group transition-all duration-500 hover:border-indigo-100">
                                <div className="absolute top-10 right-10 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-700 opacity-50 group-hover:opacity-100 transition-all">
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                                    "{testi.text}"
                                </p>
                                <div className="flex flex-col relative z-10">
                                    <span className="text-slate-900 font-black tracking-tight">{testi.author}</span>
                                    <span className="text-sm text-slate-400 font-black uppercase tracking-widest text-[10px] mt-1">{testi.company}</span>
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 flex items-center gap-6 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>
                            <div className="text-4xl font-black tracking-tighter">20+</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight text-blue-100/70">
                                Años de experiencia <br /> en salud mental estratégica
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
