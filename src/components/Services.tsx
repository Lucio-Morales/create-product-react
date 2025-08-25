
const services = [
    { id: 1, title: "Diseño Web", description: "Crea tu página profesional", image: "🖥️" },
    { id: 2, title: "Redacción", description: "Textos claros y persuasivos", image: "✍️" },
    { id: 3, title: "Marketing Digital", description: "Haz crecer tu marca", image: "📈" },
];

const ServicesSection = () => {
    return (
        <section className="h-screen bg-gray-700 text-white py-16 px-6 lg:px-20">
            <h2 className="text-3xl font-bold text-center mb-12">Servicios destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <div className="text-5xl mb-4">{service.image}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection