const btnLegal = document.querySelector('.btn_legal')
const legal = document.querySelector('.legal')
const btnModalClose = document.querySelector('.btn_modal')
const modalAtendimento = document.querySelector('.modal_atendimento')
const btnAtendimento = document.querySelector('#btn_atendimento')
const btnVideoClose = document.querySelector('#btn_video_close')
const modalVideo = document.querySelector('.modal_video ')
const thumbVideoImg = document.querySelector('#thumb_video_img')
const btnAtendimentoMobile = document.getElementById('btn_atendimento_mobile')



btnLegal.addEventListener('click', function(){
    legal.classList.toggle('visible')
    btnLegal.classList.toggle('ativo')
})


function abrirModal(){
    modalAtendimento.classList.add('visible')
}
function fecharModal(){
    modalAtendimento.classList.remove('visible')
}

function fecharFora(event){
    if(event.target === this)
    fecharModal()
}


btnAtendimento.addEventListener('click', abrirModal)
btnModalClose.addEventListener('click', fecharModal)
modalAtendimento.addEventListener('click', fecharFora)
btnAtendimentoMobile.addEventListener('click', abrirModal)

btnVideoClose.addEventListener('click', function(){
    modalVideo.classList.remove('visible')
})
thumbVideoImg.addEventListener('click', function(){
    modalVideo.classList.add('visible')
})

