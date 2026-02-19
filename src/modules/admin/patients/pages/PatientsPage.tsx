import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Filter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MOCK_PATIENTS } from "@/shared/mocks/patients";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PatientsPage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPatients = MOCK_PATIENTS.filter(patient =>
        patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Pacientes</h1>
                    <p className="text-slate-500">Directorio de pacientes registrados</p>
                </div>
                <Button className="bg-blue-700 hover:bg-blue-800">
                    <Plus className="mr-2 h-4 w-4" /> Nuevo Paciente
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input
                                placeholder="Buscar paciente por nombre..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPatients.map((patient) => (
                            <div
                                key={patient.id}
                                className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all bg-white cursor-pointer group"
                                onClick={() => navigate(`/app/pacientes/${patient.id}`)}
                            >
                                <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.id}`} />
                                    <AvatarFallback className="bg-blue-100 text-blue-700">
                                        {patient.firstName[0]}{patient.lastName[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-slate-900 truncate group-hover:text-blue-700 transition-colors">
                                            {patient.firstName} {patient.lastName}
                                        </h3>
                                        <span className={`h-2 w-2 rounded-full ${patient.status === 'activo' ? 'bg-green-500' : 'bg-slate-300'}`} />
                                    </div>
                                    <div className="space-y-1 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-3 w-3" />
                                            <span className="truncate">{patient.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-3 w-3" />
                                            <span>{patient.phone}</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                        <span>Última visita: {patient.lastVisit}</span>
                                        <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">Ver Ficha</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
