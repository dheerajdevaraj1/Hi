function navigation() {
    var nav = document.createElement('nav');
    nav.classList.toggle('responsive');
  }

  
  window.addEventListener('resize', function () 
  {
    var nav = document.querySelector('nav');
    if (window.innerWidth > 768)
     {
      nav.classList.remove('responsive');
     }
       })


       