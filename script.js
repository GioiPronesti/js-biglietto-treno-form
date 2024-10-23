/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

console.log("hello console");


// 1) INPUT  acquisisco degli input in ingresso dal utente e stampo il console il loro valore
const userAge = parseFloat(prompt("Inserisci la tua età "));
const userKm = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));
console.log("la tua eta:", userAge);
console.log("i tuoi kilometri:", userKm);

// 2) VARIABILI  dichiarazione di variabili e inizializzo startprice e numberdiscount
let startPrice = 0.21 * userKm;
let discountPrice;
let numberDiscount = 0;
let totalPrice;

// 3) CONTROLLO LOGICA  controllo l'età dell' utente per sapere la percentuale di sconto sul biglietto
if (userAge < 18) {
  console.log("Biglietto sconto young"); // string
  numberDiscount = 0.2;
} else if (userAge >= 65) {
  console.log("Biglietto sconto over 65"); // string
  numberDiscount = 0.4;
} else {
  console.log("Biglietto sconto senior"); // string
  numberDiscount = 0;
}

// 4) CALCOLO RISULTATO  eseguo il calcolo per trovare il prezzo del biglietto scontato 
discountPrice = startPrice * numberDiscount;
totalPrice = startPrice - discountPrice;

// 5) STAMPA RISULTATO  dichiaro una variabile per la stampa del prezzo finale e stampo il risultato
console.log("il prezzo finale ammonta a euro:", totalPrice);


// Milestone 1 preparo gli elementi che mi serviranno per il form

const passengerAge = document.querySelector('.input-age')
const passengerKm = document.querySelector('.input-km')

const btnForTicket = document.getElementById('show-ticket')
