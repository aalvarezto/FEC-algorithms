"use strict"

import ora from "ora"

const spinner = ora("Creating data...")

console.clear()
spinner.start()

const generateData = (callback, testCases, dataWeight) => {
	const promiseList = new Array(testCases).fill(0).map((_, index) => {
		spinner.render()

		const fakeData = new Array(index * dataWeight)
			.fill(0)
			.map(() => Math.random())

		return async () => {
			const start = performance.now()

			callback(fakeData)

			const end = performance.now()
			return end - start
		}
	})

	return promiseList
}

spinner.stop()

export default generateData
