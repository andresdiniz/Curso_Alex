function mascara(src,mask){
    var i = src.value.length
    var saida = mask.substring(0,1)
    var texto = mask.substring(i)
    if (texto.substring(0,1) != saida){
        src.value += texto.substring(0,1)
    }
}
function mascara2(telefone, evento) {
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor = telefone.value.replace(/\D/g, '');
  var novoValor = "";
  var tel = '';

  if (tecla !== 8) {
    switch (valor.length) {
      case 1:
        novoValor = "(" + valor;
        break;
      case 2:
        novoValor = "(" + valor[0] + valor[1] + ")";
        break;
      case 3:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2];
        break;
      case 4:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3];
        break;
      case 5:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] ;
        break;
      case 6:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3]  + valor[4] + valor[5];
        break;
      case 7:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] + valor[5] + valor[6] + "-" ;
        break;
      case 8:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] + valor[5] + valor[6] + "-" + valor[7];
        break;
      case 9:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] + valor[5] + valor[6] + "-" + valor[7] + valor[8];
        break;
      case 10:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] + valor[5] + valor[6] + "-" + valor[7] + valor[8] + valor[9];
        break;
    case 11:
        novoValor = "(" + valor[0] + valor[1] + ")" + valor[2] + "." + valor[3] + valor[4] + valor[5] + valor[6] + "-"  + valor[7] + valor[8] + valor[9] + valor[10];
        break;
    }
    telefone.value = novoValor;
}
}

function countDigits(tel) {
    var digits = tel.toString().replace(/\D/g, "");
    var tam = ''
    tam = digits.length;
    console.log(tel);
  if (tam ==11){
    console.log("É celular")
  }else if(tam ==10){
    console.log("Não é celular")
    alert("Por favor informe um numero de celular"); console.log(tam);
}
}