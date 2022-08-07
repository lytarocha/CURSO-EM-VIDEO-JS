let num = [5, 8 , 2, 9, 3 ]
    
num.push(1) //Adiciona um elemento no array 
num.sort() //Ordena os elementos
console.log( `O vetor tem ${num.length} posições`)      // Usada para saber o comprimento do array
console.log(`O primeiro valor do vetor é ${num[1]}`) 

let pos = num.indexOf(8) //Procura o valor do elemento no array
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
