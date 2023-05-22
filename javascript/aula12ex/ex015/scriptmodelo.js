function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fnome = document.getElementById('nome').value 
    if(ano < fano.value || fano.value.length == 0){
        window.alert('Verifique o ano inserido! Ele deve ser menor ou igual ao ano atual.')

    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 18 ) {
                //teen
                img.setAttribute('src', 'teenM.png')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'criancaF.png')
            } else if (idade < 18 ) {
                //teen
                img.setAttribute('src', 'teenF.png')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que ${fnome} é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}