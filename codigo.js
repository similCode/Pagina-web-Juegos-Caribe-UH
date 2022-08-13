const sports =[
    "Atletismo", 
    "Bádminton",
    "Biatlex",
    "Cancha",
    "Carrera de orientación",
    "Gimnasia musical aerobia",
    "Judo",
    "Kárate",
    "Maratón",
    "Natación",
    "Taekwondo",
    "Tenis de mesa",
    "Tenis de campo",
    "Tiro deportivo",
    "Ajedrez",
    "Baloncesto",
    "Baloncesto 3x3",
    "Balonmano",
    "Béisbol",
    "Béisbol",
    "Futbol",
    "Futsal",
    "Polo acuático",
    "Softbol",
    "Voleibol",
    "Voleibol de playa"
]
const facultades = [ 
    "Artes y Letras",
    "Biología",
    "Comunicación",
    "Contabilidad y finanzas",
    "Derecho",
    "Economía",
    "Facultad de Español para no Hispanohablantes",
    "Filosofía Historia y Sociología",
    "Física",
    "Geografía",
    "Instituto de Farmacia y Alimentos",
    "Instituto de Ciencias y Tecnologías",
    "Instituto Superior de Diseño",
    "Lenguas Extranjeras",
    "Matemática y Computación",
    "Psicología",
    "Química",
    "Turismo"
]




class facultad{
    constructor(nombre,puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }
    

}
window.onload = function(){
var contenedor = document.querySelector(`.table__tbody-posiciones-fac`);
let documentFragment = document.createDocumentFragment();
for(let i = 1;i < facultades.length;i++){
   
        
        var tr = document.createElement("TR");
        var td1 = document.createElement("TD");
        var td2 = document.createElement("TD");
        var td3 = document.createElement("TD");
        tr.appendChild(td1).innerHTML = i;
        tr.appendChild(td2).innerHTML = facultades[i];
        tr.appendChild(td3).innerHTML = Math.round( Math.random()*10 + 30);
        documentFragment.appendChild(tr)
        
    }
}
console.log(documentFragment)
/*var tbody = document.getElementsByClassName(`din`);
var td1 = document.createElement("TD");
var td2 = document.createElement("TD");
var td3 = document.createElement("TD");
var fragmento = document.createDocumentFragment()
for (var i = 0; i < facultades.length; i++) {
    let tr = document.createElement("TR");
    fragmento.appendChild(td1);
    fragmento.appendChild(td2);
    fragmento.appendChild(td3);
    
}
tbody.appendChild(fragmento)*/
