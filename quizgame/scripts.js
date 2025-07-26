let questions = [
  {
    question: "What is the output of: print(type([]))?",
    options: ["<class 'list'>", "<class 'dict'>", "<class 'set'>", "<class 'tuple'>"],
    correctAnswer: 0
  },
  {
    question: "Which keyword is used to create a function in Python?",
    options: ["func", "define", "def", "function"],
    correctAnswer: 2
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markdown Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "None of the above"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["Boolean", "Integer", "Float", "Character"],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to link a CSS file in HTML?",
    options: ["<css>", "<link>", "<script>", "<style>"],
    correctAnswer: 1
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".py", ".python", ".pt", ".p"],
    correctAnswer: 0
  },
  {
    question: "What is the output of 3 ** 2 in Python?",
    options: ["6", "9", "8", "None of the above"],
    correctAnswer: 1
  },
  {
    question: "Which operator is used for assignment in JavaScript?",
    options: ["==", "===", "=", "!="],
    correctAnswer: 2
  },
  {
    question: "In CSS, how do you select an element with id 'main'?",
    options: [".main", "#main", "*main", "main"],
    correctAnswer: 1
  },
  {
    question: "Which HTTP method is used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2
  }
];




let i_cont=document.getElementById("instructions")

let q_cont=document.getElementById("questions_container")
q_cont.style.display="none"

let o_cont=document.getElementById("quizover")
o_cont.style.display="none"

let n_cont=document.getElementById("start")

let game=document.getElementById("game")

let opt=document.getElementsByClassName("opt")

let q=document.getElementById("question")

let marking=document.getElementById("marks")
marking.style.margin="50px 0px 5px 0px"

let message=document.getElementById("message")
message.style.margin="5px 0px 5px 0px"

let again=document.getElementById("start_again")
again.style.margin="5px 0px 5px 0px"


let marks=0
let minute=9
let sec=60
let v;
let q_num=0
let is_active=true

n_cont.onclick=()=>{
    n_cont.innerText="Next"
    game.innerHTML=`10:00`
    if (is_active){
                is_active=false
                v= setInterval(()=>{
                    if (minute==0 && sec==0){
                        game.innerText=`00:00`
                        o_cont.style.display="block"
                        q_cont.style.display="none"
                        game.style.display="none"
                        n_cont.style.display="none"

                        marking.innerText=`YourScore :${marks==10 ? marks :" 0"+marks}`  
        
                    if (marks >7){  
                        message.innerText="CONGRATS YOU PASSED !"
                        message.style.fontWeight="bolder"
                        again.innerHTML=" 🏆 "
                        again.style.textDecoration="none"
                        
                    }
                    else{
                          message.innerText="It always seems impossible until its done"
                          message.style.fontWeight="bolder"
                          again.innerText="Start again"
                          again.style.color="blue"
                          again.style.textDecoration="underline"
                          again.onclick=()=>{
                            location.reload()
                          
                        }

                    }
                        clearInterval(v)
                        return
                    }
                    if (sec ==0){
                        minute--
                        sec=59
                    }
                    sec--
                    
                    game.style.width="600px"
                    game.style.height="40px"
                    game.style.display="flex"
                    game.style.justifyContent="center"
                    game.style.alignItems="center"

                    game.innerText=`0${minute } :${sec <10 ? "0"+sec : sec}`
                },1000)
              }       
    if (q_num == questions.length ){
        minute=0
        sec=0
        clearInterval(v)
        game.style.display="none"
        o_cont.style.display="block"
        q_cont.style.display="none"
        game.style.display="none"
        n_cont.style.display="none"
        marking.innerText=`YourScore :${marks==10 ? marks :" 0"+marks}`
        if (marks >7){
            message.innerText="Congrats You Passed!"
            message.style.fontWeight="bolder"
            again.innerHTML=" 🏆 "
            again.style.textDecoration="none"
            
        }
        else{
               marking.innerText=`YourScore :${marks==10 ? marks :" 0"+marks}`  
               message.innerText="There’s room for improvement."
               message.style.fontWeight="bolder"
               again.innerText="Start again"

               again.style.color="blue"
               again.style.textDecoration="underline"
               again.onclick=()=>{
                 location.reload()
               }
               
            }
         return
        
       
    }
    i_cont.style.display="none"
    q_cont.style.display="block"

    q.innerText=questions[q_num]["question"]
    q.style.color="white"

    for (let i = 0; i < 4; i++)
        {
                opt[i].innerText = `${i+1}. ${questions[q_num]["options"][i]}`;
                opt[i].style.backgroundColor = "white";
                opt[i].onclick = () =>
                {
                   
                    
                    if (i === questions[q_num]["correctAnswer"]) 
                    {
                          opt[i].style.backgroundColor = "green";
                          marks++
                    } 
                    else 
                        {
                            opt[i].style.backgroundColor = "red";
                            for (let j = 0; j < 4; j++) 
                                {
                                    if (j === questions[q_num]["correctAnswer"]) 
                                        {
                                            opt[j].style.backgroundColor = "green";
                                        }
                                    }
                        }
                    
                    q_num+=1
                    return

                };

        }
    // q_num+=1  
}
