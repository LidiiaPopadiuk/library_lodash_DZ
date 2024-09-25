// 1

const input = document.querySelector('.slider__input')
const img = document.querySelector('.slider__image')

const debounceFunction = _.debounce(() => {
    const value = input.value
    img.style.width = `${value}%`

}, 200)
input.addEventListener('input', debounceFunction)

// 2

const box = document.querySelector('#box')

const mouseMove = _.debounce((event) => {
    // const coord = document.getBoundingClientRect()
    const x = event.clientX-box.offsetWidth/2
    const y = event.clientY-box.offsetHeight/2
    console.log(x,y);
    
    box.style.left = `${x}px`
    box.style.top = `${y}px`
}, 100)

window.addEventListener('mousemove', mouseMove)