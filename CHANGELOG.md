# Changelog

## [1.2.0] — 2026-11-12

Reescritura orientada a que la documentación generada sea **reproducible paso a paso por alumnos de DAM/DAW sin experiencia**.

### Añadido
- **Regla A:** entradas de `05_ERRORES_Y_SOLUCIONES` en seis partes (contexto · qué falló · por qué se originó · pasos numerados reproducibles · cómo comprobarlo · qué aprendimos).
- **Regla B:** cada término técnico se define en línea la primera vez que aparece (con analogía) y se añade al glosario; tabla de términos que suelen olvidarse (padding/margin, dp, listener, layout/XML, compilar, adb, regex, lambda, hash, ViewModel…).
- **Regla C:** todo cambio de código documenta problema, por qué esta solución y no otras, código completo mínimo y verificación; los fundamentos de programación/lógica van a `04_CONCEPTOS`.
- **Regla D, contrato visual:** registrar y respetar la maqueta aprobada y anotar las desviaciones (lección real: un componente distinto al de la maqueta tapó los iconos de una barra).
- **Regla E:** lista de comprobación antes de dar una entrada por terminada.
- Comandos "revisa la documentación" y "registra la maqueta".
- Plantillas nuevas: contrato visual, `07_COMANDOS_Y_MANUAL`, `10_CLASE_DAW_DAM` (opcional) y lista de comprobación; ejemplos nuevos de error reproducible, error por desviación de maqueta y glosario de términos olvidados.

### Cambiado
- Plantillas de `03_PASO_A_PASO`, `04_CONCEPTOS`, `05_ERRORES_Y_SOLUCIONES` y `00_GLOSARIO` reforzadas con las reglas anteriores.
- `docs/` vuelve a ser **local por defecto** (se añade a `.gitignore` sin preguntar; solo se versiona si el usuario lo pide).
- Se recupera `10_CLASE_DAW_DAM.md` como archivo opcional (numeración actual: 07 comandos, 08 decisiones, 09 changelog). Los proyectos con la numeración antigua siguen siendo válidos.

### Conservado
- Estructura `docs/`, `HANDOFF` / `SPEC` / `ROADMAP`, `informes/`, comandos del usuario y principios pedagógicos.

## [1.1.2] — 2026-11-11
- Validación de npm Trusted Publishing.

## [1.1.1] — 2026-11-11
- README en inglés y enlaces de idioma.

## [1.1.0] — 2026-11-11
- `HANDOFF`, `SPEC`, `ROADMAP`, `DECISIONES` y `CHANGELOG` incrementales.
