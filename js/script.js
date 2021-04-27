// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// Chilometri che l'utente vuole percorrere.
var km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);
document.getElementById("km").innerHTML= km;
// Età dell'utente.
var age = parseInt(prompt("Quanti anni hai?"));
console.log(age);
document.getElementById("age").innerHTML= age;
// Calcolo del costo intero del biglietto.
var price = 0.21 * km;
console.log(price);
document.getElementById("price").innerHTML= price;
