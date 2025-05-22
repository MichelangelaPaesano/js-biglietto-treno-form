//la prima cosa da fare è recuperare tutti gli elementi che ci servono
const inputKm = document.getElementById ('numero-km')
const selectDiscount = document.getElementById ('sconto')
const btnPrice = document.getElementById ('prezzo-finale')
const divRisultato = document.getElementById ('risultato')

//rendiamo ascoltante il bottone e all'interno
//facciamo tutti i calcoli per far si che al click di quel 
//bottone riusciamo poi a dare all'utente quello che vuole 
btnPrice.addEventListener ('click', () =>{
    console.log('effettua calcolo')
// poi: dobbiamo leggere quello che 
//l'utente inserisce, sia come KM che come SCONTO
const km = parseFloat(inputKm.value)
const discount = selectDiscount.value 

//adesso dobbiamo calcolare il prezzo in base alla scelta 
//dell'utente 

let biglietto = km
if ( discount === 'Giovane') {
    biglietto = km * 0.21 * 0.8;
} else if ( discount === 'Senior') {
    biglietto = km * 0.21 * 0.6; 
} else {
    biglietto = km * 0.21;
}

console.log (biglietto)

//adesso dobbiamo solo cambiare il p con il risultato del biglietto 
divRisultato.innerHTML = (`Il tuo viaggio avrà un costo di ${biglietto.toFixed(2)} EUR`) 

})


