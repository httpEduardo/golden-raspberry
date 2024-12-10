# Dashboard Golden Raspberry Awards

Este projeto é um **dashboard** desenvolvido em **Angular** para exibir e explorar dados relacionados ao Golden Raspberry Awards. A aplicação permite que os usuários:
- Visualizem uma lista de anos com múltiplos vencedores.
- Consultem os estúdios com o maior número de prêmios.
- Verifiquem os produtores com os maiores e menores intervalos entre vitórias.
- Pesquisem filmes por ano.

---

## **Configuração do Projeto**

### **Pré-requisitos**
Antes de configurar o projeto, certifique-se de que você tenha os seguintes requisitos instalados em sua máquina:
- **Node.js** (versão 16 ou superior)
- **Angular CLI** (versão 14 ou superior)
- Um editor de código, como **Visual Studio Code**

---

### **Instalação**

1. **Clone o Repositório**  
   Faça o clone do repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-repositorio.git

2. **Acesse o Diretório do Projeto**
Entre na pasta do projeto:
    ```bash
cd golden-raspberry

3. Instale as Dependências
Instale todas as dependências necessárias usando o npm:
    ```bash
    npm install

*Como Executar o Projeto
Inicie o Servidor de Desenvolvimento
Para executar a aplicação em modo de desenvolvimento, utilize:

ng serve

Após isso, acesse http://localhost:4200 no navegador para visualizar o dashboard.

2. Explore as Funcionalidades

Acesse os diferentes cards disponíveis no dashboard para visualizar dados sobre anos vencedores, estúdios, produtores e filmes.

Use o campo de busca para pesquisar filmes por ano.

Nota Importante
A API originalmente utilizada, https://challenge.outsera.tech/api/movies, está fora do ar e não responde requisições nem pelo Postman nem pelo frontend. Devido a isso, foi necessário simular os dados manualmente no frontend para garantir o funcionamento do dashboard.

Os dados foram implementados diretamente no código para permitir a exploração das funcionalidades. A estrutura do projeto, no entanto, foi planejada para ser facilmente integrada a uma API no futuro, caso ela volte a estar disponível.

Estrutura do Projeto
O projeto segue a estrutura modular do Angular e está organizado da seguinte forma:

src/app: Contém os componentes principais da aplicação.
components/dashboard: Componente responsável por exibir os dados principais.
components/movies-list: Componente para listar e buscar filmes.
app-routing.module.ts: Gerencia as rotas da aplicação.
app.module.ts: Configura os módulos e dependências da aplicação.

