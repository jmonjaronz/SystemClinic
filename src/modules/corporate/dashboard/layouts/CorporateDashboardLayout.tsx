import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    BarChart3,
    Settings,
    LogOut,
    Bell,
    Search,
    Building2,
    ChevronRight,
    UserCircle,
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
    { name: "Inicio", path: "/empresa/app", icon: LayoutDashboard },
    { name: "Personal & Candidatos", path: "/empresa/app/personal", icon: Users },
    { name: "Reportes & Analíticas", path: "/empresa/app/analitica", icon: BarChart3 },
    { name: "Evaluaciones Asignadas", path: "/empresa/app/evaluaciones", icon: FileText },
    { name: "Configuración", path: "/empresa/app/configuracion", icon: Settings },
];

export default function CorporateDashboardLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-72 bg-slate-900 text-white flex flex-col hidden lg:flex">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Building2 className="text-white w-5 h-5" />
                        </div>
                        <span className="text-base font-black italic tracking-tighter uppercase">Montero <span className="text-blue-500">B2B</span></span>
                    </div>

                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold italic transition-all group ${isActive
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400"}`} />
                                    {item.name}
                                    {isActive && <ChevronRight className="ml-auto w-4 h-4 opacity-50" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-auto p-6">
                    <div className="bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <Building2 size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-500 italic">Empresa</p>
                                <p className="text-xs font-bold italic text-white truncate w-32">TechCorp Solutions S.A.C</p>
                            </div>
                        </div>
                        <p className="text-[9px] text-slate-500 italic font-medium">RUC: 20601234567</p>
                    </div>

                    <Button
                        variant="ghost"
                        onClick={() => navigate("/empresa/login")}
                        className="w-full mt-6 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl font-bold italic flex justify-start gap-3 px-4"
                    >
                        <LogOut size={18} /> Cerrar Sesión
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
                    <div className="relative w-96 hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                            placeholder="Buscar trabajador o candidato..."
                            className="pl-10 h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-blue-600 italic font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </Button>

                        <div className="h-8 w-px bg-slate-100 mx-2"></div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-3 px-2 hover:bg-slate-50 rounded-xl">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-xs font-black text-slate-900 italic leading-none">Admin Usuario</p>
                                        <p className="text-[10px] font-bold text-blue-600 italic mt-1">Gestor de Cuenta</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                                        <UserCircle size={24} />
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-2xl p-2 border-slate-100 shadow-xl" align="end">
                                <DropdownMenuLabel className="font-bold italic text-slate-500 text-[10px] uppercase px-3 pt-3">Mi Perfil Corporativo</DropdownMenuLabel>
                                <DropdownMenuSeparator className="my-2" />
                                <DropdownMenuItem className="rounded-xl font-bold italic py-3 focus:bg-blue-50 focus:text-blue-600 cursor-pointer">
                                    <Users className="mr-3 w-4 h-4" /> Centro de Ayuda
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-xl font-bold italic py-3 focus:bg-blue-50 focus:text-blue-600 cursor-pointer">
                                    <Settings className="mr-3 w-4 h-4" /> Configuración de Seguridad
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-2" />
                                <DropdownMenuItem
                                    onClick={() => navigate("/empresa/login")}
                                    className="rounded-xl font-bold italic py-3 focus:bg-red-50 focus:text-red-600 text-red-500 cursor-pointer"
                                >
                                    <LogOut className="mr-3 w-4 h-4" /> Finalizar Sesión
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
