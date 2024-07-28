# Meu Projeto React

Este é um projeto de exemplo que demonstra como criar um aplicativo React com formulários de cadastro de usuários, gerenciamento de autenticação e rotas privadas utilizando `react-hook-form`, `react-router-dom` e contexto de autenticação.


## Configuração e Execução do Projeto

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (gerenciador de pacotes do Node.js)

### Passos para Configuração

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/meu-projeto.git
   cd meu-projeto

   npm install

   npm start

### Estrutura dos Componentes 

UserForm.js
Componente de formulário de cadastro de usuários utilizando react-hook-form.

AgeForm.js
Componente de formulário com validação de idade mínima utilizando react-hook-form.

AuthContext.js
Contexto de autenticação para gerenciar o estado de autenticação do usuário. Inclui métodos para login (signIn) e logout (signOut).

Estilos
Os estilos estão definidos no arquivo styles.module.css e são aplicados aos componentes de formulário e de login.

### Funcionalidades

Formulários de Cadastro: Inclui validação para nome, email e senha, além de um formulário adicional com validação de idade mínima.

Autenticação: Simulação de login e logout utilizando uma API fake e gerenciamento de estado de autenticação com contexto.

Rotas Privadas: Utiliza react-router-dom para proteger rotas que requerem autenticação.


