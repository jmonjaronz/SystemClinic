import { useState } from "react";
import {
    User,
    Users,
    Stethoscope,
    MapPin,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    CreditCard,
    Video,
    Building2,
    Search,
    QrCode,
    Camera,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Mock Data
const familyMembers = [
    { id: "self", name: "Juan Pérez (Tú)", relation: "Titular", initial: "JP", color: "bg-blue-100 text-blue-700" },
    { id: "family-1", name: "Mariana Pérez", relation: "Hija", initial: "MP", color: "bg-pink-100 text-pink-700" },
];

const categories = [
    { id: "adults", name: "Psicología & Psicoterapia", icon: Stethoscope },
    { id: "kids", name: "Desarrollo Infantil", icon: Users },
    { id: "work", name: "Coaching y Potencial", icon: MapPin },
];

const services = [
    { id: "s1", category: "adults", name: "Psicoterapia Integral", price: 150 },
    { id: "s2", category: "adults", name: "Psicología de Pareja", price: 180 },
    { id: "s3", category: "kids", name: "Estimulación Temprana", price: 120 },
    { id: "s4", category: "kids", name: "Terapia Ocupacional", price: 130 },
];

const locations = [
    { id: "sede-1", name: "Sede San Isidro", address: "Av. Camino Real 123", specialists: ["Dra. Claudia Silva", "Dr. Marco Aurelio"] },
    { id: "sede-2", name: "Sede Miraflores", address: "Calle Alcanfores 456", specialists: ["Dra. Sofía Luna", "Dr. Jorge Paz"] },
    { id: "online", name: "Consulta Virtual", address: "Acceso vía plataforma segura", specialists: ["Dra. Claudia Silva", "Dra. Sofía Luna", "Dr. Jorge Paz"] },
];

const timeSlots = ["09:00 AM", "10:30 AM", "03:00 PM", "04:30 PM", "06:00 PM"];

export default function BookingWizard() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [booking, setBooking] = useState({
        patient: "self",
        category: "",
        serviceId: "",
        locationId: "",
        specialist: "",
        date: "",
        time: "",
        modality: "presencial",
        voucher: null as File | null,
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const handleBooking = () => {
        setIsSubmitting(true);
        // Simulating upload and processing
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("¡Reserva enviada con éxito!", {
                description: "Estamos validando tu comprobante. Pronto verás tu cita confirmada.",
            });
            navigate("/paciente/app/citas");
        }, 1500);
    };

    const isStepValid = () => {
        if (step === 1) return !!booking.patient;
        if (step === 2) return !!booking.serviceId;
        if (step === 3) return !!booking.locationId && !!booking.specialist;
        if (step === 4) return !!booking.date && !!booking.time;
        if (step === 5) return !!booking.voucher;
        return true;
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 italic">Agendar una Cita</h1>
                    <p className="text-slate-500 italic mt-1">Completa los pasos para confirmar tu atención.</p>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400"
                                }`}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <Card className="border-slate-100 shadow-xl shadow-blue-50/50 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">1. ¿Para quién es la cita?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {familyMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        onClick={() => setBooking({ ...booking, patient: member.id })}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${booking.patient === member.id
                                                ? "border-blue-600 bg-blue-50/50"
                                                : "border-slate-100 hover:border-blue-200 bg-white"
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${member.color}`}>
                                            {member.initial}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{member.name}</p>
                                            <p className="text-xs text-slate-500 italic">{member.relation}</p>
                                        </div>
                                        {booking.patient === member.id && <CheckCircle2 className="ml-auto text-blue-600" />}
                                    </div>
                                ))}
                                <button className="p-6 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-3 text-slate-500 font-medium italic">
                                    <Users size={20} /> Registrar nuevo familiar
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">2. ¿Qué servicio buscas?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {categories.map((cat) => (
                                    <div key={cat.id} className="space-y-3">
                                        <h3 className="font-bold text-slate-400 text-sm tracking-wider uppercase flex items-center gap-2">
                                            <cat.icon size={16} /> {cat.name}
                                        </h3>
                                        <div className="space-y-2">
                                            {services.filter(s => s.category === cat.id).map((service) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => setBooking({ ...booking, serviceId: service.id })}
                                                    className={`w-full p-4 rounded-xl text-left border-2 transition-all ${booking.serviceId === service.id
                                                            ? "border-blue-600 bg-blue-50/50"
                                                            : "border-slate-100 hover:border-blue-100 bg-white"
                                                        }`}
                                                >
                                                    <p className="font-bold text-slate-800">{service.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Lugar y Especialista</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <Label className="text-slate-500 italic">Elige la Sede</Label>
                                    <div className="space-y-3">
                                        {locations.map((loc) => (
                                            <div
                                                key={loc.id}
                                                onClick={() => setBooking({ ...booking, locationId: loc.id, specialist: "" })}
                                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${booking.locationId === loc.id
                                                        ? "border-blue-600 bg-blue-50/50 text-blue-900"
                                                        : "border-slate-100 hover:border-slate-200 bg-white"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {loc.id === "online" ? <Video className="text-blue-500" /> : <Building2 className="text-slate-400" />}
                                                    <div>
                                                        <p className="font-bold">{loc.name}</p>
                                                        <p className="text-xs opacity-70 italic">{loc.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8">
                                    <Label className="text-slate-500 italic">Elige un Especialista</Label>
                                    {!booking.locationId ? (
                                        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed text-slate-400 italic">
                                            Primero selecciona una sede
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {locations.find(l => l.id === booking.locationId)?.specialists.map((spec) => (
                                                <div
                                                    key={spec}
                                                    onClick={() => setBooking({ ...booking, specialist: spec })}
                                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${booking.specialist === spec
                                                            ? "border-blue-600 bg-blue-50/50"
                                                            : "border-slate-100 hover:border-blue-100 bg-white"
                                                        }`}
                                                >
                                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                                        <User size={20} />
                                                    </div>
                                                    <p className="font-bold text-slate-800">{spec}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Fecha, Hora y Modalidad</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <Label className="text-slate-500 italic">Fecha de la Cita</Label>
                                    <Input
                                        type="date"
                                        className="h-12 text-lg italic"
                                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                                        min={new Date().toISOString().split("T")[0]}
                                    />

                                    <div className="pt-6">
                                        <Label className="text-slate-500 italic block mb-3">Modalidad</Label>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => setBooking({ ...booking, modality: "presencial" })}
                                                disabled={booking.locationId === "online"}
                                                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${booking.modality === "presencial" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 text-slate-400 bg-white"
                                                    } disabled:opacity-30`}
                                            >
                                                Presencial
                                            </button>
                                            <button
                                                onClick={() => setBooking({ ...booking, modality: "virtual" })}
                                                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${booking.modality === "virtual" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 text-slate-400 bg-white"
                                                    }`}
                                            >
                                                Virtual
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-slate-500 italic">Horarios Disponibles</Label>
                                    {!booking.date ? (
                                        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed text-slate-400 italic">
                                            Elige una fecha para ver horarios
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-3">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => setBooking({ ...booking, time: slot })}
                                                    className={`p-3 rounded-xl border-2 font-bold transition-all ${booking.time === slot
                                                            ? "border-blue-600 bg-blue-600 text-white"
                                                            : "border-slate-100 hover:border-blue-100 bg-white text-slate-600"
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                            <div className="bg-sky-900 text-white p-8 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CreditCard size={120} />
                                </div>
                                <h2 className="text-2xl font-bold mb-6">Resumen y Pago</h2>
                                <div className="space-y-3 relative z-10">
                                    <div className="flex justify-between border-b border-white/20 pb-2">
                                        <span className="opacity-80 italic">Servicio</span>
                                        <span className="font-bold">{services.find(s => s.id === booking.serviceId)?.name}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/20 pb-2">
                                        <span className="opacity-80 italic">Especialista</span>
                                        <span className="font-bold">{booking.specialist}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/20 pb-2">
                                        <span className="opacity-80 italic">Fecha y Hora</span>
                                        <span className="font-bold">{booking.date} a las {booking.time}</span>
                                    </div>
                                    <div className="flex justify-between pt-4 text-xl">
                                        <span className="font-bold">Monto Total</span>
                                        <span className="font-black text-sky-300 underline underline-offset-4">S/ {services.find(s => s.id === booking.serviceId)?.price}.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 space-y-4">
                                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                        <QrCode size={18} className="text-blue-600" /> Paso 1: Realiza el Pago
                                    </h3>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl space-y-3">
                                        <div className="w-32 h-32 bg-white p-2 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center">
                                            <QrCode size={100} className="text-slate-800" />
                                        </div>
                                        <div className="text-center">
                                            <p className="font-black text-lg text-slate-800 tracking-tight">987 654 321</p>
                                            <p className="text-xs text-slate-500 font-bold uppercase italic">Yape / Plin a nombre de Montero Clinic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-100 italic">
                                        <Phone size={14} className="text-blue-600" />
                                        <span>¿Dudas con el pago? Escríbenos</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 space-y-4">
                                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                        <Camera size={18} className="text-blue-600" /> Paso 2: Sube tu Comprobante
                                    </h3>
                                    <p className="text-sm text-slate-500 italic">Sube una captura de tu transferencia u operación para validar tu cita.</p>

                                    <div className="relative group">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setBooking({ ...booking, voucher: e.target.files?.[0] || null })}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className={`p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all ${booking.voucher
                                                ? "border-green-400 bg-green-50/30"
                                                : "border-slate-200 group-hover:border-blue-400 bg-slate-50 group-hover:bg-blue-50/30"
                                            }`}>
                                            {booking.voucher ? (
                                                <div className="text-center">
                                                    <CheckCircle2 size={32} className="text-green-500 mx-auto mb-2" />
                                                    <p className="font-bold text-green-700 italic">{booking.voucher.name}</p>
                                                    <p className="text-xs text-green-600 mt-1">¡Listo para enviar!</p>
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <Camera size={32} className="text-slate-400 mx-auto mb-2" />
                                                    <p className="font-bold text-slate-500 italic">Haz clic para subir foto</p>
                                                    <p className="text-xs text-slate-400 mt-1">Formatos JPG, PNG</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>

                {/* Footer Controls */}
                <div className="p-6 bg-slate-50 border-t flex items-center justify-between gap-4">
                    <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={step === 1 || isSubmitting}
                        className="rounded-xl font-bold italic"
                    >
                        <ChevronLeft className="mr-2 w-4 h-4" /> Anterior
                    </Button>

                    <div className="text-sm text-slate-400 italic font-medium">
                        Paso {step} de 5
                    </div>

                    {step < 5 ? (
                        <Button
                            onClick={nextStep}
                            disabled={!isStepValid()}
                            className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl font-bold italic transition-all shadow-lg shadow-blue-100"
                        >
                            Siguiente <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleBooking}
                            disabled={!isStepValid() || isSubmitting}
                            className="bg-green-600 hover:bg-green-700 px-8 rounded-xl font-bold italic transition-all shadow-lg shadow-green-100"
                        >
                            {isSubmitting ? "Enviando..." : "Confirmar y Enviar Comprobante"}
                        </Button>
                    )}
                </div>
            </Card>

            {/* Helper Help Text */}
            <div className="flex items-center gap-3 justify-center text-slate-400 italic text-sm">
                <Search size={14} />
                <span>¿Tienes dudas? Consulta con el administrador vía WhatsApp</span>
            </div>
        </div>
    );
}
