const hAMburger = document.querySelector(".hAMburger-icon");
const nAVMenu = document.querySelector(".nAV-menu");

hAMburger.addEventListener("click", () => {
    nAMMenu.classList.add("active");
    hAMburger.classList.add("active");
    // document.body.style.overflow = "hidden";
})

document.querySelectorAll(".nAV-link").forEach(n => n.addEventListener("click", () => {
	hAMburger.classList.remove("active");
	nAVMenu.classList.remove("active");
}))
