import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id);

    if (!pedido) notFound();

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mt-8 border-l-4 border-blue-500">
            {/* Fecha del pedido */}
            <div className="text-gray-600 text-sm mb-4">
                📅 {new Date(pedido.fecha_hora).toLocaleString()}
            </div>

            {/* Información del cliente */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Cliente</h2>
                <p className="text-gray-700"><strong>📌 Nombre:</strong> {pedido.nombre_cliente}</p>
                <p className="text-gray-700"><strong>📍 Dirección:</strong> {pedido.direccion_cliente}</p>
            </div>

        
            {pedido.repartidor && (
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Repartidor</h2>
                    <p className="text-gray-700">🚴 {pedido.repartidor.nombre}</p>
                </div>
            )}

          
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Pizzas</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                    {pedido.pizzas?.map((pizza) => (
                        <li key={pizza.id} className="py-1">🍕 {pizza.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
