//Produto selecionado FICA COM AS BORDAS EM VERDE

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
}

//Agora para que alternância das cores nas bordas em relação ao produto selecionado
function escolherCarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
}

//....... Alternando nos demais produtos selecionados .....................

function escolherRefrigerante() {
    document.getElementById("refrigerante").style.borderColor = "green";
    document.getElementById("refresco").style.borderColor = "white";
}

function escolherRefresco() {
    document.getElementById("refresco").style.borderColor = "green";
    document.getElementById("refrigerante").style.borderColor = "white";
}

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
}

function escolherSorvete() {
    document.getElementById("sorvete").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
}