// RECUPERO IL CONTAINER DELL'HTML
const container = document.getElementById("container");
// CICLO I NUMERI DA 1 A 100
for(let i = 1; i <= 100 ; i++){
    // CREO UN ELEMENTO DA APPENDERE 
    const content = document.createElement('div')
    // CONTROLLO I NUMERI MULTIPLI DI 3 E 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FrizzBuzz");
        // INSERISCO IL TESTO ALL'INTERNO DEL ELEMENTO CREATO
        content.innerText = `fizzbuzz`;
        // AGGIUNGO UNA CLASSE PER APPLICARE DEGLI STILI DAL CSS
        content.classList.add('fizzbuzz')
    }
    // CONTROLLO I NUMERI MULTIPLI DI 3
     else if(i % 3 == 0){
        console.log("Frizz")
        // INSERISCO IL TESTO ALL'INTERNO DEL ELEMENTO CREATO
        content.innerText = `fizz`;
        // AGGIUNGO UNA CLASSE PER APPLICARE DEGLI STILI DAL CSS
        content.classList.add('fizz')
    }
    // CONTROLLO I NUMERI MULTIPLI DI 5
    else if(i % 5 == 0){
        console.log("Buzz")
        // INSERISCO IL TESTO ALL'INTERNO DEL ELEMENTO CREATO
        content.innerText = `buzz`;
        // AGGIUNGO UNA CLASSE PER APPLICARE DEGLI STILI DAL CSS
        content.classList.add('buzz')
    } 
    else{
        console.log(i)
        // INSERISCO IL TESTO ALL'INTERNO DEL ELEMENTO CREATO
        content.innerText = `${i}`;
        // AGGIUNGO UNA CLASSE PER APPLICARE DEGLI STILI DAL CSS
        content.classList.add('base')
    }
    // APPENDO GLI ELEMENTI CREATI 
    container.append(content);
}