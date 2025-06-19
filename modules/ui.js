// Arquivo: /modules/ui.js

// Esta função LÊ os dados do formulário e os retorna como um objeto.
export function pegarDadosDoFormulario() {
  const sexo = document.getElementById("sexo").value;
  const idade = parseInt(document.getElementById("idade").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value);
  const atividade = parseFloat(document.getElementById("atividade").value);

  return { sexo, idade, peso, altura, atividade };
}

// Os resultados e exibe na tela.
export function mostrarResultado(resultados) {
  const container = document.getElementById("resultado-container");

  // Verifica se algum campo está vazio (retorna NaN) ou se a TMB é negativa.
  // Se sim, exibe uma mensagem de erro.
  if (!resultados.tmb || resultados.tmb < 0) {
    container.innerHTML = `<p class="error">Por favor, preencha todos os campos com valores válidos.</p>`;
    return;
  }

  // Usamos template literals (crases ``) para criar um bloco de HTML facilmente.
  container.innerHTML = `
    <h2>Resultados:</h2>
    <p>Sua Taxa Metabólica Basal (TMB) é de <strong>${resultados.tmb} calorias</strong>.</p>
    <p>Para manter seu peso, você precisa de <strong>${resultados.manutencao} calorias/dia</strong>.</p>
    <hr>
    <h4>Objetivos:</h4>
    <ul>
      <li><strong>Perder peso (leve):</strong> ~${resultados.perdaLeve} calorias/dia</li>
      <li><strong>Ganhar peso (leve):</strong> ~${resultados.ganhoLeve} calorias/dia</li>
    </ul>
  `;
}
