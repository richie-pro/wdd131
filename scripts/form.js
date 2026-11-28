const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.7 },
    { id: "fc-2050", name: "power laces", averagerating: 4.5 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.9 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.8 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 4.2 }
];

const productSelect = document.querySelector("#productName");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {
    let completedReviews = Number(localStorage.getItem("reviewCount")) || 0;
    completedReviews += 1;
    localStorage.setItem("reviewCount", completedReviews);
    reviewCount.textContent = `You have submitted ${completedReviews} product ${completedReviews === 1 ? "review" : "reviews"}.`;
}

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}