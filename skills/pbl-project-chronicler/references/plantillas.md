# Plantillas Completas — PBL Project Chronicler

Copia estas plantillas al crear los archivos de documentación. Son la base mínima de cada archivo.

---

## Plantilla: README.md

```markdown
# [Nombre del Proyecto]

> [Tagline: qué hace en una frase, lenguaje de persona normal]

**Stack:** [tecnologías principales]  
**Duración del proyecto:** [tiempo aproximado]  
**Nivel de dificultad:** [Principiante / Intermedio / Avanzado]  
**Documentado por:** [autor/a] con metodología PBL

---

## ¿Qué es esto?

[2-3 párrafos. Qué hace la app, quién la usaría, qué problema resuelve en el mundo real. Sin tecnicismos aquí.]

## ¿Por qué existe?

[La motivación. Por qué la persona autora lo construyó. Esto hace la documentación más humana y conecta con el lector.]

## ¿Qué vas a aprender si sigues esta documentación?

Si lees los archivos en orden, al final vas a entender:

- [ ] Cómo configurar el entorno de desarrollo para este stack
- [ ] [Concepto técnico 1]
- [ ] [Concepto técnico 2]
- [ ] [Concepto técnico N]
- [ ] Cómo solucionar los errores más comunes de este tipo de proyecto

## Stack tecnológico

| Tecnología | Versión | Para qué se usa en este proyecto |
|---|---|---|
| [nombre] | [X.X.X] | [uso específico, no genérico] |

## Estructura de archivos del proyecto

```
[nombre-proyecto]/
├── [archivo o carpeta]    # ← qué es esto
├── [archivo o carpeta]    # ← qué es esto
└── ...
```

## Cómo seguir esta documentación

Lee los archivos en este orden:

1. `00_GLOSARIO.md` — Antes de todo. Si no entiendes un término, vuelve aquí.
2. `01_SETUP.md` — Configura tu entorno antes de escribir código.
3. `02_ARQUITECTURA.md` — Entiende el diseño antes de construir.
4. `03_PASO_A_PASO.md` — El proceso de construcción completo.
5. `04_CONCEPTOS.md` — Profundiza en los conceptos clave.
6. `05_ERRORES_Y_SOLUCIONES.md` — Cuando algo no funcione, mira aquí.
7. `06_SIGUIENTE_NIVEL.md` — Qué podrías mejorar o añadir.
8. `07_COMANDOS_Y_MANUAL.md` — Comandos y manual de uso.
9. `08_DECISIONES.md` — Qué se eligió, qué se descartó y por qué.
10. `09_CHANGELOG.md` — Diario de progreso.
11. `informes/` — Informes incrementales por task.

Documentos de trabajo vivos (sin número, fuera del orden de lectura): `SPEC.md` (qué debe hacer), `ROADMAP.md` (en qué orden), `HANDOFF.md` (por dónde retomar).

---

*Documentación generada con metodología PBL — Project-Based Learning.*  
*"Aprendo mientras creo, creo mientras aprendo."*
```

---

## Plantilla: informe por task (`informes/YYYY-MM-DD-slug.md`)

```markdown
# [Titulo de la task]

> Informe de task: explicación paso a paso para alguien que sabe programar algo, por ejemplo Python, pero no domina el stack del proyecto de memoria.

## 1. Resumen para situarse

- Qué se ha construido:
- Dónde está en el código:
- Por qué era necesario:
- Estado final:

## 2. Qué problema resolvía esta tarea

[Explicación del problema antes del cambio.]

## 3. Archivos principales

- `[ruta]`: [papel del archivo]

## 4. Paso a paso de implementación

1. [Primer paso real]
2. [Segundo paso real]
3. [Tercer paso real]

## 5. Conceptos que hay que entender

[Conceptos técnicos explicados sin asumir que el lector ya domina el stack.]

## 6. Comparación mental con Python

[Analogía o pseudocódigo Python para crear intuición.]

## 7. Decisiones técnicas tomadas

- Decisión:
- Por qué:
- Alternativa rechazada:

## 8. Pruebas y verificación

```bash
[comandos reales ejecutados]
```

Resultado: [qué demuestra la verificación]

## 9. Errores, riesgos o límites

[Qué no quedó cubierto o qué hay que vigilar.]

## 10. Qué queda después de esto

[Siguiente tarea natural y motivo.]
```

