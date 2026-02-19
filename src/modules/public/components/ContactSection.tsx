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
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Estamos aquí para <br /><span className="text-blue-600">acompañar tu proceso</span></h2>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                                    Ya sea una consulta inicial o un requerimiento corporativo, nuestro equipo
                                    está listo para brindarte la atención profesional que mereces.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-slate-100 transition-colors group">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <MapPin size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Ubicación</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Av. Principal 123, <br />Ciudad Médica, Lima
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-slate-100 transition-colors group">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Phone size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Teléfono</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            +51 999 999 999 <br />Lun - Vie, 9am - 7pm
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-slate-100 transition-colors group">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Mail size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Email</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            hola@monteroclinic.com <br />admision@monteroclinic.com
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none bg-slate-50 shadow-none rounded-[32px] p-2 hover:bg-slate-100 transition-colors group">
                                    <CardContent className="pt-8 px-6">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Globe size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg">Redes</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            @monteroandcompany <br />LinkedIn / Instagram
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Column 2: Form */}
                        <Card className="border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[40px] p-4 md:p-8 bg-white">
                            <CardContent className="pt-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">Envíanos un mensaje</h3>
                                        <p className="text-slate-500 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                                    </div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="name" className="text-slate-900 font-bold ml-1">Nombre</Label>
                                            <Input id="name" placeholder="Ej: Juan" className="h-14 rounded-2xl border-slate-200 focus:ring-blue-500 bg-slate-50/50" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="lastname" className="text-slate-900 font-bold ml-1">Apellido</Label>
                                            <Input id="lastname" placeholder="Ej: Pérez" className="h-14 rounded-2xl border-slate-200 focus:ring-blue-500 bg-slate-50/50" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="email" className="text-slate-900 font-bold ml-1">Correo Electrónico</Label>
                                        <Input id="email" type="email" placeholder="tu@email.com" className="h-14 rounded-2xl border-slate-200 focus:ring-blue-500 bg-slate-50/50" />
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="message" className="text-slate-900 font-bold ml-1">Tu Mensaje</Label>
                                        <Textarea id="message" placeholder="Contanos brevemente cómo podemos apoyarte..." className="min-h-[160px] rounded-[24px] border-slate-200 focus:ring-blue-500 bg-slate-50/50 p-4" />
                                    </div>

                                    <Button className="w-full h-16 bg-blue-800 hover:bg-blue-900 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 group">
                                        Enviar Mensaje <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
