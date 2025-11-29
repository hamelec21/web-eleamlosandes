import Card from "../components/Card";

export default function Contactos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">Contáctanos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Información de Contacto */}
        <div className="space-y-8">
          <Card title="Información General">
            <p className="mb-4">
              Estamos disponibles para atender sus consultas y coordinar visitas a nuestros centros.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono Central</p>
                  <p className="font-bold text-lg">+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-bold text-lg">contacto@hogardeancianos.cl</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  ⏰
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horario de Atención</p>
                  <p className="font-bold text-lg">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Ubicaciones">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary mb-1">Centro Norte</h4>
                <p className="text-gray-600">Av. Los Libertadores 1234, Sector Norte.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Centro Sur</h4>
                <p className="text-gray-600">Calle El Roble 567, Sector Sur.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Mapa (Placeholder) */}
        <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl mb-2 block">🗺️</span>
            <span className="text-gray-500 font-medium">[Mapa de Ubicación]</span>
            <p className="text-sm text-gray-400 mt-2">Aquí iría un mapa interactivo de Google Maps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
