import Link from "next/link";
import { auth } from "@/auth";
import { ShoppingCart, Truck, Pizza } from "lucide-react"; 

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-4xl mx-auto mt-24 p-4 space-y-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center border-b border-gray-200">LA BELLA PIZZA 🍕</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Datos:</h2>

        {session?.user?.role === "ADMIN" ? (
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="/admin"
              className="block p-4 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition-all"
            >
              <ShoppingCart className="h-5 w-5 inline-block mr-2" /> Panel de Admin
            </Link>
            <Link
              href="/dashboard"
              className="block p-4 rounded-lg bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition-all"
            >
              <Pizza className="h-5 w-5 inline-block mr-2" /> Dashboard del Usuario
            </Link>
            <Link
              href="/about"
              className="block p-4 rounded-lg bg-gray-200 text-gray-800 font-semibold text-center hover:bg-gray-300 transition-all"
            >
              About
            </Link>
            <Link
              href="/repartidores"
              className="block p-4 rounded-lg bg-yellow-600 text-white font-semibold text-center hover:bg-yellow-700 transition-all"
            >
              <Truck className="h-5 w-5 inline-block mr-2" /> Repartidores
            </Link>
            <Link
              href="/pedidos"
              className="block p-4 rounded-lg bg-red-600 text-white font-semibold text-center hover:bg-red-700 transition-all"
            >
              <ShoppingCart className="h-5 w-5 inline-block mr-2" /> Pedidos
            </Link>
            <Link
              href="/pizzas"
              className="block p-4 rounded-lg bg-purple-600 text-white font-semibold text-center hover:bg-purple-700 transition-all"
            >
              <Pizza className="h-5 w-5 inline-block mr-2" /> Pizzas
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="/repartidores"
              className="block p-4 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition-all"
            >
              <Truck className="h-5 w-5 inline-block mr-2" /> Repartidores
            </Link>
            <Link
              href="/pizzas"
              className="block p-4 rounded-lg bg-purple-600 text-white font-semibold text-center hover:bg-purple-700 transition-all"
            >
              <Pizza className="h-5 w-5 inline-block mr-2" /> Pizzas
            </Link>
            <Link
              href="/about"
              className="block p-4 rounded-lg bg-gray-200 text-gray-800 font-semibold text-center hover:bg-gray-300 transition-all"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
