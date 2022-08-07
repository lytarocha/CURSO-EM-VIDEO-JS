
function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hour = data.getHours()

var hour = 22

msg.innerHTML = `Agora são ${hour} horas! `

if( hour >= 0 && hour < 12){
    //Good morning
    img.src ='fotomanha.png'
    document.body.style.background ='#0c5cf1'

}else if (hour >= 12 && hour <= 18){
   //Godd afternoon
   img.src = 'fototarde.png'
   document.body.style.background ='#ee0034'
}else{
  // Godd night
  img.src ='fotonoite.png'
  document.body.style.background = '#200431'

}

}




