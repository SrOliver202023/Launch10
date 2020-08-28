const mOverlay = document.querySelector('.modal-overlay')
const _Cards = document.querySelectorAll('._Card')

for(let _Card of _Cards){
  _Card.addEventListener('click', () => {
    const vd = _Card.getAttribute("id");
    console.log(vd)
    mOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${vd}`
    mOverlay.classList.add('active')

  })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    mOverlay.classList.remove('active')
    mOverlay.querySelector("iframe").src = "";


})