"use strict"

import { countUpTo } from "./src/utils/index.js"

const foo = countUpTo(10).map(Math.random)

console.log(foo)
