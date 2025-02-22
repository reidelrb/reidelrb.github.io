A continuación, se presenta una documentación detallada para el código proporcionado. Esta documentación está diseñada para ayudar a los desarrolladores a comprender y utilizar el módulo `asyload` de manera efectiva.

---

# Documentación de `asyload.js`

## Descripción General

`asyload.js` es un módulo JavaScript que proporciona varias utilidades para el desarrollo de aplicaciones web, incluyendo la carga dinámica de módulos desde un CDN, la manipulación del DOM, la intercepción de solicitudes de red, y la gestión de una base de datos local utilizando IndexedDB. También incluye una consola dinámica para facilitar la depuración durante el desarrollo.

## Instalación

Para utilizar `asyload.js`, simplemente incluye el archivo en tu proyecto:

```html
<script src="asyload.js"></script>
```

## Uso Básico

### Carga de Módulos

Para cargar módulos desde un CDN, utiliza la función `asyload`:

```javascript
asyload('nombre-del-paquete@versión')
  .then(() => {
    console.log('Módulo cargado correctamente');
  })
  .catch((error) => {
    console.error('Error al cargar el módulo:', error);
  });
```

### Intercepción de Solicitudes de Red

`asyload` intercepta automáticamente las solicitudes `fetch` y `XMLHttpRequest` para mostrar un overlay de carga y registrar el tiempo de respuesta.

### Gestión de Base de Datos

Para utilizar la base de datos local, crea una instancia de `asyload.db`:

```javascript
const db = new asyload.db('nombre-de-la-base-de-datos', 'nombre-del-store');
db.init().then(() => {
  console.log('Base de datos inicializada');
});
```

### Consola Dinámica

Durante el desarrollo, `asyload` proporciona una consola dinámica que muestra mensajes de log, error, advertencia e información de manera más visual y organizada.

## API Detallada

### `asyload(...params)`

Carga módulos desde un CDN.

- **Parámetros**:
  - `...params`: Un conjunto de cadenas que especifican los paquetes a cargar. Cada cadena debe tener el formato `nombre-del-paquete@versión`.
  
- **Retorna**:
  - Una promesa que se resuelve cuando todos los módulos han sido cargados correctamente.

### `asyload.scan(f)`

Escanea un objeto y muestra sus métodos y tipos en la consola.

- **Parámetros**:
  - `f`: El objeto a escanear.

### `asyload.require(req)`

Requiere un módulo previamente cargado.

- **Parámetros**:
  - `req`: El nombre del módulo a requerir.
  
- **Retorna**:
  - El módulo solicitado.

### `asyload.render(e, t)`

Renderiza un elemento del DOM con datos dinámicos.

- **Parámetros**:
  - `e`: El elemento del DOM a renderizar.
  - `t`: Un objeto que contiene los datos a renderizar.

### `asyload.db`

Clase para gestionar una base de datos local utilizando IndexedDB.

#### `constructor(dbName, storeName)`

- **Parámetros**:
  - `dbName`: El nombre de la base de datos.
  - `storeName`: El nombre del store (o stores) en la base de datos.

#### `init()`

Inicializa la base de datos.

- **Retorna**:
  - Una promesa que se resuelve cuando la base de datos ha sido inicializada.

#### `put(key, value, table)`

Guarda un valor en la base de datos.

- **Parámetros**:
  - `key`: La clave bajo la cual se guardará el valor.
  - `value`: El valor a guardar.
  - `table`: El store en el que se guardará el valor (opcional).

- **Retorna**:
  - Una promesa que se resuelve cuando el valor ha sido guardado.

#### `get(id, table)`

Obtiene un valor de la base de datos.

- **Parámetros**:
  - `id`: La clave del valor a obtener.
  - `table`: El store del que se obtendrá el valor (opcional).

- **Retorna**:
  - Una promesa que se resuelve con el valor solicitado.

#### `getAll(table)`

Obtiene todos los valores de un store.

- **Parámetros**:
  - `table`: El store del que se obtendrán los valores (opcional).

- **Retorna**:
  - Una promesa que se resuelve con un objeto que contiene todos los valores.

#### `delete(id, table)`

Elimina un valor de la base de datos.

- **Parámetros**:
  - `id`: La clave del valor a eliminar.
  - `table`: El store del que se eliminará el valor (opcional).

- **Retorna**:
  - Una promesa que se resuelve cuando el valor ha sido eliminado.

#### `exportToJSON(tab)`

Exporta los datos de la base de datos a un archivo JSON.

- **Parámetros**:
  - `tab`: Los stores a exportar (opcional).

- **Retorna**:
  - Una promesa que se resuelve cuando los datos han sido exportados.

#### `importFromJSON(file)`

Importa datos a la base de datos desde un archivo JSON.

- **Parámetros**:
  - `file`: El archivo JSON a importar.

- **Retorna**:
  - Una promesa que se resuelve cuando los datos han sido importados.

## Ejemplos

### Carga de Módulos

```javascript
asyload('lodash@4.17.21', 'moment@2.29.1')
  .then(() => {
    console.log('Módulos cargados correctamente');
  })
  .catch((error) => {
    console.error('Error al cargar los módulos:', error);
  });
```

### Uso de la Base de Datos

```javascript
const db = new asyload.db('mi-base-de-datos', 'mi-store');
db.init().then(() => {
  db.put('clave1', 'valor1').then(() => {
    db.get('clave1').then((value) => {
      console.log('Valor obtenido:', value);
    });
  });
});
```

### Renderizado Dinámico

```javascript
const elemento = document.getElementById('mi-elemento');
const datos = { nombre: 'Juan', edad: 30 };
asyload.render(elemento, datos);
```

## Consideraciones de Seguridad

- **Validación de Entradas**: Asegúrate de validar y sanitizar todas las entradas del usuario para evitar riesgos de seguridad.
- **Uso de `eval`**: Evita el uso de `eval` o `new Function` para evaluar código dinámico, ya que puede ser peligroso.

## Compatibilidad

El código ha sido diseñado para funcionar en navegadores modernos que soportan JavaScript ES6 y IndexedDB. Se recomienda realizar pruebas exhaustivas en diferentes navegadores y dispositivos para asegurar la compatibilidad.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las mejores prácticas de codificación y de incluir pruebas unitarias para cualquier nueva funcionalidad.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.