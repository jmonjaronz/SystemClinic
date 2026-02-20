import { ShieldCheck, Zap, Heart, Award } from "lucide-react";

const benefits = [
    {
        title: "Profesionales Colegiados",
        description: "Todo nuestro equipo cuenta con las certificaciones y experiencia necesarias para brindarte el mejor cuidado.",
        icon: Award,
    },
    {
        title: "Atención Inmediata",
        description: "Sabemos que tu bienestar no puede esperar. Agenda tu cita de manera rápida y sencilla.",
        icon: Zap,
    },
    {
        title: "Entorno Seguro",
        description: "Garantizamos total confidencialidad y un ambiente acogedor para que te sientas cómodo.",
        icon: ShieldCheck,
    },
    {
        title: "Enfoque Humano",
        description: "Tratamos a cada paciente con la empatía y dedicación que se merece.",
        icon: Heart,
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">¿Por qué elegir Montero and Company?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Nos enfocamos en ofrecer una experiencia terapéutica de alta calidad, centrada en el paciente y respaldada por años de práctica profesional estratégica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                                <benefit.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
