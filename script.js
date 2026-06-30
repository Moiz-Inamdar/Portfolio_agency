// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});


// ===============================
// STICKY NAVBAR
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(5,8,22,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(5,8,22,.65)";
header.style.boxShadow="none";

}

});


// ===============================
// SCROLL TO TOP
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(link.getAttribute("href")==="#"+current){

link.classList.add("current");

}

});

});


// ===============================
// CONTACT FORM
// ===============================

const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.borderColor="red";

valid=false;

}else{

input.style.borderColor="#7c3aed";

}

});

if(valid){

alert("🎉 Thank you! We will contact you soon.");

form.reset();

}

});


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements=document.querySelectorAll(

".service-card,.glass-card,.project,.price-card,.testimonial,.about-container"

);

function reveal(){

revealElements.forEach(el=>{

const windowHeight=window.innerHeight;

const revealTop=el.getBoundingClientRect().top;

if(revealTop<windowHeight-100){

el.style.opacity="1";
el.style.transform="translateY(0px)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// HERO TEXT ANIMATION
// ===============================

const heroHeading=document.querySelector(".hero h1");

heroHeading.animate(

[
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0)"}
],

{

duration:1200,
iterations:1

}

);


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button,.btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

button.clientWidth,
button.clientHeight

);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-button.offsetLeft-radius+"px";

circle.style.top=e.clientY-button.offsetTop-radius+"px";

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});


// ===============================
// PARALLAX HERO
// ===============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*0.4+"px";

});


// ===============================
// LOADER (Optional)
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%c🚀 Website developed by MM Technologies","color:#7c3aed;font-size:20px;font-weight:bold;");