//Array di persone
const people = [
    {
        fullName: "Wayne Barnett", //nome completo
        role: "Founder & CEO", //ruolo
        img: "./img/wayne-barnett-founder-ceo.jpg" //immagine
    },
    {
        fullName: "Angela Caroll", //nome completo
        role: "Chief Editor", //ruolo
        img: "./img/angela-caroll-chief-editor.jpg" //immagine
    },
    {
        fullName: "Walter Gordon", //nome completo
        role: "Office Manager", //ruolo
        img: "./img/walter-gordon-office-manager.jpg" //immagine
    },
    {
        fullName: "Angela Lopez", //nome completo
        role: "Social Media Manager", //ruolo
        img: "./img/angela-lopez-social-media-manager.jpg" //immagine
    },
    {
        fullName: "Scott Estrada", //nome completo
        role: "Developer", //ruolo
        img: "./img/scott-estrada-developer.jpg" //immagine
    },
    {
        fullName: "Barbara Ramos", //nome completo
        role: "Graphic Designer", //ruolo
        img: "./img/barbara-ramos-graphic-designer.jpg" //immagine
    }
];
const rowElement = document.getElementById("row"); //riga nel DOM
let colElement = ""; //colonna

//Ciclo
for (let key in people) {
    console.log(people[key]); //stampo gli oggetti dell'array di persone
}

//Creo le colonne con le carte
for (let i = 0; i < people.length; i++) {
    let fullName = people[i].fullName; //nome completo
    let role = people[i].role; //ruolo
    let img = people[i].img; //immagine
    colElement += "<div class='col'>"; //inzio colonna
    colElement += "<div class='card'>"; //inizio carta
    colElement += "<div class='card-head'>"; //inizio testa della carta
    colElement += "<img src='" + img + "' alt='" + fullName + "'>"; //immagine
    colElement += "</div>"; //fine testa della carta
    colElement += "<div class='card-body'>"; //inizio corpo della carta
    colElement += "<h2>" + fullName + "</h2>"; //nome
    colElement += "<h3>" + role + "</h3>"; //ruolo
    colElement += "</div>"; //fine corpo della carta
    colElement += "</div>"; //fine carta
    colElement += "</div>"; //fine colonna
}

rowElement.innerHTML += colElement; //stampo le colonne con le carte