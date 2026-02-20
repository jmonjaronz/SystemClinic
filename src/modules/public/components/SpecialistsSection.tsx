import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const specialists = [
    {
        name: "Dr. Roberto Montero",
        role: "Psicólogo Clínico",
        specialty: "Terapia Cognitivo-Conductual",
        experience: "15+ años de experiencia",
        image: "https://images.unsplash.com/photo-1559839734-2b71ca197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
        name: "Dra. Ana Valdivia",
        role: "Psicóloga Infantil",
        specialty: "Psicoterapia en Niños y Adolescentes",
        experience: "10+ años de experiencia",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
        name: "Lic. Carlos Méndez",
        role: "Terapeuta de Pareja",
        specialty: "Mediación y Dinámicas Familiares",
        experience: "8 años de experiencia",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    },
];

export default function SpecialistsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nuestro Staff Psicológico Especializado</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Contamos con un equipo de especialistas altamente capacitados, dedicados a brindarte un acompañamiento profesional, ético y humano de excelencia.
                        </p>
                    </div>
                    <Link to="/equipo">
                        <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 font-black h-12 rounded-xl px-8 transition-all hover:-translate-y-1">
                            Ver todo el staff
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {specialists.map((specialist, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group rounded-[2.5rem] bg-slate-50/50 hover:bg-white border border-transparent hover:border-blue-100 hover:-translate-y-2">
                            <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                                <img
                                    src={specialist.image}
                                    alt={specialist.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-sm font-medium italic">"{specialist.specialty}"</p>
                                </div>
                            </div>
                            <CardHeader className="pb-2 pt-6">
                                <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">{specialist.name}</CardTitle>
                                <p className="text-blue-900 font-black text-[10px] uppercase tracking-[0.2em]">{specialist.role}</p>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <p className="text-slate-500 text-sm mb-6">{specialist.experience}</p>
                                <Link to="/paciente/login">
                                    <Button className="w-full bg-slate-900 hover:bg-blue-900 text-white font-black h-12 rounded-2xl transition-all shadow-lg active:scale-95">
                                        Agendar Cita
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
