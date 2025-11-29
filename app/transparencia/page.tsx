import Card from "../components/Card";

export default function Transparencia() {
  const commonCategories = [
    {
      title: "Balances",
      items: ["Balance General 2024", "Balance General 2023"]
    },
    {
      title: "Convenios",
      items: ["Convenio Servicio de Salud", "Convenio Municipalidad"]
    },
    {
      title: "Estados Financieros",
      items: ["Informe Financiero Q1 2024", "Auditoría Externa 2023"]
    },
    {
      title: "Memorias",
      items: ["Memoria Anual 2023"]
    },
    {
      title: "Clasificados",
      items: ["Reglamento Interno", "Protocolos de Visita"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">Transparencia</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        En cumplimiento con nuestros valores, ponemos a disposición pública la documentación relevante de nuestra gestión para cada uno de nuestros centros.
      </p>

      {/* Eleam Virgen de los Dolores (Los Andes) Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Eleam Virgen de los Dolores
        </h2>
        <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
          Los Andes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonCategories.map((category, index) => (
            <Card key={`norte-${index}`} title={category.title} className="h-full">
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center group cursor-pointer">
                    <span className="bg-secondary text-primary-dark rounded-full p-1 mr-3 text-xs">
                      📄
                    </span>
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Eleam Rosa Krayer (Quillota) Section */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">
          Eleam Rosa Krayer
        </h2>
        <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
          Quillota
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonCategories.map((category, index) => (
            <Card key={`sur-${index}`} title={category.title} className="h-full">
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center group cursor-pointer">
                    <span className="bg-secondary text-primary-dark rounded-full p-1 mr-3 text-xs">
                      📄
                    </span>
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
