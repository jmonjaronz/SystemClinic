import { useState } from "react";
import {
    Search,
    User,
    Users,
    Clock,
    CheckCircle2,
    Play,
    Info,
    Calendar,
    ChevronRight,
    HelpCircle,
    FileText,
    History,
    Timer,
    Lock
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Interface for Virtual Test
interface VirtualTest {
    id: string;
    name: string;
    patient: string;
    type: 'self' | 'family';
    specialist: string;
    duration: string;
    purpose: string;
    assignedDate: string;
    expiryDate: string;
    status: 'active' | 'warning' | 'expired' | 'completed';
}

// Mock Data for Virtual Tests
const mockTests: VirtualTest[] = [
    {
        id: "TST-001",
        name: "Inventario de Ansiedad de Beck (BAI)",
        patient: "Juan Pérez",
        type: "self",
        specialist: "Dra. Claudia Silva",
        duration: "10-12 min",
        purpose: "Evaluar niveles de ansiedad clínica y síntomas físicos asociados para ajustar el plan de trabajo actual.",
        assignedDate: "2026-02-17",
        expiryDate: "2026-02-20",
        status: "active"
    },
    {
        id: "TST-002",
        name: "Test de Matrices Progresivas de Raven",
        patient: "Mariana Pérez",
        type: "family",
        specialist: "Dra. Sofía Luna",
        duration: "40 min",
        purpose: "Medir la capacidad intelectual y el razonamiento analógico en niños.",
        assignedDate: "2026-02-10",
        expiryDate: "2026-02-15",
        status: "expired"
    },
    {
        id: "TST-003",
        name: "Cuestionario de Personalidad 16PF",
        patient: "Juan Pérez",
        type: "self",
        specialist: "Dra. Claudia Silva",
        duration: "45-60 min",
        purpose: "Análisis profundo de rasgos de personalidad para el proceso psicoterapéutico.",
        assignedDate: "2026-02-18",
        expiryDate: "2026-02-19",
        status: "warning"
    },
    {
        id: "TST-004",
        name: "Escala de Depresión Abreviada",
        patient: "Juan Pérez",
        type: "self",
        specialist: "Dra. Claudia Silva",
        duration: "5 min",
        purpose: "Tamizaje rápido de estado de ánimo.",
        assignedDate: "2026-02-01",
        expiryDate: "2026-02-05",
        status: "completed"
    }
];

export default function PatientTests() {
    const [filterPatient, setFilterPatient] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTests = mockTests.filter(test => {
        const matchesPatient = filterPatient === "all" || test.type === filterPatient;
        const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            test.patient.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesPatient && matchesSearch;
    });

    const activeTests = filteredTests.filter(t => t.status !== 'completed');
    const completedTests = filteredTests.filter(t => t.status === 'completed');

    const handleStartTest = (name: string) => {
        toast.info(`Iniciando ${name}`, {
            description: "Redirigiendo a la plataforma de evaluación segura..."
        });
    };

    const handleExpiredTest = () => {
        toast.error("Test Vencido", {
            description: "Este test ha caducado. Por favor, solicita una re-asignación a tu especialista."
        });
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 italic">Tests Virtuales</h1>
                    <p className="text-slate-500 italic">Completa tus evaluaciones asignadas. Recuerda que tienen fecha de vigencia.</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                        placeholder="Buscar test o paciente..."
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

            <Tabs defaultValue="available" className="w-full">
                <TabsList className="bg-slate-100 p-1 rounded-2xl h-14 w-full md:w-auto grid grid-cols-2 md:inline-flex">
                    <TabsTrigger value="available" className="rounded-xl font-bold italic data-[state=active]:bg-white data-[state=active]:shadow-sm px-8">
                        <Play className="w-4 h-4 mr-2" /> Pendientes ({activeTests.length})
                    </TabsTrigger>
                    <TabsTrigger value="history" className="rounded-xl font-bold italic data-[state=active]:bg-white data-[state=active]:shadow-sm px-8">
                        <History className="w-4 h-4 mr-2" /> Historial
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="available" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeTests.map((test) => (
                            <Card key={test.id} className={`rounded-3xl transition-all overflow-hidden border-2 h-full flex flex-col ${test.status === 'expired' ? 'border-slate-100 opacity-60' :
                                test.status === 'warning' ? 'border-orange-100 bg-orange-50/10' :
                                    'border-slate-100 bg-white hover:border-blue-200 shadow-sm hover:shadow-xl'
                                }`}>
                                <CardHeader className={`p-6 border-b ${test.status === 'expired' ? 'bg-slate-50' :
                                    test.status === 'warning' ? 'bg-orange-50' :
                                        'bg-slate-50'
                                    }`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${test.status === 'expired' ? 'bg-slate-200 text-slate-400' :
                                            test.status === 'warning' ? 'bg-orange-200 text-orange-700' :
                                                'bg-blue-100 text-blue-600'
                                            }`}>
                                            {test.status === 'expired' ? <Lock size={24} /> : <FileText size={24} />}
                                        </div>
                                        <Badge className={`font-black italic uppercase text-[10px] rounded-full border-none px-3 ${test.status === 'expired' ? 'bg-slate-400 text-white' :
                                            test.status === 'warning' ? 'bg-orange-600 text-white animate-pulse' :
                                                'bg-blue-600 text-white'
                                            }`}>
                                            {test.status === 'expired' ? 'Vencido' :
                                                test.status === 'warning' ? '¡Pronto a vencer!' :
                                                    'Vigente'}
                                        </Badge>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 italic leading-none">{test.name}</h3>
                                    <div className="flex items-center gap-2 mt-4">
                                        {test.type === 'family' && (
                                            <Badge variant="outline" className="text-[10px] bg-pink-50 text-pink-600 border-pink-100 font-black italic">
                                                {test.patient}
                                            </Badge>
                                        )}
                                        <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">
                                            <Timer size={12} className="mr-1" /> {test.duration}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-8 space-y-6 flex-1 flex flex-col">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-slate-400 uppercase text-[10px] font-black tracking-widest italic">
                                            <HelpCircle size={12} className="text-blue-600" /> Propósito del test
                                        </div>
                                        <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                                            "{test.purpose}"
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-50 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <p className="text-[10px] text-slate-400 font-black uppercase italic">Asignado el</p>
                                                <div className="flex items-center text-xs font-bold text-slate-600 italic">
                                                    <Calendar size={12} className="mr-1.5" /> {test.assignedDate}
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className={`text-[10px] font-black uppercase italic ${test.status === 'warning' ? 'text-orange-600' : 'text-slate-400'}`}>Vence el</p>
                                                <div className={`flex items-center text-xs font-bold italic ${test.status === 'warning' ? 'text-orange-600' : 'text-slate-600'}`}>
                                                    <Clock size={12} className="mr-1.5" /> {test.expiryDate}
                                                </div>
                                            </div>
                                        </div>

                                        {test.status === 'expired' ? (
                                            <Button
                                                variant="outline"
                                                onClick={handleExpiredTest}
                                                className="w-full h-12 rounded-xl bg-slate-100 border-slate-200 text-slate-400 font-black italic"
                                            >
                                                <Lock size={16} className="mr-2" /> Test Bloqueado
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => handleStartTest(test.name)}
                                                className={`w-full h-12 rounded-xl font-black italic shadow-lg transition-all active:scale-95 ${test.status === 'warning' ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-100' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'
                                                    }`}
                                            >
                                                <Play size={16} className="mr-2" /> Comenzar Test
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {activeTests.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm mb-4">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 italic">¡Todo al día!</h3>
                            <p className="text-slate-500 italic mt-2">No tienes tests pendientes o asignados en este momento.</p>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="history" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedTests.map((test) => (
                            <Card key={test.id} className="rounded-3xl border-slate-100 bg-white shadow-sm overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <Badge className="bg-green-600 text-white border-none font-black italic uppercase text-[10px] rounded-full px-3">
                                            Completado
                                        </Badge>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 italic leading-none">{test.name}</h3>
                                    <p className="text-xs text-slate-400 font-bold italic mt-3 uppercase tracking-tight">Paciente: {test.patient}</p>

                                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] text-slate-400 font-black uppercase italic">Finalizado el</p>
                                            <p className="text-xs font-black text-slate-700 italic">05 Feb, 2026</p>
                                        </div>
                                        <Button variant="ghost" className="text-blue-600 font-black italic text-xs h-8 px-2 hover:bg-blue-50">
                                            Detalles <ChevronRight className="w-3 h-3 ml-1" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Info Footer */}
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <Info size={20} />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-black text-blue-900 italic uppercase tracking-wider">¿Por qué mis tests caducan?</h4>
                    <p className="text-xs text-blue-700/70 font-medium italic leading-relaxed">
                        En psicología, la vigencia del test es crucial para capturar tu estado actual. Si ha pasado demasiado tiempo desde la asignación, los resultados podrían no ser representativos, por lo que bloqueamos el acceso para tu seguridad clínica.
                    </p>
                </div>
            </div>
        </div>
    );
}
