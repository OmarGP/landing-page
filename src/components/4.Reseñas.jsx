export default function Reseñas () {
    const reviews = [
        {
            texto: "Servicio excepcional y atención al cliente de primera. ¡Recomiendo totalmente!",
            autor: "Juan Pérez",
        },
        {
            texto: "Excelente calidad de servicio y compromiso con el cliente. Sin duda, volveré a utilizar sus servicios.",
            autor: "María García",
        },
        {
            texto: "Muy satisfecho con el servicio recibido. La profesionalidad y el trato son excelentes.",
            autor: "Carlos Rodríguez",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">
                Reseñas
            </h2>
            <div className="grid md:grid-cols-3 gap-8 px-6">
            {reviews.map((r, i) => (
                <div key={i} className="p-6 shadow-lg rounded-lg bg-gray-50">
                    <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
                    <p className="text-gray-700 mb-2">"{r.texto}"</p>
                    <p className="text-gray-500">- {r.autor}</p>
                </div>
            ))}                
            </div>
        </section>
    )
}