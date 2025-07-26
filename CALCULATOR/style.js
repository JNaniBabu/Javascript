
function result(numbers){
    let  sum=""
    let value=""
    for (let i=0;i<numbers.length;i++){
                    if( numbers[i]=="+"){
                            let v=""
                            for (let val=i+1;val<numbers.length;val++){
                                if (numbers[val]=="+" || numbers[val]=="-" || numbers[val]=="/" || numbers[val]=="%" || numbers[val]=="*" ){
                                    break
                                }
                                else{

                                    v+=numbers[val]  
                                }
                            }
                            if(`${sum.length}`==0){

                                sum+=(+(value))+(+(v))
                                
                            }
                            else{
                                sum=(+(sum))+(+(v))
                            }
                    }
                    else if ( numbers[i]=="-"){
                            let v=""
                            for (let val=i+1;val<numbers.length;val++){
                                if (numbers[val]=="+" || numbers[val]=="-" || numbers[val]=="/" || numbers[val]=="%" || numbers[val]=="*" ){
                                    break
                                }
                                else{

                                    v+=numbers[val]  
                                }
                                
                            }
                            if(`${sum.length}`==0){

                                sum+=(+(value))-(+(v))
                            }
                            else{
                                sum=(+(sum))-(+(v))
                            }
                    }

                    else if ( numbers[i]=="/"){
                            let  v=""
                            for (let val=i+1;val<numbers.length;val++){
                                    if (numbers[val]=="+" || numbers[val]=="-" || numbers[val]=="/" || numbers[val]=="%" || numbers[val]=="*" ){
                                        break
                                    }
                                    else{
                                
                                            v+=numbers[val]  
                                        }
                                    }
                                
                                    if(`${sum.length}`==0){
                                        
                                        sum+=(+(value))/(+(v))
                                    }
                                    else{
                                        sum=(+(sum))/(+(v))
                                    }
                            }
                        
                    else if ( numbers[i]=="%"){
                            let v=""
                            for (let val=i+1;val<numbers.length;val++){
                            if (numbers[val]=="+" || numbers[val]=="-" || numbers[val]=="/" || numbers[val]=="%" || numbers[val]=="*" ){
                                break
                            }
                            else{
                                
                                v+=numbers[val]  
                            }
                            
                            }
                            if(`${sum.length}`==0){
                                
                                sum+=(+(value))%(+(v))
                            }
                            else{
                                sum=(+(sum))%(+(v))
                            }
                        
                    }
                    else if ( numbers[i]=="*"){
                        let v=""
                        for (let val=i+1;val<numbers.length;val++){
                            if (numbers[val]=="+" || numbers[val]=="-" || numbers[val]=="/" || numbers[val]=="%" || numbers[val]=="*" ){
                                break
                            }
                            else{
                                
                                v+=numbers[val]  
                            }
                            
                        }
                        if(`${sum.length}`==0){
                            
                            sum+=(+(value))*(+(v))
                        }
                        else{
                            sum=(+(sum))*(+(v))
                        }
                        
                    }
                    else{
                        value+=numbers[i]
                    } 
    }              
     return sum
    }
        




var val="";
var numbers=[]


function one(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="1"
    values.value=`${val}`
    numbers.push("1")
    
    
}
function second(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="2"
    values.value=val
    numbers.push("2")
    
}
function three(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="3"
    values.value=val
    numbers.push("3")
    
}
function four(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="4"
    values.value=val
    numbers.push("4")
    
}

function five(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="5"
    values.value=val
    numbers.push("5")
    
    
}
function six(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="6"
    values.value=val
    numbers.push("6")
    
}
function seven(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="7"
    values.value=val
    numbers.push("7")
    
}
function eight(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="8"
    values.value=val
    numbers.push("8")
    
}
function nine(){
    let values=document.getElementsByTagName("input")[0]
    
   val+="9"
    values.value=val
    numbers.push("9")
    
}
function zero(){
    let values=document.getElementsByTagName("input")[0]
    
     val+="0"
    values.value=val
    numbers.push("0")
    
}




function plus(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="+"
    values.value=val
    numbers.push("+")
}

function minus(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="-"
    values.value=val
    numbers.push("-")
    
}
function multi(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="*"
    values.value=val
    numbers.push("*")
}
function divison(){
    let values=document.getElementsByTagName("input")[0]
    
    val+="/"
    values.value=val
    numbers.push("/")
}



function reset(){
    let values=document.getElementsByTagName("input")[0]
    
    val=""
    values.value=val
    numbers=[]
    // location.reload()
    
}

function total(){
    let values=document.getElementsByTagName("input")[0]
    
    values.value=`${result(numbers)}`
    val=values.value
    


}

