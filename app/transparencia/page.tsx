"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import type { Documento, DocumentoGrupo } from "../types/documento";

export default function Transparencia() {
  const [instituciones, setInstituciones] = useState<{
    norte: DocumentoGrupo;
    sur: DocumentoGrupo;
  }>({
    norte: {},
    sur: {},
  });

  // IDs reales de tus instituciones
  const ID_VIRGEN_DOLORES = 1;
  const ID_ROSA_KRAYER = 2;

  const fetchDocumentos = async (institucionId: number): Promise<DocumentoGrupo> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentos?institucion_id=${institucionId}`
    );

    const data: Documento[] = await res.json();

    // Agrupar documentos por tipo_documento
    const grupos: DocumentoGrupo = {};

    data.forEach((doc) => {
      if (!grupos[doc.tipo_documento]) {
        grupos[doc.tipo_documento] = [];
      }
      grupos[doc.tipo_documento].push(doc);
    });

    return grupos;
  };

  useEffect(() => {
    const loadData = async () => {
      const norteData = await fetchDocumentos(ID_VIRGEN_DOLORES);
      const surData = await fetchDocumentos(ID_ROSA_KRAYER);

      setInstituciones({
        norte: norteData,
        sur: surData,
      });
    };

    loadData();
  }, []);

  const renderCards = (categorias: DocumentoGrupo) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(categorias).map((categoria) => (
        <Card key={categoria} title={categoria} className="h-full">
          <ul className="space-y-3">
            {categorias[categoria].map((doc) => (
              <li
                key={doc.id}
                className="flex items-center group cursor-pointer"
                onClick={() => window.open(doc.archivo_url, "_blank")}
              >
                <span className="bg-secondary text-primary-dark rounded-full p-1 mr-3 text-xs">
                  📄
                </span>
                <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                  {doc.nombre}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
        Transparencia
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        En cumplimiento con nuestros valores, ponemos a disposición pública la documentación relevante.
      </p>

      {/* Eleam Virgen de los Dolores */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-2">Eleam Virgen de los Dolores</h2>
        <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
          Los Andes
        </p>
        {renderCards(instituciones.norte)}
      </div>

      {/* Eleam Rosa Krayer */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-2">Eleam Rosa Krayer</h2>
        <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
          Quillota
        </p>
        {renderCards(instituciones.sur)}
      </div>
    </div>
  );
}
