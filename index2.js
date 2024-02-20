let btns=document.querySelectorAll("button")
let storage=document.querySelector("#storage")
let inp=document.querySelector("input")

btns[0].addEventListener("click",()=>{
    
    console.log(storage.value);
    if(storage.value=="localStorage")
    {
       
    localStorage.setItem("username",inp.value)
    alert("added to the local storage")
    }
    else{
        sessionStorage.setItem("username",inp.value)
    alert("added to the session storage")

    }
})


btns[1].addEventListener("click",()=>{
    
    if(storage.value=="localStorage")
    {
    let ans=localStorage.getItem("username")
    alert(${ans} is the value)
    }
    else{
       let ans=sessionStorage.getItem("username")
       alert(${ans} is the value)
    }
})


btns[2].addEventListener("click",()=>{
    
    if(storage.value=="localStorage")
    {
       let val= localStorage.getItem("username")
    localStorage.removeItem(inp.value)
    alert(${val} is removed from the local Storage)
    }
    else{
       let val= localStorage.getItem("username")

      sessionStorage.removeItem("username")
       alert(${val} is removed from the session Storage)
    }
})


btns[3].addEventListener("click",()=>{
    
    if(storage.value=="localStorage")
    {
    let ans=localStorage.clear("username")
    alert(${ans} is the value)
    }
    else{
       let ans=sessionStorage.clear("username")
       alert(${ans} is the value)
    }
})




localStorage.setItem(1,"dfghj")
localStorage.setItem(2,"dfghj")
localStorage.setItem(3,"dfghj")