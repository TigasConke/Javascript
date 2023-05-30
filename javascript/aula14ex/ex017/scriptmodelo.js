function tabuada(){
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    var resultado 
    if(numero.value.length == 0){
        alert('[ERRO] Por favor, insira um número para ver sua tabuada. ')
    } else{
        var num = Number(numero.value)
        tab.innerHTML = ''
        for(var mult = 0; mult < 11; mult++){
            let item = document.createElement('option')
            resultado = num * mult
            item.text = `${num} x ${mult} = ${resultado}`
            item.value = `tab${mult}`
            tab.appendChild(item)
        }
    }
}