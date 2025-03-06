document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");

    if (!loginForm) {
        console.error("No se encontró el formulario de login.");
        return;
    }

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value.trim();

        if (!email || !password) {
            mensaje.textContent = "Por favor, completa todos los campos.";
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: "Usuario PRUEBA", email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Credenciales incorrectas");
            }

            localStorage.setItem("token", data.access_token); // Guarda el token en localStorage
            mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";

            window.location.href = "/recetas.html"; // Redirigir después del login
        } catch (error) {
            console.error("Error en la petición:", error);
            mensaje.textContent = `Error: ${error.message || "Error de conexión con el servidor."}`;
        }
    });
});