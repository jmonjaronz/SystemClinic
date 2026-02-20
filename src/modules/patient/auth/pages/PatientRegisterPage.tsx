import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import {
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    User,
    MapPin,
    ClipboardList,
    ShieldCheck,
    AlertCircle
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function PatientRegisterPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        // Step 1: Personal
        docType: "dni",
        docNumber: "",
        names: "",
        lastNames: "",
        birthDate: "",

        // Step 2: Contact/Location
        address: "",
        department: "",
        province: "",
        district: "",
        email: "",
        phone: "",

        // Step 3: Demographics
        nativeLanguage: "",
        gender: "",
        workCenter: "",
        occupation: "",
        religion: "",
        education: "",

        // Step 4: Security
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });

    const updateFormData = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }
        if (!formData.acceptTerms) {
            toast.error("Debes aceptar los términos y condiciones");
            return;
        }

        toast.success("Registro completado", {
            description: "Bienvenido a la familia Montero. Ya puedes iniciar sesión.",
        });
        navigate("/paciente/login");
    };

    const handleCancelClick = () => {
        setShowExitConfirm(true);
    };

    const steps = [
        { id: 1, name: "Identidad", icon: User },
        { id: 2, name: "Ubicación", icon: MapPin },
        { id: 3, name: "Perfil", icon: ClipboardList },
        { id: 4, name: "Seguridad", icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen w-full flex bg-blue-50/30 font-sans">
            {/* Left Side - Visual Context */}
            <div className="hidden lg:flex w-1/3 bg-blue-950 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2040&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />

                <div className="relative z-10 text-white max-w-sm">
                    <Badge variant="outline" className="mb-8 border-blue-400 text-blue-300 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full">
                        Portal de Registro de Pacientes
                    </Badge>
                    <div className="w-16 h-16 bg-blue-400/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8">
                        <User className="text-blue-400" size={32} />
                    </div>
                    <h1 className="text-4xl font-black mb-6 tracking-tighter leading-tight">
                        Cuidamos de ti <br />
                        <span className="text-blue-400 text-glow">y de tu familia.</span>
                    </h1>
                    <p className="text-lg text-blue-100/70 mb-10 italic">
                        Completa tu perfil para acceder a una atención psicológica de primer nivel, diseñada para tu evolución personal.
                    </p>

                    <div className="space-y-6">
                        {steps.map((s) => (
                            <div key={s.id} className={`flex items-center gap-4 transition-all duration-500 ${step >= s.id ? 'opacity-100' : 'opacity-30'}`}>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${step >= s.id ? 'bg-blue-400 text-blue-950' : 'bg-white/10 text-white'}`}>
                                    {step > s.id ? <CheckCircle2 size={20} /> : s.id}
                                </div>
                                <span className={`font-bold ${step === s.id ? 'text-blue-400' : 'text-blue-50'}`}>{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="flex-1 flex flex-col items-center justify-start lg:justify-center p-4 md:p-8 bg-white overflow-y-auto w-full min-h-0">
                <div className="w-full max-w-2xl pt-4 md:pt-8 pb-12 h-fit">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/20">
                                MC
                            </div>
                        </Link>
                        <button
                            onClick={handleCancelClick}
                            className="text-slate-400 hover:text-blue-900 font-bold transition-colors flex items-center gap-2 text-xs md:text-sm"
                        >
                            <ArrowLeft size={16} />
                            Cancelar Registro
                        </button>
                    </div>

                    <div className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 border border-slate-50 shadow-2xl shadow-slate-200">
                        {/* Progress Bar (Mobile only) */}
                        <div className="lg:hidden h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
                            <div
                                className="h-full bg-blue-900 transition-all duration-500"
                                style={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>

                        <div className="mb-8">
                            <span className="text-blue-900 font-bold text-[11px] uppercase tracking-[0.2em] mb-2 block">Paso {step} de 4</span>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                                {steps[step - 1].name}
                            </h2>
                            <p className="text-slate-500 mt-1 text-sm font-medium">
                                {step === 1 && "Comencemos validando tu identidad oficial."}
                                {step === 2 && "Dinos dónde te encuentras para una atención personalizada."}
                                {step === 3 && "Esta información nos ayuda a entender tu contexto de vida."}
                                {step === 4 && "Protege tu cuenta con una contraseña segura."}
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-8">
                            {/* STEP 1: PERSONAL */}
                            {step === 1 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Tipo de Documento</Label>
                                        <Select
                                            value={formData.docType}
                                            onValueChange={(value) => updateFormData("docType", value)}
                                        >
                                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:ring-blue-100 transition-all font-medium rounded-xl px-4 shadow-sm text-slate-900 text-sm">
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                                                <SelectItem value="dni">DNI (Perú)</SelectItem>
                                                <SelectItem value="ce">Carnet de Extranjería</SelectItem>
                                                <SelectItem value="pasaporte">Pasaporte</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Número de Documento</Label>
                                        <Input
                                            placeholder="12345678"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.docNumber}
                                            onChange={(e) => updateFormData("docNumber", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Nombres</Label>
                                        <Input
                                            placeholder="Ej. Juan Gabriel"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.names}
                                            onChange={(e) => updateFormData("names", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Apellidos</Label>
                                        <Input
                                            placeholder="Ej. García López"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.lastNames}
                                            onChange={(e) => updateFormData("lastNames", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1 md:col-span-2">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Fecha de Nacimiento</Label>
                                        <Input
                                            type="date"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.birthDate}
                                            onChange={(e) => updateFormData("birthDate", e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: CONTACT & LOCATION */}
                            {step === 2 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                                    <div className="space-y-1.5 col-span-1 md:col-span-2">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Dirección Actual</Label>
                                        <Input
                                            placeholder="Ej. Av. Larco 123, Miraflores"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.address}
                                            onChange={(e) => updateFormData("address", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Departamento</Label>
                                        <Input
                                            placeholder="Ej. Lima"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.department}
                                            onChange={(e) => updateFormData("department", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Provincia</Label>
                                        <Input
                                            placeholder="Ej. Lima"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.province}
                                            onChange={(e) => updateFormData("province", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Distrito</Label>
                                        <Input
                                            placeholder="Ej. Miraflores"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.district}
                                            onChange={(e) => updateFormData("district", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Teléfono</Label>
                                        <Input
                                            placeholder="Ej. 987 654 321"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData("phone", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1 md:col-span-2">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Correo Electrónico</Label>
                                        <Input
                                            type="email"
                                            placeholder="usuario@ejemplo.com"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.email}
                                            onChange={(e) => updateFormData("email", e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: DEMOGRAPHICS */}
                            {step === 3 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Idioma Nativo</Label>
                                        <Input
                                            placeholder="Ej. Español"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.nativeLanguage}
                                            onChange={(e) => updateFormData("nativeLanguage", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Género</Label>
                                        <Select
                                            value={formData.gender}
                                            onValueChange={(value) => updateFormData("gender", value)}
                                        >
                                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:ring-blue-100 transition-all font-medium rounded-xl px-4 shadow-sm text-slate-900 text-sm">
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                                                <SelectItem value="masculino">Masculino</SelectItem>
                                                <SelectItem value="femenino">Femenino</SelectItem>
                                                <SelectItem value="otro">Otro</SelectItem>
                                                <SelectItem value="no_decir">Prefiero no decirlo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Centro de Trabajo</Label>
                                        <Input
                                            placeholder="Ej. Montero & Co"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.workCenter}
                                            onChange={(e) => updateFormData("workCenter", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Ocupación</Label>
                                        <Input
                                            placeholder="Ej. Administrador"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.occupation}
                                            onChange={(e) => updateFormData("occupation", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Religión</Label>
                                        <Input
                                            placeholder="Ej. Católico"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.religion}
                                            onChange={(e) => updateFormData("religion", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-1">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Nivel de Educación</Label>
                                        <Select
                                            value={formData.education}
                                            onValueChange={(value) => updateFormData("education", value)}
                                        >
                                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:ring-blue-100 transition-all font-medium rounded-xl px-4 shadow-sm text-slate-900 text-sm">
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                                                <SelectItem value="primaria">Primaria</SelectItem>
                                                <SelectItem value="secundaria">Secundaria</SelectItem>
                                                <SelectItem value="tecnico">Técnico</SelectItem>
                                                <SelectItem value="universitario">Universitario</SelectItem>
                                                <SelectItem value="postgrado">Postgrado</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}

                            {/* STEP 4: SECURITY */}
                            {step === 4 && (
                                <div className="space-y-5">
                                    <div className="space-y-1.5">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Contraseña</Label>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.password}
                                            onChange={(e) => updateFormData("password", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[13px] font-semibold text-slate-700 ml-1">Confirmar Contraseña</Label>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-200 transition-all font-medium rounded-xl px-4 shadow-sm text-sm"
                                            value={formData.confirmPassword}
                                            onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                                            checked={formData.acceptTerms}
                                            onChange={(e) => updateFormData("acceptTerms", e.target.checked)}
                                        />
                                        <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed font-medium">
                                            Acepto los <button type="button" className="text-blue-900 font-bold hover:underline">términos y condiciones</button> y la política de tratamiento de datos personales de Montero and Company.
                                        </Label>
                                    </div>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                {step > 1 && (
                                    <Button
                                        type="button"
                                        onClick={prevStep}
                                        variant="outline"
                                        className="w-full sm:flex-1 h-12 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-white active:scale-[0.98] transition-all text-base"
                                    >
                                        Paso Anterior
                                    </Button>
                                )}

                                <Button
                                    type={step === 4 ? "submit" : "button"}
                                    onClick={step < 4 ? nextStep : undefined}
                                    className={`w-full ${step > 1 ? 'sm:flex-[2]' : 'flex-1'} h-12 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-500/10 transition-all active:scale-[0.98] text-base flex items-center justify-center gap-2 group/btn`}
                                >
                                    {step === 4 ? "Finalizar Registro" : "Siguiente Paso"}
                                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                                </Button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-8 text-center text-slate-400 font-medium text-sm">
                        ¿Ya tienes una cuenta? <Link to="/paciente/login" className="text-blue-900 font-black hover:underline">Inicia sesión</Link>
                    </p>
                </div>
            </div>

            {/* WELCOME DIALOG */}
            <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
                <DialogContent className="max-w-md p-0 overflow-hidden border-none bg-transparent">
                    <div className="bg-white rounded-[2.5rem] p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-blue-900" />
                        <div className="mt-4 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-900 mb-8">
                                <CheckCircle2 size={40} />
                            </div>
                            <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                                ¡Bienvenido a <br /> Montero and Company!
                            </DialogTitle>
                            <DialogDescription className="text-slate-600 font-medium leading-relaxed italic mb-8">
                                "Nos alegra tenerte aquí. Te recordamos que solo pueden registrarse usuarios mayores de edad. Si deseas sacar una cita para tu menor hijo(a), podrás hacerlo una vez que te registres y accedas al sistema. Por favor, asegúrate de ingresar todos tus datos para completar el registro. <br /><br />
                                ¡Gracias por tu confianza en nuestra familia Montero and Company, Consultores Integrales!"
                            </DialogDescription>
                            <Button
                                onClick={() => setShowWelcome(false)}
                                className="w-full h-16 bg-blue-900 hover:bg-blue-800 text-white font-black rounded-xl shadow-xl shadow-blue-500/10 text-lg group/w"
                            >
                                Continuar con el registro
                                <ArrowRight className="ml-3 group-hover/w:translate-x-1 transition-transform" size={20} />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* EXIT CONFIRM DIALOG */}
            <Dialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
                <DialogContent className="max-w-sm p-0 overflow-hidden border-none bg-transparent">
                    <div className="bg-white rounded-[2.5rem] p-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
                                <AlertCircle size={32} />
                            </div>
                            <DialogTitle className="text-2xl font-black tracking-tighter text-slate-900 mb-2">
                                ¿Deseas detener el registro?
                            </DialogTitle>
                            <DialogDescription className="text-slate-500 font-medium mb-8">
                                El proceso aún no ha terminado. Si sales ahora, perderás todos los datos ingresados y tendrás que empezar de nuevo.
                            </DialogDescription>
                            <div className="flex flex-col w-full gap-3">
                                <Button
                                    onClick={() => navigate("/paciente/login")}
                                    variant="ghost"
                                    className="h-12 text-red-500 hover:text-red-600 hover:bg-red-50 font-bold rounded-xl"
                                >
                                    Salir y borrar datos
                                </Button>
                                <Button
                                    onClick={() => setShowExitConfirm(false)}
                                    className="h-12 bg-blue-900 hover:bg-blue-800 text-white font-black rounded-xl"
                                >
                                    Continuar registrándome
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "outline", className?: string }) {
    const variants = {
        default: "bg-blue-600 text-white",
        outline: "border border-blue-600 text-blue-600"
    };
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
