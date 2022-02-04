"use strict"

import render from "./render.js"

const createGraph = async (promiseList, scale = 0) => {
	const timeList = []

	while (promiseList.length) {
		const work = promiseList.shift()
		const time = (await work()) / 10 ** scale

		timeList.push(time)
		render(timeList)
	}
}

export default createGraph
