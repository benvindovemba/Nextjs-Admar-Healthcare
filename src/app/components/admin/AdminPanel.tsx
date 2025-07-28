// app/admin/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarCheck, LogOut, Plus, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [subject, setSubject] = useState('Todos');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/admin/appointments?startDate=${startDate}&endDate=${endDate}&subject=${subject}`);
    const data = await res.json();
    setAppointments(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const exportData = (type: 'pdf' | 'excel') => {
    const query = new URLSearchParams({ startDate, endDate, subject }).toString();
    window.open(`/api/admin/export-${type}?${query}`, '_blank');
  };

  const goToUserManagement = () => {
    router.push('/admin/users');
  };

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-800">Painel do Administrador</h1>
        <div className="flex gap-2">
          <Button onClick={goToUserManagement} className="bg-blue-600 text-white flex items-center gap-2">
            <Users className="w-4 h-4" /> Gerir Usuários
          </Button>
          <Button onClick={handleLogout} className="bg-gray-300 text-black hover:bg-gray-400 flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid md:grid-cols-4 gap-4 bg-white rounded-xl p-4 shadow mb-8">
        <div>
          <label className="block text-sm text-gray-500">Data Inicial</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm text-gray-500">Data Final</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm text-gray-500">Assunto</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border rounded">
            <option value="Todos">Todos</option>
            <option value="Consulta Geral">Consulta Geral</option>
            <option value="Vacinação">Vacinação</option>
            <option value="Emergência">Emergência</option>
          </select>
        </div>
        <div className="flex items-end">
          <Button onClick={fetchData} className="w-full bg-blue-600 text-white">Filtrar</Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Agendamentos</p>
              <h2 className="text-2xl font-bold">{appointments.length}</h2>
            </div>
            <CalendarCheck className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Exportar */}
      <div className="flex gap-4 mb-8">
        <Button onClick={() => exportData('excel')} className="bg-green-500 text-white">Exportar Excel</Button>
        <Button onClick={() => exportData('pdf')} className="bg-red-500 text-white">Exportar PDF</Button>
      </div>

      {/* Tabela */}
      <div className="bg-white shadow rounded-xl p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Lista de Agendamentos</h2>
        {isLoading ? (
          <p className="text-center text-blue-500">Carregando dados...</p>
        ) : appointments.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum resultado encontrado.</p>
        ) : (
          <table className="min-w-full text-sm text-left">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="py-2 px-4">Nome</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Telefone</th>
                <th className="py-2 px-4">Assunto</th>
                <th className="py-2 px-4">Data</th>
                <th className="py-2 px-4">Hora</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {appointments.map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="py-2 px-4">{a.name}</td>
                  <td className="py-2 px-4">{a.email}</td>
                  <td className="py-2 px-4">{a.phone}</td>
                  <td className="py-2 px-4">{a.subject}</td>
                  <td className="py-2 px-4">{new Date(a.date).toLocaleDateString('pt-PT')}</td>
                  <td className="py-2 px-4">{a.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
