var h2s=document.querySelectorAll("h2")
       var h1=document.querySelectorAll("h1")
       var num=0
       h2s[0].addEventListener("click",()=>{
        num++
        h1.innerText=num
       })
       h2s[1].addEventListener("click",()=>{
        num--
        h1.innerText=num
       })