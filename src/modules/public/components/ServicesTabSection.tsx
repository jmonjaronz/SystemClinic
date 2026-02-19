import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Brain,
    Heart,
    Baby,
    ClipboardCheck,
    Lightbulb,
    TrendingUp,
    ShieldCheck,
    Users,
    Presentation
} from "lucide-react";

const personalServices = [
    {
        title: "Salud Mental y Emocional",
        description: "Recupera tu equilibrio y fortaleza mental con terapia individual especializada.",
        icon: Brain,
    },
    {
        title: "Relaciones y Pareja",
        description: "Fortalece vínculos y resuelve conflictos con herramientas de comunicación efectiva.",
        icon: Heart,
    },
    {
        title: "Crecimiento Infantil y Juvenil",
        description: "Apoyo en el desarrollo emocional, académico y estimulación temprana.",
        icon: Baby,
    },
    {
        title: "Evaluaciones Especializadas",
        description: "Diagnósticos precisos mediante test psicológicos y evaluaciones integrales.",
        icon: ClipboardCheck,
    },
    {
        title: "Potencial y Talleres",
        description: "Sesiones de coaching y talleres diseñados para tu crecimiento personal.",
        icon: Lightbulb,
    },
];

const corporateServices = [
    {
        title: "Liderazgo y Equipos",
        description: "Potencia el alto rendimiento con Executive Coaching y Team Building.",
        icon: TrendingUp,
    },
    {
        title: "Bienestar Organizacional",
        description: "Prevención y monitoreo de riesgos psicosociales para un entorno saludable.",
        icon: ShieldCheck,
    },
    {
        title: "Cultura y Talento",
        description: "Optimiza la selección, el clima laboral y la consultoría estratégica.",
        icon: Users,
    },
    {
        title: "Desarrollo y Capacitación",
        description: "Talleres prácticos y capacitaciones para el desarrollo de tus colaboradores.",
        icon: Presentation,
    },
];

export default function ServicesTabSection() {
    return (
        <section className="py-24 bg-white" id="servicios">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">¿Cómo podemos ayudarte?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Ya sea que busques apoyo personal o quieras transformar tu organización,
                        contamos con soluciones diseñadas para generar un impacto real.
                    </p>
                </div>

                <Tabs defaultValue="personal" className="max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-12 h-14 p-1 bg-slate-100 rounded-xl">
                        <TabsTrigger
                            value="personal"
                            className="rounded-lg text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-sm"
                        >
                            Bienestar Personal
                        </TabsTrigger>
                        <TabsTrigger
                            value="corporate"
                            className="rounded-lg text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-sm"
                        >
                            Soluciones Corporativas
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {personalServices.map((service, index) => (
                                <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-100 group">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            <service.icon size={24} />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-slate-600 text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="corporate" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {corporateServices.map((service, index) => (
                                <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-100 group flex flex-col md:flex-row items-center p-4">
                                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 text-blue-600 flex-shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                        <service.icon size={36} />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <CardHeader className="p-0 mb-2">
                                            <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <CardDescription className="text-slate-600 text-base leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-blue-900 mb-2">¿Necesitas una propuesta a medida?</h4>
                                <p className="text-blue-700">Diseñamos programas personalizados según los retos específicos de tu organización.</p>
                            </div>
                            <button className="bg-blue-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-200">
                                Solicitar Consultoría
                            </button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
