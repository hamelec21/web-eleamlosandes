export interface Documento {
  id: number;
  nombre: string;
  tipo_documento: string;
  institucion: string;
  archivo_url: string;
  created_at: string;
}

export type DocumentoGrupo = {
  [tipoDocumento: string]: Documento[];
};
