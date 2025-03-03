import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PizzaInsertar from "./insertar";
import PizzaModificar from "./modificar";
import PizzaEliminar from "./eliminar";
import { auth } from "@/auth";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas();
    const session = await auth();

    return (
        <div className="flex flex-col gap-4">
            {session?.user?.role === "ADMIN" && (
                <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar</p>}>
                    <PizzaInsertar />
                </Modal>
            )}

            {pizzas.map(pizza => (
                <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                    <div className="flex flex-col gap-4">
                        {/* Imagen de la pizza */}
                        {pizza.image && (
                            <img 
                                src={pizza.image} 
                                alt={pizza.nombre} 
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        )}

                        <Link href={`/pizzas/${pizza.id}`} className="font-bold cursor-pointer">
                            {pizza.nombre}
                        </Link>
                        <p>{pizza.precio} €</p>

                        {session?.user?.role === "ADMIN" && (
                            <>
                                <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</p>}>
                                    <PizzaModificar pizza={pizza} />
                                </Modal>

                                <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</p>}>
                                    <PizzaEliminar pizza={pizza} />
                                </Modal>
                            </>
                        )}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}
