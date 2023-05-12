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


const target = document.querySelector('.animation-target');

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
  // For each entry in the observer
  entries.forEach(entry => {
    // If the target element is intersecting with the viewport
    if (entry.isIntersecting) {
      // Add the animate.css classes to trigger the animation
      target.classList.add('animate__animated', 'animate__fadeInUp');

      // Remove the IntersectionObserver so the animation doesn't repeat
      observer.unobserve(entry.target);
    }
  });
});

// Observe the target element
observer.observe(target);