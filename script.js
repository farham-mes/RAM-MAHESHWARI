const hamMenu = document.querySelector('.ham-menu')
const ham1 = document.querySelector('.ham-menu-close')
const list = document.querySelector('.list')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.add('hiden')
    ham1.classList.remove('hiden')
    list.classList.remove('hiden')

})
ham1.addEventListener('click', () => {
   ham1.classList.add('hiden')
   hamMenu.classList.remove('hiden')
   list.classList.add('hiden')

})
const images = document.querySelector('.a9')
images.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            images.requestFullscreen()
        }  else {
            document.exitFullscreen()
        }
    }
)