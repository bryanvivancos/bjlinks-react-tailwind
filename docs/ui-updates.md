# Updates de UI — contexto del portafolio

Cambios de layout y movimiento hechos sobre el portafolio. Sirve para no reintroducir fondos negros ni animaciones que rompan lo que ya funciona.

Orden de secciones en `src/pages/App.jsx`:

1. Hero
2. About
3. Skills
4. Resume
5. Projects
6. Certificates
7. Clients
8. FooterCTA (contacto, `#contact`)

---

## 1. Sección Mis clientes

Antes de contacto. Misma cabecera que el resto (`pre-header` + `section-header`).

| Archivo | Rol |
|---------|-----|
| `src/components/Clients.jsx` | Sección `#clients` y data de empresas |
| `src/components/atoms/ClientItem.jsx` | Tarjeta. Si hay `logo`, lo muestra. Si no, iniciales del nombre |

Empresas actuales:

- Catquiz — Joyería y Accesorios — `https://bio.catquiz.pe` — `/clientes/CATQUIZ_Logo Blanco.webp`
- El Chalán — Heladería — `https://elchalan.com.pe` — `/clientes/el_chalan.webp`

Para sumar un cliente, agregar un objeto al array `clients`. `logo` y `url` son opcionales.

---

## 2. Estrellas eliminadas

Se quitó el fondo de puntitos blancos.

- `index.html`: ya no existe `#stars` ni el script que creaba `.star`
- `src/styles/App.css`: se eliminaron `#stars`, `.star` y `@keyframes starTwinkle`

No volver a generar partículas en el `body`. El fondo es negro y la luz verde de `AmbientGlow`.

---

## 3. Luz verde que acompaña el scroll

Una sola capa, no un glow copiado dentro de cada sección.

| Archivo | Rol |
|---------|-----|
| `src/components/AmbientGlow.jsx` | Dos halos fijos, `pointer-events: none`, `z-index: 0` |
| `src/styles/App.css` | `.ambient-glow`. Se mueven solo con `transform`, animación `scroll(root)` |

Va como primer hijo del wrapper de `App`, detrás de `main` (`z-index: 20`). No usa GSAP ni `ScrollTrigger`.

El pin de las tarjetas de proyectos (`ProjectsSection.jsx`, `ScrollTrigger` con `pin`) no se toca. Las cards siguen opacas (`bg-black/95` en `ProjectItem.jsx`) para que el apilado no se transparente.

### No pintar negro encima de la luz

Un `bg-black` de sección o un degradado `from-black` se ve como un corte recto contra el halo verde.

Se quitó ese fondo o fade en:

- `ProjectsSection.jsx` (`bg-black` de la sección)
- `Certificates.jsx` (fade superior)
- `Clients.jsx` (fade superior y `bg-black`)
- `About.jsx` y `FooterCTA.jsx` (glow fijo local y fades `from-black`)

El fade lateral de About se dejó. Si hay que oscurecer un borde, usar `mask-image` (el contenido se vuelve transparente y se ve el halo). No usar una capa `background: black`.

---

## 4. Carrusel BRYAN del hero

El texto gigante detrás de la foto se desplaza de derecha a izquierda en bucle.

| Archivo | Rol |
|---------|-----|
| `src/components/Hero.jsx` | Tira repetida (`MARQUEE_WORDS` × 2 grupos). Centrada a la altura de la foto (`top` ~38–42%). La foto va en `z-10` |
| `src/styles/App.css` | `.hero-marquee` anima `translate3d` de `0` a `-50%` en 28s (`hero-marquee-left`). `.hero-marquee-mask` desvanece los extremos con `mask-image` |

El segundo grupo es idéntico al primero para que el salto del `-50%` no se note. `prefers-reduced-motion` deja la tira quieta.

Los extremos no llevan una franja negra. Eso recortaba las letras en un rectángulo. El mask solo baja la opacidad.

---

## 5. Carrusel de tecnologías

`src/components/Skills.jsx` sigue con dos tracks (`animate-scroll-left` y `animate-scroll-right`).

Se quitaron los fades `from-black` de los lados (`w-24`). Esos pintaban la misma caja negra sobre los iconos.

Ahora el contenedor usa `.skills-marquee`: `overflow: hidden` más `mask-image` de transparente a opaco. Los iconos se desvanecen sobre el fondo, sin un bloque negro.
