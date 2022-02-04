"use strict"

import generateData from "./src/generateData.js"
import createGraph from "./src/createGraph.js"

const arr = generateData(data => data.sort())

createGraph(arr)
