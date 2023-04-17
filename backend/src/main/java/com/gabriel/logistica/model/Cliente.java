package com.gabriel.logistica.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
// @Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long _id;

    @Column(length = 4, nullable = false)
    private String codigo;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 14, nullable = false)
    private String cnpj;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    // construtor padrão
    public Cliente() {
    }

    // construtor com argumentos
    public Cliente(String codigo, String nome, String cnpj, Endereco endereco) {
        this.codigo = codigo;
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }

}
