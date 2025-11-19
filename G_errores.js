/**
 * Resuelve una ecuación de segundo grado (ax² + bx + c = 0).
 * ... (resto de la descripción)
 */
function resolverEcuacionSegundoGradoDOM() {
    // 1. Referencias al DOM y preparación
    const aInput = document.getElementById('a');
    const bInput = document.getElementById('b');
    const cInput = document.getElementById('c');
    const errorBox = document.getElementById('error-box');
    const errorMessage = document.getElementById('error-message');
    const resultBox = document.getElementById('result-box');
    const calcularBtn = document.getElementById('calcularBtn');
    
    // Limpiar resultados anteriores y preparar la interfaz
    errorBox.classList.add('error-hidden');
    resultBox.classList.add('success-hidden'); 
    errorMessage.textContent = '';
    
    // Deshabilitar el botón para evitar clics múltiples (Buena práctica UX)
    if (calcularBtn) {
        calcularBtn.disabled = true;
    }

    // Obtener valores y convertirlos a float
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    let outputMessage = '';

    console.log("=== INICIO: CÁLCULO CUADRÁTICA ===");

    // 2. Bloque TRY: Lógica y Lanzamiento de Excepciones
    try {
        console.log(`[TRY] Intentando calcular con a=${a}, b=${b}, c=${c}`);

        // ... (Lanzamiento de excepciones: ERR-TIPO, ERR-A-CERO, ERR-DISCRIMINANTE) ...
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new TypeError("ERR-TIPO: Ingrese valores numéricos válidos en todos los campos.");;
        }
        if (a === 0) {
            throw new Error("ERR-A-CERO: El coeficiente 'a' no puede ser cero, no es una cuadrática.");
        }
        const discriminante = b * b - 4 * a * c;
        if (discriminante < 0) {
            throw new RangeError("ERR-DISCRIMINANTE: El discriminante es negativo. Las raíces son complejas.");;
        }
        
        // CÁLCULO EXITOSO
        const sqrtDiscriminante = Math.sqrt(discriminante);
        const x1 = (-b + sqrtDiscriminante) / (2 * a);
        const x2 = (-b - sqrtDiscriminante) / (2 * a);
        
        outputMessage = `Raíces Reales:\n  x1 = ${x1.toFixed(4)}\n  x2 = ${x2.toFixed(4)}`;
        
        // 3. Resultado en POP-UP (alert)
        alert(`Cálculo Exitoso!\n\n${outputMessage}`);
        
        console.log(`[ÉXITO] Solución enviada al pop-up. \n${outputMessage}`);

    } 
    // 4. Bloque CATCH: Captura el Objeto Error y lo muestra gráficamente
    catch (error) { 
        // ... (Manejo del error, impresión en consola, y visibilidad de errorBox) ...
        console.error("\n*** ¡EXCEPCIÓN CAPTURADA EN CATCH! ***");
        if (error instanceof Error) {
            errorMessage.textContent = `**${error.name}**: ${error.message}`;
            errorBox.classList.remove('error-hidden');
            console.error(`  -> Nombre (error.name): ${error.name}`);
            console.error(`  -> Mensaje (error.message): ${error.message}`);
            console.error(`  -> Stack (error.stack): \n${error.stack}`);
        } else {
            errorMessage.textContent = 'Error desconocido durante el proceso.';
            errorBox.classList.remove('error-hidden');
            console.error(`[CATCH] Error desconocido: ${error}`);
        }
    } 
    // 5. Bloque FINALLY: Limpieza y preparación para el reintento
    finally {
        console.log(`[FINALLY] La operación ha finalizado. Preparando para reintento.`);
        
        // Restablecer el botón
        if (calcularBtn) {
            calcularBtn.disabled = false;
        }

        // 🟢 NUEVA FUNCIONALIDAD: LIMPIEZA DE CAMPOS
        aInput.value = '';
        bInput.value = '';
        cInput.value = '';

        // Foco para el reintento (ahora en el campo vacío)
        aInput.focus();
        
        console.log("-".repeat(70));
    }
}

// Asignar el evento al botón cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn) {
        calcularBtn.addEventListener('click', resolverEcuacionSegundoGradoDOM);
    }
});