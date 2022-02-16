//Dec to...

const from = document.querySelector(".from")
const to2 = document.querySelector(".to2")
const to8 = document.querySelector(".to8")
const to16 = document.querySelector(".to16")

from.addEventListener("blur", ()=>{
    var val = document.querySelector('.from').value;

    to2.innerHTML = "Base 2: " + Number(val).toString(2);
    to8.innerHTML = "Base 8: " + Number(val).toString(8);
    to16.innerHTML = "Base 16: " + Number(val).toString(16);
})

from.addEventListener("keyup", ()=>{
    if(event.keyCode === 13){
        var val = document.querySelector('.from').value;

        to2.innerHTML = "Base 2: " + Number(val).toString(2);
        to8.innerHTML = "Base 8: " + Number(val).toString(8);
        to16.innerHTML = "Base 16: " + Number(val).toString(16);
        
        to2.classList.add("swing")
        to8.classList.add("swing")
        to16.classList.add("swing")

        setTimeout(() => to2.classList.remove("swing"), 1500)
        setTimeout(() => to8.classList.remove("swing"), 1500)
        setTimeout(() => to16.classList.remove("swing"), 1500)
    }
})

//Dec to...

//Scroll

const body = document.querySelector(".body")
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
var i = 5

window.addEventListener("keyup", ()=>{    
    i--
    if ( i == 4){
        green.classList.add("animation")
    }
    console.log(i);
})

window.addEventListener("keyup", ()=>{
    if (i == 3){
        yellow.classList.add("animation")
    }
})

window.addEventListener("keyup", ()=>{
    if (i == 2){
        blue.classList.add("animation")
    }
})

window.addEventListener("keyup", ()=>{
    if (i == 1){
        black.classList.add("animation")
        setTimeout(() => body.style.display = "flex", 1500)
    }
})



window.addEventListener("click", ()=>{    
    i--
    if ( i == 4){
        green.classList.add("animation")
    }
    console.log(i);
})

window.addEventListener("click", ()=>{
    if (i == 3){
        yellow.classList.add("animation")
    }
})

window.addEventListener("click", ()=>{
    if (i == 2){
        blue.classList.add("animation")
    }
})

window.addEventListener("click", ()=>{
    if (i == 1){
        black.classList.add("animation")
        setTimeout(() => body.style.display = "flex", 1500)
    }
})

//Scroll

//Skip introduction

// const yellow = document.querySelector('.yellow')
// const blue = document.querySelector('.blue')
// const black = document.querySelector('.black')
const skip = document.querySelector(".skipbox")

skip.addEventListener("click", ()=>{
    green.classList.add("animation")
    setTimeout(() => yellow.classList.add("animation"), 1500)
    setTimeout(() => blue.classList.add("animation"), 3000)
    setTimeout(() => black.classList.add("animation"), 4500)
    setTimeout(() => body.style.display = "flex", 6000)
})

//Skip introduction

//Screen modifier

const click = document.querySelector(".click")
const click1 = document.querySelector(".click1")
const click2 = document.querySelector(".click2")
const click3 = document.querySelector(".click3")

if (window.innerWidth < 630){
    click.innerHTML = "Premi per continuare..."
}
if (window.innerWidth < 630){
    click1.innerHTML = "Premi per continuare..."
}
if (window.innerWidth < 630){
    click2.innerHTML = "Premi per continuare..."
}
if (window.innerWidth < 630){
    click3.innerHTML = "Premi per continuare..."
}

//Screen modifier

//Random BG

// const body = document.querySelector(".body")
// const from = document.querySelector(".from")

var num = Math.floor(Math.random() * 4)

if(num == 0){
    body.style.backgroundColor = "#4caf50"
    body.style.transition = "0.8s"
}

if(num == 1){
    body.style.backgroundColor = "#ffc107"
    body.style.transition = "0.8s"
}

if(num == 2){
    body.style.backgroundColor = "#2196f3"
    body.style.transition = "0.8s"
}

if(num == 3){
    body.style.backgroundColor = "#455a64"
    body.style.transition = "0.8s"
}

//Random BG

//IOS

// First we check if you support touch, otherwise it's click:
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

// Then we bind via thát event. This way we only bind one event, instead of the two as below
window.addEventListener(touchEvent, ()=>{
    i--
    if ( i == 4){
        green.classList.add("animation")
    }
    console.log(i);
});

window.addEventListener(touchEvent, ()=>{
    if (i == 3){
        yellow.classList.add("animation")
    }
});

window.addEventListener(touchEvent, ()=>{
    if (i == 2){
        blue.classList.add("animation")
    }
});

window.addEventListener(touchEvent, ()=>{
    if (i == 1){
        black.classList.add("animation")
        setTimeout(() => body.style.display = "flex", 1500)
    }
});


//IOS