import Link from "next/link";
import { auth } from "@/auth"; // Importar la función auth para verificar la sesión

export default async function Home() {
  const session = await auth(); // Obtener la sesión del usuario

  return (
    <>
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800">
        🍕 Página Principal
      </h1>

      <div className="flex flex-col items-center space-y-5">
        {/* Links visibles para todos los usuarios */}
        <Link href="/about" className="text-lg text-blue-500 hover:text-blue-700 transition">
          About
        </Link>

        {/* Si el usuario está autenticado, mostrar los enlaces de Repartidores y Pizzas */}
        {session ? (
          <>
            <Link
              href="/repartidores"
              className="px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-800 transition"
            >
              Repartidores
            </Link>
            <Link
              href="/pizzas"
              className="px-6 py-3 text-xl font-bold text-white bg-red-600 rounded-xl shadow-lg hover:bg-red-800 transition"
            >
              Pizzas
            </Link>
          </>
        ) : (
          <p className="text-lg text-red-500">Debes estar logueado para acceder a Repartidores y Pizzas.</p>
        )}

        {/* Si el usuario está autenticado, se muestran los enlaces de Admin */}
        {session?.user?.role === "ADMIN" && (
          <>
            <Link href="/dashboard" className="text-lg text-blue-500 hover:text-blue-700 transition">
              Dashboard del Usuario
            </Link>
            <Link href="/productos" className="text-lg text-blue-500 hover:text-blue-700 transition">
              Productos
            </Link>
            <Link href="/proveedores" className="text-lg text-blue-500 hover:text-blue-700 transition">
              Proveedores
            </Link>
          </>
        )}
      </div>
    </>
  );
}
