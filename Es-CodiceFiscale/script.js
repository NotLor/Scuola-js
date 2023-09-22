const fileUrl = "comuni.xlsx";
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

calcola.onclick = async function(){
    // COGNOME*********************************************************************************************************************
    // primi 3 caratteri
    cognome.value = cognome.value.replace(/\s/g, '');
    //  Trasformo il cognome in maiuscolo
    let cognomeMaiuscolo = cognome.value.toUpperCase();
    let Consonanti_Cognome = "";
    let Vocali_Cognome = "";
    // Salvo le consonanti del cognome
    for(let i = 0; i < cognomeMaiuscolo.length; i++){
        if(consonanti.includes(cognomeMaiuscolo[i])){ // <-- Use cognomeMaiuscolo
            Consonanti_Cognome += cognomeMaiuscolo[i]; // <-- Use cognomeMaiuscolo
        }
    }

    // Salvo le vocali del cognome
    for(let i = 0; i < cognomeMaiuscolo.length; i++){ // <-- Use cognomeMaiuscolo
        if(vocali.includes(cognomeMaiuscolo[i])){ // <-- Use cognomeMaiuscolo
            Vocali_Cognome += cognomeMaiuscolo[i]; // <-- Use cognomeMaiuscolo
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


    // NOME*********************************************************************************************************************
    
    let nomeMaiuscolo = nome.value.toUpperCase();
    let Consonanti_Nome = "";
    let Vocali_Nome = "";

    // Salvo le consonanti del nome
    for(let i = 0; i < nomeMaiuscolo.length; i++){
        if(consonanti.includes(nomeMaiuscolo[i])){
            Consonanti_Nome += nomeMaiuscolo[i];
        }
    }
    // Salvo le vocali del nome
    for(let i = 0; i < nomeMaiuscolo.length; i++){
        if(vocali.includes(nomeMaiuscolo[i])){
            Vocali_Nome += nomeMaiuscolo[i];
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

    // I due caratteri numerici indicativi dell'anno di nascita sono, nell'ordine, la cifra delle decine e la cifra delle unità dell'anno stesso.
    // Calcolo i due caratteri numerici indicativi dell'anno di nascita
    codiceFiscale += anno.value[2] + anno.value[3];

    /*
    Tabella conversione mesi:
    Gennaio = A	Maggio = E	Settembre = P
    Febbraio = B	Giugno = H	Ottobre = R
    Marzo = C	Luglio = L	Novembre = S
    Aprile = D	Agosto = M	Dicembre = T
    */
    // Calcolo il carattere alfabetico corrispondente al mese di nascita
    switch(mese.value){
        case "1":
            codiceFiscale += "A";
            break;
        case "2":
            codiceFiscale += "B";
            break;
        case "3":
            codiceFiscale += "C";
            break;
        case "4":
            codiceFiscale += "D";
            break;
        case "5":
            codiceFiscale += "E";
            break;
        case "6":
            codiceFiscale += "H";
            break;
        case "7":
            codiceFiscale += "L";
            break;
        case "8":
            codiceFiscale += "M";
            break;
        case "9":
            codiceFiscale += "P";
            break;
        case "10":
            codiceFiscale += "R";
            break;
        case "11":
            codiceFiscale += "S";
            break;
        case "12":
            codiceFiscale += "T";
            break;
    }

    /*
    I due caratteri numerici indicativi del giorno di nascita e del sesso vengono determinati nel modo seguente:
    -Per i soggetti maschili il giorno di nascita figura invariato, con i numeri da uno a trentuno, facendo precedere dalla cifra zero i giorni del mese dall'uno al nove.
    -Per i soggetti femminili il giorno di nascita viene aumentato di quaranta unità, per cui esso figura con i numeri da quarantuno a settantuno.
    */
    // Calcolo il carattere numerico corrispondente al giorno di nascita e al sesso
    if(sesso.value == "M"){
        if(giorno.value <= 9){
            codiceFiscale += "0" + giorno.value;
    }else{
            codiceFiscale += giorno.value;
        }
    }else{
        codiceFiscale += parseInt(giorno.value) + 40;
    }    
    
    // Luogo di nascita
    // Calcolo il carattere alfabetico corrispondente al luogo di nascita
    //CALCOLO CODICE PAESE
    let err = false;

    await fetch(fileUrl)
        .then((response) => response.arrayBuffer())
        .then((data) => {
        // Utilizza la libreria SheetJS per leggere il file Excel
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const nomeDaCercare = luogo_nascita.value.toLowerCase(); // Cambia questo valore con il nome che stai cercando

        // Inizia a cercare nella colonna dei nomi (colonna A)
        for (let rowIndex = 2; ; rowIndex++) {
            // Assumiamo che la prima riga sia l'intestazione delle colonne
            const nomeCell = sheet["C" + rowIndex];
            if (!nomeCell || nomeCell.v === undefined) {
            console.log(nomeCell.v);
            // Se non ci sono più dati nella colonna dei nomi, esci dal ciclo
            err = true;
            break;
            }

            const codiceCell = sheet["B" + rowIndex]; // La colonna dei codici è la colonna B
            if (nomeCell.v === nomeDaCercare) {
            // Hai trovato il nome corrispondente, il codice è nella colonna B
            const codiceAssociato = codiceCell.v;
            codiceFiscale += codiceAssociato;
            break;
            }
        }
        })
        .catch((error) => {
        console.error("Errore nel caricamento del file Excel:", error);
        });

    if (err) return "errore nell'inserimento del luogo di nascità";
     
    // CARATTERE DI CONTROLLO*********************************************************************************************************************
    // Calcolo il carattere di controllo
    
    console.log(codiceFiscale);
        
}



