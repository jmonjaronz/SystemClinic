import { useState } from "react";
import {
    User,
    Users,
    Plus,
    Search,
    Trash2,
    Edit2,
    Calendar,
    IdCard,
    ChevronRight,
    Heart,
    Baby,
    UserPlus,
    Activity,
    ClipboardCheck,
    AlertCircle,
    Download,
    type LucideIcon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Interface for Family Member
interface FamilyMember {
    id: string;
    name: string;
    dni: string;
    relation: string;
    age: number;
    color: string;
    icon: LucideIcon;
    lastSession: string | null;
    nextSession: string | null;
    consentSigned: boolean;
}

// Mock Data for Family Members
const initialFamily: FamilyMember[] = [
    {
        id: "fam-1",
        name: "Mariana Pérez",
        dni: "76543210",
        relation: "Hija",
        age: 8,
        color: "bg-pink-100 text-pink-700",
        icon: Baby,
        lastSession: "2026-02-15",
        nextSession: "2026-02-27",
        consentSigned: true
    },
    {
        id: "fam-2",
        name: "Roberto Pérez",
        dni: "44556677",
        relation: "Padre",
        age: 65,
        color: "bg-blue-100 text-blue-700",
        icon: User,
        lastSession: "2026-02-10",
        nextSession: null,
        consentSigned: true
    },
    {
        id: "fam-3",
        name: "Sofía Martínez",
        dni: "12341234",
        relation: "Esposa",
        age: 34,
        color: "bg-purple-100 text-purple-700",
        icon: Heart,
        lastSession: null,
        nextSession: "2026-03-05",
        consentSigned: false
    },
];

export default function PatientFamily() {
    const navigate = useNavigate();
    const [family, setFamily] = useState<FamilyMember[]>(initialFamily);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [newMember, setNewMember] = useState({ name: "", dni: "", relation: "", dob: "" });

    const handleAddMember = (e: React.FormEvent) => {
        e.preventDefault();
        const id = `fam-${Date.now()}`;
        const member: FamilyMember = {
            id,
            name: newMember.name,
            dni: newMember.dni,
            relation: newMember.relation,
            age: 0, // Mock calculation
            color: "bg-emerald-100 text-emerald-700",
            icon: User,
            lastSession: null,
            nextSession: null,
            consentSigned: false
        };
        setFamily([...family, member]);
        setIsAddOpen(false);
        setNewMember({ name: "", dni: "", relation: "", dob: "" });
        toast.success("Familiar registrado", {
            description: `${newMember.name} ha sido agregado exitosamente.`
        });
    };

    const removeMember = (id: string) => {
        setFamily(family.filter(m => m.id !== id));
        toast.error("Familiar eliminado");
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 italic">Mi Familia</h1>
                    <p className="text-slate-500 italic">Gestiona a los integrantes de tu grupo familiar.</p>
                </div>

                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold italic shadow-lg shadow-blue-100">
                            <Plus className="w-5 h-5 mr-2" /> Agregar Familiar
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-3xl border-none shadow-2xl p-0 overflow-hidden max-w-md">
                        <DialogHeader className="bg-slate-900 text-white p-8">
                            <DialogTitle className="text-2xl font-black italic flex items-center gap-3">
                                <UserPlus className="text-blue-400" /> Nuevo Integrante
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleAddMember} className="p-8 space-y-6 bg-white">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="font-bold italic text-slate-500">Nombre Completo</Label>
                                    <Input
                                        required
                                        placeholder="Ej. Pedro Pérez"
                                        className="h-12 rounded-xl italic border-slate-100 focus-visible:ring-blue-600"
                                        value={newMember.name}
                                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="font-bold italic text-slate-500">DNI</Label>
                                        <Input
                                            required
                                            maxLength={8}
                                            placeholder="8 dígitos"
                                            className="h-12 rounded-xl italic border-slate-100 focus-visible:ring-blue-600"
                                            value={newMember.dni}
                                            onChange={(e) => setNewMember({ ...newMember, dni: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-bold italic text-slate-500">Parentesco</Label>
                                        <Input
                                            required
                                            placeholder="Ej. Hijo"
                                            className="h-12 rounded-xl italic border-slate-100 focus-visible:ring-blue-600"
                                            value={newMember.relation}
                                            onChange={(e) => setNewMember({ ...newMember, relation: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-bold italic text-slate-500">Fecha de Nacimiento</Label>
                                    <Input
                                        required
                                        type="date"
                                        className="h-12 rounded-xl italic border-slate-100 focus-visible:ring-blue-600"
                                        value={newMember.dob}
                                        onChange={(e) => setNewMember({ ...newMember, dob: e.target.value })}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-xl font-black italic shadow-lg shadow-blue-100">
                                Registrar Familiar
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="rounded-3xl border-slate-100 bg-white hover:shadow-lg transition-all shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-slate-900">{family.length + 1}</p>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Total Integrantes</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* List Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-black text-slate-900 italic">Integrantes Registrados</h3>
                <div className="relative w-64 hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input placeholder="Buscar familiar..." className="pl-10 h-10 border-none bg-slate-50 rounded-xl italic text-sm" />
                </div>
            </div>

            {/* Family Members Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                {/* Current User Card */}
                <Card className="rounded-3xl border-2 border-blue-600 bg-blue-50/20 shadow-xl shadow-blue-50/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <User size={100} />
                    </div>
                    <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                <User size={32} />
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <Badge className="bg-blue-600 font-bold italic rounded-full uppercase text-[10px]">Titular</Badge>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px] font-bold">
                                    <ClipboardCheck className="w-3 h-3 mr-1" /> CONSENTIMIENTO OK
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-2xl font-black text-slate-900 italic">Juan Pérez</h4>
                                <p className="text-sm text-slate-400 italic">Administrador de la cuenta</p>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center text-slate-500 font-bold italic text-xs">
                                    <IdCard size={14} className="mr-1.5 text-blue-600" /> 11223344
                                </div>
                                <div className="flex items-center text-slate-500 font-bold italic text-xs">
                                    <Calendar size={14} className="mr-1.5 text-blue-600" /> 35 años
                                </div>
                            </div>

                            {/* Wellness info for main user */}
                            <div className="mt-6 pt-6 border-t border-blue-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <Activity className="w-4 h-4 text-blue-600" />
                                    <h5 className="text-xs font-black text-blue-600 uppercase tracking-widest italic">Resumen de Bienestar</h5>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-2xl border border-blue-100">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase italic">Última Sesión</p>
                                        <p className="text-sm font-black text-slate-700">12 Feb, 2026</p>
                                    </div>
                                    <div className="bg-blue-600 p-3 rounded-2xl shadow-blue-200 shadow-lg">
                                        <p className="text-[10px] text-white/60 font-bold uppercase italic">Próxima Sesión</p>
                                        <p className="text-sm font-black text-white">25 Feb, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Family Members Cards */}
                {family.map((member) => (
                    <Card key={member.id} className="rounded-3xl border-slate-100 bg-white hover:border-blue-200 transition-all group overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-50/30">
                        <CardContent className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg transition-all group-hover:scale-110 ${member.color}`}>
                                    <member.icon size={32} />
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-slate-300 hover:text-blue-600">
                                            <Edit2 size={16} />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeMember(member.id)}
                                            className="w-8 h-8 rounded-full text-slate-300 hover:text-red-600"
                                        >
                                            <Trash2 size={16} />
                                        </Button>
                                    </div>
                                    <Badge variant="outline" className={`text-[10px] font-bold ${member.consentSigned ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                                        {member.consentSigned ? (
                                            <><ClipboardCheck className="w-3 h-3 mr-1" /> CONSENTIMIENTO OK</>
                                        ) : (
                                            <><AlertCircle className="w-3 h-3 mr-1" /> CONSENTIMIENTO PENDIENTE</>
                                        )}
                                    </Badge>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 italic leading-none">{member.name}</h4>
                                        <p className="text-sm text-blue-600 font-bold italic mt-2 uppercase tracking-wide">{member.relation}</p>
                                    </div>
                                    {!member.consentSigned && (
                                        <Button variant="ghost" className="h-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-[10px] font-black italic">
                                            <Download className="w-3 h-3 mr-1" /> DESCARGAR PARA FIRMAR
                                        </Button>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <div className="flex items-center text-slate-500 font-bold italic text-xs">
                                        <IdCard size={14} className="mr-1.5 text-slate-400" /> {member.dni}
                                    </div>
                                    <div className="flex items-center text-slate-500 font-bold italic text-xs">
                                        <Calendar size={14} className="mr-1.5 text-slate-400" /> {member.age} años
                                    </div>
                                </div>

                                {/* Wellness Summary Section */}
                                <div className="mt-6 pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Activity className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                        <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest italic group-hover:text-blue-600 transition-colors">Resumen de Bienestar</h5>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-3 rounded-2xl border border-transparent group-hover:border-slate-100 transition-all">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase italic">Última Sesión</p>
                                            <p className="text-sm font-black text-slate-700">
                                                {member.lastSession ? new Date(member.lastSession).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : '---'}
                                            </p>
                                        </div>
                                        <div className={`p-3 rounded-2xl transition-all shadow-md group-hover:shadow-blue-200/50 ${member.nextSession ? 'bg-blue-600' : 'bg-slate-100'}`}>
                                            <p className={`text-[10px] font-bold uppercase italic ${member.nextSession ? 'text-white/60' : 'text-slate-400'}`}>Próxima Sesión</p>
                                            <p className={`text-sm font-black ${member.nextSession ? 'text-white' : 'text-slate-500'}`}>
                                                {member.nextSession ? new Date(member.nextSession).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : 'Sin agendar'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    onClick={() => navigate("/paciente/app/citas")}
                                    className="w-full mt-2 bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-700 font-black italic rounded-xl transition-all"
                                >
                                    Ir al Calendario <ChevronRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* Empty State / Add Member Card */}
                <Card
                    onClick={() => setIsAddOpen(true)}
                    className="rounded-3xl border-2 border-dashed border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group h-full min-h-[350px]"
                >
                    <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                            <Plus size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black text-slate-400 italic group-hover:text-blue-600 transition-all">Agregar Familiar</h4>
                            <p className="text-sm text-slate-400 italic mt-1">Registra a un integrante para agendar sus citas.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Help Widget */}
            <div className="flex flex-col items-center gap-4 py-8 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-400 italic text-sm">
                    <Search size={14} />
                    <span>¿Tienes problemas vinculando a un familiar? Contacta con administración</span>
                </div>
            </div>
        </div>
    );
}
