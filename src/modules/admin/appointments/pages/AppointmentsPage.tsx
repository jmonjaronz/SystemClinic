import { useState, useMemo } from "react";
import { Plus, Search, Filter, Calendar as CalendarIcon, Clock, MoreHorizontal, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MOCK_APPOINTMENTS } from "@/shared/mocks/appointments";

export default function AppointmentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [companyFilter, setCompanyFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    const uniqueCompanies = useMemo(() => Array.from(new Set(MOCK_APPOINTMENTS.map(a => a.company).filter(Boolean))), []);
    const uniqueTypes = useMemo(() => Array.from(new Set(MOCK_APPOINTMENTS.map(a => a.type))), []);

    const filteredAppointments = MOCK_APPOINTMENTS.filter(app => {
        const matchesSearch =
            app.patient?.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.patient?.lastName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = dateFilter ? app.date === dateFilter : true;
        const matchesCompany = companyFilter ? app.company === companyFilter : true;
        const matchesType = typeFilter ? app.type === typeFilter : true;

        return matchesSearch && matchesDate && matchesCompany && matchesType;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmado': return 'bg-green-100 text-green-700';
            case 'pendiente': return 'bg-yellow-100 text-yellow-700';
            case 'cancelado': return 'bg-red-100 text-red-700';
            case 'completado': return 'bg-blue-100 text-blue-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Agenda de Citas</h1>
                    <p className="text-slate-500">Gestiona las citas programadas de la clínica</p>
                </div>
                <Button className="bg-blue-700 hover:bg-blue-800">
                    <Plus className="mr-2 h-4 w-4" /> Nueva Cita
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input
                                placeholder="Buscar por paciente..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Input
                            type="date"
                            className="w-auto"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        />
                        <select
                            className="h-10 w-[150px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={companyFilter}
                            onChange={(e) => setCompanyFilter(e.target.value)}
                        >
                            <option value="">Empresa (Todas)</option>
                            {uniqueCompanies.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select
                            className="h-10 w-[150px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="">Tipo (Todos)</option>
                            {uniqueTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <Button variant="outline" size="icon" onClick={() => {
                            setDateFilter("");
                            setCompanyFilter("");
                            setTypeFilter("");
                            setSearchTerm("");
                        }}>
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-slate-200 overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-3">Paciente</th>
                                    <th className="px-4 py-3">Fecha y Hora</th>
                                    <th className="px-4 py-3">Empresa</th>
                                    <th className="px-4 py-3">Psicólogo</th>
                                    <th className="px-4 py-3">Tipo</th>
                                    <th className="px-4 py-3">Estado</th>
                                    <th className="px-4 py-3 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredAppointments.map((app) => (
                                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-4 py-3">
                                            <div className="font-medium text-slate-900">{app.patient?.firstName} {app.patient?.lastName}</div>
                                            <div className="text-xs text-slate-500">{app.patient?.email}</div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="h-3 w-3 text-slate-400" />
                                                <span>{app.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-500 mt-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{app.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <Building className="h-3 w-3 text-slate-400" />
                                                <span>{app.company || "-"}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2 text-slate-700">
                                                <User className="h-3 w-3 text-slate-400" />
                                                <span>{app.psychologist || "-"}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                {app.type}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                                                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div >
    );
}
