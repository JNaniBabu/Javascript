fetch ("https://fakestoreapi.com/products")
.then(data => data.json())
.then(values =>values.forEach(val => {
     let card=document.createElement("div")
     card.style.width="20%"
     card.style.height="20%"
     card.style.borderRadius="10px"
     card.style.padding="10px"

     card.style.display="flex"
     card.style.flexDirection="column"
     card.style.justifyContent="space-between"
     card.style.alignItems="left"
     card.style.backgroundColor="rgb(255, 255, 255)"
     card.style.justifyContent="center"
     card.style.border="1px solid "
     card.style.boxShadow="0px 0px 4px "
     card.style.position="relative"

     let image=document.createElement("img")
     image.src=val.image
     image.style.width="100%"
     image.style.height="40%"
    //  image.style.position="absolute"
    //  image.style.top="30px"
    //  image.style.left="5px"
     image.style.margin="0px 0px 10px 0px"
     
     image.style.backgroundColor="transprent"
     
     let title=document.createElement("p")
     title.innerText=val.title
     title.style.fontSize="1rem"
     title.style.margin="5px 0px 5px 0px"
     title.style.fontWeight="bolder"

     let description=document.createElement("p")
     description.innerText=val.description
     description.style.margin="5px 0px 5px 0px"
     description.style.fontSize="1rem"
     if (val.description.length >130){
        description.innerText=val.description.slice(0,130)
     }
     else{
         description.innerText=val.description
     }

     let price =document.createElement("div")
     price.innerText=`$ ${val.price}`
     price.style.width="25%"
     price.style.height="30px"
     price.style.borderRadius="5px"
     price.style.textAlign="center"
     price.style.position="absolute"
     price.style.bottom="10px"
     price.style.backgroundColor="rgb(255, 82, 82)"
     price.style.fontSize='1.1rem'
     price.style.display="flex"
     price.style.alignItems="center"
     price.style.justifyContent="center"


     let add=document.createElement("div")
     add.style.width="25%"
     add.style.height="30px"
     add.innerHTML='Add'
     add.style.borderRadius="5px"
     add.style.textAlign="center"
     add.style.position="absolute"
     add.style.bottom="10px"
     add.style.right="10px"
     add.style.backgroundColor="rgb(255, 82, 82)"
     add.style.display="flex"
     add.style.alignItems="center"
     add.style.justifyContent="center"

    let main=document.getElementsByClassName("body")[0]
    
    card.append(image,title,description,price,add)
    main.append(card)


    
}))
var icon="black"
var nav="white"
var img="black"

var count=1
function themehandle(){
    let navbar=document.getElementsByClassName("navbar")[0]
    let image=document.getElementsByClassName("img")[0]
    image.style.color=`${img}`
    navbar.style.backgroundColor=`${nav}`
    let theme=document.getElementsByTagName("i")[0]
    theme.style.color=`${icon}`

    let main=document.getElementsByClassName("body")[0]
    main.style.backgroundColor=`${icon}`

    if (icon=="black"){
        icon="white"
        nav="black"
        img="white"
    }
    else{
        icon="black"
        nav="white"
        img="black"
    }
    
}
