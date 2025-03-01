import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-xl border border-gray-200 mt-12">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
        🍕 Bienvenido a la Página Principal
      </h1>

      <div className="space-y-8">
        {/* Links secundarios */}
        <div className="flex flex-col items-center space-y-6">
          <Link
            href="/dashboard"
            className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Dashboard del Usuario
          </Link>
          <Link
            href="/productos"
            className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Productos
          </Link>
          <Link
            href="/proveedores"
            className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proveedores
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
        </div>

        {/* Links principales con botones más llamativos */}
        <div className="flex flex-col items-center space-y-6">
          <Link
            href="/repartidores"
            className="w-full px-8 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            Repartidores
          </Link>
          <Link
            href="/pedidos"
            className="w-full px-8 py-4 text-xl font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            Pedidos
          </Link>
          <Link
            href="/pizzas"
            className="w-full px-8 py-4 text-xl font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            Pizzas
          </Link>
        </div>
      </div>
    </div>
  );
}
