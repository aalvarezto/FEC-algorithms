"use strict"

import generateData from "./generateData.js"
import createGraph from "./createGraph.js"

const plotData = (callback, options) => {
	const { testCases, dataWeight, scale } = options

	if (testCases > 200) {
		throw new Error("Test cases range should be under 200")
	}

	if (dataWeight > 10000) {
		throw new Error("Data weight range should be under 10000")
	}

	const data = generateData(callback, testCases, dataWeight)

	createGraph(data, scale)
}

export default plotData
