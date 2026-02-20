import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Background pattern or subtle color */}
            <div className="absolute inset-0 bg-slate-50 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-900 uppercase bg-blue-50 rounded-full">
                            Bienvenido a Montero and Company
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Tu bienestar mental es <br />
                            <span className="text-blue-900">nuestra prioridad absoluta.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Ofrecemos terapia psicológica profesional, ética y empática.
                            Nuestro equipo está listo para acompañarte en tu camino hacia una salud mental plena y duradera.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/paciente/login">
                                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 h-14 text-lg shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 w-full sm:w-auto">
                                    Agendar cita personal
                                </Button>
                            </Link>
                            <Link to="/empresa/login">
                                <Button size="lg" className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold px-8 h-14 text-lg shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 w-full sm:w-auto">
                                    Soluciones Empresas
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 aspect-[4/3] flex items-center justify-center">
                                <HeroImage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
