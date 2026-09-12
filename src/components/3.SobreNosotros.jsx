import image from '../assets/Ejemplo-negocio.png';

export default function SobreNosotros () {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <img
                    src={image}
                    className="rounded-lg shadow-lg w-full object-cover"
                    alt="local"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-4"> Sobre Nosotros </h2>
                    <p className="text-gray-600 mb-4">
                        En [Nombre del Negocio], ofrecemos servicios de calidad con más de 8 años de experiencia.
                    </p>
                    <p className="text-gray-600">
                        Nuestro equipo está formado por profesionales certificados que garantizan una experiencia única 
                        y satisfactoria para nuestros clientes. Nos enorgullece brindar un servicio excepcional y 
                        personalizado, adaptándonos a las necesidades de cada cliente.
                    </p>
                </div>
            </div>
        </section>
    );
}