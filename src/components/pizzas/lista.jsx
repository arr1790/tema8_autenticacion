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
    
    <div className="flex flex-col gap-6">
      {session?.user?.role === "ADMIN" && (
        <Modal
          openElement={
            <button className="inline-block px-4 py-2 rounded-lg bg-indigo-500 text-white shadow-md hover:bg-indigo-600  transition-colors duration-150">
              Insertar
            </button>
          }
        >
          <PizzaInsertar />
        </Modal>
      )}

      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="p-6 mb-6 bg-slate-200 rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <Link
              href={`/pizzas/${pizza.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-150"
            >
              {pizza.nombre}
            </Link>
            <p className="text-gray-600">Precio: {pizza.precio} €</p>
            <img
              src={pizza.imagen}
              alt="imagenPizza"
              className="w-24 h-24 rounded-full object-cover"
            />
            {session?.user?.role === "ADMIN" && (
              <div className="flex gap-4 mt-2">
                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white shadow-md hover:bg-yellow-600 transition-colors duration-150">
                      Modificar
                    </button>
                  }
                >
                  <PizzaModificar pizza={pizza} />
                </Modal>

                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors duration-150">
                      Eliminar
                    </button>
                  }
                >
                  <PizzaEliminar pizza={pizza} />
                </Modal>
              </div>
            )}
          </div>
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
}