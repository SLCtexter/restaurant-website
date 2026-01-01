// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", ()=>navLinks.classList.toggle("active"));
document.querySelectorAll("#nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("active")));

// Menu Filter
const filterButtons=document.querySelectorAll(".filter-btn");
const menuCards=document.querySelectorAll(".menu-card");
const noItemsMessage=document.getElementById("no-items");

filterButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        filterButtons.forEach(btn=>btn.classList.remove("active"));
        button.classList.add("active");
        const category=button.getAttribute("data-category");
        let visibleCount=0;
        menuCards.forEach(card=>{
            const cardCategories=card.getAttribute("data-category").split(" ");
            if(category==="all"||cardCategories.includes(category)){
                card.style.display="block";
                visibleCount++;
            }else card.style.display="none";
        });
        noItemsMessage.style.display=visibleCount===0?"block":"none";
    });
});

// Sticky Header
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{window.scrollY>10?header.classList.add("scrolled"):header.classList.remove("scrolled");});