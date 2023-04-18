//Las "llaves" de encriptación que utilizaremos son las siguientes:
// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

// Parametros necesarios:
// i es para que afecte a las palabras que se escriban en el input tanto minusculas como mayusculas
// g es para toda la linea o oracion que se escriba en el input
// m es para que afecte a multiples lineas o parrafos

function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var textocifrado = texto.replace(/e/igm,"enter");
    var textocifrado = textocifrado.replace(/o/igm,"ober");
    var textocifrado = textocifrado.replace(/i/igm,"imes");
    var textocifrado = textocifrado.replace(/a/igm,"ai");
    var textocifrado = textocifrado.replace(/u/igm,"ufat");
    document.getElementById("muñecoderecho").style.display = "none";
    document.getElementById("ningunmensajeencontrado").style.display = "none";
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("ingresetexto").innerHTML = textocifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("boton-copiar").style.display = "inherit";
}
  

function desencriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var textocifrado= texto.replace(/enter/igm, "e")
    var textocifrado= textocifrado.replace(/ober/igm, "o")
    var textocifrado= textocifrado.replace(/imes/igm, "i")
    var textocifrado= textocifrado.replace(/ai/igm, "a")
    var textocifrado= textocifrado.replace(/ufat/igm, "u")
    document.getElementById("muñecoderecho").style.display = "none";
    document.getElementById("ningunmensajeencontrado").style.display = "none";
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("ingresetexto").innerHTML = textocifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("boton-copiar").style.display = "inherit";
}

function copiar(){
    var enunciado = document.querySelector("#ingresetexto");
    enunciado.select();
    document.execCommand("cut");
    alert("Se ha copiado el texto");
}


  

