'use strict';


// **********Pre loader**********

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(2).fadeOut('slow');
    $('body').delay(2).css({ 'overflow': 'visible' });
})

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function() {

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");

    });

}




/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {

    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});


// Filter and sorting
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
$(document).bind("contextmenu", function(e) {
    e.preventDefault();
});

$(document).keydown(function(e) {
    if (e.which === 123) {
        return false;
    }
});

// *********ad block*******************



window.onload = function() {
    var button = document.getElementsByName("sandbox")[0]
    var iframe = document.getElementsByName("framez")[0]
    button.addEventListener('click', sndbx, false);

    function sndbx() {
        var nibba = document.getElementById("framez").src;
        if (iframe.sandbox == 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation') {
            document.getElementById("framez").removeAttribute("sandbox");
        }
        frames['framez'].location.href = nibba;
        iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
    }
}
