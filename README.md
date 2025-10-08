# Propuesta de mejora para pagina ULS phoenix

Es importante destacar que este proyecto fue realizado de manera independiente por un estudiante de la carrera de ingeniería en computación.
El fin de este proyecto es entregar una plataforma mas actualizada, mucho mas rápida, mucho más segura.


## Enfoque Principal del proyecto
El enfoque que quiero tomar para este proyecto es, como ya mencione, una actualización al sistema que tenemos actualmente en la universidad, actualizando tanto la parte visual como la de seguridad utilizando distintas tecnologías.

## Lenguajes y Frameworks

### Front-end
- React + Typescript + Vite
- Css + Boostrap

### Back-end 

- Java + Spring Boot
- JWT + Cookies HttpOnly + Secure
- PostgresQL

La idea inicial es poder realizar una mejora tanto visual como lógica de la página de phoenix uls. Para esto se escogió utilizar React para poder realizar el front-end.
### ¿Por que react y no otro?
Primero que todo en el hámbito de seguirdad, react native no permite ejecutar Javascrip directamente por lo que esto es una ayuda para poder evitar ataques XSS, dando una muy buena seguirdad.

También elegí react native para poder desarrollar ya que este nos permite tener una buena mantencion en el tiempo gracias a la estructura que este lleva. Existe menos costo al momento de trabajar con el, gracias a la reutilización de código que react permite como libreria. Por esto mismo podremos realizar soluciones a problemas en un menor de los tiempos.

### ¿Por que Typcript en ves de Javascript?
JavaScript es un lenguaje de tipado dinámico, mientras que TypeScript es un lenguaje de tipado estático que se compila a JavaScript. Esto significa que en TypeScript, los tipos de datos se verifican en tiempo de compilación, lo que ayuda a detectar errores antes de la ejecución, mientras que en JavaScript, los errores de tipo se identifican durante la ejecución.

TypeScript añade una capa de seguridad y organización mediante el tipado estático, lo que lo convierte en una opción atractiva para proyectos grandes y complejos donde la fiabilidad es crucial.

### ¿Por que utilizamos Java+Spring Boot?

La principal decisión para poder desarrollar con java el backend es por la familiaridad de java, la seguirdad que entrega spring boot. Es posible utilizar otros elementos como NestJS o GO pero ya que en la carrera se nos familiariza con java, se me es muy como desarrollar con este. 

