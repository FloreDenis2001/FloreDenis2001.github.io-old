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

// links.forEach((item)=>{
//     // console.log(item);
//     let click = document.getElementById(item.getAttribute("data-link"));
//     console.log(item.getAttribute("data-link"));
//     console.log(document.getElementById(item.getAttribute("data-link")));
//     console.log(click);
//     click.scrollIntoView();

// })