function encriptar (){

        let str = document.getElementById("id-input-texto");
       if (str===" ") {
         alert("en blanco");
       }else{
        alert("no en blanco");

       }


                document.getElementById("seccion3").style.visibility = "hidden";
                var texto = document.querySelector("#id-input-texto").value;  
                var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
                document.querySelector(".text-input-salida").value = textoCifrado;
                document.querySelector("#id-input-texto").value;
       
	

}


function desencriptar (){
	
        var texto = document.querySelector("#id-input-texto").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#id-input-texto").value;

}
