

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" grid lg:grid-cols-2 gap-12 items-center ">
</div>
<h1 className=" text-4xl lg:text-5xl font-bold mb-6 text-gray-900"> Votre Espace de Travail Premium à Kinshasa</h1>
<p className=" -mb-8 text-lg text-gray-600"> Des espaces de travail modernes et flexibles pour les professionnels exigeants. 
Bureaux privés, espaces de coworking et salles de réunion équipés.</p>
<div className=" flex flex-wrap gap-4">
    <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">Réserver une visite</button>
    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
                Nos services
              </button>
              <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Espace de travail moderne"
              className="rounded-lg shadow-xl"
            />
          </div>
</div>

        </div>
    </section>
  )
}
