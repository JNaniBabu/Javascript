
function clickhandler(){
    let username=document.getElementById("user")
    let email=document.getElementById("email")
    let password=document.getElementById("pass")
    let c_password=document.getElementById("cpass")
    let user={
            username :username.value,
            email :email.value,
            password :password.value,

        }

    if (password.value == c_password.value ){
        let users=window.localStorage.getItem("users")
        
        if (users){
            let n=JSON.parse(users)
            n.forEach((val)=>{
                     if(val.email != email){
                            n.push(user)
                            window.localStorage.setItem("users",JSON.stringify(n))
                            alert("Registration Successful..!")
                            location.assign("./LOGIN.html")
                            
                            
                           
                     }
                     else{
                        alert("User is already existed !")
                     }
            })
          

        }
        else{
            let n=[user]
            window.localStorage.setItem("users",JSON.stringify(n))
            alert("Registration Successful..!")
           location.assign("./LOGIN.html")
            
            
        }
    }
    else{
        alert("passwords are not matched...!")
    }
}

function login(){
    let user_name=document.getElementById("user").value
    let user_password=document.getElementById("Password").value
    let users=window.localStorage.getItem("users")
    users=JSON.parse(users)
        let check= users.find(val=>val.username==user_name && val.password==user_password)
        if (check){
            alert("login successful")
            location.assign("./home/home.html")
           
        }
        else{
            alert("invalid credentials ")
            location.reload()
        }
    }