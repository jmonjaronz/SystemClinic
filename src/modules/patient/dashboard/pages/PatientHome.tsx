import {
    Calendar,
    Users,
    FileText,
    ArrowRight,
    Plus,
    Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PatientHome() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Greeting Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900 italic">¡Hola, Juan! 👋</h1>
                <p className="text-slate-500 mt-1 italic">Bienvenido a tu espacio personal de salud y bienestar.</p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-blue-600 text-white border-none shadow-lg shadow-blue-100 relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform">
                        <Calendar size={120} />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium opacity-90">Próxima Cita</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold">Mañana, 10:30 AM</span>
                            <span className="text-blue-100 text-sm mt-1 flex items-center gap-1">
                                <Video size={14} /> Teleconsulta
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/20 text-white font-bold h-9">
                            Ver Detalles
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-slate-500">Última Evaluación</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-slate-900">12 Feb, 2026</span>
                            <span className="text-slate-500 text-sm mt-1">Psicología Integral</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="ghost" className="w-full text-blue-700 hover:text-blue-800 hover:bg-blue-50 font-bold h-9">
                            Ver Informe <ArrowRight size={14} className="ml-2" />
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="border-slate-200 shadow-sm border-dashed flex flex-col items-center justify-center p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors mb-4">
                        <Plus size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900">Agendar Nueva Cita</h3>
                    <p className="text-sm text-slate-500 px-4">Elige a tu especialista y horario ideal.</p>
                </Card>
            </div>

            {/* Main Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                {/* Family Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Users size={20} className="text-blue-600" />
                            Mi Familia a Cargo
                        </h2>
                        <Button variant="link" className="text-blue-700 font-bold p-0">Gestionar</Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white border rounded-2xl p-4 flex items-center justify-between hover:border-blue-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 font-bold border border-pink-100">
                                    MP
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Mariana Pérez</h4>
                                    <p className="text-xs text-slate-500 italic">Hija • 8 años</p>
                                </div>
                            </div>
                            <Badge variant="outline" className="text-xs border-slate-200">Sin citas pendientes</Badge>
                        </div>
                        <Button variant="outline" className="w-full border-dashed h-14 rounded-2xl text-slate-500 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50/50">
                            <Plus size={18} className="mr-2" /> Registrar Familiar
                        </Button>
                    </div>
                </div>

                {/* Evaluations & Tests */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <FileText size={20} className="text-blue-600" />
                            Pendientes y Tests
                        </h2>
                        <Button variant="link" className="text-blue-700 font-bold p-0">Ver todo</Button>
                    </div>
                    <Card className="border-blue-100 bg-blue-50/30 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="p-4 flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <ClipboardList size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900">Test de Ansiedad (GAD-7)</h4>
                                    <p className="text-sm text-slate-500 mt-1 italic">Asignado por: Dra. Claudia Silva</p>
                                    <div className="mt-3">
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-bold text-xs h-8">
                                            Responder Ahora
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function ClipboardList({ size = 24, className, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    )
}
