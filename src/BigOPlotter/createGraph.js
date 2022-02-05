"use strict"

import render from "./render.js"

const createGraph = async (promiseList, scale = 0) => {
	const timeList = []

	const start = Date.now()

	while (promiseList.length) {
		const work = promiseList.shift()
		const time = (await work()) / 10 ** scale

		timeList.push(time)
		render(timeList)
	}

	const end = Date.now()

	const totaTime = Number((end - start) / 1000).toFixed(2)

	console.log(`\nTotal time ${totaTime} seconds`)
}

export default createGraph
