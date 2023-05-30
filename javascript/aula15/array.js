let num = [5, 8 , 4]

console.log(`O vetor é: ${num}`)

num[3] = 6 //adiciona um valor no vetor na casa que está entre colchetes(lembrando que as "casas" começam em 0).

console.log(`O vetor agora é: ${num}`)

num.push(7) //adiciona um valor no vetor na casa seguinte. 

console.log(`O vetor agora é: ${num}`)

//num.length()-->comprimento do vetor/quantidade de elementos no vetor.

num.sort() //ordena o vetor em ordem crescente.

console.log(`O vetor agora é: ${num}`)

for(let pos = 0; pos < num.length; pos++){ //for para printar os valores da array a cada loopada.
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // printa o valor da casa i. Ex.: se o i = 1, será printado o valor que está na casa 1.
}
//-----------------------------------------------OU-----------------------------------------------------------------------------------------------------------
console.log('-------------------------------------------------------------------------------------------')
for(let posi in num){ // esse for é mais simples que o anterior e reliza a mesma função, prefira usar esse for para lidar com vetores.
    console.log(`A posição ${posi} tem o valor ${num[posi]}`) // esse for se lê: para cada posição no vetor, printe o que tem nessa posição.
}

let posic = num.indexOf(5) //retorna a posição em que o valor, nesse caso o 7, está.

//posic = num.indexOf(3)---> nesse caso o valor retornado é -1 por que nao tem 3 no vetor.

if(posic == -1){
    console.log(`O número não foi encontrado.`)
}
else{
    console.log(`O valor está na posição ${posic} do vetor`)
}