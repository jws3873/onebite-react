// CJS(Common JS 모듈시스템)
// const moduleData = require("./math");
// const { add, sub } = require("./math");

// ESM(ES 모듈 시스템)
// import mul from "./math.js";
import mul,{add,sub} from "./math.js";


// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(3,6));

import randomColor from "randomColor";
const color = randomColor();
console.log(color);
