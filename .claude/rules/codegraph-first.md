# Regla: CodeGraph First — Análisis y Contexto del Código

## Propósito

Esta regla establece el uso de **CodeGraph como fuente primaria de contexto para el análisis del código del proyecto**.

Claude DEBE utilizar CodeGraph **siempre que sea posible y técnicamente aplicable** antes de analizar, modificar, refactorizar, depurar o extender código existente.

El objetivo es reducir:

- análisis incompleto del código;
- suposiciones sobre la arquitectura;
- búsqueda manual innecesaria;
- modificaciones que rompan dependencias;
- duplicación de funcionalidad;
- errores causados por no comprender las relaciones entre archivos;
- cambios incompatibles con implementaciones existentes.

---

## 1. Regla principal

Antes de modificar código existente, Claude DEBE intentar obtener contexto mediante CodeGraph cuando CodeGraph esté disponible y pueda proporcionar información relevante.

La prioridad para comprender el código debe ser:

```text
CodeGraph
    ↓
Archivos fuente relevantes
    ↓
Documentación del proyecto
    ↓
Búsqueda textual / herramientas adicionales
```

CodeGraph debe utilizarse especialmente para comprender:

- relaciones entre clases;
- referencias;
- dependencias;
- llamadas entre métodos;
- imports;
- implementaciones;
- interfaces;
- herencia;
- componentes relacionados;
- flujo de ejecución;
- impacto de cambios;
- arquitectura existente.

---

## 2. Cuándo utilizar CodeGraph

Claude DEBE intentar utilizar CodeGraph antes de realizar tareas como:

### Modificación

- modificar una clase existente;
- modificar una función;
- modificar un servicio;
- modificar un componente;
- modificar una API;
- cambiar una interfaz;
- modificar modelos;
- cambiar lógica de negocio.

### Refactorización

- renombrar clases o métodos;
- mover código;
- dividir clases;
- extraer métodos;
- cambiar interfaces;
- eliminar código;
- modificar dependencias.

### Debugging

- investigar errores;
- localizar el origen de un bug;
- analizar stack traces;
- investigar comportamiento inesperado;
- determinar qué componentes están relacionados.

### Nuevas funcionalidades

Antes de implementar una funcionalidad nueva, utilizar CodeGraph para determinar si ya existen:

- componentes reutilizables;
- servicios existentes;
- utilidades;
- modelos;
- interfaces;
- patrones establecidos;
- implementaciones similares.

### Análisis de impacto

Cuando un cambio pueda afectar múltiples partes del sistema, utilizar CodeGraph para identificar el alcance potencial del cambio.

---

## 3. No asumir que un archivo está aislado

Claude NO debe asumir que un archivo puede modificarse de forma independiente.

Antes de realizar cambios estructurales, investigar mediante CodeGraph:

```text
Archivo objetivo
      ↓
Quién lo utiliza
      ↓
Qué utiliza
      ↓
Qué implementa
      ↓
Qué lo extiende
      ↓
Qué depende de él
      ↓
Impacto potencial
```

Cuando sea relevante, determinar también:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

y cualquier otra cadena de dependencias existente.

---

## 4. CodeGraph como herramienta de descubrimiento

Antes de crear una nueva implementación, Claude debe utilizar CodeGraph para determinar si existe una solución reutilizable.

Por ejemplo:

```text
"Necesito validar X"
        ↓
Buscar implementaciones existentes
        ↓
Buscar servicios relacionados
        ↓
Buscar utilidades existentes
        ↓
Buscar interfaces/patrones
        ↓
Reutilizar si es apropiado
```

No crear una nueva clase, función, servicio o componente si CodeGraph permite descubrir que ya existe una implementación adecuada.

---

## 5. Análisis de impacto obligatorio

Para cambios que puedan tener impacto transversal, Claude DEBE realizar un análisis de impacto mediante CodeGraph antes de modificar el código.

Ejemplos:

- cambiar una interfaz;
- cambiar una clase base;
- cambiar un DTO;
- cambiar una API pública;
- cambiar un método utilizado ampliamente;
- modificar una dependencia;
- cambiar un modelo compartido;
- eliminar una clase;
- cambiar contratos entre capas.

El análisis debe identificar, cuando sea posible:

```text
Dependencias directas
Dependencias indirectas
Implementaciones
Consumidores
Referencias
Tests afectados
Componentes relacionados
```

---

## 6. CodeGraph antes de buscar manualmente

Cuando la intención sea comprender relaciones dentro del código, Claude debe preferir CodeGraph sobre búsquedas textuales manuales.

Preferir:

```text
CodeGraph → relaciones → archivos relevantes
```

sobre:

```text
grep → revisar cientos de archivos → inferir relaciones
```

Las búsquedas textuales siguen siendo válidas para localizar:

- strings;
- configuración;
- documentación;
- valores concretos;
- contenido que CodeGraph no indexa.

---

## 7. CodeGraph y documentación

CodeGraph no reemplaza la documentación del proyecto.

Claude debe combinar:

```text
CodeGraph
+
CLAUDE.md
+
AGENTS.md
+
docs/
+
código fuente
```

Cuando exista una regla explícita en la documentación del proyecto, debe respetarse aunque CodeGraph sugiera una estructura diferente.

La documentación y las reglas del proyecto tienen prioridad sobre inferencias realizadas a partir del grafo.

---

## 8. CodeGraph y cambios de arquitectura

Antes de realizar cambios arquitectónicos, Claude debe utilizar CodeGraph para comprender la arquitectura actual.

