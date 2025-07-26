let para=document.getElementsByTagName("p")[0]
let btn1=document.getElementsByTagName("button")[0]
let btn2=document.getElementsByTagName("button")[1]
let btn3=document.getElementsByTagName("button")[2]

let v;
function interval(m,s){
     v=setInterval(() => {
            if (m==0  && s==0){
                    para.innerHTML =`${m<10 ? '0'+m : m}: ${s<10 ? '0'+s: s}`
                    clearInterval(v)
                    return ''
            }
            if( s ==0){
                    m-=1
                    s=59
            }
            else{
                 para.innerHTML =`${m<10 ? '0'+m : m} : ${s<10 ? '0'+s: s}`
            }
            s-=1
    }, 100);
}


function is_cliked(b,c){
    if (c){
        b.style.backgroundColor="GREY"
        b.disabled=true
    }
        
    else{
     b.style.backgroundColor="white"
        b.disabled=false
    }
    
}

function hanldefirst() {
    para.innerText="10:00"
    btn2.disabled = true;
    btn3.disabled = true;
    
    is_cliked(btn1,true)
    interval(10-1,60)
   
    
    
}

function hanldetwo() {
    para.innerText="20:00"
    btn1.disabled = true;
    btn3.disabled = true;
  
    is_cliked(btn2,true)
    interval(20-1,60)
   
    
}
function hanldethree() {
    para.innerText="30:00"
    btn1.disabled = true;
    btn2.disabled = true;
    min=30
    sec=60
    is_cliked(btn3,true)
    interval(30-1,60)

        
}

function restart() {
    
    clearInterval(v)
    para.innerHTML="00:00"
    location.reload()
    

    
}