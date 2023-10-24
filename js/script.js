/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* email js */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_r6l08uk', 'template_wqxu4ez', '#contact-form', 'TTEKPxMxbkGRo6r1W')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)

            //Clear input fields
            contactForm.reset();
        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';
        })
}

contactForm.addEventListener('submit', sendEmail);

/* scroll selections active link */
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* scroll reveal */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skill-item', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-box, .title', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skill-img', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
