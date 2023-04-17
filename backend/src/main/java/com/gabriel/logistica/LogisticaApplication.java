package com.gabriel.logistica;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gabriel.logistica.model.Cliente;
import com.gabriel.logistica.model.Endereco;
import com.gabriel.logistica.repository.ClienteRepository;

@SpringBootApplication
public class LogisticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LogisticaApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(ClienteRepository clienteRepository) {
		return args -> {
			clienteRepository.deleteAll();

			Cliente cliente1 = new Cliente();
			cliente1.setNome("João");
			cliente1.setCodigo("001");
			cliente1.setCnpj("12345678901");

			Endereco endereco1 = new Endereco();
			endereco1.setRua("Rua A");
			endereco1.setNumero("123");
			endereco1.setBairro("Centro");
			endereco1.setCidade("São Paulo");
			endereco1.setEstado("SP");
			endereco1.setCep("12345-678");
			endereco1.setPlaceId("1234");

			cliente1.setEndereco(endereco1);

			clienteRepository.save(cliente1);

			Cliente cliente2 = new Cliente();
			cliente2.setNome("Maria");
			cliente2.setCodigo("002");
			cliente2.setCnpj("23456789012");

			Endereco endereco2 = new Endereco();
			endereco2.setRua("Rua B");
			endereco2.setNumero("456");
			endereco2.setBairro("Jardim");
			endereco2.setCidade("Rio de Janeiro");
			endereco2.setEstado("RJ");
			endereco2.setCep("54321-876");
			endereco2.setPlaceId("5678");

			cliente2.setEndereco(endereco2);
			clienteRepository.save(cliente2);

			Cliente c3 = new Cliente();
			c3.setNome("Pedro");
			c3.setCodigo("003");
			c3.setCnpj("34567890123");

			Endereco endereco3 = new Endereco("Rua C", "789", "Jardins", "São Paulo", "SP", "34567-890", "9012");
			c3.setEndereco(endereco3);

			clienteRepository.save(c3);

			Cliente c4 = new Cliente();
			c4.setNome("Luísa");
			c4.setCodigo("004");
			c4.setCnpj("98765432109");
			c4.setEndereco(new Endereco("Rua D", "456", "Jardim Paulista", "São Paulo", "SP", "12345-678", "4321"));

			clienteRepository.save(c4);

			Cliente c5 = new Cliente();
			c5.setNome("José");
			c5.setCodigo("005");
			c5.setCnpj("12345678910");
			c5.setEndereco(new Endereco("Rua E", "789", "Vila Olímpia", "São Paulo", "SP", "12345-678", "5678"));

			clienteRepository.save(c5);

		};

	}

}
