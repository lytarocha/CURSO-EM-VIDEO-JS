var idade = 70

console.log(`Você tem ${idade} anos`) //Chamando a var idade 

if (idade < 16){                      // Se a idade for menor que 16 declara NÃO VOTA 
    console.log('Não vota')
} else if  (idade < 18 || idade > 65) {  //Se A idade for menor que 18 ou maior que 65  declara VOTO OPCIONAL 
     console.log('Voto opcional')
} else {                                 //Se não declara VOTO OBRIGATÓRIO 
    console.log('Voto obrigatório')
}
   

