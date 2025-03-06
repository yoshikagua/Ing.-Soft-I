document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recetasForm");
    const mensaje = document.getElementById("mensaje");

    if (!form) {
        console.error("No se encontró el formulario.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        const title = document.getElementById("nombre")?.value.trim();
        const ingredientsText = document.getElementById("ingredientes")?.value.trim();
        const description = document.getElementById("preparacion")?.value.trim();
        const level = document.getElementById("nivel")?.value;

        // Validaciones básicas
        if (!title || !ingredientsText || !description || !level) {
            mensaje.textContent = "Por favor, completa todos los campos.";
            return;
        }

        // Convertir ingredientes de texto a JSON
        const ingredients = ingredientsText.split(",").map(item => ({
            name: item.trim(),
            amount: "Cantidad no especificada"
        }));

        // Crear el objeto JSON
        const receta = {
            title,
            description,
            tags: JSON.stringify({ nivel: level }), // Guardamos nivel dentro de tags
            ingredients: JSON.stringify(ingredients),
            profileId: "b00e031f-377a-4b9b-8e04-63151be384a2" // Cambia esto por el ID del usuario logueado
        };

        try {
            const token = localStorage.getItem("token"); // Obtener el token de autenticación

            const response = await fetch("http://localhost:3000/api/v1/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Enviar el token para autenticación
                },
                body: JSON.stringify(receta)
            });

            const data = await response.json();

            if (response.ok) {
                mensaje.textContent = "✅ Receta publicada con éxito.";
                form.reset(); // Limpiar el formulario
            } else {
                mensaje.textContent = `❌ Error: ${data.message || "No se pudo publicar la receta."}`;
            }
        } catch (error) {
            console.error("Error en la petición:", error);
            mensaje.textContent = "❌ Error de conexión con el servidor.";
        }
    });
});