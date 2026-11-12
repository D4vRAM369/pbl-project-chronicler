# Ejemplos de Documentación Bien Hecha

Estos son fragmentos de documentación real de alta calidad para usar como referencia de estilo y profundidad.

---

## Ejemplo: Paso bien documentado (de un proyecto Node.js + Supabase)

```markdown
### Paso 3: Configurar el cliente de Supabase

**Qué problema resuelve:** Sin una conexión, el código no puede hablar con la base de datos en la nube. Es como tener el número de teléfono de alguien pero sin teléfono desde el que llamar.  
**Por qué así y no de otra forma:** Un único archivo de configuración (en vez de crear la conexión en cada archivo) permite cambiar de base de datos tocando un solo sitio.  
**Resultado esperado:** Un objeto `supabase` que podemos usar en cualquier parte del proyecto.  
**Fundamentos:** variables de entorno y módulos → `04_CONCEPTOS.md`.

**Instrucciones:**

1. En la terminal, dentro de la carpeta del proyecto, instala el paquete oficial (*paquete* = código ajeno ya hecho que reutilizamos; *npm* = el programa que lo descarga):

```bash
npm install @supabase/supabase-js
```

2. Crea el archivo `lib/supabaseClient.js` (crea la carpeta `lib` si no existe) con este contenido completo:

```javascript
// lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

// Estas variables vienen del archivo .env
// NUNCA escribas las claves directamente en el código.
// Si alguien ve tu código en GitHub, verá tus claves. Bad idea.
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

// createClient toma la URL y la clave y devuelve un objeto
// con el que podemos hacer queries, auth, storage, todo.
export const supabase = createClient(supabaseUrl, supabaseKey)
```

> 💡 **Insight:** Exportamos `supabase` como named export (con llaves `{}`), no como default. Esto es una convención: los clientes de servicios externos suelen exportarse así para que el nombre sea explícito cuando se importan.

> ⚠️ **Trampa común:** Olvidar el archivo `.env`. Si ves `Cannot read properties of undefined` al intentar hacer una query, probablemente es porque `SUPABASE_URL` no está definida.

**¿Cómo verifico que funcionó?**

3. Importa el cliente en cualquier archivo y haz una query simple:

```javascript
import { supabase } from './lib/supabaseClient'

const { data, error } = await supabase.from('cualquier_tabla').select('*').limit(1)
console.log(data, error)
```

Si `error` es `null` y `data` es un array (aunque esté vacío), la conexión funciona.
```

---

## Ejemplo: Error bien documentado (reproducible)

````markdown
## Error #4: "Cannot find module 'dotenv'"

**Fecha:** 2025-03-15  
**Gravedad:** Bloquea

### 1. Contexto

Primera vez que se arranca el servidor con `node index.js` (Node.js 20) en la carpeta `proyecto/`. El archivo `proyecto/index.js` contiene, en la primera línea, `require('dotenv').config()`. *Node.js* es el programa que ejecuta JavaScript fuera del navegador; *dotenv* es una librería (código escrito por otras personas que reutilizamos) que lee un archivo `.env` con configuración.

### 2. Qué falló (lo que se VE)

```
node:internal/modules/cjs/loader:1078
  throw err;
  ^

Error: Cannot find module 'dotenv'
Require stack:
- /home/user/proyecto/index.js
```

El servidor no arranca y la terminal vuelve al prompt.

### 3. Por qué se originó

1. `require('dotenv')` le pide a Node.js que cargue esa librería.
2. Node.js solo busca librerías en una carpeta llamada `node_modules` (una "despensa" local de librerías del proyecto).
3. `node_modules` no existía todavía porque nadie había ejecutado `npm install` (*npm* es el gestor de paquetes: el "repartidor" que descarga las librerías listadas en `package.json`).
4. Como no la encuentra, Node.js se detiene con el error de arriba.

`node_modules` nunca se sube a Git (está en `.gitignore`, el archivo que dice qué no se versiona): se regenera en cada máquina. Por eso, al clonar un proyecto, siempre falta.

### 4. Cómo se solucionó

1. Abre una terminal y entra en la carpeta del proyecto:

```bash
cd proyecto
```

2. Comprueba que existe `package.json` (la lista de librerías del proyecto):

```bash
ls package.json
```

3. Instala todas las dependencias listadas (no solo `dotenv`):

```bash
npm install
```

4. Si `dotenv` no figura en `package.json` (por ejemplo, si el proyecto lo empezaste tú), instálala y regístrala:

```bash
npm install dotenv
```

### 5. Cómo comprobar que funcionó

