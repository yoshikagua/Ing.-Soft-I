#  **Repositorio grupal - Ingeniería de software 1 - 2024-2**

## 🍽️ Proyecto de Gestión de Recetas de Cocina "CocinaConectada"

- Stiven Aguirre Granada
- Andrés Felipe Perdomo Uruburu
- Cesar Camilo Velandia Cubillos
- Manuel Santiago Mori Ardila


## 📌 Descripción
Proyecto universitario para desarrollar una plataforma web que permita a los usuarios gestionar y compartir recetas de cocina de manera sencilla. Los usuarios pueden registrarse, crear recetas con imágenes, buscar y filtrar recetas, interactuar con otras publicaciones mediante comentarios y calificaciones, y recibir notificaciones relevantes.

---

## ✨ Alcance
**Funcionalidades Incluidas:**
- Sistema de registro y autenticación.
- Publicación, edición y eliminación de recetas con imágenes y descripción.
- Búsqueda y filtrado de recetas.
- Calificación y comentarios en recetas.
- Perfil de usuario.
- Sistema de notificaciones.
- Etiquetas personalizadas para recetas.


**Funcionalidades Fuera del Alcance:**
- Seguimiento de otros usuarios y feed personalizado.
- Almacenamiento de recetas favoritas.
- Sugerencias de recetas populares.
- Modo oscuro para la interfaz.

---

## ⚙️ Tecnologías Utilizadas
- **Frontend:** Flutter
- **Backend:** Nest.js
- **Base de Datos:** MySQL
- **Autenticación:** JWT

---

## 🚀 Instalación y Uso
**Clona el repositorio:**
```
 git clone https://github.com/usuario/proyecto-recetas.git
```

**Instala las dependencias:**

- **Backend (Nest.js):**
``` 
cd backend && npm install  
```
- **Frontend (Flutter):**
```
 cd frontend && flutter pub get  
```

Configura las variables de entorno (backend/.env):
```
 PORT=4000  
 DATABASE_URL=mysql://user:password@localhost:3306/recetas  
 JWT_SECRET=tu_secreto_jwt  
```

Ejecuta el proyecto:

- **Backend:**
```
npm run start  
`````
- **Frontend:**
```
flutter run  
```
---

## 📄 Código Limpio y Buenas Prácticas
El proyecto sigue las reglas de Clean Code para mantener el código limpio y fácil de mantener:

- **Backend:** Uso de ESLint y Prettier para asegurar buenas prácticas.
- **Frontend:** Uso de flutter_lints y flutter analyze para mantener el código ordenado y consistente.

---

## 🛠️ Arquitectura
El sistema sigue una arquitectura MVC (Modelo-Vista-Controlador):

- **Modelo:** Gestiona los datos (recetas, usuarios, comentarios).
- **Vista:** Interfaz de usuario en Flutter.
- **Controlador:** Procesa las solicitudes del usuario y maneja la lógica de negocio en Nest.js.
- **Base de Datos:** MySQL para almacenamiento estructurado de la información.

---

## 📚 Patrones de Diseño
- **MVC:** Para separar la lógica de negocio, la presentación y el control del flujo de datos.
- **Repository:** Facilita el acceso a la base de datos.
- **Singleton:** Garantiza una única instancia para servicios clave (como autenticación).
- **Decorator:** Añade funcionalidades sin modificar el código original.

