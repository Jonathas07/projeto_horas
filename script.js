function carregar(){
    let timereal = new Date()
    let horas = timereal.getHours()
    let minutos = timereal.getMinutes()
    // let horas = 01
    var textoHora = window.document.getElementById('textoHora')
    var imagem = window.document.getElementById('foto')
    textoHora.innerHTML = `São exatamente ${horas}:${minutos} horas`
    if(horas<12&&horas>=6){
        window.document.body.style.backgroundColor = 'rgb(216, 204, 69)'
        imagem.src= 'https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 '
    }else if(horas>=12&&horas<18){
        window.document.body.style.backgroundColor = 'rgba(218, 120, 75, 0.838)'
        imagem.src = 'https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?auto=compress&cs=tinysrgb&w=600'
    }else if(horas>=18&&horas<24){
        window.document.body.style.backgroundColor = 'rgba(1, 5, 52, 0.661)'
        imagem.src = 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600'
    }else{
        window.document.body.style.backgroundColor = 'rgba(1, 5, 52, 0.661)'
        imagem.src = 'https://img.freepik.com/fotos-premium/estrelas-da-via-lactea-no-ceu-noturno-espaco-no-fundo-da-madrugada-da-manha_445280-3218.jpg'
    }
}
