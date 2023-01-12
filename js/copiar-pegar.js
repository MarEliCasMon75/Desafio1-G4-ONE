function copiarPegar (){
   var copiado = document.querySelector('.text-input-salida');
  copiado.select();

  try {
    var retorno = document.execCommand('copy');
     } catch (err) {
    alert('Error!');
  }


  var pegado=document.execCommand('paste');
  var pegado=document.querySelector('.input-texto');
  pegado.select();
 
}


var boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiarPegar;


