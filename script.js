const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("model");

//  toggle nav

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// sho modal

open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal

close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click

window.addEventListener("click", (e) =>
  e.target == modal ? classList.remove("show-modal") : false
);

// search / API section start

const accessKey = "NtrVlyQ61K4pFwyaf5tjugQCghpWVUnVHqAb1MVTRnM";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  for (const result of results) {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  }
  searchMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchResult.innerHTML = ""; // Clear the previous search results
  searchImages();
});

searchMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
// search / API section end
