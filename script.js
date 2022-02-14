//Dec to...

const from = document.querySelector(".from")
const to2 = document.querySelector(".to2")
const to8 = document.querySelector(".to8")
const to16 = document.querySelector(".to16")
const varText = document.querySelector(".varText")

from.addEventListener("blur", ()=>{
    var val = document.querySelector('.from').value;

    if (isNaN(val)){
        varText.innerHTML = "Non è un numero..."
        val = 0
    }

    to2.value = "Base 2: " + Number(val).toString(2);
    to8.value = "Base 8: " + Number(val).toString(8);
    to16.value = "Base 16: " + Number(val).toString(16);
})

//Dec to...

//Scroll

const body = document.querySelector(".body")
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
var i = 5

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
    }
})

window.addEventListener("click",()=>{
    if (i == 1){
        setTimeout(() => body.style.display = "flex", 3000)
    }
})

//Scroll

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