---

## Plantilla: 00_GLOSARIO.md

```markdown
# Glosario del Proyecto — [Nombre del Proyecto]

> Si encuentras una palabra que no entiendes en cualquier parte de esta documentación, búscala aquí.
> Están ordenadas alfabéticamente y explicadas para alguien que empieza desde cero.

---

## [Término A]

**En una frase:** [definición sin jerga]  
**Más técnico:** [definición precisa]  
**Analogía:** [comparación con algo cotidiano]  
**En este proyecto:** [cómo y dónde aparece]

```[lenguaje si aplica]
// Ejemplo mínimo
[código]
```

---

## [Término B]

...

---

*Este glosario se actualiza durante el proceso de construcción del proyecto.*
```

---

## Plantilla: 01_SETUP.md

```markdown
# Setup — Configuración del Entorno

> Antes de escribir una sola línea de código, hay que preparar el entorno.
> Este archivo te lleva del cero al "listo para empezar".

**Sistema operativo usado:** [OS]  
**Fecha de setup:** [fecha]

---

## Requisitos previos

Antes de empezar, necesitas tener instalado:

| Herramienta | Versión mínima | Cómo verificar que la tienes |
|---|---|---|
| [herramienta] | [X.X] | `[comando --version]` |

Si no la tienes, sigue las instrucciones en [enlace oficial].

---

## Paso 1: [Nombre del paso]

**Qué hacemos:** [descripción corta]

```bash
# [Comentario explicando qué hace este comando]
[comando]
```

**Resultado esperado:**
```
[output que debería aparecer]
```

> ⚠️ **Si ves esto en vez de lo anterior:** [error común y qué hacer]

---

## Paso N: Verificar que todo funciona

```bash
[comando de verificación]
```

Si ves esto, el setup está completo:
```
[output esperado]
```

---

## Problemas comunes durante el setup

Ver `05_ERRORES_Y_SOLUCIONES.md` para errores específicos encontrados durante el proceso.
```

---

## Plantilla: 02_ARQUITECTURA.md

```markdown
# Arquitectura — Decisiones de Diseño

> Aquí explicamos cómo está organizado el proyecto y **por qué** se organizó así.
> Las decisiones de arquitectura son las más difíciles de entender después, así que las documentamos con detalle.

---

## Visión general

[Descripción en prosa de cómo funciona el sistema. Flujo de datos, componentes principales, cómo se relacionan.]

## Diagrama (si aplica)

```
[Usuario] → [Componente A] → [Base de datos]
                ↓
           [Componente B]
```

---

## Decisión: [Nombre de la decisión]

**Contexto:** [Qué problema había que resolver]

**Opciones consideradas:**

| Opción | Pros | Contras |
|---|---|---|
| [Opción A] | [ventajas] | [desventajas] |
| [Opción B] | [ventajas] | [desventajas] |

**Decisión tomada:** [Opción X]  
**Por qué:** [Razonamiento. No solo "porque es mejor" sino por qué es mejor en este contexto específico]

---

## Estructura de carpetas

```
[árbol detallado con comentarios]
```

**Convenciones de nombrado:**
- [Regla 1]
- [Regla 2]
```

---

## Plantilla: 03_PASO_A_PASO.md

```markdown
# Paso a Paso — Construcción del Proyecto

> Este es el archivo principal. Aquí está el proceso completo de construcción,
> en el orden en que ocurrió, con explicaciones de cada decisión.
>
> Si quieres replicar este proyecto desde cero, sigue este archivo en orden.

---

## Sesión 1 — [Fecha]

### Paso 1: [Nombre descriptivo]

**Qué vamos a hacer:** [Una frase clara]  
**Por qué lo hacemos:** [La motivación o razón técnica]  
**Resultado esperado:** [Qué debería pasar al terminar]

**Instrucciones:**

[Explicación en prosa antes del código]

```[lenguaje]
// [Comentario explicando el bloque, no la línea obvia]
[código]

