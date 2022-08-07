function parimpar(n){     // (n) é o parâmetro
    if(n % 2 == 0){       // Acão  
        return 'par'      //Retorno
    }else{                // 2° Ação
        return 'impar'    // 2° Retorno
    }
}

let res = parimpar(4)       //console.log(parimpar(4)) pode ser dessa forma direta tb sem a var , essa é a CHAMADA, o código so roda com a chamada.
console.log(res)            //Escreva o resultado