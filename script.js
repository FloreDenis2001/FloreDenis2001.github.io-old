let phoneMenu=document.querySelector(".cover-menu");
let navBar=document.querySelector(".nav-bar");
let links=document.querySelectorAll(".nav-link");
let contactPhone=document.querySelectorAll(".contact");

function darkMode(){
document.documentElement.style.setProperty('--black-to-white','#222831');
document.documentElement.style.setProperty('--black-to-blue','#222831');
document.documentElement.style.setProperty('--blue-to-black','#00ADB5');
document.documentElement.style.setProperty('--blue-to-white','#00ADB5');
document.documentElement.style.setProperty('--white-to-blue','#E8F6EF');
document.documentElement.style.setProperty('--white-to-black','#E8F6EF');
document.documentElement.style.setProperty('--black-to-grey','#222831');
document.documentElement.style.setProperty('--blue-to-grey','#00ADB5');
document.documentElement.style.setProperty('--white-to-grey','#ffffff');
}

function lightMode(){
  document.documentElement.style.setProperty('--black-to-white','#E8F6EF');
  document.documentElement.style.setProperty('--black-to-blue','#00ADB5');
  document.documentElement.style.setProperty('--blue-to-black','#222831');
  document.documentElement.style.setProperty('--blue-to-white','#E8F6EF');
  document.documentElement.style.setProperty('--white-to-blue','#00ADB5');
  document.documentElement.style.setProperty('--white-to-black','#222831');
  document.documentElement.style.setProperty('--black-to-grey','#F0EEED');
  document.documentElement.style.setProperty('--blue-to-grey','#F0EEED');
  document.documentElement.style.setProperty('--white-to-grey','#F0EEED');

}



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

    if (elementPosition < windowHeight * 0.70) {
      animateMe.classList.add('animate__bounceInLeft');
      animateMe.style.opacity='1';
    } 
  });
});



const colorIcon=document.querySelector('.change-light');


let isColorBlack=false;

colorIcon.addEventListener('click',()=>{
  if(isColorBlack){
     lightMode();
    isColorBlack=false;
  }else {
     darkMode();
    isColorBlack=true;
  }
})


darkMode();

