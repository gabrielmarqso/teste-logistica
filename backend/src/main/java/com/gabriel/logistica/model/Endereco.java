package com.gabriel.logistica.model;

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
// @Table(name = "endereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String rua;

    @Column(length = 10, nullable = false)
    private String numero;

    @Column(length = 100, nullable = false)
    private String bairro;

    @Column(length = 50, nullable = false)
    private String cidade;

    @Column(length = 20, nullable = false)
    private String estado;

    @Column(length = 10, nullable = false)
    private String cep;

    @Column(length = 50, nullable = false)
    private String placeId;

    // construtor padrão
    public Endereco() {
    }

    // construtor com argumentos
    public Endereco(String rua, String numero, String bairro, String cidade, String estado, String cep,
            String placeId) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.placeId = placeId;
    }

}
