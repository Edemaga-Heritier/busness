

const spaces = [
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
    title: "Bureaux Privés",
    description: "Espaces privatifs entièrement équipés pour 1 à 10 personnes"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Espace Coworking",
    description: "Postes de travail dans un environnement collaboratif"
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    title: "Salles de Réunion",
    description: "Salles modernes pour vos réunions et présentations"
  }
];

export default function Spaces() {
  return (
    <section id="espaces" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Espaces</h2>
          <p className="text-lg text-gray-600">
            Des espaces adaptés à tous vos besoins professionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={space.image}
                alt={space.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {space.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {space.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}