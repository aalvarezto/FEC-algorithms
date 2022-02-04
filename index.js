"use strict"

import BigOPlotter from "./src/BigOPlotter/index.js"

// Cuidado con las optimizaciones de NODE con V8 !!!

const functionToAnalize = generatedData => {
	const arr = []

	generatedData.sort()

	// generatedData.sort((a, b) => a - b)
}

BigOPlotter(functionToAnalize, {
	testCases: 20,
	dataWeight: 10000,
	scale: 1.5,
})
