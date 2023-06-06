function fat(n){ //função que retorna o fat
    let res = 1
    for(n; n > 0; n--){
        res = res * n
    }
    return res
}

console.log(fat(10))