// counterUp 
const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 50)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
});

//  owlcarousal 
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});       

// hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};


var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");
var options = document.getElementsByClassName("options");

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
};