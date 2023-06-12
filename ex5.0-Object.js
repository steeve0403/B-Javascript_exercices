const readlineSync = require("readline-sync");

//Exercice 5.1


function askTvSerie(){
    const serieTv = {};

    serieTv.nameSerieTv = readlineSync.question("What's your favorite TV serie? ");
    serieTv.productYear = readlineSync.question("In what year was the series produced? ");
    serieTv.CastMembers = readlineSync.question("Give names of the cast members");
    
    return serieTv;
}

const objectSerieTv = askTvSerie();
const jSon = JSON.stringify(objectSerieTv);
console.log(jSon);

//Exercice 5.2

function randomizeCast(tvSerie)

//A finir