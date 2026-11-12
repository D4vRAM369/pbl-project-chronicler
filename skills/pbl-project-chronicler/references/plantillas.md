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
11. `10_CLASE_DAW_DAM.md` — (Opcional) El proyecto explicado como una clase, con ejercicios.
12. `informes/` — Informes incrementales por task.

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
> Regla: cada término se define en línea la primera vez que aparece en un documento y se añade aquí en ese mismo momento.
> Términos que no deben faltar: padding / margin, dp, listener, layout, XML, compilar, build, adb, regex, lambda, hash, ViewModel, API, JSON, terminal, PATH.

---

## [Término A]

**En una frase:** [definición sin jerga]  
**Más técnico:** [definición precisa]  
**Analogía:** [comparación con algo cotidiano]  
**En este proyecto:** [cómo y dónde aparece]  
**Aparece por primera vez en:** [archivo y sección]

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

---

## Contrato visual (solo si hay interfaz y una maqueta aprobada)

> La maqueta aprobada manda. Si lo implementado se aparta de ella, se registra aquí y en `08_DECISIONES.md`.

**Referencia aprobada:** [ruta del archivo o enlace: `docs/maquetas/pantalla-principal.png`]  
**Aprobada por / fecha:** [quién] · [fecha]

**Qué muestra (descripción textual, por si la imagen se pierde):**
- [Componente 1: tipo exacto, posición, texto/icono]
- [Componente 2: ...]
- [Qué debe quedar SIEMPRE visible: p. ej. los iconos de la barra superior]

**Componente implementado por cada elemento de la maqueta:**

| Elemento de la maqueta | Componente usado | ¿Igual a la maqueta? |
|---|---|---|
| [barra superior con 3 iconos] | [`TopBar`] | Sí |

**Desviaciones registradas:**

| Fecha | Qué difiere | Por qué | Aprobado por | Decisión |
|---|---|---|---|---|
| | | | | D-00X |
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

**Qué problema resuelve:** [El dolor concreto, en 1-2 frases]  
**Por qué esta solución y no otra:** [Razón + al menos una alternativa descartada y su motivo]  
**Resultado esperado:** [Qué debería pasar al terminar]

**Términos nuevos en este paso:** [término (definición breve con analogía)] → añadidos al glosario.

**Instrucciones:**

1. [Acción 1 con archivo exacto: «Abre `app/src/main/res/layout/pantalla.xml`»]
2. [Acción 2 con comando exacto: «En la terminal, dentro de la carpeta del proyecto, ejecuta:»]

```bash
[comando copiable]
```

3. [Acción 3: «Escribe este código completo en `ruta/archivo.ext`»]

```[lenguaje]
// Archivo: ruta/exacta/archivo.ext
// Código completo mínimo (sin «...»), un comentario por línea relevante
[código]
```

> 💡 **Insight:** [Algo que vale la pena entender sobre este paso. Un "aha moment".]

> ⚠️ **Trampa común:** [Error que se puede cometer aquí y por qué ocurre → enlace a su entrada en 05]

**¿Cómo verifico que funcionó?**  
[Acción concreta + resultado esperado: «Ejecuta X; debe aparecer Y». Qué verías si NO funcionó.]

**Fundamentos detrás de este paso:** ver `04_CONCEPTOS.md` → [sección]

**Contrato visual:** [«Conforme a la maqueta» o «Desviación: ver D-00X»] (solo si hay UI)

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

[Explicación del concepto desde cero. Sin asumir nada. Cada término técnico, definido en línea la primera vez.]

### Fundamento de programación / lógica

[La idea general que hay debajo y sirve en cualquier lenguaje: p. ej. «una condición es una pregunta de sí/no; el programa elige un camino según la respuesta»; «una variable es una caja con nombre»; «un evento es un aviso que el sistema envía cuando algo ocurre».]

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
**Gravedad:** [Bloquea / Molesta / Cosmético]

### 1. Contexto

