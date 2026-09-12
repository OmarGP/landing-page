export default function Contacto() {
  return (
    <section id="contacto" className="text-center py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="text-lg mb-6">Reserva tu cita o solicita más información.</p>

      <p>📧 Email: contacto@negocio.com</p>

      <a
        href="https://wa.me/612345789"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-lg font-semibold"
      >
        📞 Teléfono y Whatsapp 
        <p className="text-lg">612345789</p>
      </a>
    </section>
  );
}
