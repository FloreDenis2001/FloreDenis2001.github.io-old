let phoneMenu=document.querySelector(".phone-icon");
let navBar=document.querySelector(".nav-bar");

phoneMenu.addEventListener("click",(e)=>{
    if(navBar.style.display==="none"){
        navBar.style.display="flex";
    }else {
        navBar.style.display="none";
    }
});