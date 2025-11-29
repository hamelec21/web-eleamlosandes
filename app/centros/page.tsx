import Card from "../components/Card";

export default function Centros() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">Nuestros Centros</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Contamos con dos instalaciones equipadas para brindar el máximo confort y seguridad a nuestros residentes.
      </p>

      <div className="space-y-16">
        {/* Centro 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
             <span className="text-gray-400 italic">[Foto Centro Norte]</span>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Centro Norte</h2>
            <p className="text-gray-700 mb-6">
              Ubicado en un entorno tranquilo, el Centro Norte se especializa en cuidados de alta complejidad. 
              Cuenta con amplios jardines, salas de terapia física y habitaciones adaptadas para garantizar la comodidad y seguridad.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Capacidad para 40 residentes</li>
              <li>Enfermería 24/7</li>
              <li>Áreas verdes recreativas</li>
              <li>Comedor asistido</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Centro 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
             <span className="text-gray-400 italic">[Foto Centro Sur]</span>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Centro Sur</h2>
            <p className="text-gray-700 mb-6">
              El Centro Sur está diseñado para adultos mayores autovalentes o con dependencia leve. 
              Ofrece un ambiente dinámico con múltiples actividades sociales, talleres y salidas culturales.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Capacidad para 30 residentes</li>
              <li>Talleres ocupacionales diarios</li>
              <li>Habitaciones individuales y compartidas</li>
              <li>Gimnasio geriátrico</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
