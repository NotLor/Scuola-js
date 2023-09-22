var vocali = "AEIOU";
var consonanti = "BCDFGHJKLMNPQRSTVWXYZ";
let codiceFiscale = "";

var cognome = document.getElementById("cognome");
var nome = document.getElementById("nome");
var sesso = document.getElementById("sesso");
var luogo_nascita = document.getElementById("luogo_nascita");
var provincia = document.getElementById("provincia");
var giorno = document.getElementById("giorno");
var mese = document.getElementById("mese");
var anno = document.getElementById("anno");
var calcola = document.getElementById("calcola");
// COGNOME*********************************************************************************************************************
calcola.onclick = function(){
    // Tolgo gli spazi dal cognome
    cognome.value = cognome.value.replace(/\s/g, '');
    //  Trasformo il cognome in maiuscolo
    cognome = cognome.value.toUpperCase();
    let Consonanti_Cognome = "";
    let Vocali_Cognome = "";

    // Salvo le consonanti del cognome
    for(let i = 0; i < cognome.length; i++){
        if(consonanti.includes(cognome[i])){
            Consonanti_Cognome += cognome[i];
        }
    }
    // Salvo le vocali del cognome
    for(let i = 0; i < cognome.length; i++){
        if(vocali.includes(cognome[i])){
            Vocali_Cognome += cognome[i];
        }
    }
    // Calcolo le 3 lettere del cognome
    if(Consonanti_Cognome.length >= 3){
        // Se il cognome contiene tre o più consonanti, i tre caratteri da rilevare sono, nell'ordine, la prima, la seconda e la terza consonante.
        codiceFiscale += Consonanti_Cognome[0] + Consonanti_Cognome[1] + Consonanti_Cognome[2];
    }else if(Consonanti_Cognome.length == 2 && Vocali_Cognome.length >= 1){
        // Se il cognome contiene due consonanti, i tre caratteri da rilevare sono, nell'ordine, la prima e la seconda consonante e la prima vocale.
        codiceFiscale += Consonanti_Cognome[0] + Consonanti_Cognome[1] + Vocali_Cognome[0];
    }else if(Consonanti_Cognome.length == 1 && Vocali_Cognome.length >= 2){
        // Se il cognome contiene una consonante e due vocali, si rilevano, nell'ordine, quella consonante e quindi la prima e la seconda vocale.
        codiceFiscale += Consonanti_Cognome[0] + Vocali_Cognome[0] + Vocali_Cognome[1];
    }else if(Consonanti_Cognome.length == 1 && Vocali_Cognome.length == 1){
        // Se il cognome contiene una consonante e una vocale, si rilevano la consonante e la vocale, nell'ordine, e si assume come terzo carattere la lettera x (ics).
        codiceFiscale += Consonanti_Cognome[0] + Vocali_Cognome[0] + "X";
    }else if(Consonanti_Cognome.length == 0 && Vocali_Cognome >= 2){
        // Se il cognome e' costituito da due sole vocali, esse si rilevano, nell'ordine, e si assume come terzo carattere la lettera x (ics).
        codiceFiscale += Vocali_Cognome[0] + Vocali_Cognome[1] + "X";
    }

    console.log(codiceFiscale);
}

// NOME*********************************************************************************************************************
/*
nome = nome.value.toUpperCase();
let Consonanti_Nome = "";
let Vocali_Nome = "";

// Salvo le consonanti del nome
for(let i = 0; i < nome.value.length; i++){
    if(consonanti.includes(nome.value[i])){
        Consonanti_Nome += nome.value[i];
    }
}
// Salvo le vocali del nome
for(let i = 0; i < nome.value.length; i++){
    if(vocali.includes(nome.value[i])){
        Vocali_Nome += nome.value[i];
    }
}
// Calcolo le 3 lettere del nome
if(Consonanti_Nome.length >= 4){
    // Se il nome contiene quattro o più consonanti, i tre caratteri da rilevare sono, nell'ordine, la prima, la terza e la quarta consonante.
    codiceFiscale += Consonanti_Nome[0] + Consonanti_Nome[2] + Consonanti_Nome[3];
}else if(Consonanti_Nome.length == 3){
    // Se il nome contiene tre consonanti, i tre caratteri da rilevare sono, nell'ordine, la prima, la seconda e la terza consonante.
    codiceFiscale += Consonanti_Nome[0] + Consonanti_Nome[1] + Consonanti_Nome[2];
}else if(Consonanti_Nome.length == 2 && Vocali_Nome.length >= 1){
    // Se il nome contiene due consonanti, i tre caratteri da rilevare sono, nell'ordine, la prima e la seconda consonante e la prima vocale.
    codiceFiscale += Consonanti_Nome[0] + Consonanti_Nome[1] + Vocali_Nome[0];
}else if(Consonanti_Nome.length == 1 && Vocali_Nome.length >= 2){
    // Se il nome contiene una consonante e due vocali, i tre caratteri da rilevare sono, nell'ordine, quella consonante e quindi la prima e la seconda vocale.
    codiceFiscale += Consonanti_Nome[0] + Vocali_Nome[0] + Vocali_Nome[1];
}else if(Consonanti_Nome.length == 1 && Vocali_Nome.length == 1){
    // Se il nome contiene una consonante e una vocale, si rilevano la consonante e la vocale, nell'ordine, e si assume come terzo carattere la lettera x (ics).
    codiceFiscale += Consonanti_Nome[0] + Vocali_Nome[0] + "X";
}else if(Consonanti_Nome.length == 0 && Vocali_Nome >= 2){
    // Se il nome e' costituito da due sole vocali, esse si rilevano nell'ordine, e si assume come terzo carattere la lettera x (ics).
    codiceFiscale += Vocali_Nome[0] + Vocali_Nome[1] + "X";
}


// DATA, SESSO E LUOGO DI NASCITA*********************************************************************************************************************
*/

