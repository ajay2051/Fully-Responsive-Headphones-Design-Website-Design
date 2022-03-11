window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

const navSlide = () => {
	const toggleButton = document.querySelector(".toggle-button");
	const nav = document.querySelector(".navlinks");
	toggleButton.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		toggleButton.classList.toggle("toggle");
	});
};
navSlide();
