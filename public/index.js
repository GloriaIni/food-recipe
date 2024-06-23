const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in'); 
            observer.unobserve(entry.target); 
        }
    });
}


const observer = new IntersectionObserver(handleIntersection, {
    root: null, 
    threshold: 0.5 
});

const elements = document.querySelectorAll('.my-element');
elements.forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('delayButtona').addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        setTimeout(function() {
            
            window.location.href = "index.html"; 
        }, 3000); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('delayButtonb').addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        setTimeout(function() {
            
            window.location.href = "recipe.html"; 
        }, 3000); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('delayButtonc').addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        setTimeout(function() {
            
            window.location.href = "contact.html"; 
        }, 3000); 
    });
});


