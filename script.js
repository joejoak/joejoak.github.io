const button = document.querySelector(".menuimg")
const toggle = document.querySelector(".navigation")
const close = document.querySelector(".x")
let i = 0

button.addEventListener("click", function(){
    i++
        if(i % 2 == 0){toggle.classList.remove("show")}
        
        else{toggle.classList.add("show")
        }
})

button.addEventListener("double-click", function(){
    toggle.classList.remove("show")
})

close.addEventListener("click", function(){
    toggle.classList.remove("show")
})

