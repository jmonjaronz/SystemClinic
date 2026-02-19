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
    return (
        <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-10 -ml-48 -mb-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo empezar en Montero and Company?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Hemos simplificado nuestro proceso para que puedas enfocarte en lo más importante: tu bienestar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="text-5xl md:text-7xl font-black text-yellow-500 mb-6 select-none">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
