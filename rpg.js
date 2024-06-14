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

