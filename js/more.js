for (let i = 1; i < 4; i++) {
	document.getElementById(`more-${i}`).addEventListener("click", function () {
		const hiddenDiv = document.getElementById(`hidden-${i}`);
		const span = this.querySelector("span");
		const icon = this.querySelector("ion-icon");

		if (hiddenDiv.style.display === "block") {
			hiddenDiv.style.display = "none";
			span.textContent = "Zobrazit více";
			icon.name = "chevron-down-outline";
		} else {
			hiddenDiv.style.display = "block";
			span.textContent = "Zobrazit méně";
			icon.name = "chevron-up-outline";
		}
	});
}
