let amigo = {nome: 'Jose', sexo: 'M', peso: '85.4',engordar(p = 0){
    console.log('Engordou')
    this.peso += p

}}

amigo.engordar(2)   //Coloquei a função engordar dentro da var amigo
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)