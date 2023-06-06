function imparpar(n){
    if(n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = imparpar(9392)
console.log(`O número passado como parâmetro é ${res}`)