"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";

interface Documento {
  id: number;
  nombre: string;
  archivo_url: string;
  tipo_documento: string;
}

interface DocumentoGrupo {
  [categoria: string]: Documento[];
}

export default function Transparencia() {
  const [instituciones, setInstituciones] = useState<{
    norte: DocumentoGrupo;
    sur: DocumentoGrupo;
  }>({
    norte: {},
    sur: {},
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);

  const ID_VIRGEN_DOLORES = 1;
  const ID_ROSA_KRAYER = 2;
  const INITIAL_VISIBLE = 5;

  const fetchDocumentos = async (institucionId: number): Promise<DocumentoGrupo> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/documentos?institucion_id=${institucionId}`
    );
    const data: Documento[] = await res.json();
    const grupos: DocumentoGrupo = {};
    data.forEach((doc) => {
      if (!grupos[doc.tipo_documento]) grupos[doc.tipo_documento] = [];
      grupos[doc.tipo_documento].push(doc);
    });
    return grupos;
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const norteData = await fetchDocumentos(ID_VIRGEN_DOLORES);
      const surData = await fetchDocumentos(ID_ROSA_KRAYER);

      setInstituciones({ norte: norteData, sur: surData });

      const initialExpanded: { [key: string]: boolean } = {};
      Object.keys(norteData).forEach((cat) => (initialExpanded[`norte-${cat}`] = false));
      Object.keys(surData).forEach((cat) => (initialExpanded[`sur-${cat}`] = false));
      setExpanded(initialExpanded);

      setLoading(false);
    };

    loadData();
  }, []);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderCards = (categorias: DocumentoGrupo, prefijo: string) => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} title="" className="h-full animate-pulse">
              <ul className="space-y-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <li key={idx} className="h-4 bg-gray-200 rounded w-3/4" />
                ))}
              </ul>
            </Card>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(categorias).map((categoria) => {
          const key = `${prefijo}-${categoria}`;
          const isExpanded = expanded[key];
          const docsToShow = isExpanded
            ? categorias[categoria]
            : categorias[categoria].slice(0, INITIAL_VISIBLE);
          const hasMore = categorias[categoria].length > INITIAL_VISIBLE;

          return (
            <Card key={categoria} title={categoria} className="h-full flex flex-col">
              <ul className="space-y-3 flex-1">
                {docsToShow.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center group cursor-pointer"
                    onClick={() => {
                      setPdfUrl(doc.archivo_url);
                      setModalOpen(true);
                    }}
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

              {hasMore && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => toggleExpand(key)}
                    className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-secondary transition"
                    aria-label={isExpanded ? "Ocultar documentos" : "Ver más documentos"}
                  >
                    {isExpanded ? "−" : "+"}
                  </button>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
          Transparencia
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          En cumplimiento con nuestros valores, ponemos a disposición pública la documentación relevante.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Eleam Virgen de los Dolores
          </h2>
          <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
            Los Andes
          </p>
          {renderCards(instituciones.norte, "norte")}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Eleam Rosa Krayer
          </h2>
          <p className="text-gray-500 font-semibold mb-8 uppercase tracking-wide border-b-2 border-secondary pb-2 inline-block">
            Quillota
          </p>
          {renderCards(instituciones.sur, "sur")}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-md opacity-90"
            style={{ backgroundImage: "url('/hero.jpg')" }}
            onClick={() => setModalOpen(false)}
          />
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden animate-zoomIn">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-4 bg-red-600 text-white rounded-full px-4 py-2 text-sm hover:bg-red-700 transition"
            >
              Cerrar ✖
            </button>
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded-b-lg border-0"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
