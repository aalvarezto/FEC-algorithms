"use strict"

import BigOPlotter from "./src/BigOPlotter/index.js"

// Las opciones pueden ser modificadas desde acá
const options = {
	testCases: 30,
	dataWeight: 10000,
	scale: 2.01,
}

const functionToAnalize = generatedData => {
	// Cuidado con las optimizaciones de NODE con V8 !!!
	const arr = ["foo", ,]

	// // Ejemplo lineal -> O(n)
	// // Se recomienda usar una escala baja en los ejemplos lineales
	// generatedData.map(v => v + 1)

	// generatedData.forEach(v => arr.push(v))

	// generatedData.forEach(v => arr.shift(v))

	// // Orden por números -> O(n log n)
	// generatedData.sort((a, b) => a - b)

	// Orden lexicográfico -> O(n log n)
	generatedData.sort()

	// // Ejemplo logarítmico -> O(log n)
	// // Se recomienda usar las liguentes opciones (puede llegar a tardar un poco en cargar los datos al comienzo):
	// const options = {
	// 	testCases: 200,
	// 	dataWeight: 10000,
	// 	scale: 0.25,
	// }
	// while (generatedData.length > 2) {
	// 	const halfIndex = Math.floor(generatedData.length / 2)
	// 	generatedData.splice(halfIndex)
	// }

	// // Ejemplo cuadrático -> O(n ** 2)
	// // Por favor tener CUIDADO con este ejemplo !!!
	// // Se recomienda testCases = 30, dataWeight = 200, y una escala de 2
	// for (const data in generatedData) {
	// 	for (const duplicatedData in generatedData) {
	// 		// Cuidado!!!
	// 		arr.push(data)
	// 		arr.push(duplicatedData)
	// 	}
	// }
}

BigOPlotter(functionToAnalize, options)
