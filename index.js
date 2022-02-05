"use strict"

import BigOPlotter from "./src/BigOPlotter/index.js"

// Cuidado con las optimizaciones de NODE con V8 !!!

const functionToAnalize = generatedData => {
	const arr = ["foo", ,]

	generatedData.sort()

	// generatedData.sort((a, b) => a - b)

	// generatedData.map(v => v + 1)

	// generatedData.forEach(v => arr.push(v))

	// generatedData.forEach(v => arr.shift(v))
}

const options = {
	testCases: 20,
	dataWeight: 10000,
	scale: 2,
}

BigOPlotter(functionToAnalize, options)
