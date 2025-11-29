import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="space-y-12 pb-12 bg-neutral-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div> {/* Optional pattern placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-secondary tracking-tight drop-shadow-sm">
            Bienvenidos a Eleam 
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-gray-100 font-light max-w-2xl mx-auto leading-relaxed">
            Un lugar donde el amor, el respeto y la dignidad son nuestra prioridad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/centros" 
              className="bg-secondary text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conoce nuestros Centros
            </Link>
            <Link 
              href="/contactos" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-dark hover:scale-105 transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-10">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Cuidado Profesional">
            <p>
              Contamos con un equipo multidisciplinario de profesionales de la salud dedicados al bienestar integral de nuestros residentes las 24 horas.
            </p>
          </Card>
          <Card title="Ambiente Familiar">
            <p>
              Fomentamos un ambiente cálido y acogedor, donde cada residente se siente como en casa, rodeado de afecto y compañerismo.
            </p>
          </Card>
          <Card title="Transparencia Total">
            <p>
              Mantenemos una política de puertas abiertas y transparencia en nuestra gestión, con toda la documentación disponible para las familias.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent-optional py-16 px-4 sm:px-6 lg:px-8 text-center rounded-lg mx-4 sm:mx-8">
        <h2 className="text-3xl font-bold text-primary-dark mb-4">
          ¿Tienes dudas o consultas?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos para conocer más sobre nuestros servicios y proceso de admisión.
        </p>
        <Link 
          href="/contactos" 
          className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors shadow-md"
        >
          Hablar con nosotros
        </Link>
      </section>
    </div>
  );
}
