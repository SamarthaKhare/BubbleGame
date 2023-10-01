var currScore = 0
document.querySelector("#pbtm").addEventListener('click', function (dets) {
    var x = document.querySelector("#hit").textContent
    if (Number(dets.target.textContent) == x) {
        incscore()
    }
    makebubble()
})
function incscore() {
    currScore += 10
    document.querySelector("#score").textContent = currScore
}
function makebubble() {
    var clutter = ""
    for (var i = 1; i <= 120; i++) {
        var x = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble"
        class="flex bg-green-800 border-2 border-transparent rounded-full w-10 h-10 items-center justify-center mx-auto mt-2  hover:bg-green-700 cursor-pointer ">
        <h3>${x}</h3>
    </div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
    document.querySelector("#hit").textContent = Math.floor(Math.random() * 10)
}
var timer = 40
function settimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer
        }
        else {
            document.querySelector("#pbtm").innerHTML = ""

            document.querySelector("#pbtm").innerHTML = `<h1 class='text-center my-auto mx-auto text-4xl'>Game-Over</h1>`
            clearInterval(settimer)
        }
        // console.log(timer)
    }, 1000)
}
makebubble()
settimer()


