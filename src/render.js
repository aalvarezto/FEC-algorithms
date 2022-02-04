"use strict"

import asciichart from "asciichart"

const render = x => {
	const plotted = asciichart.plot(x)

	console.clear()
	console.log(plotted)
}

export default render
