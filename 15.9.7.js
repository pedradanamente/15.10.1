function mostrar(valor){
  if(valor == "semnota"){
    document.getElementById("pmostrar_semnota").style.display = "none";
	  document.getElementById("pocultar_semnota").style.display = "block";
	  document.getElementById("dados_semnota").style.display = "block";
  }
  else if(valor == "semsn"){
    document.getElementById("pmostrar_semsn").style.display = "none";
	  document.getElementById("pocultar_semsn").style.display = "block";
	  document.getElementById("dados_semsn").style.display = "block";
  }
  else if(valor == "prazodestinatario"){
    document.getElementById("pmostrar_prazodestinatario").style.display = "none";
	  document.getElementById("pocultar_prazodestinatario").style.display = "block";
	  document.getElementById("dados_prazodestinatario").style.display = "block";
  }
  else if(valor == "naoencaminhadoprazoestourado"){
    document.getElementById("pmostrar_naoencaminhadoprazoestourado").style.display = "none";
	  document.getElementById("pocultar_naoencaminhadoprazoestourado").style.display = "block";
	  document.getElementById("dados_naoencaminhadoprazoestourado").style.display = "block";
  }
  else if(valor == "pabertonaoencaminhado"){
    document.getElementById("pmostrar_pabertonaoencaminhado").style.display = "none";
	  document.getElementById("pocultar_pabertonaoencaminhado").style.display = "block";
	  document.getElementById("dados_pabertonaoencaminhado").style.display = "block";
  }
  else if(valor == "pgarantiafornecedorexpirado"){
    document.getElementById("pmostrar_pgarantiafornecedorexpirado").style.display = "none";
	  document.getElementById("pocultar_pgarantiafornecedorexpirado").style.display = "block";
	  document.getElementById("dados_pgarantiafornecedorexpirado").style.display = "block";
  }
  else if(valor == "pmenosde30"){
    document.getElementById("pmostrar_pmenosde30").style.display = "none";
	  document.getElementById("pocultar_pmenosde30").style.display = "block";
	  document.getElementById("dados_pmenosde30").style.display = "block";
  }
  else if(valor == "naovaidargarantia"){
    document.getElementById("pmostrar_naovaidargarantia").style.display = "none";
	  document.getElementById("pocultar_naovaidargarantia").style.display = "block";
	  document.getElementById("dados_naovaidargarantia").style.display = "block";
  }
  else if(valor == "prioridadealta"){
    document.getElementById("pmostrar_prioridadealta").style.display = "none";
	  document.getElementById("pocultar_prioridadealta").style.display = "block";
	  document.getElementById("dados_prioridadealta").style.display = "block";
  }
  else if(valor == "nfpendentelancar"){
    document.getElementById("pmostrar_nfpendentelancar").style.display = "none";
	  document.getElementById("pocultar_nfpendentelancar").style.display = "block";
	  document.getElementById("dados_nfpendentelancar").style.display = "block";
  }


}
function ocultar(valor){
  if(valor == "semnota"){
    document.getElementById("pmostrar_semnota").style.display = "block";
	  document.getElementById("pocultar_semnota").style.display = "none";
	  document.getElementById("dados_semnota").style.display = "none";
  }
  else if(valor == "semsn"){
    document.getElementById("pmostrar_semsn").style.display = "block";
	  document.getElementById("pocultar_semsn").style.display = "none";
	  document.getElementById("dados_semsn").style.display = "none";
  }
  else if(valor == "prazodestinatario"){
    document.getElementById("pmostrar_prazodestinatario").style.display = "block";
	  document.getElementById("pocultar_prazodestinatario").style.display = "none";
	  document.getElementById("dados_prazodestinatario").style.display = "none";
  }
  else if(valor == "naoencaminhadoprazoestourado"){
    document.getElementById("pmostrar_naoencaminhadoprazoestourado").style.display = "block";
	  document.getElementById("pocultar_naoencaminhadoprazoestourado").style.display = "none";
	  document.getElementById("dados_naoencaminhadoprazoestourado").style.display = "none";
  }
  else if(valor == "pabertonaoencaminhado"){
    document.getElementById("pmostrar_pabertonaoencaminhado").style.display = "block";
	  document.getElementById("pocultar_pabertonaoencaminhado").style.display = "none";
	  document.getElementById("dados_pabertonaoencaminhado").style.display = "none";
  }
  else if(valor == "pgarantiafornecedorexpirado"){
    document.getElementById("pmostrar_pgarantiafornecedorexpirado").style.display = "block";
	  document.getElementById("pocultar_pgarantiafornecedorexpirado").style.display = "none";
	  document.getElementById("dados_pgarantiafornecedorexpirado").style.display = "none";
  }
  else if(valor == "pmenosde30"){
    document.getElementById("pmostrar_pmenosde30").style.display = "block";
	  document.getElementById("pocultar_pmenosde30").style.display = "none";
	  document.getElementById("dados_pmenosde30").style.display = "none";
  }
  else if(valor == "naovaidargarantia"){
    document.getElementById("pmostrar_naovaidargarantia").style.display = "block";
	  document.getElementById("pocultar_naovaidargarantia").style.display = "none";
	  document.getElementById("dados_naovaidargarantia").style.display = "none";
  }
  else if(valor == "prioridadealta"){
    document.getElementById("pmostrar_prioridadealta").style.display = "block";
	  document.getElementById("pocultar_prioridadealta").style.display = "none";
	  document.getElementById("dados_prioridadealta").style.display = "none";
  }
  else if(valor == "nfpendentelancar"){
    document.getElementById("pmostrar_nfpendentelancar").style.display = "block";
	  document.getElementById("pocultar_nfpendentelancar").style.display = "none";
	  document.getElementById("dados_nfpendentelancar").style.display = "none";
  }
}
function formValidar1(){
	$x = 1;
	var selectacao = document.getElementById("selectacaoup");
	var ItemSelecionado = selectacao.options[selectacao.selectedIndex].value;
	if (ItemSelecionado == "encaminhar") {
		$x = formValidarDestinatario();
	}
	else if (ItemSelecionado == "concluir") {
		$x = formValidarL();
		if ($x == undefined) {
				$x = formValidarSolucao();
		}
	}
	return $x;
}
function formValidar2(){
	$x = 1;
	var selectacao = document.getElementById("selectacaodown");
	var ItemSelecionado = selectacao.options[selectacao.selectedIndex].value;
	if (ItemSelecionado == "encaminhar") {
		$x = formValidarDestinatario();
	}
	else if (ItemSelecionado == "concluir") {
		$x = formValidarL();
		if ($x == undefined) {
				$x = formValidarSolucao();
		}
	}
	return $x;
}
function formValidar4(){
	$x = 1;
	var selectacao = document.getElementById("acao");
	var ItemSelecionado = selectacao.options[selectacao.selectedIndex].value;
	if (ItemSelecionado == "encaminhar") {
		$x = formValidarDestinatario();
	}
	else if (ItemSelecionado == "concluir") {
			$x = formValidarSolucao();
	}
	return $x;
}
function formValidarL() {

		var selectlancamento = document.getElementById("lancamento");
		var ItemSelecionado = selectlancamento.options[selectlancamento.selectedIndex].value;

		if (ItemSelecionado == "") {
			if(document.getElementById("lancamento").value.length < 1){
				alert('Por favor, Informe se foi lançado no estoque');
				document.getElementById("lancamento").focus();
				return false
			}
		}
}
function formValidarDestinatario() {
		if(document.getElementById("destinatario").value.length < 1){
			alert('Por favor, preencha o campo destinatário');
			document.getElementById("destinatario").focus();
			return false
		}
}
function formValidarSolucao() {

		var selectsolucao = document.getElementById("solucao");
		var ItemSelecionado = selectsolucao.options[selectsolucao.selectedIndex].value;

		if (ItemSelecionado == "") {
			if(document.getElementById("solucao").value.length < 1){
				alert('Por favor, preencha o campo da Solução');
				document.getElementById("solucao").focus();
				return false
			}
		}
}
