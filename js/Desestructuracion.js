     // Definición de un objeto en JavaScript
        const usuario = {
            nombre: "Ana",
            edad: 30,
            ciudad: "Madrid"
        };

        // --- Desestructuración en JavaScript ---
        // Extraemos las propiedades 'nombre' y 'edad' en variables separadas
        const { nombre, edad } = usuario;

        console.log("Objeto completo:", usuario);
        console.log("Nombre extraído (desestructurado):", nombre);
        console.log("Edad extraída (desestructurado):", edad);
        
        // También puedes renombrar variables durante la desestructuración
        const { nombre: nombreDeUsuario, edad: añosDeUsuario } = usuario;
        console.log("Nombre renombrado:", nombreDeUsuario);
