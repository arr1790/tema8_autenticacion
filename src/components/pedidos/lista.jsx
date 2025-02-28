import { obtenerPedidos, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PedidoInsertar from "./insertar";
import PedidoModificar from "./modificar";
import PedidoEliminar from "./eliminar";
import { auth } from "@/auth";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()
    const pizzas = await obtenerPizzas()
    const session = await auth();

    return (
        <div className="flex flex-col gap-4">
            {session?.user?.role === 'ADMIN' && (
            <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar</p>}>
                <PedidoInsertar repartidores={repartidores} pizzas={pizzas} />
            </Modal>
            )}
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <Link href={`/pedidos/${pedido.id}`} className="font-bold cursor-pointer">
                                {new Date(pedido.fecha_hora).toLocaleString()}
                            </Link>
                            <p>Nombre del cliente: {pedido.nombre_cliente}</p>
                            <p>Dirección del cliente: {pedido.direccion_cliente}</p>


                            {session?.user?.role === 'ADMIN' && (
                                <>
                                    <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</p>}>
                                        <PedidoModificar pedido={pedido} repartidores={repartidores} pizzas={pizzas} />
                                    </Modal>

                                    <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</p>}>
                                        <PedidoEliminar pedido={pedido} />
                                    </Modal>
                                </>
                            )}
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}