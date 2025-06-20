# ✨ Calculadora de Calorias Web

[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blueviolet)](https://devfleo.github.io/Calculadora-Calorias-Web/)

Este projeto é uma aplicação web interativa desenvolvida para estimar as necessidades calóricas diárias de um indivíduo. Utilizando a fórmula de Harris-Benedict (revisada), a ferramenta calcula a Taxa Metabólica Basal (TMB) e o gasto calórico diário com base em dados fornecidos pelo usuário, como sexo, idade, peso, altura e nível de atividade física.

## 🔗 Demo Ao Vivo

**Você pode testar a aplicação aqui:** [https://devfleo.github.io/Calculadora-Calorias-Web//](https://devfleo.github.io/Calculadora-Calorias-Web/)

## 🚀 Funcionalidades

-   **Cálculo de Taxa Metabólica Basal (TMB):** Implementação precisa da fórmula de Harris-Benedict.
-   **Estimativa de Gasto Calórico:** Ajusta a TMB com base em 5 níveis de atividade física.
-   **Sugestões de Objetivos:** Fornece estimativas calóricas para objetivos de perda ou ganho de peso.
-   **Interface Responsiva:** O design se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
-   **Validação de Formulário:** Feedback em tempo real para o usuário caso os campos não sejam preenchidos corretamente.
-   **Código Modular:** A lógica do JavaScript é separada em módulos para melhor organização, manutenção e escalabilidade.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas, com foco em boas práticas e código limpo.

-   **HTML5:** Para a estrutura semântica do conteúdo.
-   **CSS3:** Para estilização moderna e responsiva, utilizando Flexbox e Variáveis CSS.
-   **JavaScript (ES6+):** Para toda a lógica e interatividade, organizado em Módulos ES6.

## 🏗️ Arquitetura e Estrutura do Projeto

O projeto foi arquitetado com uma abordagem modular em JavaScript para separar as responsabilidades, seguindo o princípio da "Equipe de Especialistas":

calculadora-calorias-web/
├── index.html              # Estrutura principal da página 
├── calculadora.css         # Folha de estilos principal
├── calculadora.js       
└── modules/
├── ui.js               # O "Especialista em Interface" - Manipula o DOM
└── calculos.js         # O "Especialista em Matemática" - Contém a lógica de cálculo


-   `calculos.js`: Módulo puro que contém apenas a lógica matemática. Ele não tem conhecimento sobre a página (DOM).
-   `ui.js`: Módulo responsável por toda a interação com o DOM: ler os valores do formulário e exibir os resultados na tela.
-   `calculadora.js`: O script principal (`type="module"`) que atua como um orquestrador, importando as funções dos módulos especialistas e coordenando o fluxo de dados.

## 💻 Rodando o Projeto Localmente

Para rodar este projeto no seu computador, siga os passos abaixo:

```bash
# 1. Clone o repositório para sua máquina local
git clone https://github.com/DevFLeo/calculadora-calorias-web.git

# 2. Navegue até a pasta do projeto
cd calculadora-calorias-web

# 3. Abra o arquivo `index.html` no seu navegador de preferência.
# Não é necessário um servidor local, pois é um projeto estático que usa módulos ES6.

📄 Licença

Este projeto está sob a licença MIT.

Desenvolvido por Leonardo Vinicius de Oliveira Frez como parte do portfólio de projetos.

