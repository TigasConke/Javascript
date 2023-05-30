function contar(){
   var inicio = document.getElementById('txtini')
   var fim = document.getElementById('txtf') 
   var passo = document.getElementById('txtp')
   var i = Number(inicio.value)
   var f = Number(fim.value)
   var p = Number(passo.value)
   res.innerHTML = `Contando:<br>` 
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro!! Algum valor faltando, favor insira todos os valores')
    }
    else if(p == 0){
        alert('Você inseriu 0 em PASSO, atribuindo 1 ao PASSO...')
        p = 1;
        if(i < f){
       
            for(let c = i; c <= f; c = c + p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = i; c >= f; c = c - p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    else if(i < f){
       
        for(let c = i; c <= f; c = c + p){
            res.innerHTML += `${c} \u{1F449}`
        }
    } else{
        for(let c = i; c >= f; c = c - p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}