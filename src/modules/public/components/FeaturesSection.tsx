import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Users, HeartHandshake } from "lucide-react";

const features = [
    {
        title: "Terapia Individual",
        description: "Espacio seguro para explorar tus emociones y fortalecer tu salud mental personal.",
        icon: Brain,
    },
    {
        title: "Terapia de Pareja",
        description: "Herramientas para mejorar la comunicación y resolver conflictos en relaciones.",
        icon: Users,
    },
    {
        title: "Terapia Infantil",
        description: "Apoyo especializado para niños y adolescentes en su desarrollo emocional.",
        icon: HeartHandshake,
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos un enfoque integral adaptado a tus necesidades específicas, con profesionales licenciados y comprometidos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-800">
                                    <feature.icon size={24} />
                                </div>
                                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-600 text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
