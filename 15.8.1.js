function right(val) {
		$( val ).slideToggle("slow", function() {			});
}

function novo_fornecedor() {
		$( "#novo_fornecedorJS" ).slideToggle("slow", function() {			});
		$( "#ver_fornecedorJS" ).slideToggle("slow", function() {			});
}
function listar_fornecedores() {
		$( "#listar_fornecedoresJS" ).slideToggle("slow", function() {			});
}
function nova_autorizada() {
		$( "#nova_autorizadaJS" ).slideToggle("slow", function() {			});
		$( "#ver_autorizadaJS" ).slideToggle("slow", function() {			});
}
function listar_autorizadas() {
		$( "#listar_autorizadasJS" ).slideToggle("slow", function() {			});
}
function novo_cliente() {
		$( "#novo_clienteJS" ).slideToggle("slow", function() {			});
		$( "#ver_clienteJS" ).slideToggle("slow", function() {			});
}
function listar_clientes() {
		$( "#listar_clientesJS" ).slideToggle("slow", function() {			});
}
function novo_fabricante() {
		$( "#novo_fabricanteJS" ).slideToggle("slow", function() {			});
		$( "#ver_fabricanteJS" ).slideToggle("slow", function() {			});
}
function listar_fabricantes() {
		$( "#listar_fabricantesJS" ).slideToggle("slow", function() {			});
}
function quadro() {
	$( "#anotacao" ).slideToggle("fast", function() {});
}


function origemchange(valor){
  if((valor == "Cliente")||(valor == "Licitação")){
    document.getElementById("cli").style.display = "block";
	  document.getElementById("outraorigem").style.display = "none";
  }
	else if ((valor == "Loja") || (valor == "Casa")){
    document.getElementById("outraorigem").style.display = "block";
	  document.getElementById("cli").style.display = "none";
	  }
  else{
    document.getElementById("cli").style.display = "none";
	  document.getElementById("outraorigem").style.display = "none";
  }
}
/* AJAX
-------------------------------------------- */
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]
 if (window.ActiveXObject){
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest)
  return new XMLHttpRequest()
 else
  return false
}
function salvar_anotacao() {
	var mypostrequest=new ajaxRequest()
	mypostrequest.onreadystatechange=function(){
	 if (mypostrequest.readyState==4){
	  if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
	   document.getElementById("resultado").innerHTML=mypostrequest.responseText
	  }
	  else{
	   alert("An error has occured making the request")
	  }
	 }
	}
	var value1=encodeURIComponent(document.getElementById("anotacao").value)
	var value2=encodeURIComponent(document.getElementById("email").value)
	var parameters="anotacao="+value1+"&email="+value2
	mypostrequest.open("POST", "pp/salvar_anotacao.php", true)
	mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	mypostrequest.send(parameters)
}
