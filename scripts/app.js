var textInput = document.querySelector("#msg");
var outInput = document.querySelector("#container__mensagem");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('container__mensagem').innerHTML = '<p readonly id="msgCripto">' + resultCripto + 
  '</p>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('container__mensagem').innerHTML = '<p readonly id="msgCripto">' + resultDescripto + 
    '</p>' + '<button class="btn-copiar" id="btn-descripto" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('container__mensagem');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  