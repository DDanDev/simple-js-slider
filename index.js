const arrows = document.getElementsByClassName("arrow");
const backArrow = document.getElementById("backArrow");
const forwardArrow = document.getElementById("forwardArrow");
const slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function changeSlide(direction) {
	direction = direction.target.id;

    //comment or not the line below to enable or disable looping around at the ends of the slides
    if ((direction === "forwardArrow" && currentSlide === slides.length - 1) || (direction === "backArrow" && currentSlide === 0)) return;

	slides[currentSlide].classList.remove("view");
	direction === "backArrow" ? (currentSlide === 0 ? (currentSlide = slides.length - 1) : --currentSlide) : currentSlide === slides.length - 1 ? (currentSlide = 0) : ++currentSlide;
	slides[currentSlide].classList.add("view");

    //comment or not the couple lines below to enable or disable greying out the arrows at the start or end of the slides
	currentSlide === 0 ? backArrow.classList.add("disabledNav") : backArrow.classList.remove("disabledNav");
	currentSlide === slides.length - 1 ? forwardArrow.classList.add("disabledNav") : forwardArrow.classList.remove("disabledNav");
}

for (arrow of arrows) {
	arrow.addEventListener("click", changeSlide);
}
