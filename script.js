// ==============================
// Typing Animation
// ==============================

const texts = [

    "Frontend Developer",

    "Creative Designer",

    "Web Designer",

    "Android App Learner"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function typing(){

    if(count === texts.length){

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(typing, 1500);

    }

    else{

        setTimeout(typing, 120);

    }

})();


// ==============================
// Scroll Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
});

const hiddenElements = document.querySelectorAll(

    "section, .card, .project-card, .timeline-box, .stat-box"

);

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ==============================
// Active Navbar Link
// ==============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => {

            nav.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ==============================
// Scroll To Top Button
// ==============================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "55px";
scrollBtn.style.height = "55px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#38bdf8";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "24px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});