const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const jump = () =>{
    mario.classList.add('jump')
    
    setTimeout( ()=>{

        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

    if(pipePosition <= 116 && pipePosition > 0 && marioPosition <= 170){
        console.log(pipePosition)
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }
},100)

document.addEventListener('keydown', jump)