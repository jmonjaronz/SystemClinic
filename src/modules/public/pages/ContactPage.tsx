import ContactSection from "../components/ContactSection";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full -ml-20 -mt-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Badge className="mb-6 bg-blue-600 hover:bg-blue-600 text-white border-none py-1 px-4 uppercase tracking-widest text-xs">Conexión Directa</Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
                        Estamos a un paso <br />
                        <span className="text-blue-500">de Escucharte</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Tu bienestar es nuestra prioridad. Contáctanos por el medio que prefieras y
                        un especialista te atenderá a la brevedad.
                    </p>
                </div>
            </section>

            <ContactSection />

            {/* Google Maps / Office Visual Placeholder */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-slate-200 h-[500px] rounded-[48px] overflow-hidden relative shadow-inner">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                            alt="Oficina principal"
                            className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white text-center max-w-sm">
                                <h4 className="text-2xl font-black text-slate-900 mb-2">Visítanos</h4>
                                <p className="text-slate-600 mb-6">Contamos con espacios diseñados para tu comodidad y total privacidad.</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
