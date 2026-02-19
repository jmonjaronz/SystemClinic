import { useState } from "react";
import {
    Calendar,
    Clock,
    Video,
    User,
    Users,
    Search,
    CheckCircle2,
    Clock3,
    AlertCircle,
    FileText,
    Building2,
    X,
    ExternalLink,
    MapPin,
    Stethoscope,
    Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";

// Mock Data for Appointments
const initialAppointments = [
    {
        id: "APT-001",
        patient: "Juan Pérez",
        type: "self",
        specialist: "Dra. Claudia Silva",
        service: "Psicoterapia Integral",
        date: "2026-02-25",
        time: "09:00 AM",
        location: "Sede San Isidro",
        address: "Av. Camino Real 123, Of. 402",
        modality: "presencial",
        status: "confirmed", // confirmed, pending, past, cancelled
        price: 150,
        voucherUrl: "/mock-voucher.jpg"
    },
    {
        id: "APT-002",
        patient: "Mariana Pérez",
        type: "family",
        specialist: "Dra. Sofía Luna",
        service: "Estimulación Temprana",
        date: "2026-02-27",
        time: "10:30 AM",
        location: "Sede Miraflores",
        address: "Calle Alcanfores 456, Int. 2B",
        modality: "presencial",
        status: "pending",
        price: 120,
    },
    {
        id: "APT-003",
        patient: "Juan Pérez",
        type: "self",
        specialist: "Dr. Marco Aurelio",
        service: "Coaching Ejecutivo",
        date: "2026-02-20",
        time: "03:00 PM",
        location: "Consulta Virtual",
        address: "Plataforma Montero Clinic (Link enviado al correo)",
        modality: "virtual",
        status: "past",
        price: 200,
    }
];

export default function PatientAppointments() {
    const [filterPatient, setFilterPatient] = useState("all"); // all, self, family
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedApt, setSelectedApt] = useState<typeof initialAppointments[0] | null>(null);

    const filteredAppointments = initialAppointments.filter(apt => {
        const matchesPatient = filterPatient === "all" || apt.type === filterPatient;
        const matchesSearch = apt.specialist.toLowerCase().includes(searchQuery.toLowerCase()) ||
            apt.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
            apt.patient.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesPatient && matchesSearch;
    });

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "confirmed": return "bg-green-100 text-green-700 border-green-200";
            case "pending": return "bg-amber-100 text-amber-700 border-amber-200";
            case "past": return "bg-slate-100 text-slate-600 border-slate-200";
            default: return "bg-slate-100 text-slate-600 border-slate-200";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "confirmed": return "Confirmada";
            case "pending": return "Validando Pago";
            case "past": return "Finalizada";
            default: return status;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "confirmed": return <CheckCircle2 className="w-4 h-4 mr-1.5" />;
            case "pending": return <Clock3 className="w-4 h-4 mr-1.5" />;
            case "past": return <FileText className="w-4 h-4 mr-1.5" />;
            default: return <AlertCircle className="w-4 h-4 mr-1.5" />;
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 italic">Mis Citas</h1>
                    <p className="text-slate-500 italic">Gestiona tus atenciones y las de tu familia.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold italic shadow-lg shadow-blue-100">
                    Agendar Nueva Cita
                </Button>
            </div>

            {/* Filters Section */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                        placeholder="Buscar por especialista, servicio o paciente..."
                        className="pl-10 h-11 bg-slate-50 border-none rounded-xl focus-visible:ring-blue-600"
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
                        <User className="w-4 h-4 mr-2" /> Mis Citas
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

            {/* Appointments List/Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((apt) => (
                        <Card key={apt.id} className="group border-slate-100 hover:border-blue-200 transition-all rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-50/50">
                            <CardContent className="p-0">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left Context Bar */}
                                    <div className={`w-full lg:w-2 ${apt.status === 'confirmed' ? 'bg-green-500' : apt.status === 'pending' ? 'bg-amber-500' : 'bg-slate-300'}`} />

                                    <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                                        {/* Date/Time Block */}
                                        <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-1">
                                            <div className="text-center bg-blue-50 p-3 rounded-2xl min-w-[70px]">
                                                <p className="text-xs font-black text-blue-600 uppercase tracking-tighter">{new Date(apt.date).toLocaleString('es-ES', { month: 'short' })}</p>
                                                <p className="text-2xl font-black text-slate-800 leading-none">{apt.date.split('-')[2]}</p>
                                            </div>
                                            <div className="lg:mt-2">
                                                <div className="flex items-center text-slate-600 font-bold italic mb-1">
                                                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                                                    {apt.time}
                                                </div>
                                                <p className="text-xs text-slate-400 font-medium italic">{apt.modality === 'virtual' ? 'Consulta Online' : 'Presencial'}</p>
                                            </div>
                                        </div>

                                        {/* Main Info */}
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide">{apt.service}</p>
                                                {apt.type === 'family' && (
                                                    <Badge variant="outline" className="text-[10px] bg-pink-50 text-pink-600 border-pink-100 px-2 py-0 uppercase font-black tracking-wider">
                                                        FAMILIAR: {apt.patient.split(' ')[0]}
                                                    </Badge>
                                                )}
                                                {apt.type === 'self' && (
                                                    <Badge variant="outline" className="text-[10px] bg-blue-50 text-blue-600 border-blue-100 px-2 py-0 uppercase font-black tracking-wider">
                                                        TITULAR
                                                    </Badge>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 italic leading-tight">{apt.specialist}</h3>
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-medium italic text-slate-500">
                                                <div className="flex items-center">
                                                    <User className="w-4 h-4 mr-2 text-slate-400" />
                                                    Paciente: <span className="text-slate-900 ml-1.5 font-bold">{apt.patient}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    {apt.modality === 'virtual' ? <Video className="w-4 h-4 mr-2 text-slate-400" /> : <Building2 className="w-4 h-4 mr-2 text-slate-400" />}
                                                    {apt.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status & Actions */}
                                        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100">
                                            <Badge className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getStatusStyle(apt.status)}`}>
                                                <div className="flex items-center">
                                                    {getStatusIcon(apt.status)}
                                                    {getStatusLabel(apt.status)}
                                                </div>
                                            </Badge>

                                            <div className="flex items-center gap-3">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setSelectedApt(apt)}
                                                    className="rounded-xl text-slate-500 font-bold italic h-9 hover:bg-slate-50"
                                                >
                                                    Ver Detalles
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm mb-4">
                            <Calendar className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 italic">No se encontraron citas</h3>
                        <p className="text-slate-500 italic mt-2">Intenta cambiando los filtros o agenda una nueva cita.</p>
                        <Button className="mt-8 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold italic px-8 h-12 shadow-lg shadow-blue-100">
                            Agendar mi primera cita
                        </Button>
                    </div>
                )}
            </div>

            {/* Appointment Details Dialog */}
            <Dialog open={!!selectedApt} onOpenChange={() => setSelectedApt(null)}>
                <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-3xl shadow-2xl">
                    {selectedApt && (
                        <div className="flex flex-col">
                            {/* Header Section */}
                            <div className="bg-slate-900 text-white p-8 relative">
                                <button
                                    onClick={() => setSelectedApt(null)}
                                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none ${getStatusStyle(selectedApt.status)}`}>
                                        {getStatusLabel(selectedApt.status)}
                                    </Badge>
                                    <span className="text-white/40 font-bold italic text-sm">#{selectedApt.id}</span>
                                </div>
                                <h2 className="text-3xl font-black italic mb-2">{selectedApt.specialist}</h2>
                                <p className="text-blue-400 font-bold italic text-lg uppercase tracking-wide">{selectedApt.service}</p>
                            </div>

                            {/* Body Section */}
                            <div className="p-8 space-y-8 bg-white">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
                                                <Calendar size={14} className="text-blue-600" /> Cuándo
                                            </h4>
                                            <div className="space-y-2">
                                                <p className="text-lg font-black text-slate-900">{new Date(selectedApt.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                                <p className="text-3xl font-black text-blue-600">{selectedApt.time}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
                                                <MapPin size={14} className="text-blue-600" /> Dónde
                                            </h4>
                                            <div className="space-y-1">
                                                <p className="text-lg font-black text-slate-900">{selectedApt.location}</p>
                                                <p className="text-slate-500 font-medium italic">{selectedApt.address}</p>
                                                {selectedApt.modality === 'virtual' && (
                                                    <Button className="mt-4 bg-sky-100 hover:bg-sky-200 text-sky-700 font-black italic rounded-xl w-full border border-sky-200">
                                                        <ExternalLink className="w-4 h-4 mr-2" /> Entrar a Videollamada
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
                                                <User size={14} className="text-blue-600" /> Paciente
                                            </h4>
                                            <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3 border border-slate-100">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black">
                                                    {selectedApt.patient.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-900">{selectedApt.patient}</p>
                                                    <p className="text-[10px] text-slate-500 font-black uppercase">{selectedApt.type === 'self' ? 'Titular' : 'Familiar'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
                                                <FileText size={14} className="text-blue-600" /> Detalles del Pago
                                            </h4>
                                            <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-3 relative overflow-hidden shadow-xl shadow-slate-200">
                                                <div className="absolute top-0 right-0 p-2 opacity-5">
                                                    <Stethoscope size={80} />
                                                </div>
                                                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                                                    <span className="text-white/50 italic">Costo de Atención</span>
                                                    <span className="font-black">S/ {selectedApt.price}.00</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-1">
                                                    <span className="font-bold italic">Estado del Pago</span>
                                                    <Badge className="bg-blue-500 text-[10px] font-black border-none px-2">{getStatusLabel(selectedApt.status)}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" className="flex-1 rounded-xl h-12 font-black italic border-slate-200 hover:bg-slate-50">
                                        <Phone className="w-4 h-4 mr-2" /> Soporte WhatsApp
                                    </Button>
                                    <Button className="flex-1 bg-slate-900 hover:bg-black rounded-xl h-12 font-black italic shadow-lg shadow-slate-200">
                                        Reagendar Cita
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Helper Help Text */}
            <div className="flex flex-col items-center gap-4 py-8 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-400 italic text-sm">
                    <AlertCircle size={14} />
                    <span>Las citas canceladas con menos de 24 horas de anticipación no están sujetas a reembolso automático.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 italic text-sm">
                    <Search size={14} />
                    <span>¿Necesitas ayuda con tus citas? Escríbenos por WhatsApp</span>
                </div>
            </div>
        </div>
    );
}
