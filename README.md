# CodeMar — Portfolio

Portfolio personal de **Juan Unanue** — desarrollo web y sistemas de gestión.

Estudio: **CodeMar**
Estilo visual: Brittany Chiang style · paleta beige/cálida
Layout: Sidebar fijo + contenido scrolleable

Construido con [Astro](https://astro.build).

---

## 🚀 Arrancar el proyecto

```bash
npm install
npm run dev
```

Abre en `http://localhost:4321`.

Build para producción:
```bash
npm run build
```

---

## 🎨 Paleta cálida

Variables CSS en `src/styles/global.css`:

| Variable | Hex | Uso |
|---|---|---|
| `--bg` | `#1A1510` | Fondo principal (marrón carbón) |
| `--bg-alt` | `#221B13` | Fondo alternado |
| `--bg-panel` | `#2D2318` | Cards y paneles |
| `--text-primary` | `#F5E8D4` | Texto principal (crema) |
| `--text-secondary` | `#C9B690` | Texto secundario (beige) |
| `--text-muted` | `#8A7A5F` | Texto auxiliar |
| `--accent` | `#E8B876` | Acento dorado/miel |
| `--accent-hover` | `#F4D19B` | Acento brillante |

**Fuentes**:
- Display: [Inter](https://fonts.google.com/specimen/Inter)
- Mono: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📁 Estructura

```
src/
├── components/
│   ├── Sidebar.astro      ← sidebar fijo con nav scroll-spy
│   ├── About.astro        ← texto largo estilo brittany
│   ├── Services.astro     ← lista de servicios
│   ├── CaseStudies.astro  ← cards de proyectos
│   ├── Contact.astro      ← sección de contacto
│   └── Footer.astro       ← footer minimal
├── layouts/
│   └── Layout.astro       ← grid 2 columnas + cursor glow + scroll spy
├── pages/
│   ├── index.astro
│   └── proyectos/
│       ├── senderos-de-la-costa.astro
│       └── alojamiento-calma.astro
└── styles/
    └── global.css
```

Los archivos `Hero.astro` y `Header.astro` quedaron del diseño anterior y no se usan — podés borrarlos.

---

## ✨ Features especiales

- **Cursor glow**: seguidor de cursor sutil con radial gradient dorado
- **Scroll spy**: la nav del sidebar resalta la sección actual al scrollear
- **Hover glow en cards**: las cards de proyectos se iluminan con borde y fondo al pasar el mouse
- **Nav lines**: las líneas al lado de cada nav item crecen al hover/active

---

## ✏️ Contenido a rellenar

### Sidebar (`src/components/Sidebar.astro`)
- Links reales de GitHub, LinkedIn, WhatsApp

### About (`src/components/About.astro`)
- Ajustar bio si querés otro tono

### Páginas de detalle
- `src/pages/proyectos/senderos-de-la-costa.astro`: secciones "Desafío" y "Solución"
- `src/pages/proyectos/alojamiento-calma.astro`: mismas secciones

### Contact (`src/components/Contact.astro`)
- Número de WhatsApp real
- Conectar formulario a Formspree / Resend

---

## 📦 Deploy

**Netlify drag & drop**:
1. `npm run build`
2. Arrastrar `dist/` a https://app.netlify.com/drop

**Desde GitHub**:
- Build command: `npm run build`
- Publish directory: `dist`

---

## 🔜 Próximos pasos

- [ ] Rellenar contenido real en casos de estudio
- [ ] Agregar screenshots reales en `public/images/`
- [ ] Implementar demo de Senderos (cuenta invitado)
- [ ] Conectar formulario a Formspree
- [ ] Comprar dominio `codemar.com.ar` y configurar DNS
