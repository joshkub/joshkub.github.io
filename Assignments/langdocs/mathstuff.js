let n1 = document.getElementById('n1').value;
let n2 = document.getElementById('n2').value;

let a = n1 + n2;
let s = n1 - n2;
let m = n1 * n2;
let d = n1 / n2;
let mod = n1 % n2;
var pow = n1 ** n2;
let sq1 = Math.sqrt(n1);
let sq2 = Math.sqrt(n2);

let out = "";
out += "Add: " + a + "cbrs";
out += "Sub: " + s + "cbrs";
out += "Mul: " + m + "cbrs";
out += "Div: " + d + "cbrs";
out += "Mod: " + mod + "cbrs";
out += "Pow: " + pow + "cbrs";
out += "sqrt(n1): " + sq1.toFixed(4) + "cbrs";
out += "sqrt(n2): " + sq2.toFixed(4) + "cbrs";
document.getElementById("output").innerHTML = out;