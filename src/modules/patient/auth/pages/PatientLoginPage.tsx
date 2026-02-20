import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export default function PatientLoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [documentNumber, setDocumentNumber] = useState("");
    const [docType, setDocType] = useState("dni");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (docType === "dni" && documentNumber.length !== 8) {
            toast.error("DNI inválido", {
                description: "El DNI debe tener exactamente 8 dígitos.",
            });
            return;
        }

        setIsLoading(true);

        // Simulating patient login delay
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Bienvenido", {
                description: "Has ingresado correctamente a tu portal de bienestar.",
            });
            navigate("/paciente/app");
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex bg-blue-50/30 font-sans">
            {/* Left Side - Welcoming Visual */}
            <div className="hidden lg:flex w-1/2 bg-blue-950 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2040&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />

                <div className="relative z-10 text-white max-w-lg">
                    <Badge variant="outline" className="mb-6 border-blue-400 text-blue-300 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black rounded-full">
                        Montero Bienestar Personal & Familia
                    </Badge>
                    <h1 className="text-5xl font-black mb-8 tracking-tighter leading-tight">
                        Tu salud mental merece <br />
                        <span className="text-blue-400 text-glow">el más alto estándar.</span>
                    </h1>
                    <p className="text-xl text-blue-100/70 mb-10 leading-relaxed italic">
                        Accede a tu historial, agenda citas con tus especialistas y gestiona el bienestar de tu familia en un solo lugar.
                    </p>

                    <div className="space-y-5">
                        {[
                            { text: "Acceso Rápido a tus Resultados", icon: CheckCircle2 },
                            { text: "Teleconsulta y Citas Presenciales", icon: CheckCircle2 },
                            { text: "Espacio Seguro y Confidencial", icon: CheckCircle2 }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group transition-all">
                                <item.icon className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-blue-50 font-bold">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-10">
                    {/* Official Logo Block */}
                    <div className="flex flex-col items-center gap-4 mb-4">
                        <Link to="/" className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 bg-blue-900 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-blue-900/20 group-hover:scale-105 transition-transform duration-500">
                                MC
                            </div>
                        </Link>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-100 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="space-y-3 text-center mb-10">
                                <h2 className="text-2xl font-black tracking-tighter text-slate-900 leading-tight">
                                    Bienvenido
                                </h2>
                                <p className="text-slate-500 font-medium text-sm">
                                    Identifícate para acceder a tu historial clínico
                                </p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Tipo de Documento</Label>
                                        <div className="relative">
                                            <select
                                                value={docType}
                                                onChange={(e) => {
                                                    setDocType(e.target.value);
                                                    setDocumentNumber("");
                                                }}
                                                className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-200 transition-all font-bold rounded-2xl px-6 appearance-none shadow-inner text-slate-900 outline-none"
                                            >
                                                <option value="dni">DNI (Perú)</option>
                                                <option value="ce">Carnet de Extranjería</option>
                                                <option value="pasaporte">Pasaporte</option>
                                            </select>
                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="documentNumber" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                                            {docType === "dni" ? "Número de DNI" : docType === "ce" ? "Carnet de Extranjería" : "Número de Pasaporte"}
                                        </Label>
                                        <Input
                                            id="documentNumber"
                                            type="text"
                                            placeholder={docType === "dni" ? "12345678" : "Ingresa número"}
                                            maxLength={docType === "dni" ? 8 : 20}
                                            value={documentNumber}
                                            onChange={(e) => setDocumentNumber(docType === "dni" ? e.target.value.replace(/\D/g, "") : e.target.value)}
                                            className="h-14 bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 transition-all text-lg tracking-widest font-black rounded-2xl p-6 shadow-inner"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" title="Contraseña" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Contraseña</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-14 bg-slate-50 border-slate-100 focus:bg-white focus:border-blue-200 transition-all rounded-2xl p-6 shadow-inner"
                                            required
                                        />
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-16 bg-blue-900 hover:bg-blue-800 text-white font-black rounded-2xl shadow-xl shadow-blue-500/10 transition-all active:scale-[0.98] text-lg flex items-center justify-center gap-3 group/btn"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Validando..." : "Ingresar al Portal"}
                                    {!isLoading && <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />}
                                </Button>
                            </form>

                            <div className="mt-10 pt-8 border-t border-slate-50 text-center">
                                <p className="text-sm text-slate-400 font-medium">
                                    ¿Aún no tienes cuenta?{' '}
                                    <Link to="/paciente/registro" className="font-black text-blue-900 hover:underline">
                                        Regístrate aquí
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
