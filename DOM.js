// getelementbyid--->this method selects one single element of the html whose id property value matches with the specified string value
var myH1=document.getElementById("myH1")
console.log(myH1)
myH1.style.background="red"
myH1.style.color="white"




// getElementsByClassName--->
// This method selects the collection of the html elements with the specified class names
// This method returns an array like object called html collection

// array.from--->
// This method belongs to array object is used to convert array like object(html collection,node list,map)to the pure form of array
var aside=document.getElementsByClassName("asidec")
console.log(aside)
console.log(Array.isArray(aside))
aside[0].style.background="red"
aside[1].style.background="red"
var pureArr=Array.from(aside)
console.log(Array.isArray(pureArr))


// getElementsByTagName--->This method gives

var para=document.getElementsByTagName("p")
console.log(para)



// getElementByqueryselector--->
// this method selects the first matching element with css selector
var myH1=document.querySelector("#myH1")
console.log(myH1);
var asidec=document.querySelector(".asidec")
console.log(asidec)
var para=document.querySelector(".p")
console.log(para)



// getElementByquerySelectorAll--->This method selects multiple elements with the specified css selector 
// It will return an array like object called nodelist 
var aside=document.querySelectorAll(".asidec")
console.log(aside)
console.log(Array.isArray(aside))

// Events:-
// Events are the actions that occur on the webpages 
// *mouse events 
// *keyboard events 
// *screen events 
// *form events 
// *Window events

// AddEventListener:-To react to an Event occured on the webpage we attach Event Handler.accepts two parameters event and callback function
// This method is used to attach an event to the element
  

var div=document.querySelector("div")
  console.log(div)
  div.addEventListener("click",()=>{
    //document.body.style.background="red"
    generateRandom()
  })
  function generateRandom()
  {
    var ans=`#${parseInt(Math.random()*1000000)}`
    console.log(ans)
    document.body.style.background=ans
  }

