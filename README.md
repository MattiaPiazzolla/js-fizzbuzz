Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Numero minimo di push: 5 (solo parte obbligatoria)
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

SCOMPOSIZIONE IN SOTTOPROBLEMI
>scrivo un ciclo for
    >>nelle condizioni ciclo for definisco la variabile i = 1 e faccio in modo che incrementi di 1 per ogni iterazione 
    >>sempre nelle condizioni del ciclo for definisco che le iterazioni si devono ripetere fino a che i non è uguale a 100
        >>>all'interno di for, utilizzo if per controllare se i è multiplo di 3 e 5  utilizzando resto (%) insieme all'operatore and (&&)
            >>>>per i numeri che rispecchiano queste condizioni, stampo in console "FizzBuzz"
        >>>con un if else verifico se i è multiplo di 3
            >>>>per i numeri che rispecchiano queste condizioni, stampo in console "Fizz"
        >>>con un if else verifico se i è multiplo di 5
            >>>>per i numeri che rispecchiano queste condizioni, stampo in console "Buzz"
        >>>con else definisco tutti i numeri non soggetti a condizioni
            >>>>per i numeri che non rispecchiano nessuna condizione stampo semplicemente i 