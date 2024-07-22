function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5){
                // bebe
                img.setAttribute('src', 'bebe_menino.jpg')
            } else if (idade >= 14 && idade < 30){
                // jovem
                img.setAttribute('src', 'menino_jovem.jpg')
            } else if (idade >= 30 && idade < 40){
                // meia idade
                img.setAttribute('src', 'homem_meiaidade.jpg')
            } else{
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                // bebe
                img.setAttribute('src', 'bebe_menina.jpg')
            } else if (idade >= 14 && idade < 30){
                // jovem
                img.setAttribute('src', 'menina_jovem.jpg')
            } else if (idade >= 30 && idade < 40){
                // meia idade
                img.setAttribute('src', 'mulher_meiaidade.jpg')
            } else{
                // idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}