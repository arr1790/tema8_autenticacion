import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';
import { Home } from 'lucide-react';

async function Header() {
    const session = await auth();
    
    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white flex px-8 py-4 justify-between items-center shadow-lg rounded-b-lg">
            <nav className="flex gap-6 items-center">
                <Link href="/" className="hover:scale-110 transition-transform">
                    <Home className="h-7 w-7" />
                </Link>
                {session?.user?.role === 'ADMIN' && (
                    <Link href="/admin" className="text-white font-semibold hover:underline">Admin panel</Link>
                )}
                {session?.user?.role === 'USER' && (
                    <Link href="/dashboard" className="text-white font-semibold hover:underline">Dashboard</Link>
                )}
                <Link href="/about" className="text-white font-semibold hover:underline">About</Link>
                <Link href="/repartidores" className="text-white font-semibold hover:underline">Repartidores</Link>
                <Link href="/pizzas" className="text-white font-semibold hover:underline">Pizzas</Link>
                {session?.user?.role === 'ADMIN' && (
                    <Link href="/pedidos" className="text-white font-semibold hover:underline">Pedidos</Link>
                )}
            </nav>
            <div className="flex gap-4">
                {session ? (
                    <form>
                        <button 
                            formAction={logout} 
                            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
                        >
                            Logout
                        </button>
                    </form>
                ) : (
                    <Link 
                        href="/auth/login" 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
                    >
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
