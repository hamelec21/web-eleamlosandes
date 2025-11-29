import Card from "../components/Card";

export default function Centros() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">Nuestros Centros</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Contamos con dos instalaciones equipadas para brindar el máximo confort y seguridad a nuestros residentes.
      </p>

      <div className="space-y-16">
        {/* Eleam Virgen de los Dolores (Los Andes) */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
             <span className="text-gray-400 italic">[Foto Eleam Virgen de los Dolores]</span>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Eleam Virgen de los Dolores</h2>
            <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-wide">Los Andes</p>
            <div className="mb-6 text-gray-700 space-y-1">
              <p><span className="font-semibold">Directora:</span> Hermana Luisa Vásquez</p>
              <p><span className="font-semibold">Director Técnico:</span> Sergio Vasquez</p>
              <p><span className="font-semibold">Fono:</span> 34 2 637546</p>
            </div>
            <p className="text-gray-700 mb-6">
              Ubicado en Los Andes, este centro se especializa en cuidados integrales con un enfoque en la dignidad y el respeto.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Atención personalizada</li>
              <li>Enfermería y cuidado técnico</li>
              <li>Áreas verdes y recreación</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Eleam Rosa Krayer (Quillota) */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
             <span className="text-gray-400 italic">[Foto Eleam Rosa Krayer]</span>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Eleam Rosa Krayer</h2>
            <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-wide">Quillota</p>
            <div className="mb-6 text-gray-700 space-y-1">
              <p><span className="font-semibold">Directora:</span> Hermana Camila Escorza</p>
              <p><span className="font-semibold">Director Técnico:</span> Raul Santibañez</p>
              <p><span className="font-semibold">Fono:</span> 33 2 254361</p>
            </div>
            <p className="text-gray-700 mb-6">
              Nuestro centro en Quillota ofrece un ambiente acogedor y dinámico, ideal para el bienestar de nuestros residentes.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Talleres y actividades diarias</li>
              <li>Espacios comunes amplios</li>
              <li>Equipo profesional multidisciplinario</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
