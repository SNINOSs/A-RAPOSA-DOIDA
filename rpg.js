var nome = document.querySelector("#nome")
var nivel = document.querySelector("#nivel")
nome.addEventListener("change",lerNome)
function lerNome() {
    if (nivel.value >= 5)
    {   nome.value = `${nome.value}`
        nome.value = ` ${nome.value} [VETERANO]`}
    if (nivel.value < 5)
	    {   nome.value = `${nome.value}`
            nome.value = ` ${nome.value}[INICIANTE]`}
    }


var poder_attack = document.querySelector("#poder")
var forca = document.querySelector("#forca")

forca.addEventListener("change",lerPoder_attack)
nivel.addEventListener("change",lerPoder_attack)

function lerPoder_attack() {
    if (nivel.value >= 5)
    {   nome.value = `${nome.value}`
        nome.value = ` ${nome.value} [VETERANO]`}
    if (nivel.value < 5)
	    {   nome.value = `${nome.value}`
            nome.value = ` ${nome.value}[INICIANTE]`}
	poder_attack.value = ((forca.value - 10)/2) + nivel.value/2
}

var defesa = document.querySelector("#defesa")
var armadura = document.querySelector("#armadura")
var agilidade = document.querySelector("#agilidade")

agilidade.addEventListener("change",lerDefesa)
armadura.addEventListener("change",lerDefesa)


function lerDefesa() {
    var agilidade_numero = parseInt(agilidade.value)
    var armadura_numero = parseInt(armadura.value)
	defesa.value =  agilidade_numero + armadura_numero
}

///////////////////////////////////////////////////////////
var d4 = document.querySelector("#d4")
var d6 = document.querySelector("#d6")
var d8 = document.querySelector("#d8")
var d10 = document.querySelector("#d10")
var d12 = document.querySelector("#d12")
var d20 = document.querySelector("#d20")
var d100 = document.querySelector("#d100")
var d1000 = document.querySelector("#d1000")

var dado4 = document.querySelector("#dado4")
var dado6 = document.querySelector("#dado6")
var dado8 = document.querySelector("#dado8")
var dado10 = document.querySelector("#dado10")
var dado12 = document.querySelector("#dado12")
var dado20 = document.querySelector("#dado20")
var dado100 = document.querySelector("#dado100")
var dado1000 = document.querySelector("#dado1000")

d4.addEventListener("click", rolarD4)
d6.addEventListener("click", rolarD6)
d8.addEventListener("click", rolarD8)
d10.addEventListener("click", rolarD10)
d12.addEventListener("click", rolarD12)
d20.addEventListener("click", rolarD20)
d100.addEventListener("click", rolarD100)
d1000.addEventListener("click", rolarD1000)

function rolarD4() {
    let min = 1;
    let max = 4;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado4.value = numeroAleatorio
}
function rolarD6() {
    let min = 1;
    let max = 6;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado6.value = numeroAleatorio
}
function rolarD8() {
    let min = 1;
    let max = 8;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado8.value = numeroAleatorio
}
function rolarD10() {
    let min = 1;
    let max = 10;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado10.value = numeroAleatorio
}
function rolarD12() {
    let min = 1;
    let max = 12;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado12.value = numeroAleatorio
}
function rolarD20() {
    let min = 1;
    let max = 20;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado20.value = numeroAleatorio
}
function rolarD100() {
    let min = 1;
    let max = 100;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado100.value = numeroAleatorio
}
function rolarD1000() {
    let min = 1;
    let max = 1000;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    dado1000.value = numeroAleatorio
}