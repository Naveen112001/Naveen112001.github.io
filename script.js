const navSlide =() =>{
    const bugger=document.querySelector('.bugger');
    const nav = document.querySelector('.nav-links');
    const navlinks=document.querySelectorAll('.nav-links li');
    bugger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
            navlinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation='';
                }
                else
                {
                link.getElementsByClassName.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 3}s`;
                }
            });
            //Bugger animation
            bugger.classList.toggle('toggle');
    });
   
}
navSlide();