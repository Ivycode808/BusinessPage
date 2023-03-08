let menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input', {
    strings: ['Software Engineer!', 'Designer!', 'Freelancer!', 'Artist!', 'Sculpter!', 'Writer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
// active link state on scroll //
//get links//
let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function (){
    const scrollPos = this.window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos > (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});