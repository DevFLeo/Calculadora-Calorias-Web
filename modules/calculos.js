// Arquivo: /modules/calculos.js

// Este módulo contém a função calcularMetricas, que calcula
export function calcularMetricas(dados) {
  // A 'desestruturação' abaixo é uma forma moderna de pegar
  // as propriedades de um objeto e colocá-las em variáveis.
  const { sexo, idade, peso, altura, atividade } = dados;

  let tmb;

  // Fórmula de Harris-Benedict (revisada)
  if (sexo === "masculino") {
    tmb = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
  } else {
    tmb = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * idade;
  }

  const caloriasParaManter = tmb * atividade;

  // Em vez de retornar um único valor, retornamos um objeto com
  // os resultados. Isso torna nosso módulo mais poderoso.
  return {
    tmb: tmb.toFixed(0),
    manutencao: caloriasParaManter.toFixed(0),
    perdaLeve: (caloriasParaManter - 300).toFixed(0), // Déficit de 300kcal
    ganhoLeve: (caloriasParaManter + 300).toFixed(0), // Superávit de 300kcal
  };
}
