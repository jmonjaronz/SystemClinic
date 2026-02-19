import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Shield, User } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Configuración</h1>
                <p className="text-slate-500">Administra tus preferencias y cuenta</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="md:col-span-1 border-none shadow-none bg-transparent">
                    <CardContent className="p-0 grid gap-1">
                        <Button variant="secondary" className="justify-start bg-white hover:bg-blue-50 text-blue-700 shadow-sm">
                            <User className="mr-2 h-4 w-4" /> Perfil
                        </Button>
                        <Button variant="ghost" className="justify-start text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                            <Bell className="mr-2 h-4 w-4" /> Notificaciones
                        </Button>
                        <Button variant="ghost" className="justify-start text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                            <Shield className="mr-2 h-4 w-4" /> Seguridad
                        </Button>
                    </CardContent>
                </Card>

                <div className="md:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información de Perfil</CardTitle>
                            <CardDescription>Actualiza tu información personal y profesional</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Nombre</Label>
                                    <Input id="firstName" defaultValue="Juan" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Apellido</Label>
                                    <Input id="lastName" defaultValue="Montero" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input id="email" defaultValue="dr.montero@clinic.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Biografía Profesional</Label>
                                <Textarea id="bio" placeholder="Escribe una breve descripción..." className="min-h-[100px]" />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t bg-slate-50 px-6 py-4">
                            <Button className="bg-blue-700 hover:bg-blue-800">Guardar Cambios</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Preferencias de la Clínica</CardTitle>
                            <CardDescription>Configuración general del sistema</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Notificaciones por Email</Label>
                                    <p className="text-sm text-slate-500">Recibir resumen diario de citas</p>
                                </div>
                                {/* Switch toggle Mock */}
                                <div className="h-6 w-11 bg-blue-600 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
