const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   

	let tipo = document.getElementById("textInput").value
	tipo = tipo.toLowerCase()
	tipo = tipo.replace(/[^a-z'\s]+/g, "")
	
	let numLetras = {}

	for(let i = 0; i < tipo.length; i++){
		let letra = tipo[i]
		numLetras[letra] === undefined ? (numLetras[letra] = 1) : (numLetras[letra]++)
	}

	for(let letra in numLetras){
		const spanLetra = document.createElement("span")
		const conteudo = `"${letra}": ${numLetras[letra]},   `
		spanLetra.innerText = conteudo
		const lettersDiv = document.getElementById("lettersDiv") 
		lettersDiv.appendChild(spanLetra)
	}

	let word = tipo.split(/\s/)
	let numPalavra = {}

	for(let i = 0; i < word.length; i++){
		let palavra = word[i]
		numPalavra[palavra] === undefined ? numPalavra[palavra] = 1 : numPalavra[palavra]++
	}

	for(let palavra in numPalavra){
		const spanPalavra = document.createElement("span")
		const conteudo = `"${palavra}": ${numPalavra[palavra]},   `
		spanPalavra.innerText = conteudo
		const wordsDiv = document.getElementById("wordsDiv")
		wordsDiv.appendChild(spanPalavra)
	}
	
})

