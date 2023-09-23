const fileUrl = "comuni.xlsx";
var vocali = "AEIOU";
var consonanti = "BCDFGHJKLMNPQRSTVWXYZ";


var cognome = document.getElementById("cognome");
var nome = document.getElementById("nome");
var sesso = document.getElementById("sesso");
var luogo_nascita = document.getElementById("luogo_nascita");
var giorno = document.getElementById("giorno");
var mese = document.getElementById("mese");
var anno = document.getElementById("anno");
var calcola = document.getElementById("calcola");

calcola.onclick = async function(){
    let codiceFiscale = "";

    // COGNOME*********************************************************************************************************************

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
    
    /*
    1. ciascuno degli anzidetti quindici caratteri, a seconda che occupi posizione di ordine pari o posizione di ordine dispari, viene convertito in un valore numerico, in base alle tabelle di corrispondenza successivamente riportate.

    Per i sette caratteri con posizione di ordine pari:

    Tabella C – conversione dei caratteri con posizione di ordine pari
    A o 0 = 0	F o 5 = 5	K = 10	P = 15	U = 20
    B o 1 = 1	G o 6 = 6	L = 11	Q = 16	V = 21
    C o 2 = 2	H o 7 = 7	M = 12	R = 17	W = 22
    D o 3 = 3	I o 8 = 8	N = 13	S = 18	X = 23
    E o 4 = 4	J o 9 = 9	O = 14	T = 19	Y = 24
    Z = 25
    Per gli otto caratteri con posizione di ordine dispari:

    Tabella D– conversione dei caratteri con posizione di ordine dispari
    A o 0 = 1	F o 5 = 13	K = 2	P = 3	U = 16
    B o 1 = 0	G o 6 = 15	L = 4	Q = 6	V = 10
    C o 2 = 5	H o 7 = 17	M = 18	R = 8	W = 22
    D o 3 = 7	I o 8 = 19	N = 20	S = 12	X = 25
    E o 4 = 9	J o 9 = 21	O = 11	T = 14	Y = 24
    Z = 23
    */
    
    // Calcolo la somma dei valori numerici dei caratteri
    let somma = 0;
    for (let i = 0; i < codiceFiscale.length; i++){
        if(i%2 == 0){//tabella dispari
            switch(codiceFiscale[i]){
                case "A":
                    somma += 1;
                    break;
                case "0":
                    somma += 1;
                    break;
                case "B":
                    somma += 0;
                    break;
                case "1":
                    somma += 0;
                    break;
                case "C":
                    somma += 5;
                    break;
                case "2":
                    somma += 5;
                    break;
                case "D":
                    somma += 7;
                    break;
                case "3":
                    somma += 7;
                    break;
                case "E":
                    somma += 9;
                    break;
                case "4":
                    somma += 9;
                    break;
                case "F":
                    somma += 13;
                    break;
                case "5":
                    somma += 13;
                    break;
                case "G":
                    somma += 15;
                    break;
                case "6":
                    somma += 15;
                    break;
                case "H":
                    somma += 17;
                    break;
                case "7":
                    somma += 17;
                    break;
                case "I":
                    somma += 19;
                    break;
                case "8":
                    somma += 19;
                    break;
                case "J":
                    somma += 21;
                    break;
                case "9":
                    somma += 21;
                    break;
                case "K":
                    somma += 2;
                    break;
                case "L":
                    somma += 4;
                    break;
                case "M":
                    somma += 18;
                    break;
                case "N":
                    somma += 20;
                    break;
                case "O":
                    somma += 11;
                    break;
                case "P":
                    somma += 3;
                    break;
                case "Q":
                    somma += 6;
                    break;
                case "R":
                    somma += 8;
                    break;
                case "S":
                    somma += 12;
                    break;
                case "T":
                    somma += 14;
                    break;
                case "U":
                    somma += 16;
                    break;
                case "V":
                    somma += 10;
                    break;
                case "W":
                    somma += 22;
                    break;
                case "X":
                    somma += 25;
                    break;
                case "Y":
                    somma += 24;
                    break;
                case "Z":
                    somma += 23;
                    break;
            }
        }else{//tabella pari
            switch(codiceFiscale[i]){
                case "A":
                    somma += 0;
                    break;
                case "0":
                    somma += 0;
                    break;
                case "B":
                    somma += 1;
                    break;
                case "1":
                    somma += 1;
                    break;
                case "C":
                    somma += 2;
                    break;
                case "2":
                    somma += 2;
                    break;
                case "D":
                    somma += 3;
                    break;
                case "3":
                    somma += 3;
                    break;
                case "E":
                    somma += 4;
                    break;
                case "4":
                    somma += 4;
                    break;
                case "F":
                    somma += 5;
                    break;
                case "5":
                    somma += 5;
                    break;
                case "G":
                    somma += 6;
                    break;
                case "6":
                    somma += 6;
                    break;
                case "H":
                    somma += 7;
                    break;
                case "7":
                    somma += 7;
                    break;
                case "I":
                    somma += 8;
                    break;
                case "8":
                    somma += 8;
                    break;
                case "J":
                    somma += 9;
                    break;
                case "9":
                    somma += 9;
                    break;
                case "K":
                    somma += 10;
                    break;
                case "L":
                    somma += 11;
                    break;
                case "M":
                    somma += 12;
                    break;
                case "N":
                    somma += 13;
                    break;
                case "O":
                    somma += 14;
                    break;
                case "P":
                    somma += 15;
                    break;
                case "Q":
                    somma += 16;
                    break;
                case "R":
                    somma += 17;
                    break;
                case "S":
                    somma += 18;
                    break;
                case "T":
                    somma += 19;
                    break;
                case "U":
                    somma += 20;
                    break;
                case "V":
                    somma += 21;
                    break;
                case "W":
                    somma += 22;
                    break;
                case "X":
                    somma += 23;
                    break;
                case "Y":
                    somma += 24;
                    break;
                case "Z":
                    somma += 25;
                    break;
            }
        }
    }
    
    /*
    2. I valori numerici così determinati vengono addizionati e la somma si divide per il numero 26. Il carattere di controllo si ottiene convertendo il resto di tale divisione nel carattere alfabetico ad esso corrispondente nella sotto indicata tabella:

    Tabella E – determinazione del "check-digit"
    0 = A	5 = F	10 = K	15 = P	20 = U
    1 = B	6 = G	11 = L	16 = Q	21 = V
    2 = C	7 = H	12 = M	17 = R	22 = W
    3 = D	8 = I	13 = N	18 = S	23 = X
    4 = E	9 = J	14 = O	19 = T	24 = Y
    25 = Z
    */
    // Calcolo il carattere di controllo
    let resto = somma % 26;

    switch(resto){
        case 0:
            codiceFiscale += "A";
            break;
        case 1:
            codiceFiscale += "B";
            break;
        case 2:
            codiceFiscale += "C";
            break;
        case 3:
            codiceFiscale += "D";
            break;
        case 4:
            codiceFiscale += "E";
            break;
        case 5:
            codiceFiscale += "F";
            break;
        case 6:
            codiceFiscale += "G";
            break;
        case 7:
            codiceFiscale += "H";
            break;
        case 8:
            codiceFiscale += "I";
            break;
        case 9:
            codiceFiscale += "J";
            break;
        case 10:
            codiceFiscale += "K";
            break;
        case 11:
            codiceFiscale += "L";
            break;
        case 12:
            codiceFiscale += "M";
            break;
        case 13:
            codiceFiscale += "N";
            break;
        case 14:
            codiceFiscale += "O";
            break;
        case 15:
            codiceFiscale += "P";
            break;
        case 16:
            codiceFiscale += "Q";
            break;
        case 17:
            codiceFiscale += "R";
            break;
        case 18:
            codiceFiscale += "S";
            break;
        case 19:
            codiceFiscale += "T";
            break;
        case 20:
            codiceFiscale += "U";
            break;
        case 21:
            codiceFiscale += "V";
            break;
        case 22:
            codiceFiscale += "W";
            break;
        case 23:
            codiceFiscale += "X";
            break;
        case 24:
            codiceFiscale += "Y";
            break;
        case 25:
            codiceFiscale += "Z";
            break;
    }


    console.log(codiceFiscale);
    
    //stampo il codice fiscale finale
    document.getElementById("risultato").innerHTML = codiceFiscale;
    
}