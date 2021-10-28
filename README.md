# Lit Framework

## Framework o librería

Lit es una librería para crear componentes web rápidos y ligeros. Nos aporta un conjunto de funcionalidades que permiten lograr un sistema de plantillas declarativas que son pequeñas y rápidas. Funciona en los navegadores más conocidos como Chrome, Firefox, Edge y Safari.

Cada componente de Lit es un componente web estándar, con los beneficios que ofrecen de interoperabilidad.


## Qué trae “out-of-the-box

Si queremos definir un componente, se implementa como un custom element, y se registra la clase con el navegador. Es decir, se registra una clase custom element con el navegador y se asocia con el nombre de un elemento. 

Cuando se define un componente en Lit, se está definiendo un elemento HTML custom.

Por ejemplo:

```bash
@customElement('simple-greeting')
export class SimpleGreeting extends LitElement { /* ... */ }
```

A su vez, se cuenta con un método de render, para renderizar los contenidos del componente. Acá es donde se define un template para este componente. Esto se tiene que hacer en HTML dentro de “``” esas comillas, usando la función tag html. También se puede incluir contenido JavaScript.

return html`<p>Hello from my template.</p>`;


## Nivel de mantenimiento y comunidad

Debido a que dentro de las librerías web, no es de las más utilizadas, se cuenta con una comunidad relativamente baja en comparación con otras más conocidas. Además de StackOverflow, mediante el uso de tags como `lit-element` o `lit-html`, hay un canal de Slack abierto a la comunidad llamado `Lit & Friends` que cuenta con canales para principiantes y las diferentes herramientas que se utilizan. También utilizan su cuenta de Twitter para publicar sus novedades respecto a Lit y los web components.

También cuentan con un repositorio general en git abierto al público que se actualiza constantemente. La última actualización es la 2.0.2, liberada 19 días atrás.

Abajo se puede observar una tabla comparativa de diferentes librerías o frameworks y la cantidad de consultas en StackOverflow.

| Framework o librerías  | Consultas en stackoverflow |
| ---------------------- | --------------------------:|
| Angular                | 264805                     |
| React                  | 339901                     |
| Svelte                 | 2270                       |
| Vue                    | 85596                      |
| Lit                    | 58                         |
| Alpine                 | 417                        |


## Curva de aprendizaje
Al hablar de curva de aprendizaje nos referimos a una gráfica que describa qué tan complicado puede ser aprender algo y cuanto nos puede llevar obtener resultados al esfuerzo que estamos destinado para aprender algo.

Si bien como mencionamos en el punto anterior, lit no cuenta con un gran apoyo a la comunidad, su arquitectura termina teniendo un gran parecido a otros frameworks (Ya sea Angular o React). Se basa en la utilización de Web Components para el creado de elementos personalizados para que podamos extender nuestro HTML.

Lit, tiene su base en estándares conocidos como lo son los WebComponents para el creado de elementos personalizados que nos permiten extender nuestro HTML. También se hacen utilizaciones de LitElements que son una clase para la creación de Customs Elements.

Como podemos ver, Lit no trae grandes conceptos nuevos por lo que no consideramos que la curva de aprendizaje sea alta.

### Readme

Para poder comenzar un proyecto (habiendo inicializado el proyecto) con lit, solamente tendremos que correr el siguiente código:

```bash
npm i lit
npm i lit-element
```

Con ello ya podremos comenzar con nuestro proyecto.

Para crear un nuevo elemento, creamos una carpeta y creamos un archivo type script.

```bash
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js'; // en el caso que se utilice Typescript

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
 static styles = css`p { color: blue }`;

 @property()
 destinatario= 'Clase';
 
 render() {
   return html`<p>Hola, ${this.destinatario}!</p>`;
 }
```

vemos como nuestro nuevo elemento en vez de depender de HTMLElements, extiende de Lit Element. Habiendo hecho esto, podemos llamar a nuestro nuevo elemento desde cualquier clase HTML. Para esto el único requerimiento es llamar desde la página deseada al archivo typescript que queremos utilizar.

`<hola-mundo></hola-mundo>`
