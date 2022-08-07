var agora = new Date()
var diaSem = agora.getDay()

diaSem = 0     //Aqui eu atribui a var um novo valor que não entra a data atual do sistema 

/* O COMANDO agora.getDay pega o dia da semana atual , mas ele contabiliza dessa forma

     0-Domingo
     1-Segunda
     2-Terça
     3-Quarta
     4-Quinta
     5-Sexta
 
 */    

console.log(diaSem)
  
switch(diaSem) {      //O switch é usado para testar valores pontuais, não funciona com intervalos, funciona com números inteiros e com caracteres = STRINGS 
    case 0:
        console.log('Domingo')
    break

    case 1:
        console.log('Segunda')
        break                     //O BREAK É OBRIGATÓRIO DENTRO DO SWITCH
    case 2:
        console.log('Terça')   
        break         

    case 3:
        console.log('Quarta')   
        break
    
    case 4:
        console.log('Quinta')
        break
    
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break        
    
    default :                                    //Opcional no momento pq não tem comandos em baixo
        console.log('[ERRO] Dia inválido')   
        break 
}
