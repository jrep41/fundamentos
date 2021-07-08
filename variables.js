var nombre = "José Ramón";
console.log(typeof nombre);
console.log(nombre);

var edad = 47;
console.log(typeof edad);
console.log(edad);

var salario = 2043.93;
console.log(typeof salario);
console.log(salario);

console.log(edad % 1 === 0); //es divisible entre 1 entero?? true
console.log(salario % 1 === 0); // es un entero?? false

var esMayor = false;
console.log(typeof esMayor); //booblean

var edad2 = "2"; //texto
var salario2 = 5.5; //float
console.log(edad2salario2 = edad2 + salario2); //concatena 2 y 5.5 como texto
console.log(typeof edad2salario2); //devuelve string

var mascota = null;
console.log(typeof mascota); //object
console.log(mascota === null); //true

//CONVERSIONES

//texto a numero
var numero = "1.5";
var texto_a_numero = Number(numero); //texto a numero
console.log(texto_a_numero); //1.5


var texto_a_numero = parseFloat(numero);//convierte texto a float
console.log(texto_a_numero); //devuelve el number (float) 1.5
console.log(typeof texto_a_numero); //devuelve number
var numero_a_texto = texto_a_numero.toString();//convierte a string
console.log(numero_a_texto);//devuelve el texto "1.5"
console.log(typeof numero_a_texto); //string

var decimal_a_entero = parseInt(texto_a_numero); //convierte a entero
console.log(decimal_a_entero); //1
console.log(typeof decimal_a_entero); //number
