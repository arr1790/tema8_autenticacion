import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id);

    if (!pizza) notFound();

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="flex flex-col items-center">
                <img 
                    src={pizza.imagen} 
                    alt={pizza.nombre} 
                    className="w-40 h-40 rounded-lg object-cover border-4 border-red-500 shadow-md"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-800">{pizza.nombre}</h2>
                <p className="text-lg text-gray-600 mt-2"> {pizza.precio} €</p>
            </div>
        </div>
    );
}

