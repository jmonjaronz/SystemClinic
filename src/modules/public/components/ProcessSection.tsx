const steps = [
    {
        number: "01",
        title: "Agenda tu Cita",
        description: "Elige el especialista y el horario que mejor se adapte a ti a través de nuestra plataforma web o WhatsApp.",
    },
    {
        number: "02",
        title: "Primera Evaluación",
        description: "Tendrás una sesión inicial para conocer tus necesidades y establecer los objetivos del tratamiento.",
    },
    {
        number: "03",
        title: "Inicia tu Proceso",
        description: "Comienza tus sesiones programadas con el acompañamiento constante de tu terapeuta.",
    },
];

export default function ProcessSection() {
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        {/* Background elements with better aesthetics */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800 rounded-full blur-[120px] opacity-30 -mr-64 -mt-64 group-hover:bg-blue-700 transition-colors duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10 -ml-96 -mb-96"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">¿Cómo empezar en Montero and Company?</h2>
                <p className="text-blue-100/80 max-w-2xl mx-auto text-lg leading-relaxed">
                    Hemos diseñado un proceso ágil y transparente para que puedas enfocarte en lo más importante: tu crecimiento y bienestar estratégico.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent z-0"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                        <div className="text-6xl md:text-8xl font-black text-white/10 mb-[-1.5rem] select-none group-hover:text-white/20 transition-colors duration-500 font-sans">
                            {step.number}
                        </div>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                            <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h3>
                        <p className="text-blue-100/70 text-base leading-relaxed max-w-[280px]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
