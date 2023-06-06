let numero = document.getElementById('txtnum')
let lista = document.getElementById('sellist')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
  if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encotrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function media(valores){
    
}
function finalizar(){
    if(valores == ''){
        alert('Insira um valor entre 1 e 100.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores adicionados é: ${tot}<p>`
        res.innerHTML += `<p>O maior valor adicionado é: ${maior}`
        res.innerHTML += `<p>O menor valor adicionado é: ${menor}<p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma} `
        res.innerHTML += `<p>A média dos valores é: ${media} `
    }
}