import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fingerprint, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function PatientLoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [dni, setDni] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (dni.length !== 8) {
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
        <div className="min-h-screen w-full flex bg-blue-50/30">
            {/* Left Side - Welcoming Visual */}
            <div className="hidden lg:flex w-1/2 bg-sky-950 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-950 to-blue-900 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2040&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />

                <div className="relative z-10 text-white max-w-lg">
                    <Badge variant="outline" className="mb-6 border-sky-400 text-sky-300 px-4 py-1">Portal de Bienestar</Badge>
                    <h1 className="text-4xl font-bold mb-6 italic">Tu salud mental es nuestra prioridad</h1>
                    <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                        Accede a tu historial, agenda citas con tus especialistas y gestiona el bienestar de tu familia en un solo lugar.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-sky-400" />
                            <span className="text-sky-50">Acceso Rápido a tus Resultados</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-sky-400" />
                            <span className="text-sky-50">Teleconsulta y Citas Presenciales</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-sky-400" />
                            <span className="text-sky-50">Espacio Seguro y Confidencial</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-sm space-y-8 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-100 border border-slate-100">
                    <div className="space-y-2 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-2 text-blue-600">
                            <Fingerprint size={32} />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 italic">Hola de nuevo</h2>
                        <p className="text-slate-500 italic">
                            Ingresa para gestionar tu bienestar
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="dni">Documento de Identidad (DNI)</Label>
                                <div className="relative">
                                    <Input
                                        id="dni"
                                        type="text"
                                        placeholder="12345678"
                                        maxLength={8}
                                        value={dni}
                                        onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
                                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all text-lg tracking-widest"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-lg font-bold shadow-lg shadow-blue-100 transition-all rounded-xl"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Validando..." : "Ingresar"}
                            {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                        </Button>
                    </form>

                    <div className="pt-4 border-t border-slate-100 text-center space-y-4">
                        <p className="text-sm text-slate-500">
                            ¿Aún no tienes cuenta?{' '}
                            <button type="button" className="font-bold text-blue-700 hover:underline">
                                Regístrate aquí
                            </button>
                        </p>
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
