function carregar() {

    const msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} min.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f5dbad'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#f6a98f'
    
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#4e598a'
    }

}
