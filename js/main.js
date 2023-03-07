"use strict";

//Milestone 0  

const team = [{
    nome: "Wayne Barnett",
    ruolo: "Founder e CEO",
    img: "wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
}
];

//Milestone 1
console.log(Object.values(team))

console.log(team[0])
console.log(team[1])
console.log(team[2])
console.log(team[3])
console.log(team[4])
console.log(team[5])

//Milestone 2

const primo = document.getElementById('primo');
const secondo = document.getElementById('secondo');
const terzo = document.getElementById('terzo');
const quarto = document.getElementById('quarto');
const quinto = document.getElementById('quinto');
const sesto = document.getElementById('sesto');

primo.innerHTML = Object.values(team[0]);
secondo.innerHTML = Object.values(team[1]);
terzo.innerHTML = Object.values(team[2]);
quarto.innerHTML = Object.values(team[3]);
quinto.innerHTML = Object.values(team[4]);
sesto.innerHTML = Object.values(team[5]);








/*Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/