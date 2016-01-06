/* EVENTO WINDOW.ONLOAD
-------------------------------------------- */
window.onload = function() {
	tableZebrada("zebrada");
	defer();
	acentuacao();
}
/* MOSTRA DIV OMITIDO APOS CARREGAMENTO
------------------------------------------- */
function defer() {
	document.getElementById('hidden').style.display = "block";
	document.getElementById('loader').style.display = "none";
}
/* JAVASCRIPTS PARA ESCONDER E MOSTRAR OS DIVS DO PAINEL DE CONTROLE
-------------------------------------------- */
function expande(variavel1,variavel2) {
	document.getElementById(variavel1).style.display = "block";
	document.getElementById(variavel2).style.fontWeight = "bold";
}
function minimize(variavel1,variavel2) {
	document.getElementById(variavel1).style.display = "none";
	document.getElementById(variavel2).style.fontWeight = "normal";
}
function change(numero_rma) {
	var x=document.getElementById("numero_rmaId");
	x.value=numero_rma;
}
/* JS MINIMIZA ID
-------------------------------------------- */
function Minimize(variavel) {
	document.getElementById(variavel).style.display = "none";
}
/* JS NOVO
-------------------------------------------- */
function NovoMaximize() {
	document.getElementById("JS-Novo").style.display = "block";
	document.getElementById("menu-novo").style.fontWeight = "bold";
}
/* JS MINIMIZA MENU RIGHT
-------------------------------------------- */
function MinimizeMenuRight() {
	document.getElementById("JS-Panel").style.display = "none";
	document.getElementById("JS-Creditos").style.display = "none";
	document.getElementById("JS-Usuarios").style.display = "none";
	document.getElementById("JS-Assistencias").style.display = "none";
	document.getElementById("JS-Clientes").style.display = "none";
	document.getElementById("JS-Assistencia_tecnicas").style.display = "none";
	document.getElementById("JS-Fornecedores").style.display = "none";
	document.getElementById("JS-Fabricantes").style.display = "none";
	document.getElementById("JS-Relatorios").style.display = "none";
	document.getElementById("menu-fornecedores").style.fontWeight = "normal";
	document.getElementById("menu-fabricantes").style.fontWeight = "normal";
	document.getElementById("menu-assistencia_tecnicas").style.fontWeight = "normal";
	document.getElementById("menu-clientes").style.fontWeight = "normal";
	document.getElementById("menu-controle").style.fontWeight = "normal";
	document.getElementById("menu-creditos").style.fontWeight = "normal";
	document.getElementById("menu-relatorios").style.fontWeight = "normal";
	document.getElementById("menu-usuarios").style.fontWeight = "normal";
	document.getElementById("text-link").style.fontWeight = "normal";
}
/* JS RELATORIOS
-------------------------------------------- */
function RelatoriosMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Relatorios").style.display = "block";
	document.getElementById("menu-relatorios").style.fontWeight = "bold";
}
/* JS CREDITOS
-------------------------------------------- */
function CreditosMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Creditos").style.display = "block";
	document.getElementById("menu-creditos").style.fontWeight = "bold";
}
/* JS CONTROLE
-------------------------------------------- */
function PanelMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Panel").style.display = "block";
	document.getElementById("menu-controle").style.fontWeight = "bold";
}
/* JS FORNECEDORES
-------------------------------------------- */
function FornecedoresMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Fornecedores").style.display = "block";
	document.getElementById("menu-fornecedores").style.fontWeight = "bold";
}
/* JS FABRICANTES
-------------------------------------------- */
function FabricantesMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Fabricantes").style.display = "block";
	document.getElementById("menu-fabricantes").style.fontWeight = "bold";
}
/* JS ASSISTENCIA_TECNICAS
-------------------------------------------- */
function Assistencia_tecnicasMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Assistencia_tecnicas").style.display = "block";
	document.getElementById("menu-assistencia_tecnicas").style.fontWeight = "bold";
}
/* JS CLIENTES
-------------------------------------------- */
function ClientesMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Clientes").style.display = "block";
	document.getElementById("menu-clientes").style.fontWeight = "bold";
}
/* JS USUARIOS
-------------------------------------------- */
function UsuariosMaximize() {
	MinimizeMenuRight();
	document.getElementById("JS-Usuarios").style.display = "block";
	document.getElementById("menu-usuarios").style.fontWeight = "bold";
}
/* JS LISTAR ASSISTENCIAS
-------------------------------------------- */
function AssistenciasMaximize(variavelGET) {
	MinimizeMenuRight();
	document.getElementById("JS-Assistencias").style.display = "block";
	document.getElementById("text-link").style.fontWeight = "bold";
}
/* JS SESSAO DIV ABRIR E FECHAR
-------------------------------------------- */
function MENU_OPENCLOSE() {
		$( "#JS-Sessao" ).slideToggle("slow", function() {			});
}
/* JS LOCALIZAR
-------------------------------------------- */
function LocalizarMaximize() {
	document.getElementById("JS-Localizar").style.display = "block";
	document.getElementById("menu-localizar").style.fontWeight = "bold";
}

/* MOSTRA E ESCONDE BACKGROUND DAS TR ZEBRADA
--------------------------------------------
function id(el){
        return document.getElementById(el);
}
var cor_antiga;
function tableZebrada (variavel)
{
        var trs = id(variavel).getElementsByTagName('tr');
        for( var i=0; i<trs.length; i++ )
        {
                trs[i].onmouseover = function()
                {
                        cor_antiga = this.style.backgroundColor;
                        this.style.backgroundColor = 'rgba(70,130,180,0.2)';
                }
                trs[i].onmouseout = function()
                {
                        this.style.backgroundColor = cor_antiga;
                }
        }
}
*/
/* QUADRO DE ANOTACAO
-------------------------------------------- */
function quadro() {
	$( "#anotacao" ).slideToggle("fast", function() {});
}
/* AJAX
-------------------------------------------- */
//AJAX GET
/*
 function CriaRequest() {
     try{
         request = new XMLHttpRequest();
     }catch (IEAtual){
         try{
             request = new ActiveXObject("Msxml2.XMLHTTP");
         }catch(IEAntigo){

             try{
                 request = new ActiveXObject("Microsoft.XMLHTTP");
             }catch(falha){
                 request = false;
             }
         }
     }
     if (!request)
         alert("Seu Navegador não suporta Ajax!");
     else
         return request;
 }
 function salvarnotas() {
     var value1   = document.getElementById("anotacao").value;
     var value2   = document.getElementById("em").value;
     var result = document.getElementById("resultado");
     var xmlreq = CriaRequest();
     xmlreq.open("GET", "post/salvarnotas.php?anotacao=" + value1 + "&em=" + value2, true);
     xmlreq.onreadystatechange = function(){
         if (xmlreq.readyState == 4) {
             if (xmlreq.status == 200) {
             }else{
             }
         }
     };
     xmlreq.send(null);
 }
 //http://www.javascriptkit.com/dhtmltutors/ajaxgetpost.shtml
*/
//AJAX POST
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
function salvarnotas() {
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
	var value2=encodeURIComponent(document.getElementById("em").value)
	var parameters="anotacao="+value1+"&em="+value2
	mypostrequest.open("POST", "post/salvarnotas.php", true)
	mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	mypostrequest.send(parameters)
}
//http://www.javascriptkit.com/dhtmltutors/ajaxgetpost2.shtml