// [Siguiente sección lógica]
[código]
```

> 💡 **Insight:** [Algo que vale la pena entender sobre este paso. Un "aha moment".]

> ⚠️ **Trampa común:** [Error que se puede cometer aquí y por qué ocurre]

**¿Cómo verifico que funcionó?**  
[Instrucción concreta: "Deberías ver X", "Si ejecutas Y debería aparecer Z"]

---

### Paso 2: [Nombre]

...

---

## Sesión 2 — [Fecha]

...
```

---

## Plantilla: 04_CONCEPTOS.md

```markdown
# Conceptos — Aprendizajes del Proyecto

> Durante la construcción de este proyecto, aprendimos estos conceptos.
> Aquí están explicados con más profundidad que en el glosario.

---

## [Concepto 1]

**¿Por qué aprendimos esto?** [Contexto: en qué momento del proyecto apareció]

### La idea central

[Explicación del concepto desde cero. Sin asumir nada.]

### ¿Por qué existe este concepto?

[Historia o motivación. Qué problema resolvía antes de que existiera este concepto.]

### Cómo funciona

[Mecanismo interno, simplificado pero correcto]

### Ejemplo mínimo

```[lenguaje]
[código más simple posible que demuestre el concepto]
```

### En nuestro proyecto

```[lenguaje]
[cómo lo usamos específicamente en este proyecto]
```

### Cuándo usarlo / cuándo NO usarlo

✅ Úsalo cuando:
- [caso 1]
- [caso 2]

❌ No lo uses cuando:
- [caso 1]
- [caso 2]

---
```

---

## Plantilla: 05_ERRORES_Y_SOLUCIONES.md

```markdown
# Errores y Soluciones

> Esta sección es oro. Cada error que encontramos durante el desarrollo está aquí,
> con la causa raíz y cómo lo resolvimos.
>
> Si algo no te funciona, busca el error aquí primero.

---

## Error #[N]: [Título descriptivo]

**Fecha:** [cuándo ocurrió]  
**Contexto:** [qué se estaba intentando hacer en ese momento]

**El error exacto:**

```
[mensaje de error completo, sin editar]
```

**Por qué ocurre:**

[Explicación de la causa raíz. No solo "porque X falló" sino el mecanismo que lo produce. Esto es lo que convierte un error en aprendizaje.]

**Cómo se resolvió:**

[Pasos exactos, en orden]

```[lenguaje si aplica]
// Lo que había antes (incorrecto)
[código incorrecto]

// Lo que pusimos (correcto)
[código correcto]
```

**Qué aprendimos:**

[El insight que queda. Si alguien lee solo esta parte, ¿qué debería llevarse?]

**Cómo evitarlo en el futuro:**

[Práctica o patrón que previene este error]

---
```

---

## Plantilla: 06_SIGUIENTE_NIVEL.md

```markdown
# Siguiente Nivel — Mejoras y Expansiones

> El proyecto funciona. ¿Qué podría ser aún mejor?
> Esta sección documenta ideas de mejora, features pendientes, y caminos de aprendizaje siguientes.

---

## Features no implementadas (y por qué)

| Feature | Por qué no está | Dificultad estimada |
|---|---|---|
| [feature] | [razón real: tiempo, complejidad, scope] | [Baja/Media/Alta] |

---

## Mejoras técnicas posibles

### [Área de mejora]

**Estado actual:** [cómo funciona ahora]  
**Problema:** [qué falla o podría ser mejor]  
**Solución propuesta:** [cómo mejorarla]  
**Recursos para aprenderlo:** [links, conceptos a investigar]

---

## Conceptos para profundizar

Si quieres entender mejor este stack, estudia estos temas en este orden:

1. [Concepto] — [por qué es el siguiente paso lógico]
2. [Concepto] — [por qué es el siguiente paso lógico]

---

## Lo que haríamos diferente

[Reflexión honesta: si repitiéramos este proyecto desde cero sabiendo lo que sabemos ahora, ¿qué cambiaríamos? ¿Qué decisiones fueron erróneas? ¿Cuáles fueron buenas?]

---

*Documentación completada el [fecha].*
```

