package com.gabriel.logistica.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClienteDTO {
    private Long id;
    private String codigo;
    private String nome;
    private String cnpj;
    private EnderecoDTO endereco;
}