"use strict"

import render from "./render.js"

const createGraph = async arr => {
	const list = []

	while (arr.length) {
		const cb = arr.shift()
		const foo = (await cb()) / 10

		list.push(foo)
		render(list)
	}
}

export default createGraph
