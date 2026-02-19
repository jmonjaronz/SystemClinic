import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, CheckCircle2, Mail } from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isForgotPassOpen, setIsForgotPassOpen] = useState(false);
    const [emailReset, setEmailReset] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulating login delay
        setTimeout(() => {
            setIsLoading(false);
            navigate("/app");
        }, 1000);
    };

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulating reset flow
        setTimeout(() => {
            setIsLoading(false);
            setIsForgotPassOpen(false);
            toast.success("Correo enviado", {
                description: `Se ha enviado un enlace de recuperación a ${emailReset}`,
            });
            setEmailReset("");
        }, 1500);
    };

    const handleContactAdmin = () => {
        toast.info("Aviso de sistema", {
            description: "El jefe de área tiene que realizar el pedido para nuevas cuentas o accesos.",
            duration: 5000,
        });
    };

    return (
        <div className="min-h-screen w-full flex">
            {/* Left Side - Hero / Branding */}
            <div className="hidden lg:flex w-1/2 bg-blue-900 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />

                <div className="relative z-10 text-white max-w-lg">
                    <h1 className="text-4xl font-bold mb-6">Montero and Company</h1>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Gestiona tu clínica de manera eficiente. Accede a tu panel de control para administrar citas, pacientes y mucho más.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-300" />
                            <span className="text-blue-50">Gestión de Citas Rápida</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-300" />
                            <span className="text-blue-50">Expedientes Digitales Seguros</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-300" />
                            <span className="text-blue-50">Reportes Detallados</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
                <div className="w-full max-w-sm space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bienvenido</h2>
                        <p className="text-slate-500">
                            Ingresa tus credenciales para continuar
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Usuario</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="username"
                                        placeholder="admin"
                                        className="pl-10 h-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <button
                                        type="button"
                                        onClick={() => setIsForgotPassOpen(true)}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline transition-all"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••"
                                        className="pl-10 h-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-11 bg-blue-700 hover:bg-blue-800 text-base font-semibold shadow-md hover:shadow-lg transition-all" type="submit" disabled={isLoading}>
                            {isLoading ? "Ingresando..." : "Iniciar Sesión"}
                        </Button>
                    </form>

                    <p className="text-center text-sm text-slate-500">
                        ¿No tienes acceso?{' '}
                        <button
                            type="button"
                            onClick={handleContactAdmin}
                            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all"
                        >
                            Contacta al administrador
                        </button>
                    </p>
                </div>
            </div>

            {/* Forgot Password Dialog */}
            <Dialog open={isForgotPassOpen} onOpenChange={setIsForgotPassOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Recuperar contraseña</DialogTitle>
                        <DialogDescription>
                            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu cuenta.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleResetPassword}>
                        <div className="flex items-center space-x-2 py-4">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="email" className="sr-only">
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="correo@ejemplo.com"
                                        className="pl-10"
                                        value={emailReset}
                                        onChange={(e) => setEmailReset(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-end">
                            <Button type="button" variant="secondary" onClick={() => setIsForgotPassOpen(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit" className="bg-blue-700 hover:bg-blue-800" disabled={isLoading}>
                                {isLoading ? "Enviando..." : "Enviar enlace"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
