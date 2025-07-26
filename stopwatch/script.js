


let timing;
let sec=0
let min=0

let timer=document.getElementById("timer")

function handlestart(){
    timing= setInterval(()=>{
        if (sec==60){
            sec=0
            min+=1
        }
        timer.innerText=(min<10 ?"0"+min:min) + ":"+(sec<10 ?"0"+sec:sec)
        sec+=1

    },
    100)

}
function handlestop(){
    clearInterval(timing)
      
}
function handlereset(){
    clearInterval(timing)
    timer.innerText="00:00"
    min=0
    sec=0
}