1. Comprueba que la carpeta existe: `ls node_modules/dotenv` debe listar archivos (si dice "No such file", la instalación falló).
2. Ejecuta `node index.js`: ya no debe aparecer `Cannot find module`. Si aparece otro error distinto, es otro problema (documéntalo como entrada nueva).

### 6. Qué aprendimos

`node_modules` es una carpeta generada localmente y nunca se sube a GitHub. La primera acción en cualquier proyecto Node recién clonado es `npm install`. Para evitarlo: el `README.md` de todo proyecto Node debe tener "Paso 1: `npm install`".

**Términos nuevos añadidos al glosario:** Node.js, npm, dependencia, `node_modules`, `package.json`, `.gitignore`.
````

---

## Ejemplo: Error por no respetar la maqueta (contrato visual)

````markdown
## Error #7: La barra superior no muestra sus iconos

**Fecha:** 2025-04-02  
**Gravedad:** Molesta

### 1. Contexto

Pantalla principal de una app Android (Kotlin, Jetpack Compose). Maqueta aprobada: `docs/maquetas/principal.png`, que muestra una barra superior fija con tres iconos (buscar, filtrar, ajustes) y, debajo, una lista. Archivo: `app/src/main/java/com/ejemplo/app/PantallaPrincipal.kt`.

### 2. Qué falló (lo que se VE)

Al abrir la app, la barra superior aparece como una franja de color sin iconos. En la maqueta se veían tres.

### 3. Por qué se originó

1. La maqueta pedía una barra **fija** (`TopAppBar`: un componente que dibuja una barra con título e iconos y reserva su propio espacio).
2. Se implementó en su lugar un `Box` (un contenedor genérico que apila elementos unos sobre otros) con la lista dentro, por parecer "más simple".
3. Un `Box` apila: la lista se dibujó **encima** de la barra, en la misma esquina.
4. Como la lista tenía fondo opaco, tapó los iconos.
5. No se detectó antes porque la pantalla no se comparó con la maqueta y la desviación no se registró.

### 4. Cómo se solucionó

1. Abre `app/src/main/java/com/ejemplo/app/PantallaPrincipal.kt`.
2. Sustituye el `Box` por un `Scaffold` (una plantilla de pantalla con huecos para barra superior y contenido, que reparte el espacio sin solapar):

```kotlin
// ANTES: el Box apilaba lista y barra en el mismo sitio
// Box { Barra(); Lista() }

// DESPUÉS
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PantallaPrincipal() {
    Scaffold(
        // Hueco reservado para la barra: la maqueta la quiere fija
        topBar = {
            TopAppBar(
                title = { Text("Mi app") },
                // Los tres iconos de la maqueta, en el mismo orden
                actions = {
                    IconButton(onClick = { /* buscar */ }) { Icon(Icons.Default.Search, "Buscar") }
                    IconButton(onClick = { /* filtrar */ }) { Icon(Icons.Default.FilterList, "Filtrar") }
                    IconButton(onClick = { /* ajustes */ }) { Icon(Icons.Default.Settings, "Ajustes") }
                }
            )
        }
    ) { padding ->
        // padding = el espacio que Scaffold reserva para la barra; la lista debe respetarlo
        Lista(modifier = Modifier.padding(padding))
    }
}
```

3. Compila y ejecuta desde la terminal, en la raíz del proyecto: `./gradlew installDebug` (*compilar* = traducir el código a una app instalable).
4. Registra la desviación original en `docs/08_DECISIONES.md` (D-004) y marca la pantalla como "conforme a la maqueta" en el contrato visual.

### 5. Cómo comprobar que funcionó

Abre la app y compara con `docs/maquetas/principal.png`: deben verse los tres iconos en la barra y la lista empezando justo debajo. Si la lista sigue tapando la barra, falta `Modifier.padding(padding)`.

### 6. Qué aprendimos

Una maqueta aprobada es un contrato: usar el componente que muestra, no uno "parecido". Antes de dar una pantalla por hecha, compararla con la referencia y registrar cualquier desviación.

**Términos nuevos añadidos al glosario:** Scaffold, TopAppBar, Box, padding, compilar, Gradle.
````

---

## Ejemplo: Entrada de glosario bien hecha

```markdown
## API

**En una frase:** Una forma de que dos programas diferentes se hablen entre sí.

**Más técnico:** Conjunto de reglas y endpoints que definen cómo un servicio expone sus funcionalidades para ser usadas por otros programas.

**Analogía:** Imagina que Supabase es una cocina de restaurante. Tú (la app) eres el cliente. La API es el menú y el mesero combinados: te dice qué puedes pedir y cómo pedirlo, y te trae el resultado sin que tengas que entrar a la cocina.

**En este proyecto:** Usamos la API de Supabase para hacer operaciones de base de datos (crear, leer, actualizar, borrar datos) y para la autenticación de usuarios.

```javascript
// Esto es una llamada a la API de Supabase
const { data } = await supabase
  .from('usuarios')   // ← de qué tabla
  .select('nombre')   // ← qué columnas
  .eq('id', userId)  // ← con qué filtro
