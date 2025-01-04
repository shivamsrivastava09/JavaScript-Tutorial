// generate a random color

const randomColor = function (){
        const hexChars = "0123456789ABCDEF"
        let color = '#'
        for(let i = 0; i<6;i++){
            color += hexChars[(Math.floor(Math.random()*16))]
        }
        return color
    }
    let intervakId = ""
const startChangingColor = function(){
    if(!intervakId){
        intervakId = setInterval(changeBg, 2000)
    function changeBg(){
        document.body.style.backgroundColor = randomColor()
    }
    }
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervakId)
    intervakId = null
})