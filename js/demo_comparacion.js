function demoComparacion() {
  const entrada1 = document.getElementById("valorComparacion1").value;
  const entrada2 = document.getElementById("valorComparacion2").value;

  const valor1 = interpretar(entrada1);
  const valor2 = interpretar(entrada2);

  let salida = "<h2>Comparación de Operadores</h2>";
  salida += `<p>Entrada 1: ${entrada1} → <strong>${typeof valor1}</strong> (${valor1})</p>`;
  salida += `<p>Entrada 2: ${entrada2} → <strong>${typeof valor2}</strong> (${valor2})</p>`;
  salida += "<ul>";
  salida += `<li>${valor1} == ${valor2} → ${valor1 == valor2}</li>`;
  salida += `<li>${valor1} === ${valor2} → ${valor1 === valor2}</li>`;
  salida += `<li>${valor1} < ${valor2} → ${valor1 < valor2}</li>`;
  salida += `<li>${valor1} > ${valor2} → ${valor1 > valor2}</li>`;
  salida += `<li>${valor1} <= ${valor2} → ${valor1 <= valor2}</li>`;
  salida += `<li>${valor1} >= ${valor2} → ${valor1 >= valor2}</li>`;
  salida += "</ul>";
  salida += `<p><strong>==</strong> compara solo el valor (con conversión de tipo). <strong>===</strong> compara valor y tipo exactos.</p>`;
  salida += `<p><strong><</strong>, <strong>></strong>, <strong><=</strong>, <strong>>=</strong> comparan según orden lógico o numérico, según el tipo de dato.</p>`;

  document.getElementById("resultados").innerHTML = salida;
}

function interpretar(valor) {
  try {
    return eval(valor);
  } catch {
    return valor;
  }
}