---

## Plantilla: HANDOFF.md

```markdown
# HANDOFF — [Nombre del Proyecto]

> Nota de relevo. Se SOBRESCRIBE cada sesión: es una foto del presente.
> Historial → `03_PASO_A_PASO.md`.

**Actualizado:** [fecha] · **Sesión:** [N] · **Herramienta/agente:** [Claude Code / Codex / …]

## Estado en una frase
[Ej.: «Login funciona; falta persistir la sesión.»]

## Qué funciona / qué está roto
- ✅ [cosa que funciona]
- ❌ [cosa rota, con síntoma exacto]

## Siguiente paso exacto
[El primer archivo a abrir o comando a ejecutar. Concreto, sin ambigüedad.]

## Contexto que no está en el código
- [Decisión reciente y su motivo]
- [Trampa conocida / idea a medias / cosa que NO hay que tocar]

## Cómo arrancar y probar
[comandos mínimos — detalle en 07_COMANDOS_Y_MANUAL.md]

## Archivos tocados en la última sesión
- `ruta/archivo` — [qué cambió]
```

---

## Plantilla: SPEC.md

```markdown
# SPEC — [Nombre del Proyecto]

> Contrato del proyecto: qué DEBE hacer. Si no está aquí, no es requisito.
> Crece con el proyecto; los IDs son estables (no renumerar).

## Propósito y usuario
[Qué problema resuelve y para quién, en 2-3 frases.]

## Requisitos funcionales
| ID | Requisito | Criterio de aceptación | Estado |
|---|---|---|---|
| RF-01 | [el sistema permite…] | [cómo se comprueba que está hecho] | ⬜ |

## Requisitos no funcionales
| ID | Requisito | Criterio |
|---|---|---|
| RNF-01 | [rendimiento / privacidad / compatibilidad…] | [medible] |

## Fuera de alcance
- [Lo que NO se hará (por ahora) y por qué]

## Preguntas abiertas
- [Duda sin resolver que afecta al diseño]

## Historial de cambios del spec
| Fecha | Cambio | Motivo |
|---|---|---|
```

---

## Plantilla: ROADMAP.md

```markdown
# ROADMAP — [Nombre del Proyecto]

> Orden de construcción. Leyenda: ⬜ pendiente · 🔄 en curso · ✅ hecho

| Fase | Objetivo | Cubre (SPEC) | Estado | Fecha |
|---|---|---|---|---|
| 0 | [Setup y esqueleto] | — | ⬜ | |
| 1 | [Primer resultado visible] | RF-01 | ⬜ | |

## Ahora
[Lo que se está haciendo en esta fase.]

## Después
[Siguientes 1-2 fases, ya definidas.]

## Algún día
[Ideas sin compromiso → al madurar, pasan a fase y a `06_SIGUIENTE_NIVEL.md`.]
```

---

## Plantilla: 08_DECISIONES.md

```markdown
# Decisiones — [Nombre del Proyecto]

> Registro append-only. Una entrada por decisión. Si se revierte, se añade una entrada nueva que la sustituye.

## D-001 · [Título corto] · [fecha]
**Estado:** Vigente | Sustituida por D-00X
**Contexto:** [qué problema o duda había]
**Decisión:** [qué se eligió]
**Alternativas descartadas:** [opción — por qué no]
**Consecuencias:** [qué se gana, qué se paga]
```

---

## Plantilla: 09_CHANGELOG.md

```markdown
# Changelog — [Nombre del Proyecto]

> Diario de progreso (lo más reciente arriba).

## [fecha o versión]
### Añadido
- [...]
### Cambiado
- [...]
### Corregido
- [...]
### Eliminado
- [...]
```
