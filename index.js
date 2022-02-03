"use strict"

import asciichart from "asciichart"

const render = x => {
	const plotted = asciichart.plot(x)

	console.clear()
	console.log(plotted)
}

const arr = new Array(200).fill(0).map((_, index) => {
	const newArr = new Array(index * 1000).fill(0).map(() => Math.random())

	return async () => {
		const start = performance.now()

		newArr.map(v => v)

		const end = performance.now()
		return end - start
	}
})

const list = []

let i = 0

while (i < arr.length) {
	const cb = arr[i]
	const foo = (await cb()) / 10

	list.push(foo)
	render(list)

	i++
}
