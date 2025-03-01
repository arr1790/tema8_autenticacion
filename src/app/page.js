import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800">
        🍕 Página Principal
      </h1>
  
      <div className="flex flex-col items-center space-y-5">
        {/* Links secundarios */}
        <Link href="/dashboard" className="text-lg text-blue-500 hover:text-blue-700 transition">
          Dashboard del Usuario
        </Link>
        <Link href="/productos" className="text-lg text-blue-500 hover:text-blue-700 transition">
          Productos
        </Link>
        <Link href="/proveedores" className="text-lg text-blue-500 hover:text-blue-700 transition">
          Proveedores
        </Link>
        <Link href="/about" className="text-lg text-blue-500 hover:text-blue-700 transition">
          About
        </Link>
  
        {/* Links principales con botones más llamativos */}
        <Link
          href="/repartidores"
          className="px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-800 transition"
        >
          Repartidores
        </Link>
        <Link
          href="/pedidos"
          className="px-6 py-3 text-xl font-bold text-white bg-green-600 rounded-xl shadow-lg hover:bg-green-800 transition"
        >
          Pedidos
        </Link>
        <Link
          href="/pizzas"
          className="px-6 py-3 text-xl font-bold text-white bg-red-600 rounded-xl shadow-lg hover:bg-red-800 transition"
        >
          Pizzas
        </Link>
      </div>
    </>
  );
}  