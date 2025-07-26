let scale=1
function zoom(p){
    let image=document.getElementsByTagName("img")[0]
    image.style.transform=`scale(${p})`
    
}
function handlezoomin(){
    scale+=.1
    zoom(scale)

}

function handlezoomout(){
    scale-=.1
    if(scale < .70){
        scale=1
        zoom(scale)
    }
    else{
        zoom(scale)
    }

}
function handlereset(){
    scale=1
    zoom(scale)
}

let left=0
let right=0
let up=0
let down=0

function trans(p){
     let image=document.getElementsByTagName("img")[0]

     switch (p) {
        case "left":
            left+=5
           
            image.style.transform=` scale(${scale}) translate(${-left}px,${0}px)`
            break;
        case "right":
            right+=5
            
            image.style.transform=` scale(${scale}) translate(${right}px,${0}px)`
            break;
        case "up":
            up+=5
            image.style.transform=`translate(${0}px,${-up}px)`
            break;
        default:
            down+=5
            
            image.style.transform=`translate(${0}px,${down}px)`
            break;
     }

  
}

function handleleft(){

   trans("left")
}   
function handleright(){
   trans("right")
 
}
function handleup(){
   trans("up")
   

}
function handledown(){
   trans("down")
  
}