Debe investigar, cuando sea aplicable:

- capas;
- dependencias;
- puntos de entrada;
- contratos;
- componentes centrales;
- consumidores;
- integraciones;
- tests;
- dependencias externas.

No proponer una arquitectura nueva simplemente porque parezca conveniente sin analizar primero la arquitectura existente.

---

## 9. CodeGraph antes de eliminar código

Antes de eliminar:

```text
clases
métodos
interfaces
componentes
servicios
utilidades
archivos
```

Claude DEBE utilizar CodeGraph para comprobar referencias y consumidores cuando sea posible.

La ausencia de referencias encontradas por CodeGraph debe considerarse evidencia útil, pero no una garantía absoluta de que el código sea innecesario.

También deben considerarse:

- reflexión;
- configuración;
- carga dinámica;
- frameworks;
- generación de código;
- referencias desde templates;
- referencias desde HTML;
- referencias desde JavaScript;
- configuración externa.

---

## 10. CodeGraph durante debugging

Cuando se investigue un bug, Claude debe utilizar CodeGraph para reconstruir el flujo relevante antes de proponer cambios.

Ejemplo:

```text
Error
 ↓
Punto donde ocurre
 ↓
Método que lo ejecuta
 ↓
Consumidores
 ↓
Dependencias
 ↓
Origen del dato
 ↓
Causa probable
```

No corregir únicamente el síntoma si CodeGraph permite identificar una causa raíz más adecuada.

---

## 11. CodeGraph y tests

Antes de modificar código cubierto por tests:

1. Utilizar CodeGraph para localizar los tests relacionados.
2. Identificar consumidores.
3. Revisar implementaciones relacionadas.
4. Modificar el código.
5. Ejecutar los tests afectados.
6. Ejecutar las validaciones generales correspondientes.

Cuando se agregue una funcionalidad, utilizar CodeGraph para buscar patrones de testing existentes y mantener consistencia con ellos.

---

## 12. CodeGraph no debe bloquear el trabajo

CodeGraph es la herramienta preferida, pero **no debe convertirse en un punto único de fallo**.

Si:

- CodeGraph no está instalado;
- CodeGraph no está disponible;
- el MCP está desconectado;
- el índice está incompleto;
- la consulta no devuelve información útil;
- la tarea no requiere análisis de relaciones;

Claude debe continuar utilizando las herramientas disponibles.

Fallback:

```text
CodeGraph
    ↓
Búsqueda en archivos
    ↓
Inspección directa del código
    ↓
Documentación
    ↓
Herramientas del proyecto
```

Claude NO debe detener una tarea únicamente porque CodeGraph no esté disponible.

---

## 13. No inventar resultados de CodeGraph

Claude NO debe afirmar que consultó CodeGraph si realmente no lo hizo.

Nunca inventar:

- relaciones;
- referencias;
- dependencias;
- resultados de consultas;
- archivos encontrados;
- impacto de cambios.

Si CodeGraph no pudo utilizarse, indicarlo internamente en el razonamiento y continuar con métodos alternativos.

---

## 14. Cambios basados en evidencia

Cuando CodeGraph muestre relaciones relevantes, Claude debe utilizar esa información para determinar el alcance del cambio.

El principio es:

```text
No asumir.
Investigar.
Comprender.
Modificar.
Validar.
```

No realizar cambios basados únicamente en el nombre de un archivo, clase o método cuando las relaciones puedan consultarse mediante CodeGraph.

---

## 15. Flujo estándar

Para tareas sobre código existente, seguir preferentemente:

```text
1. Leer las reglas del proyecto
        ↓
2. Consultar CodeGraph
        ↓
3. Identificar el código relevante
        ↓
4. Analizar dependencias e impacto
        ↓
5. Revisar archivos fuente necesarios
        ↓
6. Diseñar el cambio mínimo necesario
        ↓
7. Implementar
        ↓
8. Ejecutar tests / validaciones
        ↓
9. Revisar nuevamente las relaciones afectadas
        ↓
10. Confirmar que no existen regresiones
```

---

## 16. Principio de mínima modificación

CodeGraph debe utilizarse para ayudar a determinar el **cambio mínimo necesario**.

Preferir:

```text
Modificar únicamente lo necesario
```

sobre:

```text
Refactorizar todo el módulo
```

cuando la refactorización completa no sea necesaria para cumplir la tarea.

No realizar cambios cosméticos o arquitectónicos no solicitados únicamente porque CodeGraph revele oportunidades de mejora.

---

## 17. Prioridad permanente

Esta regla es de aplicación **general y continua**.

Para cualquier tarea futura relacionada con el código del proyecto:

> **Utiliza CodeGraph siempre que sea posible para obtener contexto, descubrir relaciones, analizar dependencias y determinar el impacto de los cambios antes de modificar código existente.**

Claude debe tratar CodeGraph como una herramienta fundamental del entorno de desarrollo y no como una herramienta opcional utilizada únicamente cuando el usuario la solicita explícitamente.

---

## 18. Regla resumida

Ante cualquier cambio en código existente:

```text
¿CodeGraph está disponible?
        │
       Sí
        ↓
¿Puede aportar contexto?
        │
       Sí
        ↓
UTILIZAR CODEGRAPH
        ↓
Analizar relaciones
        ↓
Determinar impacto
        ↓
Modificar código
        ↓
Validar
```

Si la respuesta es no:

```text
Continuar con las herramientas disponibles
sin bloquear la tarea.
```

### Regla de oro

**CodeGraph primero para comprender el código; herramientas alternativas después cuando sea necesario.**
