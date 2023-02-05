const containerNode = document.querySelector(".container");
const slidesNode = document.querySelectorAll(".slide");

let activSlide;

if (window.screen.width > 550) {
	for (const slideNode of slidesNode) {
		slideNode.addEventListener("mouseover", () => {
			clearActiveClass();

			slideNode.classList.add("active");
		});

		slideNode.addEventListener("mouseout", () => {
			clearActiveClass();
		});
	}
} else {
	for (const slideNode of slidesNode) {
		slideNode.addEventListener("touchstart", (event) => {
			event.preventDefault();
			if (slideNode.classList.contains("active")) {
				clearActiveClass();
			} else {
				clearActiveClass();

				slideNode.classList.add("active");
			}
		});

		document.querySelector("body").addEventListener("touchmove", (event) => {
			let touch = event.targetTouches[0];
			let touchX = touch.pageX;
			let touchY = touch.pageY;

			if (
				touchY < slideNode.getBoundingClientRect().bottom &&
				touchX > slideNode.getBoundingClientRect().left &&
				touchY > slideNode.getBoundingClientRect().top &&
				touchX < slideNode.getBoundingClientRect().right
			) {
				if (activSlide !== slideNode) {
					clearActiveClass();
				} else {
					slideNode.classList.add("active");
				}
				activSlide = slideNode;
			}
		});
	}

	for (const slideNode of slidesNode) {
		slideNode.addEventListener("mouseout", () => {
			clearActiveClass();
		});
	}
}

// или //
slidesNode.forEach((slideNode) => {
	slideNode.addEventListener("click", () => {
		clearActiveClass();

		slideNode.classList.add("active");
	});
});

function clearActiveClass() {
	slidesNode.forEach((slideNode) => {
		slideNode.classList.remove("active");
	});
}
