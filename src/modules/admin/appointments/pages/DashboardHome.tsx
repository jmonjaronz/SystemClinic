import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_APPOINTMENTS } from "@/shared/mocks/appointments";
import { MOCK_PATIENTS } from "@/shared/mocks/patients";
import { Calendar, Users, Clock, ArrowRight, Activity, Plus } from "lucide-react";

export default function DashboardHome() {
    const today = MOCK_APPOINTMENTS.filter(app => app.date === '2023-10-26');
    const totalPatients = MOCK_PATIENTS.length;
    const pendingAppointments = MOCK_APPOINTMENTS.filter(app => app.status === 'pendiente').length;

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Bienvenido, Dr. Montero</h1>
                    <p className="text-slate-500 mt-1">Aquí tienes el resumen de tu actividad de hoy.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Clock className="w-4 h-4" />
                        Ver Agenda
                    </Button>
                    <Button className="bg-blue-700 hover:bg-blue-800 gap-2">
                        <Plus className="w-4 h-4" />
                        Nueva Cita
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">
                            Citas para Hoy
                        </CardTitle>
                        <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{today.length}</div>
                        <p className="text-xs text-slate-500 mt-1">
                            <span className="text-green-600 font-medium">2 pendientes</span> de confirmar
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">
                            Pacientes Activos
                        </CardTitle>
                        <div className="h-8 w-8 bg-green-50 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-green-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{totalPatients}</div>
                        <p className="text-xs text-slate-500 mt-1">
                            <span className="text-green-600 font-medium">+12%</span> respecto al mes pasado
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500">
                            Solicitudes Web
                        </CardTitle>
                        <div className="h-8 w-8 bg-orange-50 rounded-lg flex items-center justify-center">
                            <Activity className="h-4 w-4 text-orange-600" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">{pendingAppointments}</div>
                        <p className="text-xs text-slate-500 mt-1">
                            Requieren tu atención
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Appointments */}
                <Card className="lg:col-span-2 border-slate-200 shadow-sm">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-lg font-semibold text-slate-900">Próximas Citas</CardTitle>
                                <CardDescription>Citas programadas para las próximas horas</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            {MOCK_APPOINTMENTS.slice(0, 4).map((app) => (
                                <div key={app.id} className="flex items-center p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg border-2 border-white shadow-sm">
                                            {app.patient?.firstName[0]}{app.patient?.lastName[0]}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900 truncate">
                                            {app.patient?.firstName} {app.patient?.lastName}
                                        </p>
                                        <p className="text-xs text-slate-500 truncate">
                                            {app.type}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 ml-4">
                                        <div className="flex items-center text-sm font-medium text-slate-900 bg-slate-100 px-2 py-1 rounded">
                                            <Clock className="w-3 h-3 mr-1 text-slate-500" />
                                            {app.time}
                                        </div>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${app.status === 'confirmado' ? 'bg-green-100 text-green-700' :
                                                app.status === 'pendiente' ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-700'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions / Notifications */}
                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white border-none shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg">Acceso Rápido</CardTitle>
                            <CardDescription className="text-blue-200">Gestiones frecuentes</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                                <Plus className="mr-2 h-4 w-4" /> Registrar Paciente
                            </Button>
                            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                                <Activity className="mr-2 h-4 w-4" /> Generar Reporte
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Recordatorios</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                                    <span>Revisar resultados de laboratorio de Juan Pérez.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                                    <span>Confirmar citas de mañana.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
