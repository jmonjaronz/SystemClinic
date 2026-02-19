import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, IdCard, Lock, ArrowRight, Building, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function CorporateLoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulación de login
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Bienvenido al Portal Corporativo", {
                description: "Acceso autorizado para Administración de Cuenta."
            });
            navigate("/empresa/app");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">

                {/* Visual Side */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                                <Building2 className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-black italic tracking-tighter uppercase">Montero Clinic <span className="text-blue-500">B2B</span></span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl font-black italic leading-[1.1]">
                                Potencia el <span className="text-blue-500">Talento</span> de tu organización.
                            </h1>
                            <p className="text-slate-400 text-lg font-medium italic max-w-md mt-6">
                                Gestión estratégica de salud mental, clima organizacional y procesos de selección inteligente.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-blue-500" />
                            <span className="text-xs font-bold uppercase tracking-widest italic text-slate-300">Privacidad Corporativa</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="text-blue-500" />
                            <span className="text-xs font-bold uppercase tracking-widest italic text-slate-300">Acceso Global</span>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-slate-900 italic mb-2">Portal de Empresas</h2>
                        <p className="text-slate-500 italic font-medium">Ingresa las credenciales de administrador de cuenta.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="ruc" className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">RUC de la Empresa</Label>
                            <div className="relative group">
                                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                                <Input
                                    id="ruc"
                                    type="text"
                                    placeholder="Ej. 20601234567"
                                    className="h-14 pl-12 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-600 text-lg font-bold italic"
                                    required
                                    maxLength={11}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="dni" className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">DNI del Administrador</Label>
                            <div className="relative group">
                                <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                                <Input
                                    id="dni"
                                    type="text"
                                    placeholder="DNI del usuario"
                                    className="h-14 pl-12 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-600 text-lg font-bold italic"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pass" className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">Contraseña</Label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                                <Input
                                    id="pass"
                                    type="password"
                                    placeholder="••••••••"
                                    className="h-14 pl-12 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-600 text-lg font-bold italic"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg font-black italic shadow-xl shadow-blue-100 group transition-all"
                        >
                            {isLoading ? "Validando..." : (
                                <>
                                    Ingresar al Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-12 space-y-4">
                        <Card className="rounded-2xl border-slate-100 bg-slate-50 border-dashed">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 italic">¿Problemas con el acceso?</p>
                                    <p className="text-[10px] text-slate-500 font-medium italic">Contacta a tu asesor corporativo de Montero Clinic.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

import type { LucideProps } from "lucide-react";

function HelpCircle(props: LucideProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
        </svg>
    )
}
