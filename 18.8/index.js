addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input")
    const span = document.getElementById("span")
    input.addEventListener("keyup", () => {        
        span.innerHTML = input.value.length
        if(span.innerHTML < 5 || span.innerHTML > 20){
            span.classList.add("rojo")
            span.classList.remove("negro")
        }else{
            span.classList.add("negro")
            span.classList.remove("rojo")
        }
    })
})