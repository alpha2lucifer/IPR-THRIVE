let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    // sticky header
    let header = document.querySelector('header');
    let top_icon = document.querySelector('.top-icon');

    header.classList.toggle('sticky', window.scrollY > 200);
    top_icon.classList.toggle('fixed', window.scrollY > 200);

    // remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav');

menuIcon.onclick = () =>{
    navbar.classList.toggle('active');
};
let name=document.querySelector("#name");


// scroll reveal
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 150
});
ScrollReveal().reveal('.content-box h1, .content-box p, h2, footer form input, footer form textarea, footer button', {origin: 'left'});
ScrollReveal().reveal('.img-div, .event-box, .tournaments h3, .line-container, .text-box, .icon, .line, .about h3, .profile, footer p', {origin: 'bottom'});
ScrollReveal().reveal('.content-box h3, .content-box a, footer a', {origin: 'right'});

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 150
});
ScrollReveal().reveal('.nav-link', {origin: 'top'});
ScrollReveal().reveal('.logo', {origin: 'left'});
ScrollReveal().reveal('.join-us', {origin: 'right'});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Community', 'IPR group', 'Network'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendMail(){
    let params= {
        name: document.querySelector("#name").value,
        message: document.querySelector("#feedback-message").value
    };
    
    const serviceID = "service_8cuu3ud";
    const templateID = "template_2xnh6wk";
    
    emailjs.send(serviceID, templateID, params)
    .then((res)=>{
        document.getElementById('name').value="";
        document.getElementById('feedback-message').value="";
        alert("Thanks for your feedback.\nYour feedback has been send successfully!");
    })
    .catch((err)=> console.log(err));
    
}