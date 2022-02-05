"use strict"

import ora from "ora"
import { getMiliseconds, countUpTo } from "../utils/index.js"

const spinner = ora("Creating data...")

console.clear()
spinner.start()

const generateData = (callback, testCases, dataWeight) =>
	countUpTo(testCases).map(number => {
		spinner.render()

		const fakeData = countUpTo(number * dataWeight).map(Math.random)

		return async () => getMiliseconds(callback, fakeData)
	})

spinner.stop()

export default generateData
