import { District } from ".";

const d = new District();

console.log(">>> All districts:", d.all());
console.log(">>> All districts by state:", d.allByState());
console.log(">>> Districts in Johor:", d.byState("Johor"));

