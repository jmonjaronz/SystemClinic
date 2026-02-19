import { Linkedin, Mail, ArrowRight, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const directors = [
    {
        name: "Dr. Roberto Montero",
        role: "Director Clínico & Psicólogo Senior",
        specialty: "Psicoterapia Integral & Coaching Ejecutivo",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop&q=80",
        bio: "Más de 20 años transformando vidas y organizaciones. Especialista en desbloquear el potencial humano a través de un enfoque clínico y estratégico.",
        credentials: "PhD en Psicología Clínica | Certificación Internacional en Coaching",
    }
];

const specialists = [
    {
        name: "Dra. Elena Vega",
        role: "Psicóloga Clínica",
        specialty: "Terapia de Pareja & Ansiedad",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop&q=80",
        bio: "Experta en dinámicas relacionales y manejo del estrés. Ayuda a parejas e individuos a reconstruir vínculos y encontrar paz mental.",
        credentials: "MSc en Terapia Familiar",
    },
    {
        name: "Dra. Sofia Lopez",
        role: "Especialista en Desarrollo",
        specialty: "Psicología Infantil & Juvenil",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&q=80",
        bio: "Dedicada a potenciar las capacidades de niños y adolescentes, facilitando un crecimiento emocional saludable y equilibrado.",
        credentials: "Especialidad en Neuropsicología Infantil",
    },
    {
        name: "Lic. Carlos Méndez",
        role: "Consultor Organizacional",
        specialty: "Gestión del Talento & Clima Laboral",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop&q=80",
        bio: "Transforma la cultura de las empresas optimizando el bienestar y rendimiento de los equipos de trabajo.",
        credentials: "Master en Psicología Organizacional",
    },
];

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge className="mb-6 bg-blue-600 hover:bg-blue-600 text-white border-none py-1 px-4 uppercase tracking-widest text-xs">Poder Humano</Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
                        Mentes Brillantes al <br />
                        <span className="text-blue-500">Servicio de tu Bienestar</span>
                    </h1>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        Nuestro equipo multidisciplinario combina años de experiencia clínica con un enfoque
                        profundamente humano para acompañar tu proceso de cambio.
                    </p>
                </div>
            </section>

            {/* Directors Section - Featured */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col mb-16 items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Liderazgo & Visión</h2>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>

                    {directors.map((member, index) => (
                        <div key={index} className="max-w-6xl mx-auto bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="h-[400px] lg:h-full relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
                                </div>
                                <div className="p-8 md:p-16 flex flex-col justify-center">
                                    <Badge variant="outline" className="w-fit mb-6 border-blue-200 text-blue-700 bg-blue-50/50 px-4 py-1">{member.role}</Badge>
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{member.name}</h3>
                                    <p className="text-blue-600 font-bold text-xl mb-8">{member.specialty}</p>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                                        "{member.bio}"
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center text-slate-700 font-medium">
                                            <GraduationCap className="mr-3 text-blue-600" size={24} />
                                            {member.credentials}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-xl px-8 h-14">
                                            Agendar Cita
                                        </Button>
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-xl border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-700">
                                                <Linkedin size={20} />
                                            </Button>
                                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-xl border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-700">
                                                <Mail size={20} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialists Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="mb-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestros Especialistas</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Excelencia profesional en diversas ramas de la psicología y consultoría.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialists.map((member, index) => (
                            <Card key={index} className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                        <div className="flex gap-3">
                                            <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-blue-800 border-none">
                                                <Linkedin size={18} />
                                            </Button>
                                            <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-blue-800 border-none">
                                                <Mail size={18} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader className="pt-8 pb-4">
                                    <Badge variant="secondary" className="w-fit mb-3 bg-blue-50 text-blue-700 hover:bg-blue-50 border-none font-bold uppercase tracking-tighter text-[10px]">{member.role}</Badge>
                                    <CardTitle className="text-2xl font-black text-slate-900">{member.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-8">
                                    <p className="text-blue-600 font-bold text-sm mb-4 leading-snug">{member.specialty}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                        {member.bio}
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-slate-400 text-xs font-medium">
                                        <Award className="mr-2 text-blue-500" size={16} />
                                        {member.credentials}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-900 rounded-[48px] p-8 md:p-20 text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-800/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-8">¿Eres un profesional apasionado?</h2>
                            <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                                Siempre buscamos a los mejores talentos en psicología y bienestar para
                                elevar nuestro estándar de cuidado.
                            </p>
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-black h-16 px-10 rounded-2xl shadow-xl shadow-blue-950/20">
                                Únete a nuestro equipo <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
