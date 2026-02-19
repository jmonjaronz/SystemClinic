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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestro Staff Psicológico Especializado</h2>
                        <p className="text-slate-600 text-lg">
                            Contamos con un equipo de especialistas altamente capacitados, dedicados a brindarte un acompañamiento profesional y humano.
                        </p>
                    </div>
                    <Link to="/equipo">
                        <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                            Ver todo el staff
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specialists.map((specialist, index) => (
                        <Card key={index} className="overflow-hidden border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                            <div className="aspect-square overflow-hidden bg-slate-100">
                                <img
                                    src={specialist.image}
                                    alt={specialist.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl font-bold text-slate-900">{specialist.name}</CardTitle>
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{specialist.role}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 font-medium mb-1">{specialist.specialty}</p>
                                <p className="text-slate-500 text-sm mb-4">{specialist.experience}</p>
                                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                                    Agendar Cita
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
