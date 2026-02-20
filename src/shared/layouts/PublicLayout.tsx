import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ChevronDown,
    User,
    Briefcase,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";

export default function PublicLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            {/* Top Bar / Emergency or Info (Optional) */}
            <div className="bg-blue-900 text-white text-[10px] md:text-xs py-2 px-4 text-center font-medium uppercase tracking-widest">
                Bienestar Integral & Consultoría Estratégica en Salud Mental
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-all duration-300">
                <div className="container mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                                MC
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black text-slate-900 tracking-tighter">MONTERO</span>
                                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">And Company</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <div className="group relative py-8">
                                <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-blue-800 transition-colors">
                                    Servicios <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                                </button>

                                {/* Megamenu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4 border-b border-blue-100 pb-2">Bienestar Personal & Familia</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link to="/servicios/bienestar-personal" className="flex flex-col group/item">
                                                        <span className="text-sm font-black text-slate-900 group-hover/item:text-blue-900 transition-colors">Clínica de Salud Mental</span>
                                                        <span className="text-xs text-slate-500">Terapia personalizada para adultos y jóvenes.</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/paciente/login" className="flex flex-col group/item">
                                                        <span className="text-sm font-black text-slate-900 group-hover/item:text-blue-900 transition-colors">Portal de Pacientes</span>
                                                        <span className="text-xs text-slate-500">Gestión de citas y seguimiento clínico.</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="border-l pl-8 border-slate-100">
                                            <h3 className="text-xs font-black text-indigo-700 uppercase tracking-widest mb-4 border-b border-indigo-100 pb-2">Soluciones Corporativas</h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link to="/servicios/soluciones-corporativas" className="flex flex-col group/item">
                                                        <span className="text-sm font-black text-slate-900 group-hover/item:text-indigo-700 transition-colors">Consultora de Talento</span>
                                                        <span className="text-xs text-slate-500">Visión estratégica y bienestar organizacional.</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/empresa/login" className="flex flex-col group/item">
                                                        <span className="text-sm font-black text-slate-900 group-hover/item:text-indigo-700 transition-colors">Portal de Empresas</span>
                                                        <span className="text-xs text-slate-500">Acceso a reportes y evaluaciones estratégicas.</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
                                        <span className="text-slate-400">¿No sabes por dónde empezar?</span>
                                        <Link to="/contacto" className="text-blue-700 font-bold hover:underline">Hablar con un asesor</Link>
                                    </div>
                                </div>
                            </div>

                            <Link to="/equipo" className="text-sm font-bold text-slate-600 hover:text-blue-800 transition-colors">Nuestro Equipo</Link>
                            <Link to="/contacto" className="text-sm font-bold text-slate-600 hover:text-blue-800 transition-colors">Contacto</Link>
                        </nav>

                        {/* CTAs */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link to="/paciente/login">
                                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-100 transition-all hover:-translate-y-0.5">
                                    <User size={18} />
                                    Personas
                                </Button>
                            </Link>
                            <div className="h-6 w-px bg-slate-200 mx-1"></div>
                            <Link to="/empresa/login">
                                <Button className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-100 transition-all hover:-translate-y-0.5">
                                    <Briefcase size={18} />
                                    Empresas
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-slate-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">Servicios</h3>
                                <div className="space-y-4">
                                    <Link to="/servicios/bienestar-personal" className="block text-sm font-black" onClick={() => setIsMenuOpen(false)}>Bienestar Personal</Link>
                                    <Link to="/servicios/soluciones-corporativas" className="block text-sm font-black" onClick={() => setIsMenuOpen(false)}>Soluciones Corporativas</Link>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-50 space-y-4">
                                <Link to="/paciente/login" className="flex items-center gap-3 text-sm font-bold" onClick={() => setIsMenuOpen(false)}>
                                    <User size={18} className="text-blue-900" />
                                    Portal Paciente
                                </Link>
                                <Link to="/empresa/login" className="flex items-center gap-3 text-sm font-bold" onClick={() => setIsMenuOpen(false)}>
                                    <Briefcase size={18} className="text-indigo-700" />
                                    Portal de Empresas
                                </Link>
                            </div>
                            <div className="flex flex-col gap-3 pt-2">
                                <Link to="/paciente/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full bg-blue-900 hover:bg-blue-800 font-bold h-12 rounded-xl text-white">
                                        <User size={18} className="mr-2" />
                                        Personas
                                    </Button>
                                </Link>
                                <Link to="/empresa/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full bg-indigo-700 hover:bg-indigo-600 font-bold h-12 rounded-xl text-white">
                                        <Briefcase size={18} className="mr-2" />
                                        Empresas
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t bg-slate-900 text-slate-400 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white font-black">
                                    MC
                                </div>
                                <span className="text-xl font-black text-white tracking-tighter uppercase">Montero & Co.</span>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Transformando vidas y organizaciones a través de la excelencia clínica y estratégica.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Navegación</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link></li>
                                <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Servicios</Link></li>
                                <li><Link to="/equipo" className="hover:text-blue-400 transition-colors">Especialistas</Link></li>
                                <li><Link to="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Atención</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/paciente/login" className="hover:text-blue-400 transition-colors">Agendar Cita</Link></li>
                                <li><Link to="/paciente/login" className="hover:text-blue-400 transition-colors">Portal Pacientes</Link></li>
                                <li><Link to="/empresa/login" className="hover:text-blue-400 transition-colors">Empresas & Convenios</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Contacto</h4>
                            <ul className="space-y-4 text-sm">
                                <li>T: +51 987 654 321</li>
                                <li>E: contacto@monteroycompani.pe</li>
                                <li>Sede: Santiago de Surco, Lima</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <p>© {new Date().getFullYear()} Montero & Company. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">Privacidad</a>
                            <a href="#" className="hover:text-white">Términos</a>
                            <a href="#" className="hover:text-white">Libro de Reclamaciones</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
