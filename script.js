const pet = document.getElementById("pet")
const moodText = document.getElementById("mood")

let lastMove = Date.now()
let lastX = 0
let lastY = 0

let hungerTimer = 0   // how long hunger lasts

function setMood(name,cls){
    pet.className = ""
    pet.classList.add(cls)
    moodText.innerText = name
}

document.addEventListener("mousemove",(e)=>{

    let dx = e.clientX - lastX
    let dy = e.clientY - lastY

    let speed = Math.sqrt(dx*dx + dy*dy)

    lastX = e.clientX
    lastY = e.clientY
    lastMove = Date.now()

    if(speed > 60){
        hungerTimer = 3000   // hungry for 3 seconds
    }

})

setInterval(()=>{

    let idle = (Date.now() - lastMove)/1000

    /* PRIORITY SYSTEM */

    if(hungerTimer > 0){
        hungerTimer -= 200
        setMood("Hungry","hungry")
        return
    }

    if(idle > 7){
        setMood("Sleeping","sleep")
        return
    }

    if(idle > 5){
        setMood("Sleepy","sleepy")
        return
    }

    setMood("Happy","happy")

},200)