[Qué se intentaba hacer, en qué archivo o pantalla, con qué herramientas y versiones. Lo justo para que otra persona recree la situación.]

### 2. Qué falló (lo que se VE)

```
[mensaje de error completo, sin editar]
```

[Si no hay mensaje: describe lo que aparece en pantalla («la barra superior no muestra los iconos»). Solo el síntoma, sin interpretarlo aún.]

### 3. Por qué se originó

[Causa raíz explicada sin jerga y encadenada: «Pasó A; por eso ocurrió B; por eso se vio el síntoma C». Cada término técnico, definido en línea con una analogía breve la primera vez.]

### 4. Cómo se solucionó

1. [Paso 1. Ej.: «Abre el archivo `ruta/exacta/archivo.ext`.»]
2. [Paso 2. Ej.: «Busca la línea `...` y sustitúyela por esta:»]

```[lenguaje]
// ANTES (incorrecto)
[código incorrecto]

// DESPUÉS (correcto) — comentario por cada línea relevante
[código correcto completo mínimo]
```

3. [Paso 3. Ej.: «En la terminal, desde la carpeta del proyecto, ejecuta:»]

```bash
[comando exacto]
```

### 5. Cómo comprobar que funcionó

[Acción concreta + resultado esperado: «Ejecuta X; debe aparecer Y». Opcional: qué verías si sigue fallando.]

### 6. Qué aprendimos

[La lección generalizable en 1-3 frases y cómo evitarlo la próxima vez. Si alguien lee solo esto, ¿qué debería llevarse?]

**Términos nuevos añadidos al glosario:** [lista]

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
**Desviación de la maqueta:** [solo si aplica: qué difiere del contrato visual, por qué y quién lo aprobó]
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

---

## Plantilla: 07_COMANDOS_Y_MANUAL.md

```markdown
# Comandos y Manual de Uso — [Nombre del Proyecto]

> Cada comando usado en el proyecto, explicado. Copia, pega, entiende.

## Cómo abrir una terminal
[Instrucción por sistema operativo. Una terminal es una ventana donde escribes órdenes al ordenador en vez de hacer clic.]

## Comandos del proyecto

| Comando | Qué hace | Cuándo usarlo | Resultado esperado |
|---|---|---|---|
| `[comando]` | [explicación; cada flag explicado] | [situación] | [salida] |

## Cómo probar / instalar / depurar
1. [Paso exacto]
2. [Paso exacto]
```

---

## Plantilla: 10_CLASE_DAW_DAM.md (opcional)

```markdown
# Clase — [Nombre del Proyecto]

> El proyecto convertido en una clase de ciclo formativo (DAM/DAW) para alguien que parte de cero.

## Objetivos de aprendizaje
- [Al terminar sabrás…]

## Requisitos previos
- [Solo lo imprescindible, con enlace al glosario]

## Lección N: [Título]
**Concepto:** [enlace a `04_CONCEPTOS.md`]  
**Ejercicio guiado:** [pasos numerados reproducibles]  
**Ejercicio propio:** [variación para practicar]  
**Cómo saber que lo hiciste bien:** [resultado esperado]
```

---

## Lista de comprobación antes de dar una entrada por terminada

Copiar al final de cada sesión y repasar las entradas nuevas:

```markdown
- [ ] ¿Puede alguien sin contexto reproducirla de principio a fin?
- [ ] ¿Hay términos sin definir (en línea y en el glosario)?
- [ ] ¿Están las rutas exactas de archivos y los comandos exactos?
- [ ] ¿El código es completo (sin «...») y comentado donde importa?
- [ ] ¿Se explica el porqué y al menos una alternativa descartada?
- [ ] ¿Hay resultado esperado comprobable?
- [ ] (UI) ¿Contrastado con el contrato visual y desviaciones registradas?
- [ ] ¿Fundamentos en 04_CONCEPTOS.md y cambio en 09_CHANGELOG.md?
```
