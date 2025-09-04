document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o reload da página

  const altura = document.getElementById("altura").value / 100; // converte cm para m
  const peso = document.getElementById("peso").value;
  const sexo = document.getElementById("sexo").value;

  if (!altura || !peso) {
    document.getElementById("resultado").innerHTML = "<p>Preencha todos os campos!</p>";
    return;
  }

  // cálculo do IMC
  const imc = (peso / (altura * altura)).toFixed(2);

  // cálculo da massa magra (fórmula de Boer)
  let massaMagra;
  if (sexo === "masc") {
    massaMagra = (0.407 * peso) + (0.267 * (altura * 100)) - 19.2;
  } else {
    massaMagra = (0.252 * peso) + (0.473 * (altura * 100)) - 48.3;
  }

  // classificação IMC
  let classificacao = "";
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  // exibir resultados
  document.getElementById("resultado").innerHTML = `
    <p><b>IMC:</b> ${imc} (${classificacao})</p>
    <p><b>Massa Magra:</b> ${massaMagra.toFixed(2)} kg</p>
  `;
});
