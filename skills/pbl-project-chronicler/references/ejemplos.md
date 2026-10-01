# Ejemplos de Documentación Bien Hecha

Estos son fragmentos de documentación real de alta calidad para usar como referencia de estilo y profundidad.

---

## Ejemplo: Paso bien documentado (de un proyecto Node.js + Supabase)

```markdown
### Paso 3: Configurar el cliente de Supabase

**Qué vamos a hacer:** Crear la conexión entre nuestra app y la base de datos en la nube.  
**Por qué lo hacemos:** Sin esto, el código no puede hablar con Supabase. Es como tener el número de teléfono pero sin marfil.  
**Resultado esperado:** Un objeto `supabase` que podemos usar en cualquier parte del proyecto.

**Instrucciones:**

Primero instalamos el paquete oficial de Supabase para JavaScript:

```bash
npm install @supabase/supabase-js
```

Luego creamos un archivo de configuración. Usamos un archivo separado (no meter esto en `index.js`) porque si en el futuro queremos cambiar de base de datos, tocamos solo un archivo.

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

Importa el cliente en cualquier archivo y haz una query simple:

```javascript
import { supabase } from './lib/supabaseClient'

const { data, error } = await supabase.from('cualquier_tabla').select('*').limit(1)
console.log(data, error)
```

Si `error` es `null` y `data` es un array (aunque esté vacío), la conexión funciona.
```

---

## Ejemplo: Error bien documentado

```markdown
## Error #4: "Cannot find module 'dotenv'"

**Fecha:** 2025-03-15  
**Contexto:** Intentando arrancar el servidor por primera vez con `node index.js`

**El error exacto:**

```
node:internal/modules/cjs/loader:1078
  throw err;
  ^

Error: Cannot find module 'dotenv'
Require stack:
- /home/user/proyecto/index.js
```

**Por qué ocurre:**

Node.js busca los módulos en la carpeta `node_modules`. Si `dotenv` no está ahí, es porque no se instaló. Esto pasa cuando:
1. El `package.json` menciona `dotenv` como dependencia pero nunca se ejecutó `npm install`
2. O se clonó el repo de alguien y `node_modules` no se sube a Git (por diseño, es ignorada en `.gitignore`)

**Cómo se resolvió:**

```bash
npm install dotenv
```

Si tienes un `package.json` con dependencias y clonaste el repo de alguien:

```bash
npm install
```

Esto instala TODO lo que está en `package.json`, no solo `dotenv`.

**Qué aprendimos:**

`node_modules` es una carpeta generada localmente. Nunca se sube a GitHub. Siempre que clones un proyecto Node.js, lo primero que haces es `npm install`. Esto es una convención universal.

**Cómo evitarlo:**

El `README.md` de todo proyecto Node debería tener "Paso 1: `npm install`" como primer comando. Si estás creando un proyecto, ponlo tú.
```

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
