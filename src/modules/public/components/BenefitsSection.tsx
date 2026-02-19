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
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¿Por qué elegir Montero and Company?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Nos enfocamos en ofrecer una experiencia terapéutica de alta calidad, centrada en el paciente y respaldada por años de práctica profesional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <benefit.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
