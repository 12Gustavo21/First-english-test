//Crie 3 variáveis, cada uma com um array:
//- Comedy
//-Action
//-Fantasy 
//Questão 01
let Comedy = [];
let Action = [];
let Fantasy = [];

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year: 
//Questão 02
Comedy = [{
    title: "My mother is a piece",
    director: "Andre Pellenz",
    year: "2013"
}, {
    title: "Hotel Transylvania",
    director: "Genndy Tartakovsky",
    year: "2012"
}, {
    title: "Sing",
    director: "Garth jennings",
    year: "2016"
}];

Action = [{
    title: "Jurassic park",
    director: "Steven Spielberg",
    year: "1993"
}, {
    title: "Uncharted",
    director: "Ruben Fleischer",
    year: "2022"
}, {
    title: "Man of steel",
    director: "Zack Snyder",
    year: "2013"
}];

Fantasy = [{
    title: "Upside-Down Magic",
    director: "Joe Nussbaum",
    year: "2020"
}, {
    title: "Jumanji",
    director: "Joe Johnston",
    year: "1996"
}, {
    title: "The Grinch",
    director: "Ron Howard",
    year: "2000"
}];

//*DESAFIO EXTRA*
//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 
if (Fantasy.find((movie) => movie.title == "Intelestellar")) {
    console.log("MY FAVORIT MOVIE IS INTELESTELLAR");
} else {
    console.log("NOT EVEN 5 STARS");
}