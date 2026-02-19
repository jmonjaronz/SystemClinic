import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone, MapPin, FileText, Activity, Brain, ClipboardList, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MOCK_PATIENTS } from "@/shared/mocks/patients";
import { MOCK_CLINICAL_RECORDS } from "@/shared/mocks/clinicalRecords";

export default function PatientDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const patient = MOCK_PATIENTS.find(p => p.id === id);
    const record = MOCK_CLINICAL_RECORDS.find(r => r.patientId === id);

    if (!patient) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <h2 className="text-2xl font-bold text-slate-800">Paciente no encontrado</h2>
                <Button onClick={() => navigate(-1)} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Volver
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500 pb-10">
            {/* Header with Navigation */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">{patient.firstName} {patient.lastName}</h1>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span className={`inline-block w-2 h-2 rounded-full ${patient.status === 'activo' ? 'bg-green-500' : 'bg-slate-300'}`} />
                        {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Sidebar - Personal Info */}
                <div className="lg:col-span-3 space-y-6">
                    <Card>
                        <CardHeader className="text-center pt-8">
                            <div className="w-24 h-24 mx-auto mb-4 relative">
                                <Avatar className="w-full h-full text-2xl border-4 border-slate-50 shadow-md">
                                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.id}`} />
                                    <AvatarFallback className="bg-blue-100 text-blue-700">
                                        {patient.firstName[0]}{patient.lastName[0]}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <CardTitle>{patient.firstName} {patient.lastName}</CardTitle>
                            <Badge variant="secondary" className="mt-2 text-slate-600 bg-slate-100 hover:bg-slate-200">
                                ID: #{patient.id}
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Mail className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm truncate" title={patient.email}>{patient.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm">{patient.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm">Lima, Perú</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Última Visita</p>
                                    <p className="font-semibold text-slate-900 mt-1">{patient.lastVisit}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">Edad</p>
                                    <p className="font-semibold text-slate-900 mt-1">32 años</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Session Card for Patient or Therapist Reference */}
                    {record && record.nextSessionPlan && (
                        <Card className="bg-indigo-50 border-indigo-100">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-2 text-indigo-800">
                                    <Brain className="h-5 w-5" />
                                    <CardTitle className="text-base">Próxima Sesión</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <p className="text-xs font-semibold text-indigo-400 uppercase">Foco a trabajar</p>
                                    <p className="text-sm text-indigo-900 font-medium mt-1">{record.nextSessionPlan.focus}</p>
                                </div>
                                {record.nextSessionPlan.materials.length > 0 && (
                                    <div>
                                        <p className="text-xs font-semibold text-indigo-400 uppercase">Materiales necesarios</p>
                                        <ul className="mt-1 space-y-1">
                                            {record.nextSessionPlan.materials.map((material, idx) => (
                                                <li key={idx} className="text-sm text-indigo-800 flex items-start gap-2">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                                    {material}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9 space-y-6">

                    {/* Clinical Overview Banner */}
                    {record ? (
                        <Card className="bg-white border-l-4 border-l-blue-600 shadow-sm">
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Activity className="h-4 w-4 text-blue-600" />
                                            <h3 className="font-semibold text-slate-900">Diagnóstico Actual</h3>
                                        </div>
                                        <p className="text-lg text-slate-800 font-medium">{record.diagnosis}</p>
                                        <p className="text-sm text-slate-500 mt-1">{record.treatmentPhase}</p>
                                    </div>
                                    <div className="md:border-l md:pl-6 border-slate-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <ClipboardList className="h-4 w-4 text-blue-600" />
                                            <h3 className="font-semibold text-slate-900">Demanda Inicial</h3>
                                        </div>
                                        <p className="text-sm text-slate-600 italic">"{record.initialDemand}"</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 flex items-center gap-3">
                            <Brain className="h-5 w-5" />
                            <p>No hay registro clínico activo para este paciente.</p>
                        </div>
                    )}

                    {/* Tabs Area */}
                    <Tabs defaultValue="evolution" className="w-full">
                        <TabsList className="bg-slate-100 p-1 mb-6">
                            <TabsTrigger value="evolution" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <Activity className="mr-2 h-4 w-4" /> Evolución
                            </TabsTrigger>
                            <TabsTrigger value="tests" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <ClipboardList className="mr-2 h-4 w-4" /> Pruebas Psicológicas
                            </TabsTrigger>
                            <TabsTrigger value="files" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <FileText className="mr-2 h-4 w-4" /> Archivos
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="evolution" className="space-y-6 animate-in fade-in-50">
                            {record && record.history.length > 0 ? (
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    {record.history.map((session) => (
                                        <div key={session.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            {/* Icon */}
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                <span className="text-xs font-bold">{session.sessionNumber}</span>
                                            </div>

                                            {/* Card */}
                                            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                                        <Calendar className="h-3 w-3 text-slate-400" />
                                                        {session.date}
                                                    </div>
                                                    <Badge variant="outline" className="text-xs font-normal text-slate-500">Sesión #{session.sessionNumber}</Badge>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Objetivo</p>
                                                        <p className="text-sm text-slate-700">{session.objective}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Descripción</p>
                                                        <p className="text-sm text-slate-600">{session.description}</p>
                                                    </div>
                                                    {session.observations && (
                                                        <div className="bg-slate-50 p-2 rounded text-xs border border-slate-100">
                                                            <span className="font-semibold text-slate-700">Obs:</span> {session.observations}
                                                        </div>
                                                    )}
                                                    {session.agreements && (
                                                        <div className="border-t border-slate-100 pt-2 mt-2">
                                                            <div className="flex items-start gap-2">
                                                                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                                <div>
                                                                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide">Acuerdos / Tareas</p>
                                                                    <p className="text-sm text-slate-700">{session.agreements}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <BookOpen className="h-12 w-12 text-slate-200 mx-auto mb-3" />
                                    <h3 className="text-lg font-medium text-slate-900">No hay sesiones registradas</h3>
                                    <p className="text-slate-500">Inicia una nueva sesión para comenzar el historial.</p>
                                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Registrar Primera Sesión</Button>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="tests">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {record && record.tests.length > 0 ? (
                                    record.tests.map((test) => (
                                        <Card key={test.id} className="hover:border-blue-300 transition-colors cursor-pointer group">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base group-hover:text-blue-700 transition-colors">{test.name}</CardTitle>
                                                <CardDescription>Aplicado el {test.date}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div>
                                                        <p className="text-xs text-slate-500 uppercase">Puntaje</p>
                                                        <p className="text-2xl font-bold text-slate-900">{test.score}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs text-slate-500 uppercase">Interpretación</p>
                                                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                                                            {test.interpretation}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="col-span-2 text-center py-12 border border-dashed rounded-lg">
                                        <p className="text-slate-500">No hay pruebas psicológicas registradas.</p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="files">
                            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-12 text-center">
                                <FileText className="h-10 w-10 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-slate-900">Archivos y Documentos</h3>
                                <p className="text-slate-500 mb-6">Sube consentimientos informados, informes externos u otros documentos.</p>
                                <Button variant="outline">Subir Archivo</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
