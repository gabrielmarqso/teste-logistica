export interface Cliente {
  _id: string;
  codigo: string;
  nome: string;
  cnpj: string;
  endereco: Endereco;
}

export interface Endereco {
  rua: string;
  numero: string,
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  placeid: string;
}
