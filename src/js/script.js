//Sticky menu
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('header').classList.add('section');
        document.getElementById('logo').classList.add('logo__img');
    } else {
        document.getElementById('header').classList.remove('section');
        document.getElementById('logo').classList.remove('logo__img');
    }
}

// ======================= Menu Responsive===================

var btn = document.querySelector(".header__bars");
var list = document.querySelector(".header__list")
var listItem = document.querySelectorAll(".list-item__link");
let menuStatus = true;

btn.addEventListener(
    "click",
    function() {
        if (menuStatus == true) {
            list.classList.add("active");
            return menuStatus = false
        } else {
            list.classList.remove('active')
            return menuStatus = true
        }
    }
);
listItem.forEach((test, index) => {
    test.addEventListener("click", () => {
        list.classList.remove('active')
        return menuStatus = true
    })
})

// Smooth 
let scrollSmooth = {
    init: function() {
        scrollSmooth.scrollSection()
    },
    scrollSection: function() {
        var navLink = document.querySelectorAll(".list-item__link");
        var section = document.querySelectorAll(".section");
        console.log(navLink)
        console.log(section)
        navLink.forEach((links, index) => {
            links.addEventListener("click", (e) => {
                e.preventDefault()
                let sectionPosition = section[index].offsetTop
                window.scrollTo(0, sectionPosition - 70)
            })
        })
    }
}
scrollSmooth.init()

// vanilla menu
function functionScroll() {
    var section = document.querySelectorAll('.actions');
    sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
    for (i in sections) {
        if (sections[i] <= window.pageYOffset + 70) {
            document.querySelector('.showColor').classList.remove('showColor');
            document.querySelector('a[href*= ' + i + ']').classList.add('showColor');
        }
    }
}

window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);