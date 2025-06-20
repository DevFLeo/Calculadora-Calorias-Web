// Arquivo: /calculadora.js
// Descrição: Este arquivo contém o código principal da calculadora de calorias.

import { calcularMetricas } from "./modules/calculos.js";
import { pegarDadosDoFormulario, mostrarResultado } from "./modules/ui.js";

// Encontra o formulário no HTML para poder "ouvir" o clique.
const form = document.getElementById("calorie-form");

// Define o que acontece quando o evento 'submit' (clique no botão) ocorre.
form.addEventListener("submit", function (event) {
  // Impede que a página recarregue ao clicar no botão.
  event.preventDefault();

  // Pede a UI para pegar os dados do formulário.
  const dadosDoUsuario = pegarDadosDoFormulario();

  // Pede do Calculadora e processa os dados.
  const metricasCalculadas = calcularMetricas(dadosDoUsuario);

  // Pede a UI para mostrar os resultados.
  mostrarResultado(metricasCalculadas);
});
