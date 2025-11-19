function mostrarAlerta() {
  alert("¡Hola! Esto es una alerta de JavaScript.");
}

function calcular() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let op = document.getElementById("operador").value;
  let res;

  if (op === "concat") {
    res = a + b;
  } else {
    a = isNaN(a) ? a : Number(a);
    b = isNaN(b) ? b : Number(b);

    switch (op) {
      case "+": res = a + b; break;
      case "-": res = a - b; break;
      case "*": res = a * b; break;
      case "/": res = b !== 0 ? a / b : "Error: división por cero"; break;
      case "%": res = a % b; break;
      case "==": res = a == b; break;
      case "===": res = a === b; break;
      case "&&": res = a && b; break;
      case "||": res = a || b; break;
      default: res = "Operador no válido";
    }
  }

  document.getElementById("resultado").innerText = "Resultado: " + res;
}
