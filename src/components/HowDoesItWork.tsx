
const steps = [
    {
        id: 1,
        title: "Crea tu perfil",
        description: "Regístrate gratis y muestra tus habilidades.",
        icon: "👤",
    },
    {
        id: 2,
        title: "Publica tu servicio",
        description: "Añade detalles y fotos para que los clientes te encuentren.",
        icon: "📝",
    },
    {
        id: 3,
        title: "Conecta con clientes",
        description: "Recibe mensajes y comienza a trabajar.",
        icon: "🤝",
    },
];

const HowDoesItWork = () => {
    return (
        <section className="py-16 px-6 lg:px-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm bg-white"
                    >
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowDoesItWork