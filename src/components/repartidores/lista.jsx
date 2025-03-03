import { obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import RepartidorInsertar from "./insertar";
import RepartidorModificar from "./modificar";
import RepartidorEliminar from "./eliminar";
import { auth } from "@/auth";

export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()
    const session = await auth();
    return (
        <div className="flex flex-col gap-4">
            {session?.user?.role === "ADMIN" && (
                <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar</p>}>
                    <RepartidorInsertar />
                </Modal>
            )}
            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 bg-slate-200 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <Link href={`/repartidores/${repartidor.id}`} className="font-bold cursor-pointer">
                                {repartidor.nombre}
                            </Link>
                            <p>Teléfono: {repartidor.telefono}</p>
                            <img
                                src={repartidor.imagen}
                                alt="imagenRepartidor"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-200"
                            />
                            {session?.user?.role === "ADMIN" && (
                                <>
                                    <Modal openElement={<span className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</span>}>
                                        <RepartidorModificar repartidor={repartidor} />
                                    </Modal>

                                    <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</p>}>
                                        <RepartidorEliminar repartidor={repartidor} />
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