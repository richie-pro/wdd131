// use the date object
const today = new Date();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector(".menu-toggle");
const menuIcon = menuButton.querySelector("[aria-hidden='true']");
const navigation = document.getElementById("primary-navigation");

function setNavigationOpen(isOpen) {
    navigation.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuIcon.textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", function () {
    setNavigationOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

window.matchMedia("(min-width: 601px)").addEventListener("change", function (event) {
    if (event.matches) {
        setNavigationOpen(false);
    }
});