# CodeMar — Guía para Claude

Contexto y convenciones del proyecto para cualquier instancia de Claude (Code, Chat, web) que trabaje en este repositorio.

---

## Sobre el proyecto

**CodeMar** es el portfolio personal de Juan Unanue, desarrollador Full-Stack basado en Mar del Plata, Argentina. El sitio muestra los proyectos activos del estudio (sistemas y sitios web a medida para PyMEs) y sirve como canal principal para captar clientes.

- **Dominio**: `codemar.com.ar`
- **Stack**: Astro 5 · TypeScript · CSS vainilla
- **Deploy**: Vercel (auto-deploy en push a `main`)
- **Objetivo del sitio**: captación de clientes freelance + posicionamiento profesional

---

## Paleta de colores

Variables CSS definidas en `src/styles/global.css`:

| Variable | Hex | Uso |
|---|---|---|
| `--accent` | `#B8530F` | Terracota — acentos, CTAs, highlights |
| `--accent-hover` | `#8F3F0B` | Hover del accent |
| `--bg` | `#F5EFE6` | Crema cálido — fondo principal |
| `--bg-alt` | `#EDE5D3` | Fondo alternado (sidebar zone) |
| `--bg-panel` | `#FFFFFF` | Cards y paneles |
| `--text-primary` | `#2A1D12` | Marrón oscuro — texto principal |
| `--text-secondary` | `#5C4A38` | Texto secundario |
| `--text-muted` | `#8A7A5F` | Texto auxiliar |

**Nunca hardcodear colores** — siempre usar las variables CSS.

---

## Tipografías

- **Display**: Inter (weights 400, 600, 800)
- **Monospace**: JetBrains Mono (weights 400, 500, 700)

Cargadas desde Google Fonts en `global.css`.

---

## Estructura del proyecto

```
src/
├── components/        ← Secciones reutilizables (Sidebar, Footer, Hero, etc.)
├── layouts/
│   └── Layout.astro   ← Layout base con <head>, sidebar opcional
├── pages/
│   ├── index.astro    ← Home
│   ├── 404.astro      ← Página 404 custom
│   └── proyectos/
│       ├── senderos-de-la-costa.astro
│       └── alojamiento-calma.astro
├── styles/
│   └── global.css     ← Variables, reset, tipografía, utilidades
└── assets/            ← Imágenes optimizadas por Astro
public/                ← Archivos estáticos (favicons, logos, screenshots)
```

---

## Commits

Antes de cada commit analizá los archivos modificados y usá un mensaje descriptivo en español.

**Formato**: `tipo: descripción corta`

**Tipos**:
- `feat` — nueva función o feature
- `fix` — corrección de bug
- `style` — cambios de diseño/CSS
- `refactor` — mejora interna sin cambio de comportamiento
- `docs` — cambios en documentación
- `chore` — tareas de mantenimiento (deps, config)

**Ejemplos**:
- `feat: agrega exportación PDF en presupuestos`
- `fix: corrige filtro de estado en obras`
- `style: ajusta colores del sidebar`
- `refactor: separa lógica de CaseStudies en componente`
- `docs: actualiza README con instrucciones de deploy`
- `chore: actualiza dependencias de Astro`

**Reglas**:
- Todo en minúscula (excepto nombres propios)
- Sin punto final
- Descripción en español, concisa
- Un commit = un cambio lógico (no mezclar features con fixes)

---

## Responsive

El sitio debe funcionar correctamente en mobile, tablet y desktop.

**Breakpoints**:
- Mobile: `< 768px`
- Tablet: `768px – 1024px`
- Desktop: `> 1024px`

**Reglas generales**:
- El sidebar fijo de desktop (`<1024px`) colapsa y pasa a estar arriba del contenido, con el logo + nav reducidos
- El cursor glow se mantiene solo en desktop (`hover: hover`), no se activa en touch
- Usar `clamp()` para tamaños de texto que escalen suavemente entre breakpoints — evita saltos bruscos al cambiar de ancho
- Usar `rem`, `%` o `em` en vez de `px` para espaciados/anchos cuando sea posible
- Nunca hardcodear anchos fijos que puedan desbordar en pantallas chicas (ej: `width: 800px` mal, `max-width: 800px; width: 100%` bien)
- Las imágenes deben ser fluidas: `max-width: 100%; height: auto`
- Siempre probar mentalmente el layout en **375px (iPhone SE)** antes de dar algo por terminado
- En mobile, los grids de varias columnas se apilan en una sola columna (ej: `grid-template-columns` pasa a `1fr`)
- Texto largo con `hyphens: auto` para evitar palabras que se corten feas en columnas angostas
- Padding horizontal del contenido principal reducido en mobile (ej: `1.25rem` vs `2rem` en desktop)

---

## Convenciones de código

**Astro components**:
- Nombres en `PascalCase` (ej: `Sidebar.astro`, `ProjectCard.astro`)
- Ubicados en `src/components/`
- Scoped styles por componente (no global)

**CSS**:
- Variables CSS en `global.css` (nunca hardcodear colores/fuentes/espaciados comunes)
- BEM o sin metodología estricta, pero siempre clases semánticas (no `.red-box`, sí `.error-card`)
- Evitar `!important` salvo caso justificado

**Imágenes**:
- SVG para íconos y logos (en `public/` o `src/assets/`)
- PNG/WebP para fotos (preferir `<Image>` de `astro:assets` para optimización)
- Siempre con `alt` semántico

**Accesibilidad**:
- `alt` en todas las imágenes
- `aria-label` en botones sin texto visible
- Contraste suficiente (WCAG AA mínimo)
- Navegación con teclado funcional

---

## Comandos útiles

```bash
npm install          # instalar dependencias
npm run dev          # servidor local en http://localhost:4321
npm run build        # build de producción en /dist
npm run preview      # previsualizar el build de producción
```

---

## Deploy

Conectado a Vercel vía GitHub. Cada push a `main` dispara un deploy automático.

Si el deploy falla, revisar:
1. Logs de build en el dashboard de Vercel
2. Errores de TypeScript / Astro
3. Dependencias faltantes en `package.json`

Para forzar un redeploy sin cambios de código: en Vercel Dashboard → Deployments → "Redeploy".

---

## Recursos externos

- Logo principal: `public/logo-main.svg`
- Logo favicon: `public/favicon.svg`
- Logo horizontal (con wordmark): `public/logo-horizontal.svg`
- Logo transparent (sin fondo): `public/logo-transparent.svg`
- Webmanifest: `public/site.webmanifest`

Para exportar el logo a PNG (redes sociales, banners), usar [CloudConvert](https://cloudconvert.com/svg-to-png).
