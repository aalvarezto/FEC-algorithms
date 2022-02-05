"use strict"

import BigOPlotter from "./src/BigOPlotter/index.js"

// Las opciones pueden ser modificadas desde acá
const options = {
	testCases: 20,
	dataWeight: 10000,
	scale: 1.75,
}

const functionToAnalize = generatedData => {
	// Cuidado con las optimizaciones de NODE con V8 !!!
	const arr = ["foo", ,]

	// // Ejemplo lineal
	// // Se recomienda usar una escala baja en los ejemplos lineales
	// generatedData.map(v => v + 1)

	// generatedData.forEach(v => arr.push(v))

	// generatedData.forEach(v => arr.shift(v))

	// // Orden por números -> big O n log n
	// generatedData.sort((a, b) => a - b)

	// Orden lexicográfico -> big O n log n
	generatedData.sort()

	// Por favor tener CUIDADO con este ejemplo !!!
	// Se recomienda testCases = 20, dataWeight = 200, y una escala de 2
	// for (const data in generatedData) {
	// 	for (const duplicatedData in generatedData) {
	// Cuidado!!!
	// 		arr.push(data)
	// 		arr.push(duplicatedData)
	// 	}
	// }
}

BigOPlotter(functionToAnalize, options)
