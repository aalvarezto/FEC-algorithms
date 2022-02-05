"use strict"

const getMiliseconds = (callback, ...data) => {
	const start = Date.now()

	callback(...data)

	const end = Date.now()

	const miliseconds = end - start

	return miliseconds
}

const countUpTo = number => new Array(number).fill(0).map((_, i) => i)

export { getMiliseconds, countUpTo }
