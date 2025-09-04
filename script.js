document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const altura = document.getElementById("altura").value / 100;
  const peso = document.getElementById("peso").value;

  if (!altura || !peso) {
    document.getElementById("resultado").innerHTML = "<p>⚠️ Preencha todos os campos!</p>";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  let classificacao = "";
  let classe = "";
  let alerta = "";

  if (imc < 18.5) { 
    classificacao = "Abaixo do peso";
    classe = "baixo";
    alerta = "💀 Magreza perigosa, bora comer mais!";
  }
  else if (imc < 25) { 
    classificacao = "Peso normal";
    classe = "normal";
    alerta = "✅ Mandou bem, tá na faixa!";
  }
  else if (imc < 30) { 
    classificacao = "Sobrepeso";
    classe = "sobre";
    alerta = "⚠️ Se cuida, dá pra ajustar!";
  }
  else { 
    classificacao = "Obesidade";
    classe = "obeso";
    alerta = "🔥 Perigo! O coração tá gritando!";
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.className = "resultado " + classe;
  resultadoDiv.innerHTML = `
    <h2>📊 Resultado</h2>
    <p><b>IMC:</b> ${imc} (${classificacao})</p>
    <p>${alerta}</p>
  `;
});
