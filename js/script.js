// CICLO I NUMERI DA 1 A 100
for(let i = 1; i <= 100 ; i++){
    // CONTROLLO I NUMERI MULTIPLI DI 3 E 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FrizzBuzz");
    }
    // CONTROLLO I NUMERI MULTIPLI DI 3
     else if(i % 3 == 0){
        console.log("Frizz")
    }
    // CONTROLLO I NUMERI MULTIPLI DI 5
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    console.log(i)

}