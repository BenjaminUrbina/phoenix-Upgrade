# Documentación breve del módulo `estudiante` en Spring Boot

## 1. Introducción

Este módulo fue desarrollado utilizando **Spring Boot** con el objetivo de exponer un conjunto de servicios REST para la gestión de estudiantes. Spring Boot se utilizó porque permite crear aplicaciones Java listas para ejecutarse sin configuraciones extensas, integrando en un mismo proyecto la capa web, la capa de negocio y la capa de acceso a datos.

  Se usaron los siguientes elementos principales:

- Spring Web para definir los endpoints HTTP.
- Spring Data JPA para el acceso a la base de datos mediante repositorios.
- Entidades JPA para mapear tablas relacionales.
- Un servicio intermedio para centralizar la lógica.
- Un mapper para transformar entidades en DTOs.
- Una excepción personalizada para manejar el caso “no encontrado”.

El objetivo de esta documentación es describir brevemente cada una de estas capas para que cualquier que quiera contribuir pueda comprender la estructura y continuar el desarrollo.

**LA ESTRUCTURA IRA CAMBIANDO CON EL TIEMPO EN CASO DE SER NECESARIO**

---

## 2. Arquitectura utilizada

Se aplicó una arquitectura por capas, típica en aplicaciones Spring:

1. **Capa de presentación (API REST)**: recibe las peticiones HTTP.
2. **Capa de servicio**: contiene la lógica de negocio y las validaciones.
3. **Capa de datos (repositorio)**: se comunica con la base de datos.
4. **Capa de dominio (entidades JPA)**: representa las tablas.
5. **Capa de transferencia (DTO + mapper)**: define el formato de datos expuesto.

Esta separación permite modificar una capa sin afectar directamente a las demás, facilita las pruebas unitarias y mejora la mantenibilidad.

---

## 3. Controlador REST (`EstudianteController`)

Se definió un controlador REST para exponer los endpoints relacionados con estudiantes.

Características principales:

- Se anotó la clase con `@RestController` para indicar que expone recursos REST.
- Se usó `@RequestMapping("/api/estudiantes")` como ruta base.
- Se definió un endpoint para obtener un estudiante por **ID**: `GET /api/estudiantes/{id}`.
- Se definió un endpoint alternativo para obtener un estudiante por **email**: `GET /api/estudiantes?email=...`.

De esta forma, se permite el consumo del recurso tanto por identificador numérico como por correo electrónico, lo que puede ser útil en integraciones con otros sistemas.

El controlador no contiene lógica de negocio por el momento.

---

## 4. Servicio (`EstudianteService`)

Se creó una clase de servicio anotada con `@Service`.
En esta capa se centralizaron las siguientes responsabilidades:

- Recuperar el estudiante desde el repositorio.
- Validar que el estudiante exista.
- Convertir la entidad recuperada en un DTO mediante el mapper.
- Lanzar una excepción clara cuando el estudiante no se encuentra.

Se usaron los siguientes métodos típicos:

- `obtenerPorId(Integer id)`
- `obtenerPorEmail(String email)`

En ambos casos se utilizó `Optional` proveniente del repositorio y, en caso de ausencia, se lanzó la excepción `EstudianteNoEncontradoException`. Esto estandariza el comportamiento de la API ante datos inexistentes.

---

## 5. Repositorio (`EstudianteRepository`)

Para el acceso a datos se usó **Spring Data JPA**.

Se usaron los siguientes elementos:

- Una interfaz que extiende `JpaRepository<Estudiante, Integer>`, lo que entrega automáticamente operaciones CRUD básicas (`findAll`, `findById`, `save`, `delete`, etc.).
- Un método adicional derivado del nombre: `Optional<Estudiante> findByEmail(String email)`.

Spring Data JPA genera automáticamente la consulta SQL a partir del nombre del método (`findByEmail`), por lo que no fue necesario escribir consultas manuales. Esto simplifica la persistencia y hace el código más legible.

---

## 6. Entidad JPA (`Estudiante`)

Para mapear la tabla de base de datos se creó una entidad anotada con:

- `@Entity` y `@Table(...)` para indicar la tabla.
- `@Id` y `@GeneratedValue(...)` con secuencia, lo que es compatible con motores como PostgreSQL.
- Anotaciones de validación como `@NotBlank`, `@Size`, `@Email` y `@Min` para asegurar datos correctos desde la capa web.
- Una relación `@ManyToOne` hacia la entidad `Carrera`, indicando que cada estudiante pertenece a una carrera.
- Un campo de auditoría (`fecha_registro`) marcado como de solo lectura desde la aplicación (`insertable = false, updatable = false`), de modo que sea la base de datos quien lo complete.

De esta forma, la entidad no solo representa la estructura de la tabla, sino que también aplica reglas de validación sobre los datos que ingresan por la API.

---

## 7. DTO y Mapper (`EstudianteMapper`)

No se expone la entidad JPA directamente.
En su lugar:

1. Se creó un **DTO de estudiante** (objeto de transferencia).
2. Se creó un **mapper** con métodos estáticos para convertir de `Estudiante` → `EstudianteDTO`.

Se usaron los siguientes criterios:

- El DTO solo contiene los campos necesarios para la respuesta.
- En el caso de relaciones (por ejemplo, la carrera), se devuelve el identificador de la carrera y no el objeto completo para evitar ciclos de serialización y respuestas demasiado pesadas.
- El mapper se dejó como clase utilitaria (`final` y con constructor privado) para dejar claro que no se instancia.

Este enfoque permite cambiar la forma de exponer los datos sin modificar la entidad ni el repositorio.

---

## 8. Excepción personalizada (`EstudianteNoEncontradoException`)

Para manejar el caso en que no se encuentra un estudiante, se creó una excepción propia que extiende `RuntimeException`.

Se usaron los siguientes criterios:

- Lanzar la excepción desde la capa de servicio cuando el repositorio no devuelve resultados.
- Permitir que más adelante se centralice el manejo de errores con un `@RestControllerAdvice`.
- Entregar mensajes de error más claros al cliente de la API (por ejemplo, “Estudiante con id X no encontrado”).

Esto mejora la experiencia del consumidor del servicio y evita devolver respuestas ambiguas o `null`.

---

## 9. Validaciones

Se usaron anotaciones de **Bean Validation (Jakarta Validation)** directamente en la entidad:

- `@NotBlank` para campos de texto obligatorios.
- `@Email` para el correo.
- `@Size(max = ...)` para limitar la longitud.
- `@Min(...)` para el año de ingreso.

Gracias a estas anotaciones, cuando se habilitan endpoints de creación o actualización, Spring puede validar automáticamente los datos de entrada usando `@Valid` en el controlador.
