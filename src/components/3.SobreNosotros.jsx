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
                        En <strong>[Nombre del Negocio],</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, placeat.
                    </p>
                    <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit modi inventore minus nostrum iusto aut?
                        Neque quaerat, sapiente excepturi consequuntur suscipit aut eveniet consequatur quod labore iure aperiam consectetur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laudantium doloribus nam impedit quos ex sint id explicabo 
                        vero alias perspiciatis at voluptatem voluptatum aperiam, dolorem nesciunt blanditiis ipsum odio!
                    </p>
                </div>
            </div>
        </section>
    );
}