document.querySelector('.hamburger').addEventListener('click', function() {
    var links = document.querySelectorAll('.navbar__link');
    var hamburger = document.querySelector('.hamburger');

    for (var i = 0; i < links.length; i++) {
        if (links[i].style.display === 'block') {
            links[i].style.display = 'none';
        } else {
            links[i].style.display = 'block';
        }
    }
    for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle('show');
    }
    hamburger.classList.toggle('is-active');
});


var mybutton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
};

function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
var elements = document.getElementsByClassName('portrait__text' ) ;
for (var i = 0; i < elements.length; i++) {
    typeEffect(elements[i], 40); 
}

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    projects.forEach(project => {
        observer.observe(project);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll('.education');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    educationItems.forEach(item => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const contentItems = document.querySelectorAll('.content__info h3, .content__info pre');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    contentItems.forEach(item => {
        observer.observe(item);
    });
});



document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', e => {
        button.classList.add('processing');
        e.preventDefault();
    });
});

document.querySelector('.restart').addEventListener('click', e => {
    document.querySelectorAll('.button').forEach(button => {
        button.classList.remove('processing');
    });
    e.preventDefault();
});