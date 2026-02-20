import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
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

                <Tabs defaultValue="personal" className="max-w-6xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-16 h-16 p-1.5 bg-slate-100 rounded-2xl">
                        <TabsTrigger
                            value="personal"
                            className="rounded-xl text-lg font-black tracking-tight data-[state=active]:bg-white data-[state=active]:text-blue-900 data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/10 transition-all"
                        >
                            Bienestar Personal
                        </TabsTrigger>
                        <TabsTrigger
                            value="corporate"
                            className="rounded-xl text-lg font-black tracking-tight data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-lg data-[state=active]:shadow-indigo-500/10 transition-all"
                        >
                            Soluciones Corporativas
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal" className="mt-0 outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {personalServices.map((service, index) => (
                                <Card key={index} className="border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2 rounded-3xl group overflow-hidden border-none bg-white">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CardHeader className="pb-4">
                                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                                            <service.icon size={28} />
                                        </div>
                                        <CardTitle className="text-xl font-black text-slate-900 tracking-tight">{service.title}</CardTitle>
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

                    <TabsContent value="corporate" className="mt-0 outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {corporateServices.map((service, index) => (
                                <Card key={index} className="border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-2 rounded-3xl group flex flex-col md:flex-row items-center p-8 border-none bg-white">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 md:mb-0 md:mr-8 text-indigo-700 flex-shrink-0 transition-all duration-300 group-hover:bg-indigo-700 group-hover:text-white">
                                        <service.icon size={36} />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <CardHeader className="p-0 mb-3">
                                            <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <CardDescription className="text-slate-600 text-lg leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-16 p-10 bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-indigo-500/20 group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-black tracking-tight mb-3">¿Necesitas una propuesta a medida?</h4>
                                <p className="text-indigo-100 text-lg max-w-xl">Diseñamos programas estratégicos basados en data para mejorar el rendimiento de tu capital humano.</p>
                            </div>
                            <Link to="/empresa/login" className="relative z-10 w-full md:w-auto">
                                <button className="w-full md:w-auto bg-white text-indigo-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl hover:shadow-white/10 active:scale-95">
                                    Solicitar Consultoría
                                </button>
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
