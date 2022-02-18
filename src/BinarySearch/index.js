"use strict"

import chalk from "chalk"
import inquirer from "inquirer"

const _createPrompt =
	(...input) =>
	async () =>
		(await inquirer.prompt(input))[input[0]["name"]]

const pause = _createPrompt({
	type: "input",
	name: "enter",
	message: `Press ${chalk.green("ENTER")} to continue.`,
})

const traceAsync =
	(lable = "") =>
	async x => {
		console.log(lable)

		console.log(x)

		await pause()

		return x
	}

const string = `
	const search = async (nums, target, lower = 0, upper = nums.length - 1) => {
		const half = __1__
		const current = __2__
		
		return __3__
		? half + lower
		: lower >= upper
		? -1
		: current > target
		? search(nums, target, lower, upper - half)
		: search(nums, target, lower + half, upper)
	}
	`

const render = obj => {
	let str = string

	Object.entries(obj).forEach(
		([key, value]) => (str = str.replace(key, value))
	)

	console.clear()
	console.log(str)
}

const { yellow } = chalk

let variables = {
	__1__: "Math.ceil((upper - lower) / 2)",
	__2__: "nums.at(half + lower)",
	__3__: "current === target",
}
const startingVariables = { ...variables }

const foo = async (trackStr, element, color) => {
	variables[trackStr] = color(element)

	render(variables)

	await pause()

	return element
}

const reset = async () => {
	// await traceAsync("")(startingVariables)
	variables = { ...startingVariables }

	render(variables)
	await pause()
}

const search = async (nums, target, lower = 0, upper = nums.length - 1) => {
	await reset()

	const half = await foo("__1__", Math.ceil((upper - lower) / 2), yellow)
	const current = await foo("__2__", nums.at(half + lower), yellow)

	return (await foo("__3__", current === target, yellow))
		? half + lower
		: lower >= upper
		? -1
		: current > target
		? search(nums, target, lower, upper - half)
		: search(nums, target, lower + half, upper)
}

search([1, 2, 3, 4, 5, 6, 10, 13, 15, 18], 17)
