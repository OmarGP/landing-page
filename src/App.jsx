import Hero from './components/1.Hero';
import Servicios from './components/2.Servicios';
import SobreNosotros from './components/3.SobreNosotros';
import Reseñas from './components/4.Reseñas';
import Contacto from './components/5.Contacto';

export default function App () {
    return (
        <>
            <Hero />
            <Servicios />
            <SobreNosotros />
            <Reseñas />
            <Contacto />

            <footer className="py-6 text-center bg-gray-800 text-gray-300">
                © 2026 [Nombre del Negocio] — Todos los derechos reservados
            </footer>
        </>
    );
}