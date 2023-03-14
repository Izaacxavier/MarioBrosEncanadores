const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const containerDp = document.querySelector('.container_dp')



function controlRight(){
    containerDp.scrollTo({
        left: 2000,
        behavior: 'smooth'
    })
   console.log('clicou') 
}
function controlLeft(){
   containerDp.scrollTo({
    left: -600,
    behavior: 'smooth',
})

}


btnRight.addEventListener('click', controlRight)
btnLeft.addEventListener('click', controlLeft)