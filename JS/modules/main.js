import { sayHello, sayMorning } from "./js/greet.js";
import { subtract, sum } from "./js/math.js";

import axios from "https://cdn.skypack.dev/axios";

sayHello();
sayMorning();

console.log(sum(90, 90));
console.log(subtract(91, 90));
console.log(subtract(90, 91));

console.log(axios);
