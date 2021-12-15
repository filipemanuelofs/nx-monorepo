export const ESTADOS_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

export interface BaseIBGEGeoObject {
  id:      number;
  sigla:   string;
  nome:    string;
}

export interface UnidadeFederativa extends BaseIBGEGeoObject {
  regiao: Regiao;
}

export type Regiao = BaseIBGEGeoObject