```
```

---

## Ejemplos: términos que suelen olvidarse (padding, listener, regex)

```markdown
## padding y margin

**En una frase:** `padding` es el espacio *dentro* de una caja, entre su borde y su contenido; `margin` es el espacio *fuera*, entre esa caja y las demás.

**Analogía:** una foto enmarcada: el `padding` es el cartón blanco entre la foto y el marco; el `margin` es la separación entre ese marco y el siguiente en la pared.

**En este proyecto:** `Modifier.padding(16.dp)` separa el texto del borde de la tarjeta.

## dp

**En una frase:** unidad de medida de pantalla que se ve del mismo tamaño físico en cualquier móvil.
**Analogía:** centímetros reales, frente a `px` (píxeles), que son más pequeños en una pantalla de alta densidad.

## listener

**En una frase:** código que se queda "escuchando" hasta que ocurre un evento (un toque, una tecla) y entonces se ejecuta.
**Analogía:** un timbre: no haces nada hasta que alguien pulsa; entonces suena.

```kotlin
// Cuando se pulse el botón, ejecuta lo de entre llaves
boton.setOnClickListener { println("Pulsado") }
```

## regex (expresión regular)

**En una frase:** un patrón para buscar o validar texto.
**Analogía:** un molde de galletas: solo pasa el texto con esa forma.

```python
import re
# \d{4} = exactamente cuatro dígitos seguidos
re.fullmatch(r"\d{4}", "2025")  # coincide
```
```

---

## Ejemplo: Sección de arquitectura bien explicada

```markdown
## Decisión: ¿Dónde vivir la lógica de negocio?

**Contexto:** Teníamos que decidir si la lógica (validaciones, cálculos, reglas) iba en el cliente (React) o en el servidor (funciones de Supabase/Edge Functions).

**Opciones consideradas:**

| Opción | Pros | Contras |
|---|---|---|
| Todo en el cliente | Simple, rápido de desarrollar | Si el usuario inspecciona el código, ve las reglas. No se puede confiar en validaciones client-side. |
| Todo en el servidor | Seguro, las reglas están protegidas | Más lento de desarrollar, más infraestructura |
| Híbrido | Validación básica en cliente (UX), validación real en servidor (seguridad) | Dos sitios donde mantener lógica |

**Decisión tomada:** Híbrido.  
**Por qué:** Las validaciones del cliente son para UX (dar feedback inmediato al usuario sin esperar al servidor). Las del servidor son las que realmente importan. Un usuario malicioso puede saltarse el JavaScript del cliente, pero no puede saltarse una Row Level Security policy en Supabase.

Esta es la misma decisión que toma cualquier app seria: el cliente valida para UX, el servidor valida para seguridad.
```

---

## Ejemplo: README.md final de calidad

```markdown
# AntiTinder — Terminal Orgánico

> Una app de citas que muestra quién eres antes de cómo eres.

**Stack:** Next.js 15 · TypeScript · Supabase · Tailwind CSS  
**Duración:** En desarrollo  
**Nivel:** Intermedio-Avanzado  

---

## ¿Qué es esto?

AntiTinder es una aplicación web de citas construida sobre una premisa simple: antes de ver la foto de alguien, ya sabes cosas importantes sobre él o ella.

La mayoría de apps de citas te muestran una foto y decides en 0.5 segundos. AntiTinder invierte el orden: primero ves señales (valores, formas de pensar, qué busca la persona), y la foto aparece después cuando ya hay algo de conexión real.

## ¿Qué vas a aprender si sigues esta documentación?

- [ ] Cómo estructurar un proyecto Next.js 15 con App Router desde cero
- [ ] Cómo funciona la autenticación con Supabase Auth
- [ ] Qué son las Row Level Security policies y por qué son críticas
- [ ] Cómo diseñar una base de datos relacional para una app social
- [ ] Cómo manejar estado complejo en React con TypeScript

## Stack tecnológico

| Tecnología | Versión | Para qué |
|---|---|---|
| Next.js | 15.x | Framework web, routing, SSR |
| TypeScript | 5.x | Tipado estático, menos bugs |
| Supabase | latest | Base de datos, auth, realtime |
| Tailwind CSS | 4.x | Estilos utility-first |

---

*"Crear mientras aprendo, aprender mientras creo."*
```
