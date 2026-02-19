import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Calendar,
    Users,
    Settings,
    LogOut,
    Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemsProps {
    closeSheet: () => void;
}

const NavItems = ({ closeSheet }: NavItemsProps) => (
    <nav className="flex flex-col gap-2 p-4">
        <div className="mb-6 px-2">
            <span className="text-xl font-bold text-blue-800">Montero Intranet</span>
        </div>

        <NavLink
            to="/app"
            end
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`
            }
            onClick={closeSheet}
        >
            <LayoutDashboard size={20} />
            Dashboard
        </NavLink>

        <NavLink
            to="/app/citas"
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`
            }
            onClick={closeSheet}
        >
            <Calendar size={20} />
            Agenda de Citas
        </NavLink>

        <NavLink
            to="/app/pacientes"
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`
            }
            onClick={closeSheet}
        >
            <Users size={20} />
            Pacientes
        </NavLink>

        <NavLink
            to="/app/configuracion"
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`
            }
            onClick={closeSheet}
        >
            <Settings size={20} />
            Configuración
        </NavLink>

        <div className="mt-auto pt-8 border-t border-slate-100">
            <button className="flex items-center gap-3 px-3 py-2 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left">
                <LogOut size={20} />
                Cerrar Sesión
            </button>
        </div>
    </nav>
);

export default function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200 fixed h-full z-10">
                <NavItems closeSheet={() => setIsOpen(false)} />
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-20 flex items-center px-4 justify-between">
                <span className="font-bold text-blue-800">Montero Intranet</span>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 p-0">
                        <NavItems closeSheet={() => setIsOpen(false)} />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
