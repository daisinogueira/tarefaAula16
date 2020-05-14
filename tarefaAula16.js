let nome = document.querySelector('input#fnome')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let nomes = []

function isNomes (n) {
    if(n.length != 0) {
        return true
    }else{
        return false
    }

}

function inlista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNomes(nome.value) && !inlista(nome.value, nomes)) {
        nomes.push(nome.value)
        let item = document.createElement('option')
        item.text = `Nome ${nome.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Escreva um nome ou nome já adicionado!')
    }
    nome.value = ''
    nome.focus()
}

function finalizar(){
    if(nomes.length == 0) {
        window.alert("Escreva um nome antes de finalizar!")
    }else{
        let tot = nomes.length
        nomes.sort()  // colocando o vetor em ordem
        
        res.innerHTML=''
        res.innerHTML += `<p> Ao todo, temos ${tot} nomes cadastrados. <p>`
        res.innerHTML += `<p> Os nomes em ordem alfabetica são: <p>`

        for(let pos in nomes) {
            res.innerHTML += `<p> ${nomes[pos]}. <p>`
        }
    }
}
