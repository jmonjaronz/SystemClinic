import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Navbar Placeholder */}
            <header className="border-b bg-white/80 backdrop-blur-md p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl text-blue-800">Montero and Company</div>
                    <nav className="flex gap-4 text-sm text-slate-600">
                        <a href="/" className="hover:text-blue-800">Inicio</a>
                        <a href="/servicios" className="hover:text-blue-800">Servicios</a>
                        <a href="/equipo" className="hover:text-blue-800">Nuestro Equipo</a>
                        <a href="/contacto" className="hover:text-blue-800">Contacto</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8">
                <Outlet />
            </main>

            {/* Footer Placeholder */}
            <footer className="border-t bg-white p-6 mt-auto">
                <div className="container mx-auto text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Montero and Company. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
}
