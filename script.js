//your code here
let image=document.getElementById("image")
let name=document.getElementById("name")
let getUser=document.getElementById("getUser")
let info=document.getElementById("info")


getUser.addEventListener('click', find)

async function find(){
    let response=await fetch("https://randomuser.me/api/")
    let data= await response.json();
    let user=data.results[0]
    console.log(user);

    name.innerText=user.name.first+" "+user.name.last
    image.src=user.picture.large
    info.dataset.age=user.dob.age
    info.dataset.email=user.email
    info.dataset.phone=user.phone
    
    info.innerText=""
   
}
let age=document.getElementById("age")
let email=document.getElementById("email")
let phone=document.getElementById("phone")

age.addEventListener('click',()=>{
    info.innerText=info.dataset.age
})
email.addEventListener('click',()=>{
    info.innerText=info.dataset.email
})
phone.addEventListener('click',()=>{
    info.innerText=info.dataset.phone
})

find()



