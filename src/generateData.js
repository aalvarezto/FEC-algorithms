"use strict"

import ora from "ora"

const spinner = ora("Creating data...")

console.clear()
spinner.start()

const generateData = func => {
	const arr = new Array(100).fill(0).map((_, index) => {
		const newArr = new Array(index * 500).fill(0).map(() => Math.random())
		spinner.render()

		return async () => {
			const start = performance.now()

			func(newArr)

			const end = performance.now()
			return end - start
		}
	})

	return arr
}

spinner.stop()
spinner.clear()

export default generateData
