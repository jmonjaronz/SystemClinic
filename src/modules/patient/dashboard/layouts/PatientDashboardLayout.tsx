import { Outlet, Link, useLocation } from "react-router-dom";
import {
    Home,
    Calendar,
    Clock,
    Users,
    ClipboardList,
    FileText,
    LogOut,
    Menu,
    Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
    { name: "Inicio", path: "/paciente/app", icon: Home },
    { name: "Agendar Cita", path: "/paciente/app/agendar", icon: Calendar },
    { name: "Mis Citas", path: "/paciente/app/citas", icon: Clock },
    { name: "Mi Familia", path: "/paciente/app/familia", icon: Users },
    { name: "Seguimiento", path: "/paciente/app/seguimiento", icon: ClipboardList },
    { name: "Tests Virtuales", path: "/paciente/app/tests", icon: FileText },
];

export default function PatientDashboardLayout() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/paciente/app" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                        <span className="font-bold text-xl text-slate-900 hidden sm:inline-block italic">Montero <span className="text-blue-600">Bienestar</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${location.pathname === item.path
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-slate-600">
                            <Bell size={20} />
                        </Button>

                        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block" />

                        <div className="flex items-center gap-3 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900">Juan Pérez</p>
                                <p className="text-xs text-slate-500 italic">Paciente</p>
                            </div>
                            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                                JP
                            </div>
                        </div>

                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden ml-2">
                            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu size={20} />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                                    <SheetHeader className="text-left border-b pb-4 mb-4">
                                        <SheetTitle className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                                            Montero Bienestar
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-2">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3 ${location.pathname === item.path
                                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                                                    : "text-slate-600 hover:bg-slate-100"
                                                    }`}
                                            >
                                                <item.icon size={20} />
                                                {item.name}
                                            </Link>
                                        ))}
                                        <div className="mt-8 pt-8 border-t border-slate-100">
                                            <Button variant="destructive" className="w-full justify-start gap-3 rounded-xl h-12" asChild>
                                                <Link to="/paciente/login">
                                                    <LogOut size={20} />
                                                    Cerrar Sesión
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>

            {/* Simple Footer */}
            <footer className="bg-white border-t py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2026 Clínica Montero & Company. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-slate-400 hover:text-slate-600">Ayuda</a>
                        <a href="#" className="text-sm text-slate-400 hover:text-slate-600">Términos</a>
                        <a href="#" className="text-sm text-slate-400 hover:text-slate-600">Privacidad</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
