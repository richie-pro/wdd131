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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated:  "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated:  "2019, December, 15",
    area:  26969,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated:  "2018, December, 9",
    area:  25349,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/2-Barranquilla-Columblia-Temple-2135201.jpg"
  }
];

const templeCards = document.getElementById("temple-cards");
const galleryTitle = document.getElementById("gallery-title");
const filterLinks = document.querySelectorAll("[data-filter]");

function renderTempleCards(templeList) {
    templeCards.replaceChildren();

    templeList.forEach(function (temple) {
        const card = document.createElement("figure");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");

        image.src = temple.imageUrl;
        image.alt = `Photo of the ${temple.templeName} Temple`;
        image.loading = "lazy";
        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} square feet`;

        caption.append(name, location, dedication, area);
        card.append(image, caption);
        templeCards.append(card);
    });
}

function getDedicationYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

const templeFilters = {
    home: function () {
        return temples;
    },
    old: function () {
        return temples.filter(function (temple) {
            return getDedicationYear(temple) < 1900;
        });
    },
    new: function () {
        return temples.filter(function (temple) {
            return getDedicationYear(temple) > 2000;
        });
    },
    large: function () {
        return temples.filter(function (temple) {
            return temple.area > 90000;
        });
    },
    small: function () {
        return temples.filter(function (temple) {
            return temple.area < 10000;
        });
    }
};

filterLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const filterName = link.dataset.filter;
        renderTempleCards(templeFilters[filterName]());
        galleryTitle.textContent = link.textContent;

        if (window.matchMedia("(max-width: 600px)").matches) {
            setNavigationOpen(false);
        }
    });
});

renderTempleCards(temples);