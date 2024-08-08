var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === "normal"){
    criarMosquitoTempo = 1500
}else if (nivel === "dificil"){
    criarMosquitoTempo = 1000
}else if (nivel === "god"){
    criarMosquitoTempo = 750
}

// essa função é utilizada para ajustar o tamanho da janela para o aparecimento do mosquito.
function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -=1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        location.href = 'vitoria.html'

    }else
    {
        document.getElementById('cronos').innerHTML = tempo
    }
    
}, 1000)

// essa função é responsável por: 1. criar a posição randomica seguindo o eixo X e eixo Y.
// 2. criar elemento HTML da mosca 
// 3. adicionar a mosca como elemento filho do body.

function positionRandom(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if( vidas > 3){
            location.href = 'fim_jogo.html'
        }else{
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }
    }
    

    var positionX = Math.floor(Math.random() * largura) - 90 //dessa forma a posição não vai ultrapassar os valores de w e h da janela.
    var positionY = Math.floor(Math.random() * altura) - 90

    //essa linha de código faz com que a posição X ou Y não seja menor que 0
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //criar element html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionX + "px"
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito) //o método appendChild adiciona um elemento filho ao .body
    
}

function tamanhoAleatorio (){
    var classe = Math.floor(Math.random() * 3)
    

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}