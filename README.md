
# Título do Projeto

Para rodar o backend, inicialize a aplicação Spring. 
O banco de dados que foi utilizado é o H2. 
localhost:8080/h2-console/


Para inicializar o front-end, instale os pacotes com yarn. 
yarn install.

E inicialize com yarn start.




## Requisitos


1. Cadastro de clientes: o sistema deve permitir que um usuário crie um cadastro de cliente, fornecendo as seguintes informações: Código, Nome, CNPJ e Endereço com localização geográfica.
2. Listagem de clientes: o sistema deve permitir que um usuário liste todos os clientes cadastrados, com as informações de Código, Nome, CNPJ e Endereço com localização geográfica.
3. Filtragem de clientes: o sistema deve permitir que um usuário filtre os clientes cadastrados, com base em critérios como Nome, CNPJ, Endereço ou localização geográfica.
4. Visualização de clientes no mapa: o sistema deve permitir que um usuário visualize os clientes cadastrados em um mapa, com a opção de filtragem.
5. Atualização de localização: o sistema deve permitir que um usuário atualize a localização geográfica de um cliente cadastrado.
## Regras de Negócio
1. Um cliente não pode ser cadastrado sem Nome, CNPJ e Endereço com localização geográfica.
2. A localização geográfica deve ser cadastrada vinculada ao Endereço do cliente.
## Plano de teste
1. Teste de Cadastro de Cliente
    - Cenário: Todos os campos preenchidos corretamente.
    - Resultado Esperado: O cliente é cadastrado com sucesso.
2. Teste de Listagem de Clientes
    - Cenário: Existem clientes cadastrados.
    - Resultado Esperado: Todos os clientes são listados corretamente.
3. Teste de Filtro de Clientes
    - Cenário: Existem clientes cadastrados.
    - Resultado Esperado: A lista de clientes é filtrada corretamente com base no critério selecionado.
4. Teste de Visualização de Clientes no Mapa
    - Cenário: Existem clientes cadastrados.
    - Resultado Esperado: Os clientes são exibidos corretamente no mapa, de acordo com o filtro selecionado.
5. Teste de Atualização de Localização do Cliente
    - Resultado esperado: A localização geográfica do cliente é atualizada com sucesso.
    - Cenário: Um cliente é selecionado e a localização geográfica é atualizada.
6. Teste de Regra de Negócio: Cadastro sem Nome
    - Cenário: Um usuário tenta cadastrar um cliente sem preencher o campo de Nome.
    - Resultado Esperado: O sistema não permite o cadastro e exibe uma mensagem de erro.
7. Teste de Regra de Negócio: Cadastro sem CNPJ
    - Cenário: Um usuário tenta cadastrar um cliente sem preencher o campo de CNPJ.
    - Resultado Esperado: O sistema não permite o cadastro e exibe uma mensagem de erro.
8. Teste de Regra de Negócio: Cadastro sem Endereço com Localização
    - Cenário: Um usuário tenta cadastrar um cliente sem preencher o campo de Endereço com Localização.
    - Resultado Esperado: O sistema não permite o cadastro e exibe uma mensagem de erro.