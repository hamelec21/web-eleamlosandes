import Card from "../components/Card";

export default function Contactos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">Contáctanos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Información de Contacto */}
        <div className="space-y-8">
          <Card title="Eleam Virgen de los Dolores">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  📍
                </div>
                <div>
                  <p className="font-bold text-gray-800">Ubicación</p>
                  <p className="text-gray-600">Los Andes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  📞
                </div>
                <div>
                  <p className="font-bold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">34 2 637546</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  👥
                </div>
                <div>
                  <p className="font-bold text-gray-800">Dirección</p>
                  <p className="text-sm text-gray-600">Directora: Hna. Luisa Vásquez</p>
                  <p className="text-sm text-gray-600">Director Técnico: Sergio Vasquez</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Eleam Rosa Krayer">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  📍
                </div>
                <div>
                  <p className="font-bold text-gray-800">Ubicación</p>
                  <p className="text-gray-600">Quillota</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  📞
                </div>
                <div>
                  <p className="font-bold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">33 2 254361</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3 mt-1">
                  👥
                </div>
                <div>
                  <p className="font-bold text-gray-800">Dirección</p>
                  <p className="text-sm text-gray-600">Directora: Hna. Camila Escorza</p>
                  <p className="text-sm text-gray-600">Director Técnico: Raul Santibañez</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="bg-neutral-light p-4 rounded-lg border border-gray-200">
             <p className="text-center text-gray-600 text-sm">
               <strong>Horario de Atención General:</strong><br/>
               Lunes a Viernes: 9:00 - 18:00
             </p>
             <p className="text-center text-gray-600 text-sm mt-2">
               <strong>Correo Electrónico:</strong><br/>
               contacto@eleam.cl
             </p>
          </div>
        </div>

        {/* Mapa (Placeholder) */}
        <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center shadow-inner">
          <div className="text-center">
            <span className="text-4xl mb-2 block">🗺️</span>
            <span className="text-gray-500 font-medium">[Mapa de Ubicaciones]</span>
            <p className="text-sm text-gray-400 mt-2">Mapa interactivo con Los Andes y Quillota</p>
          </div>
        </div>
      </div>
    </div>
  );
}
