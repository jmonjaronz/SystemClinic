import { useState } from "react";
import {
    Search,
    User,
    Users,
    TrendingUp,
    Target,
    ClipboardList,
    ArrowUpRight,
    FileCheck,
    Stethoscope,
    ChevronRight,
    MessageSquare,
    Download,
    Lightbulb,
    CheckCircle2,
    BookOpen,
    Backpack
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data for Patient Tracking
const mockTracking = [
    {
        id: "TRK-001",
        patient: "Juan Pérez",
        type: "self",
        date: "Hoy",
        nextSession: "2026-02-25",
        specialist: "Dra. Claudia Silva",
        currentGoal: "Reducción de ansiedad ante hablar en público.",
        tasks: [
            { id: "t1", text: "Practicar 5 min de respiración diafragmática al día", done: true },
            { id: "t2", text: "Registrar 3 situaciones de estrés en el diario", done: false },
        ],
        prep: "Traer el cuaderno de notas con los registros de la semana.",
        materials: [
            { id: "m1", name: "Guia_Respiracion_Nivel1.pdf", type: "guide" },
            { id: "m2", name: "Plantilla_Diario_Emocional.pdf", type: "template" }
        ]
    },
    {
        id: "TRK-002",
        patient: "Mariana Pérez",
        type: "family",
        date: "Hace 2 días",
        nextSession: "2026-02-27",
        specialist: "Dra. Sofía Luna",
        currentGoal: "Fortalecimiento de la coordinación motriz.",
        tasks: [
            { id: "t3", text: "Juego de bloques (15 min)", done: true },
            { id: "t4", text: "Dibujo con crayones gruesos", done: true },
        ],
        prep: "Traer ropa cómoda para Mariana (sesión de movimiento).",
        materials: [
            { id: "m3", name: "Ejercicios_Casa_Motricidad.pdf", type: "guide" }
        ]
    }
];

export default function PatientTracking() {
    const [filterPatient, setFilterPatient] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTracking = mockTracking.filter(item => {
        const matchesPatient = filterPatient === "all" || item.type === filterPatient;
        const matchesSearch = item.specialist.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.patient.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesPatient && matchesSearch;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 italic">Mi Seguimiento</h1>
                    <p className="text-slate-500 italic">Tu plan de trabajo, metas y materiales para el proceso terapéutico.</p>
                </div>
            </div>

            {/* Preparation Highlight */}
            {filteredTracking.length > 0 && (
                <Card className="rounded-3xl border-none bg-blue-600 text-white shadow-xl shadow-blue-200 overflow-hidden relative group">
                    <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <Backpack size={120} />
                    </div>
                    <CardContent className="p-8 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-4 max-w-2xl">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-white/20 text-white border-none font-bold italic uppercase text-[10px]">Preparación para tu cita</Badge>
                                    <Badge className="bg-blue-400 text-white border-none font-bold italic uppercase text-[10px]">Próxima: {filteredTracking[0].nextSession}</Badge>
                                </div>
                                <h2 className="text-3xl font-black italic leading-tight">¿Qué necesitas para tu siguiente sesión?</h2>
                                <p className="text-blue-50 font-medium italic opacity-90">
                                    "{filteredTracking[0].prep}"
                                </p>
                            </div>
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 rounded-2xl font-black italic shadow-lg">
                                Ver Detalles de la Cita <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                        placeholder="Filtrar por nombre o especialista..."
                        className="pl-10 h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-blue-600 italic"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant={filterPatient === "all" ? "default" : "outline"}
                        onClick={() => setFilterPatient("all")}
                        className={`rounded-xl h-11 font-bold italic ${filterPatient === "all" ? "bg-blue-600 shadow-md shadow-blue-100" : ""}`}
                    >
                        Todos
                    </Button>
                    <Button
                        variant={filterPatient === "self" ? "default" : "outline"}
                        onClick={() => setFilterPatient("self")}
                        className={`rounded-xl h-11 font-bold italic ${filterPatient === "self" ? "bg-blue-600 shadow-md shadow-blue-100" : ""}`}
                    >
                        <User className="w-4 h-4 mr-2" /> Mío
                    </Button>
                    <Button
                        variant={filterPatient === "family" ? "default" : "outline"}
                        onClick={() => setFilterPatient("family")}
                        className={`rounded-xl h-11 font-bold italic ${filterPatient === "family" ? "bg-blue-600 shadow-md shadow-blue-100" : ""}`}
                    >
                        <Users className="w-4 h-4 mr-2" /> Familia
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="plan" className="w-full">
                <TabsList className="bg-slate-100 p-1 rounded-2xl h-14 w-full md:w-auto grid grid-cols-2 md:inline-flex">
                    <TabsTrigger value="plan" className="rounded-xl font-bold italic data-[state=active]:bg-white data-[state=active]:shadow-sm px-8">
                        <TrendingUp className="w-4 h-4 mr-2" /> Plan de Trabajo
                    </TabsTrigger>
                    <TabsTrigger value="materials" className="rounded-xl font-bold italic data-[state=active]:bg-white data-[state=active]:shadow-sm px-8">
                        <BookOpen className="w-4 h-4 mr-2" /> Caja de Herramientas
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="plan" className="mt-8 space-y-6">
                    {filteredTracking.map((item) => (
                        <Card key={item.id} className="rounded-3xl border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/30 transition-all overflow-hidden">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-blue-600/10 text-blue-600 border-none font-bold italic uppercase text-[10px]">Meta Actual</Badge>
                                            {item.type === 'family' && (
                                                <Badge className="bg-pink-50 text-pink-600 border-none font-black italic uppercase text-[10px]">{item.patient}</Badge>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 italic leading-tight">
                                            {item.currentGoal}
                                        </h3>
                                        <p className="text-sm text-slate-400 font-bold italic flex items-center gap-2">
                                            <Stethoscope size={14} className="text-blue-600" /> {item.specialist} • {item.date}
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center min-w-[120px]">
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest italic mb-1">Progreso</p>
                                        <p className="text-2xl font-black text-blue-600 italic">
                                            {Math.round((item.tasks.filter(t => t.done).length / item.tasks.length) * 100)}%
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    {/* Left: Checklists */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest italic mb-4">
                                            <Target size={12} className="text-blue-600" /> Acuerdos y Actividades
                                        </div>
                                        <div className="space-y-3">
                                            {item.tasks.map(task => (
                                                <div key={task.id} className={`flex items-start gap-3 p-4 rounded-2xl border-2 transition-all ${task.done ? 'bg-green-50 border-green-100' : 'bg-slate-50 border-slate-50'}`}>
                                                    <div className={`mt-0.5 rounded-full p-0.5 ${task.done ? 'text-green-600' : 'text-slate-300'}`}>
                                                        <CheckCircle2 size={20} />
                                                    </div>
                                                    <span className={`text-sm font-bold italic ${task.done ? 'text-green-700 decoration-green-200' : 'text-slate-600'}`}>
                                                        {task.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Insights/Materials */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest italic mb-4">
                                            <Lightbulb size={12} className="text-blue-600" /> Sugerencia del Especialista
                                        </div>
                                        <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-50 relative overflow-hidden">
                                            <MessageSquare className="absolute -right-4 -bottom-4 text-blue-100 w-24 h-24" />
                                            <p className="text-sm text-blue-800 font-medium italic leading-relaxed relative z-10">
                                                Recuerda que los cambios pequeños sostenidos son los que generan grandes transformaciones. ¡Vas muy bien con tu meta!
                                            </p>
                                        </div>
                                        <div className="pt-4">
                                            <Button variant="ghost" className="w-full group hover:bg-blue-50 text-blue-600 font-black italic rounded-xl h-12 transition-all">
                                                Ver Resumen de acompañamiento <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="materials" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTracking.flatMap(item => item.materials.map(m => ({ ...m, specialist: item.specialist, patient: item.patient }))).map((mat) => (
                            <Card key={mat.id} className="rounded-3xl border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl group">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-slate-50 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                                            {mat.type === 'guide' ? <ClipboardList size={24} /> : <FileCheck size={24} />}
                                        </div>
                                        <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-400 border-slate-200 font-bold uppercase italic">
                                            {mat.type === 'guide' ? 'Guía de Trabajo' : 'Plantilla'}
                                        </Badge>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-black text-slate-900 italic leading-tight truncate">{mat.name}</h4>
                                            <p className="text-xs text-slate-400 font-bold italic mt-1 uppercase tracking-tight">{mat.patient}</p>
                                        </div>
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 h-11 rounded-xl font-bold italic shadow-lg shadow-blue-100 transition-all group-hover:scale-[1.02]">
                                            <Download className="w-4 h-4 mr-2" /> Descargar Material
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Empty State */}
            {filteredTracking.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm mb-4">
                        <TrendingUp className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 italic">No hay seguimiento activo</h3>
                    <p className="text-slate-500 italic mt-2">No se encontró un plan de trabajo activo para los filtros seleccionados.</p>
                </div>
            )}

            {/* Support Widget */}
            <div className="flex flex-col items-center gap-4 py-8 border-t border-slate-100 text-center">
                <div className="flex items-center gap-3 text-slate-400 italic text-sm">
                    <Users size={14} />
                    <span>¿Tienes dudas sobre tu plan? Consulta directamente con tu terapeuta por WhatsApp.</span>
                </div>
            </div>
        </div>
    );
}
