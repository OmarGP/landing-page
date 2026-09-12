export default function Servicios () {
    const servicios = [
        { titulo: "Servicio 1", desc: "Descripción breve del servicio 1."},
        { titulo: "Servicio 2", desc: "Descripción breve del servicio 2."},
        { titulo: "Servicio 3", desc: "Descripción breve del servicio 3."},
    ];

    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">
                Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8 px-6">
                {servicios.map((s, i) => (
                    <div key={i} className="p-6 shadow-lg rounded-lg">
                    <h3 className=" text-xl font-semibold mb-2">{s.titulo}</h3>
                    <p className="text-gray-600 mb-4">{s.desc}</p>
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
                        Mas info
                    </button>
                    </div>
                ))}
            </div>
        </section>
    );
}