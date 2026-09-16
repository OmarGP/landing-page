# Landing Page — Negocio Local  
Landing page moderna desarrollada con **React + Vite + Tailwind CSS**, optimizada para negocios locales que necesitan presencia digital rápida, profesional y adaptable.

## 🚀 Tecnologías utilizadas
- **React 18**
- **Vite**
- **Tailwind CSS 3.4.13**
- **JavaScript**
- **Google Reviews (opcional)**
- **Animaciones y scroll suave**

## 🎯 Objetivo del proyecto
Crear una landing page rápida, responsive y visualmente atractiva que permita a negocios locales mostrar:
- Información del negocio  
- Servicios y precios  
- Imágenes reales  
- Reseñas de clientes  
- Contacto directo por WhatsApp  

## 📦 Estructura del proyecto
    src/
    ├─ components/
    │    ├─ 1.Hero.jsx
    │    ├─ 2.Servicios.jsx
    │    ├─ 3.SobreNosotros.jsx
    │    ├─ 4.Reseñas.jsx
    │    └─ 5.Contacto.jsx
    ├─ App.jsx
    ├─ index.css
    └─ main.jsx

Cada sección está modularizada para facilitar mantenimiento, escalabilidad y reutilización.

## ✨ Características principales

### ✔ Hero con llamada a la acción  
Sección inicial con botón de **scroll suave** hacia el contacto.

### ✔ Servicios dinámicos  
Renderizado mediante arrays y `.map()` para facilitar la edición y ampliación.

### ✔ Sección “Sobre Nosotros”  
Incluye imagen real del negocio y texto descriptivo.

### ✔ Reseñas reales  
Conexión opcional con **Google Reviews API** o carga manual de reseñas verificadas.

### ✔ Contacto directo  
Botón de WhatsApp y correo electrónico.

### ✔ Responsive completo  
Diseño adaptado para móvil, tablet y escritorio.

### ✔ Animaciones suaves  
Transiciones elegantes entre secciones.

## 🔧 Instalación y uso
 - Los comandos de instalación funcionan en cualquier terminal con Git y Node.js: PowerShell, Bash, CMD, Windows Terminal, Git Bash o WSL.

1. Clonar el repositorio:

    - git clone https://github.com/OmarGP/landing-page

2. Instalar dependencias:

    - npm install

3. Ejecutar en modo desarrollo:

    - npm run dev

4. Compilar para producción:

    - npm run build

## 🖼 Personalización

Puedes modificar:

    - Colores en cada componente usando utility-first classes compatibles con tailwindcss 3.4.13.

    - Textos en cada componente.

    - Imágenes en /assets

    - Servicios y precios en 2.Servicios.jsx

    - Reseñas en 4.Reseñas.jsx

## 🌐 Integración con Google Reviews (opcional)
Para activar reseñas reales:

    · Crear API Key en Google Cloud

    · Activar Places API

    · Añadir endpoint en un servicio o hook

    · Renderizar las reseñas dinámicamente

(Si quieres, puedo generarte el código completo para esta integración.)

### 📄 Licencia
Este proyecto puede ser utilizado como plantilla para fines personales o comerciales.

### 🧑‍💻 Autor
- Omar García Prado  
- Desarrollador Front-End — React · Vite · Tailwind
- Madrid, España

### 📬 Contacto
Si deseas una landing page profesional para tu negocio:
- Email: omar94garcia.dev@gmail.com
- WhatsApp: +34675795159