let phoneMenu=document.querySelector(".cover-menu");
let navBar=document.querySelector(".nav-bar");
let links=document.querySelectorAll(".nav-link");
let contactPhone=document.querySelectorAll(".contact");

contactPhone.forEach((contactPhone)=>{
    
    contactPhone.addEventListener("click",(e)=>{
        let childNode = contactPhone.children[1];
        if(childNode.style.display==="none"){
           childNode.style.display="flex";
           setTimeout(() => {
            childNode.style.display = "none";
          }, 3000);
        }else {
            childNode.style.display="none";
        }
    })
  
})


phoneMenu.addEventListener("click",(e)=>{
    if(navBar.style.display==="none"){
        navBar.style.display="flex";
    }else {
        navBar.style.display="none";
    }
});

const animateMeList = document.querySelectorAll('.animate-me');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  animateMeList.forEach((animateMe) => {
    const elementPosition = animateMe.getBoundingClientRect().top;

    if (elementPosition < windowHeight * 0.75) {
      animateMe.classList.add('animate__bounceInLeft');
      animateMe.style.opacity='1';
    } 
  });
});

