package com.gabriel.logistica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.logistica.model.Cliente;
import com.gabriel.logistica.repository.ClienteRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/clientes")
@AllArgsConstructor
public class ClienteController {

    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> list() {
        return clienteRepository.findAll();
    }

}
