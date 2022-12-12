let phoneMenu=document.querySelector(".cover-menu");
let navBar=document.querySelector(".nav-bar");

phoneMenu.addEventListener("click",(e)=>{
    if(navBar.style.display==="none"){
        navBar.style.display="flex";
    }else {
        navBar.style.display="none";
    }
});