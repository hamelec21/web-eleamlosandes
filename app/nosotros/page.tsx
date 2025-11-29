import Card from "../components/Card";

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">Sobre Nosotros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fundada con la vocación de servir, nuestra institución ha dedicado años al cuidado y bienestar de los adultos mayores. 
            Comenzamos con un pequeño centro y, gracias a la confianza de las familias, hemos crecido para ofrecer dos centros 
            especializados, manteniendo siempre nuestro compromiso con la excelencia y el trato humano.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Creemos que cada etapa de la vida merece ser vivida con dignidad, alegría y compañía.
          </p>
        </div>
        <div className="bg-neutral-warm rounded-lg h-64 md:h-auto flex items-center justify-center">
          <span className="text-gray-400 italic">[Imagen Institucional]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Misión" className="border-l-4 border-secondary">
          <p>
            Proporcionar un cuidado integral y personalizado a nuestros residentes, promoviendo su bienestar físico, 
            emocional y social en un entorno seguro y familiar, respetando su dignidad y autonomía.
          </p>
        </Card>
        <Card title="Visión" className="border-l-4 border-primary">
          <p>
            Ser reconocidos como referentes en el cuidado del adulto mayor, destacando por nuestra excelencia profesional, 
            calidad humana y transparencia, creando espacios donde nuestros residentes se sientan plenamente felices.
          </p>
        </Card>
      </div>
    </div>
  );
}
