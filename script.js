
	function exibeTexto(){
		document.getElementById("areatextoretorno").style.display="block";
		document.getElementById("areaimagem").style.display="none";
	}

	function exibeImagem(){
		document.getElementById("areaimagem").style.display="inline-block";
		document.getElementById("areatextoretorno").style.display="none";
	}


	//Caixas de texto//
	const areaTexto = document.querySelector(".textodigitado");
	const areaRetorno = document.querySelector(".textoretorno");

	//A letra "e" é convertida para "enter"
	//A letra "i" é convertida para "imes"
	//A letra "a" é convertida para "ai"
	//A letra "o" é convertida para "ober"
	//A letra "u" é convertida para "ufat"//


	function btCriptografar(){
		if(/^[a-zç ]+$/.test(areaTexto.value)){
		exibeTexto();
		const textoCript = criptografar(areaTexto.value);
		areaRetorno.value = textoCript;
		areaTexto.value = "";	
	}else{
		alert("Digite um texto com letras minúsculas e sem acento!");
		}
	}

	
	function criptografar(stringCript){

		let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
		stringCript  = stringCript.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

		for(let i = 0; i < matrizCodigo.length; i++){
			if(stringCript.includes(matrizCodigo[i][0])){
				stringCript = stringCript.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
			}
		}

		return stringCript;
	}

	function btDescriptografar(){
		if(/^[a-zç ]+$/.test(areaTexto.value)){
		exibeTexto();
		const textoDescript = descriptografar(areaTexto.value);
		areaRetorno.value = textoDescript;
		areaTexto.value = "";
		}else{
		alert("Digite um texto com letras minúsculas e sem acento!");
		}
	}
	
	function descriptografar(stringDescript){

		let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
		stringDescript  = stringDescript.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

		for(let i = 0; i < matrizCodigo.length; i++){
			if(stringDescript.includes(matrizCodigo[i][1])){
				stringDescript = stringDescript.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
			}
		}

		return stringDescript;
	}

	function btLimpar(){
		areaTexto.value = "";
		areaRetorno.value = "";
		exibeImagem();

	}

	function btCopiar(){
		let copiarTexto = document.querySelector(".textoretorno");
		copiarTexto.select();
		document.execCommand("copy");
		
	}





