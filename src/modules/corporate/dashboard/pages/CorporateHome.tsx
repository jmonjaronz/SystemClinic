import {
    Users,
    UserCheck,
    FileText,
    TrendingUp,
    AlertCircle,
    ChevronRight,
    ArrowUpRight,
    Building2,
    Calendar,
    Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CorporateHome() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 italic">Bienvenido, TechCorp Solutions</h1>
                    <p className="text-slate-500 italic font-medium">Panel de gestión de salud organizacional y procesos de selección.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold italic shadow-lg shadow-blue-100">
                        <Calendar className="w-4 h-4 mr-2" /> Programar Evaluación Grupal
                    </Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Colaboradores", value: "124", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Evaluaciones Activas", value: "18", icon: FileText, color: "text-orange-600", bg: "bg-orange-50" },
                    { label: "Candidatos", value: "12", icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Salud Org.", value: "85%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-3xl border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                                    <stat.icon size={24} />
                                </div>
                                <Badge variant="outline" className="text-[10px] font-black italic text-slate-400 border-slate-100">+12%</Badge>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 italic">{stat.value}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic mt-1">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Processes */}
                <Card className="lg:col-span-2 rounded-[2.5rem] border-slate-100 shadow-sm overflow-hidden">
                    <CardHeader className="p-8 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50">
                        <div className="space-y-1">
                            <CardTitle className="text-xl font-black italic flex items-center gap-2">
                                <Target className="text-blue-600" /> Procesos de Selección Activos
                            </CardTitle>
                            <p className="text-xs text-slate-500 font-bold italic italic">Seguimiento de candidatos en evaluación psicológica.</p>
                        </div>
                        <Button variant="ghost" className="text-blue-600 font-black italic text-sm hover:bg-blue-50 rounded-xl">
                            Ver Todos <ChevronRight size={16} />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-50">
                            {[
                                { name: "Ricardo Alva", role: "Sr. Developer", test: "Personalidad & Raven", status: "En Proceso", color: "text-orange-600 bg-orange-50" },
                                { name: "Sofía Mendez", role: "UX Designer", test: "Cuestionario de Empatía", status: "Revision Lab", color: "text-blue-600 bg-blue-50" },
                                { name: "Marco Polo", role: "DevOps Eng.", test: "Resiliencia Laboral", status: "Completado", color: "text-emerald-600 bg-emerald-50" },
                            ].map((person, i) => (
                                <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-[1.2rem] bg-slate-900 flex items-center justify-center text-white font-black italic shadow-lg">
                                            {person.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 italic leading-none">{person.name}</h4>
                                            <p className="text-xs text-slate-500 font-bold italic mt-1.5">{person.role} • <span className="text-blue-600 uppercase tracking-tight">{person.test}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <Badge className={`rounded-full border-none font-black italic uppercase text-[10px] px-3 ${person.color}`}>
                                            {person.status}
                                        </Badge>
                                        <Button size="icon" variant="ghost" className="rounded-xl opacity-0 group-hover:opacity-100 transition-all text-slate-400 hover:text-blue-600 hover:bg-blue-100">
                                            <ArrowUpRight size={18} />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Organizational Health Widget */}
                <div className="space-y-8">
                    <Card className="rounded-[2.5rem] border-none bg-slate-900 text-white shadow-xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                            <Building2 size={120} />
                        </div>
                        <CardContent className="p-8 relative z-10 space-y-6">
                            <div className="space-y-2">
                                <Badge className="bg-blue-600 text-white border-none font-black italic uppercase text-[10px]">Alerta de Clima</Badge>
                                <h3 className="text-2xl font-black italic leading-tight mt-2">Niveles de Estrés en TI</h3>
                                <p className="text-slate-400 text-sm font-medium italic mt-2 leading-relaxed">
                                    Hemos detectado un incremento del 15% en fatiga laboral dentro del área de TI durante el último mes.
                                </p>
                            </div>
                            <Button className="w-full bg-white text-slate-900 hover:bg-blue-50 h-12 rounded-xl font-black italic shadow-lg shadow-white/10">
                                Ver Reporte de Clima
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[2.5rem] border-slate-100 shadow-sm bg-white p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                                <AlertCircle size={20} />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 italic">Tareas del Admin</h4>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Validar 4 vouchers de candidatos",
                                "Cargar nueva lista de personal",
                                "Revisar reporte de clima Q1"
                            ].map((task, i) => (
                                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 shadow-sm shadow-blue-400 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-sm font-bold italic text-slate-600 group-hover:text-slate-900 transition-colors">{task}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
