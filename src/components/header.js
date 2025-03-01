import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'
import { Home } from 'lucide-react';

async function Header() {
    const session = await auth();

    return (
        <header className='bg-blue-700 text-white flex px-10 py-2 justify-between items-center'>
            <nav className='flex gap-4 items-center'>
                <Link href="/">
                    <Home />
                </Link>
                
                {/* Solo se muestra si el usuario es ADMIN */}
                {session?.user?.role === 'ADMIN' && (
                    <>
                        <Link href="/admin">Admin panel</Link>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/about">About</Link>
                        <Link href="/repartidores">Repartidores</Link>
                        <Link href="/pedidos">Pedidos</Link>
                        <Link href="/pizzas">Pizzas</Link>
                    </>
                )}

                {/* Si no es ADMIN, el usuario solo ve Pizzas y Repartidores */}
                {session?.user?.role !== 'ADMIN' && (
                    <>
                        <Link href="/about">About</Link>
                        <Link href="/repartidores">Repartidores</Link>
                        <Link href="/pizzas">Pizzas</Link>
                    </>
                )}
            </nav>
            
            <div className='flex gap-4'>
                {session
                    ? <form><button formAction={logout}>Logout</button></form>
                    : <Link href="/auth/login">Login</Link>
                }
            </div>
        </header>
    )
}

export default Header;
