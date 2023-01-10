const arrows = document.getElementsByClassName("arrow");
const slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function changeSlide(direction) {
	direction = direction.target.id;

	slides[currentSlide].classList.remove("view");
	direction === "backArrow" ? (currentSlide === 0 ? (currentSlide = slides.length - 1) : --currentSlide) : currentSlide === slides.length - 1 ? (currentSlide = 0) : ++currentSlide;
	slides[currentSlide].classList.add("view");

	currentSlide === 0 ? backArrow.classList.add("disabledNav") : backArrow.classList.remove("disabledNav");
	currentSlide === slides.length - 1 ? forwardArrow.classList.add("disabledNav") : forwardArrow.classList.remove("disabledNav");
}

for (arrow of arrows) {
	arrow.addEventListener("click", changeSlide);
}
