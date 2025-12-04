import Card from "../components/Card";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">CONGREGACIÓN HERMANAS HOSPITALARIAS DE SAN JOSÉ</h1>
        <p className="text-xl text-gray-600 italic">Más de 100 años entregando hospitalidad, cuidado y dignidad.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Quiénes Somos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Institución religiosa fundada por el Padre José Agustín Gómez, dedicada por más de un siglo al
            cuidado integral de personas mayores y personas en situación de vulnerabilidad. Nuestro servicio se
            inspira en el espíritu de San José, reflejando humildad, amor y compromiso.
          </p>
        </div>
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="/img/eleam-losandes.jpg" 
            alt="Eleam Los Andes" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card title="Nuestra Misión" className="border-l-4 border-secondary">
          <p>
            Brindar acogida, cuidado y acompañamiento integral, promoviendo la dignidad, el bienestar y el
            respeto de cada persona, con un enfoque humano, profesional y centrado en sus necesidades.
          </p>
        </Card>
        <Card title="Nuestra Visión" className="border-l-4 border-primary">
          <p>
            Ser referentes en cuidado de calidad, promoviendo modelos innovadores, humanizados y éticos que
            garanticen un envejecimiento digno y protegido.
          </p>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {['Hospitalidad', 'Dignidad Humana', 'Servicio y Vocación', 'Fraternidad', 'Profesionalismo Ético'].map((val) => (
            <div key={val} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center flex items-center justify-center h-full">
              <span className="font-semibold text-primary-dark">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Nuestro Aporte</h2>
          <p className="text-gray-700 leading-relaxed">
            Durante más de 100 años hemos desarrollado y gestionado ELEAM y centros de cuidado,
            promoviendo ambientes seguros, cálidos y centrados en la persona. Nuestro legado combina
            espiritualidad, experiencia y calidad técnica al servicio de quienes más lo necesitan.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Nuestro Compromiso</h2>
          <p className="text-gray-700 leading-relaxed">
            Continuar siendo una institución que acompaña, protege y dignifica la vida de las personas mayores,
            fortaleciendo comunidades más humanas, inclusivas y solidarias.
          </p>
        </div>
      </div>
    </div>
  );
}
