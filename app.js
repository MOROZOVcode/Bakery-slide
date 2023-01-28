const slidesNode = document.querySelectorAll(".slide");

for (const slideNode of slidesNode) {
	slideNode.addEventListener("mouseover", () => {
		clearActiveClass();

		slideNode.classList.add("active");
	});
}

for (const slideNode of slidesNode) {
	slideNode.addEventListener("mouseout", () => {
		clearActiveClass();
	});
}

// for (const slideNode of slidesNode) {
// 	slideNode.addEventListener("click", () => {
// 		clearActiveClass();
// 		slideNode.classList.add("active");
// 	});
// }

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
