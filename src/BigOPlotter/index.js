"use strict"

import plotData from "./plotData.js"

const customOptions = {
	testCases: 20,
	dataWeight: 5000,
	scale: 0,
}

const BigOPlotter = (callback, options) => {
	options = { ...customOptions, ...options }

	plotData(callback, options)
}

export default BigOPlotter
