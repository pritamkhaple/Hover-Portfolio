// for hover effect boxes

const bgAnimations = document.getElementById("bg-animations");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement("div");

    colorBox.classList.add("color-box");
    bgAnimations.append(colorBox);
}


// For Hamburger navigation

let burger = document.getElementById("burg");
let close = document.getElementById("closed");
let navv = document.querySelector(".navv");
let navigation = document.querySelector(".navigation");

burger.addEventListener("click", () => {
    navv.style.display = "flex";
    navigation.style.height = "100vh";
    burger.style.display = "none";
    close.style.display = "block";
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    navv.style.display = "none";
    navigation.style.height = "auto";
    burger.style.display = "block";
    close.style.display = "none";
    document.body.style.overflow = "auto";
});



// when we click on any li navigation shoud get hide, JS for that
let navItems = document.querySelectorAll('.nav-ul li');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector(".navv").style.display = "none";
            document.querySelector(".navigation").style.height = "auto";
            document.querySelector("#burg").style.display = "block";
            document.querySelector(".close").style.display = "none";
            document.querySelector("body").style.overflow = "auto";
        } else {
            document.querySelector(".navv").classList.add("hidden");
            document.querySelector(".navigation").classList.remove("expanded");
            document.querySelector("#burg").classList.remove("hidden");
            document.querySelector(".close").classList.add("hidden");
            document.querySelector("body").classList.remove("no-overflow");
        }
    });
});


// For Major and small projects tab

let button = document.getElementById("majproj");

button.addEventListener("click", () => {
    console.log("Button clicked"); // Just to test the click functionality
    document.querySelector(".small-proj").style.display = "none";
    document.querySelector(".majo-proj").style.display = "block";
});

let buttonn = document.getElementById("smallproj");

buttonn.addEventListener("click", () => {
    console.log("Button clicked"); // Just to test the click functionality
    document.querySelector(".majo-proj").style.display = "none";
    document.querySelector(".small-proj").style.display = "flex";
});


let rdButtons = document.getElementsByClassName("read-btn");

for (let i = 0; i < rdButtons.length; i++) {
    rdButtons[i].addEventListener("click", function () {
        console.log("to check read btn");

        let readMore = this.parentElement.querySelector(".read-more");
        let readBtn = this.parentElement.querySelector("#read");

        if (readMore && readBtn) {
            readMore.style.display = "block";
            readBtn.style.display = "none";
        }
    });
}


// For Top arrow function

document.addEventListener("DOMContentLoaded", function () {
    let topArrow = document.getElementById("topArrow");

    topArrow.addEventListener("click", () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // You can use "auto" for instant scrolling
        });
    });
});





