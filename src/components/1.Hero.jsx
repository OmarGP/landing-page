export default function Hero () {
    const scrollToContact = () => {
        const contacto = document.getElementById("contacto");
        contacto.scrollIntoView({behavior: "smooth"});
    };
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex items-center justify-center">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bienvenido a [Nombre del Sitio]
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Calidad, atención y experiencia para tu bienestar.
                </p>
                <button
                    onClick={scrollToContact}
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-lg font-semibold transition-transform hover:scale-105"
                >
                    Reservar Ahora
                </button>
            </div>
        </section>
    )
}