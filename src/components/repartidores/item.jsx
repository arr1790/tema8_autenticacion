import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id);

    if (!repartidor) notFound();

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="flex flex-col items-center">
                <img 
                    src={repartidor.imagen} 
                    alt={repartidor.nombre} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800">{repartidor.nombre}</h2>
                <p className="text-gray-600 mt-2">📞 {repartidor.telefono}</p>
            </div>
        </div>
    );
}
