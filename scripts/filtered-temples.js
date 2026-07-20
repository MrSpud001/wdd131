const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho",
    dedicated: "1984, may, 25",
    area: 35868,
    imageUrl: "images/placeholder-img-2.webp",
  },
  {
    templeName: "Chicago Illinois",
    location: "Chicago, Illinois",
    dedicated: "1985, august, 9",
    area: 37000,
    imageUrl: "images/placeholder-img-2.webp",
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah",
    dedicated: "1884, may, 17",
    area: 119619,
    imageUrl: "images/placeholder-img-2.webp",
  },
  // Add more temple objects here...
];

const navToggleBtn = document.querySelector(".nav-toggle-button");
const nav = document.querySelector("ol");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  //   navToggleBtn.textContent = "&c";
});

// initialize images

function renderImg(array) {
  const galleryEl = document.querySelector(".gallery");
  //   const galleryChildren = galleryEl.childNodes;

  //   galleryEl.forEach((child) => remove(child));

  //   galleryEl.replaceChildren();
  console.log(array);

  array.forEach((temple) => {
    // console.log(temple);
    const newEl = galleryEl.insertAdjacentHTML(
      "afterbegin",
      `
    <figure class="img-card">
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>size: ${temple.area}</p>
    <img loading="lazy" src=${temple.imageUrl} alt="image" />
    </figure>
    `,
    );
  });
}

function clearGallery() {
  const galleryEl = document.querySelector(".gallery");
  while (galleryEl.firstChild) {
    galleryEl.firstChild.remove();
  }
}

renderImg(temples);

// respond to events

const filterBtnHome = document.querySelector("#filter-home");
const filterBtnOld = document.querySelector("#filter-old");
const filterBtnNew = document.querySelector("#filter-new");
const filterBtnLarge = document.querySelector("#filter-large");
const filterBtnSmall = document.querySelector("#filter-small");

filterBtnHome.addEventListener("click", () => {
  console.log("reseting filter");

  renderImg(temples);
});
filterBtnOld.addEventListener("click", () => {
  console.log("filter by old");
  clearGallery();
  renderImg(
    temples.filter((temple) => {
      const getYear = temple.dedicated.substring(0, 4);
      return getYear < 1900;
    }),
  );
});
filterBtnNew.addEventListener("click", () => {
  console.log("filter by new");
  clearGallery();
  renderImg(
    temples.filter((temple) => {
      const getYear = temple.dedicated.substring(0, 4);
      return getYear > 2000;
    }),
  );
});
filterBtnLarge.addEventListener("click", () => {
  console.log("filter by large");
  clearGallery();
  renderImg(
    temples.filter((temple) => {
      return temple.area > 90000;
    }),
  );
});
filterBtnSmall.addEventListener("click", () => {
  console.log("filter by small");
  clearGallery();
  renderImg(
    temples.filter((temple) => {
      return temple.area < 10000;
    }),
  );
});
