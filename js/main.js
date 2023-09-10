let nomeCognome;
let distanza;
let eta;

let prezzoFinale;
let sconto

let categoria;

function buttonGenera() {

    let nomeCognome = document.getElementById("inputNome").value;
    let distanza = parseInt(document.getElementById("inputKm").value);
    let eta = parseInt(document.getElementById("inputEta").value);

    if((nomeCognome == "") || 
        (distanza == "") ||
        (eta == "")){
        alert("per favore inserisci dei dati validi !");

        document.getElementById("nomePasseggero").innerHTML = "_";
        document.getElementById("offerta").innerHTML = "_";
        document.getElementById("carrozza").innerHTML = "_";
        document.getElementById("codiceCp").innerHTML = "_";
        document.getElementById("prezzo").innerHTML = "0.00" + "€";

        return 0;

    } else{ }

    document.getElementById("inputNome").value = "";
    document.getElementById("inputKm").value = "";
    document.getElementById("inputEta").value = "";

    let prezzo = distanza * 0.21;

    if (eta < 18) {

        sconto = prezzo * 0.20;
        prezzoFinale = prezzo - sconto;
        categoria = "Minorenne";

    } else if (eta >= 65) {

        sconto = prezzo * 0.40;
        prezzoFinale = prezzo - sconto;
        categoria = "Over 65";

    } else {

        prezzoFinale = prezzo;
        categoria = "Standard";

    }

    console.log(prezzoFinale);

    let randomCodiceCp = 

    document.getElementById("nomePasseggero").innerHTML = nomeCognome;
    document.getElementById("offerta").innerHTML = categoria;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    document.getElementById("codiceCp").innerHTML = Math.floor(Math.random() * (99999 - 1 + 1) + 1);
    document.getElementById("prezzo").innerHTML = prezzoFinale.toFixed(2) + "€";

}

function buttonAnnulla() {

    document.getElementById("inputNome").value = "";
    document.getElementById("inputKm").value = "";
    document.getElementById("inputEta").value = "";

}


document.getElementById("genera").onclick = buttonGenera;
document.getElementById("annulla").onclick = buttonAnnulla;