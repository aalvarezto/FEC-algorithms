# FEC-algorithms

Este repo sirve de guia para el estudio de algoritmos, se va a ir actualizando con el tiempo a medida que el grupo avance con el contendido.

## Big O Plotter

Grafica el algoritmo que uno coloca dentro de `functionToAnalize()` y tiene distintas opciones de configuración de la gráfica.

La función `functionToAnalize()` recibe como primer parámetro un `array` con números aleatorios, la cantidad de casos puede ser modificada con la opción `testCases` y el tamaño de la cantidad de números con la opción `dataWeight`.

La opción de `scale` (escala) les va a permitir "aplanar" o ajustar el tamaño de la gráfica.

Cómo última aclaración, por favor tengan cuidado con las opciones si grafican algoritmos muy complejos. También tener en cuenta que el motor de Node (v8) implementa muchas optimizaciones por debajo.

#### Comandos

```bash
npm run start

o

yarn start
```

Ejemplo:

```js
const options = {
	testCases: 20,
	dataWeight: 10000,
	scale: 1.75,
}

const functionToAnalize = generatedData => {
	const arr = []

	generatedData.forEach(v => arr.push(v))
}
```

### Instalación:

Requisitos Node 14 ó más

```bash
npm install

o

yarn
```

Have Fun!

## Recursos

-   [Practical Algorithms - FrontEnd Masters](https://frontendmasters.com/courses/practical-algorithms/introducing-practical-guide-to-algorithms/)

TODO: Recursos
