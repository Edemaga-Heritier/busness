import React from 'react';
import { Wifi, Coffee, Calendar, Users, Shield, Printer } from 'lucide-react';

const services = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Internet Haut Débit",
    description: "Connexion fibre optique ultra-rapide et sécurisée"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Espace Détente",
    description: "Zone café et rafraîchissements inclus"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Salles de Réunion",
    description: "Espaces équipés pour vos réunions professionnelles"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Coworking",
    description: "Espaces partagés conviviaux et dynamiques"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité 24/7",
    description: "Accès sécurisé et surveillance permanente"
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "Services Business",
    description: "Impression, scan et services administratifs"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600">
            Des prestations haut de gamme pour votre confort professionnel
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}