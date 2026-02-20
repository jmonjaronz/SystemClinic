import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    MapPin,
    Phone,
    Mail,
    Send,
    MessageSquare,
    Globe
} from "lucide-react";

export default function ContactSection() {
    return (
        <section className="py-24 bg-white" id="contacto">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Column 1: Info & Cards */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Estamos aquí para <br /><span className="text-blue-900">acompañar tu proceso</span></h2>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                                    Ya sea una consulta inicial o un requerimiento corporativo, nuestro equipo
                                    está listo para brindarte la atención profesional estratégica que mereces.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-blue-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                            <MapPin size={28} />
                                        </div>
                                        <h4 className="font-black text-slate-900 mb-2 text-lg tracking-tight">Ubicación</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Av. Principal 123, <br />Ciudad Médica, Lima
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-blue-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                            <Phone size={28} />
                                        </div>
                                        <h4 className="font-black text-slate-900 mb-2 text-lg tracking-tight">Teléfono</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            +51 999 999 999 <br />Lun - Vie, 9am - 7pm
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-blue-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                            <Mail size={28} />
                                        </div>
                                        <h4 className="font-black text-slate-900 mb-2 text-lg tracking-tight">Email</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            hola@monteroandcompany.com <br />admision@monteroandcompany.com
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-blue-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                            <Globe size={28} />
                                        </div>
                                        <h4 className="font-black text-slate-900 mb-2 text-lg tracking-tight">Redes</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            @monteroandcompany <br />LinkedIn / Instagram
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Column 2: Form */}
                        <Card className="border-slate-100 shadow-2xl shadow-slate-200/40 rounded-[40px] p-4 md:p-8 bg-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl transition-colors duration-700 group-hover:bg-blue-100/50"></div>
                            <CardContent className="pt-8 relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shadow-inner">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Envíanos un mensaje</h3>
                                        <p className="text-slate-500 text-sm">Respuesta aproximada en menos de 24 horas.</p>
                                    </div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-slate-900 font-black text-xs uppercase tracking-widest ml-1 opacity-70">Nombre</Label>
                                            <Input id="name" placeholder="Ej: Juan" className="h-14 rounded-2xl border-slate-100 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/50 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastname" className="text-slate-900 font-black text-xs uppercase tracking-widest ml-1 opacity-70">Apellido</Label>
                                            <Input id="lastname" placeholder="Ej: Pérez" className="h-14 rounded-2xl border-slate-100 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/50 transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-slate-900 font-black text-xs uppercase tracking-widest ml-1 opacity-70">Correo Electrónico</Label>
                                        <Input id="email" type="email" placeholder="tu@email.com" className="h-14 rounded-2xl border-slate-100 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/50 transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-slate-900 font-black text-xs uppercase tracking-widest ml-1 opacity-70">Tu Mensaje</Label>
                                        <Textarea id="message" placeholder="¿Cómo podemos apoyarte?" className="min-h-[140px] rounded-[24px] border-slate-100 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/50 p-4 transition-all" />
                                    </div>

                                    <Button className="w-full h-16 bg-slate-900 hover:bg-blue-900 text-white font-black text-lg rounded-2xl shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 group active:scale-95">
                                        Enviar Consulta <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
