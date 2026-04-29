
// 📚 ALL BOOK DATA
const books = [
  {
    title: "The little Duke: Richard of fearless",
    category: "Fiction",
    image: "../images/the little duke richard of fearless.jpg",
    pdf: "https://drive.google.com/file/d/1kBZJ_3VPmuxNuH9DOaRKCjdVWVzbdIrl/preview"
  },
  {
    title: "My lady's Money",
    category: "Fiction",
    image: "../images/my ladys money.jpg",
    pdf: "../books/my-lady-s-money.pdf"
  },
  {
    title: "Twilight",
    category: "Fiction",
    image: "../images/twilight.jpg",
    pdf: "https://drive.google.com/file/d/1tv9qtmaZzXpEPyV2X8htfpVCOvPuIcBJ/preview"
  },
  { title: "The valley of Silent Men", 
    category: "Fiction", 
    image: "../images/the valley of silent men.jpg", 
    pdf: "https://drive.google.com/file/d/1cQ83QHioUESYGjLaVqHiLNvZqVhHFXzj/preview"
   },
     { title: "The Assassin's Blade", 
      category:"SciFi", 
      image: "../images/assassin's blade.jpg", 
      pdf: "https://drive.google.com/file/d/1gaufqbSolv6XpkTsUYXFMlzvQDhpJMGV/preview" 
    }, 
      { title: "Dispalced", 
        category: "SciFi", 
        image: "../images/dispalced.jpg", 
        pdf: "../books/displaced.pdf" 
      }, 
      { title: "Loneliness of deep space Cargoist", 
        category: "SciFi", 
        image: "../images/loneliness of deep space catrogoist.jpg", 
        pdf: "https://drive.google.com/file/d/1gZuGFTMcABmpUSIiY9HwSHy2Ay_AUgXe/preview" 
      }, 
      { title: "Science Facts and Teachings File", 
        category: "SciFi", 
        image: "../images/science fact and teaching file.jpg", 
        pdf: "books/books/science-fact-file-teaching-guide-1.pdf" 
      }, 
      { title: "The Fire Raiser", 
        category: "SciFi", 
        image: "../images/the fireaisers.jpg", 
        pdf: "../books/-the-fireraisers.pdf" 
      }, 
        { title: "Murder over easy", 
          category: "Mystery", 
          image: "../images/murder over easy.jpg", 
          pdf: "../books/murder-over-easy.pdf" 
      }, 
        { title: "Murder on tyneside", 
            category: "Mystery", 
            image: "../images/murder on tyneside.jpg", 
            pdf: "../books/murder-on-tyneside.pdf" 
          }, 
          { title: "Atonement", 
            category: "Mystery", 
            image: "../images/atonement.jpg", 
            pdf: "../books/atonement.pdf" 
          }, 
          { title: "Family album", 
            category: "Mystery", 
            image: "../images/family album.jpg", 
            pdf: "../books/630fdfe7282c0-family-album.pdf" 
          }, 
          { title: "Tell me why", 
            category: "Mystery", 
            image: "../images/tell me why.jpg", 
            pdf: "../books/tell-me-why.pdf" 
          }, 
          { title: "Mystic pieces", 
            category: "Mystery", 
            image: "../images/mystic pieces.jpg", 
            pdf: "../books/mystic-pieces.pdf" 
          }, 
          { title: "After dark", 
            category: "Supernatural/occult", 
            image: "../images/after dark.png", 
            pdf: "../books/after-dark.pdf" 
          }, 
          { title: "L^abime", 
            category: "Supernatural/occult", 
            image: "../images/L^bime.jpg", 
            pdf: "../books/l-ab-me.pdf" 
          }, 
          { title: "The Great book of Magical Art, Hindu magic and indian Occultism", 
            category: "Supernatural/occult", 
            image: "../images/great book of magic art, hindu magic, indian occultism.jpg", 
            pdf: "https://drive.google.com/file/d/1NNqkV5vQ_kgQVbIde3QJ3RR7zAxrc0vF/preview" 
          }, 
          { title: "Occult science in India", 
            category: "Supernatural/occult", 
            image: "../images/occult science in india.jpg", 
            pdf: "../books/louis-jacolliot_occult-science-in-india-and-among-the-ancients.pdf" 
          }, 
          { title: "Philosophy of spiritual activity", 
            category: "Supernatural/occult", 
            image: "../images/philosphy of spiritual activity.jpg", 
            pdf: "https://drive.google.com/file/d/1KMqAXOGv4IYDOkApsWBfaIxAJSrHYw-9/preview" 
          }, 
          { title: "Tea Cup Reading and Art of Fortune-Telling", 
            category: "Supernatural/occult", 
            image: "../images/tea cup readiing.jpg", 
            pdf: "../books/highland-seer_tea-cup-reading-and-the-art-of-fortune-telling.pdf" 
          }, 
          { title: "The Raja Yoga", 
            category: "Religious", 
            image: "../images/raja yoga.jpg", 
            pdf: "../books/Raja-Yoga.pdf" 
          }, 
          { title: "Theosophy", 
            category: "Religious", 
            image: "../images/theosophy.jpg", 
            pdf: "../books/rudolf-steiner_theosophy.pdf" 
          }, 
          { title: "From the Upanishads", 
            category: "Religious", 
            image: "../images/from the upanishads.jpg", 
            pdf: "../books/From-The-Upanishads-by-Ananda-Wood.pdf" 
          }, 
          { title: "Hindu Gods and Heroes", 
            category: "Religious", 
            image: "../images/hindu gods and heroes.jpg", 
            pdf: "../books/Hindu-Gods-and-Heroes.pdf" 
          }, 
          { title: "Katha Upanishads", 
            category: "Religious", 
            image: "../images/katha upanishad.jpg", 
            pdf: "../books/Hindu-Gods-and-Heroes.pdf" 
          }, 
          { title: "When heaven invades", 
            category: "Religious", 
            image: "../images/where heaven invades.jpg", 
            pdf: "https://drive.google.com/file/d/1hRKEr8xR3AR5eMtEOOWsJ1f7szfegfHJ/preview" 
          }, 
          { title: "2 states of my marriage", 
            category: "Motivational", 
            image: "../images/2 states the story of my marriage.jpg", 
            pdf: "../books/2-states-the-story-of-my-marriage.pdf" 
          }, 
          { title: "Raod to self knowledge", 
            category: "Motivational", 
            image: "../images/road to self knowledge.jpg", 
            pdf: "../books/rudolf-steiner_road-to-self-knowledge.pdf" 
          } 
        ];

// 🌍 GLOBAL STATE
let currentCategory = "All";
let currentSearch = "";

// 📦 GET CONTAINERS
const favContainer = document.getElementById("favoritesContainer");

// ================= PDF =================
function openFullPDF(file) {
  window.open(file, "_blank");
}

function openPDF(file) {
  document.getElementById("pdfFrame").src = file;
  document.getElementById("pdfModal").style.display = "block";
}

function closeModal() {
  document.getElementById("pdfModal").style.display = "none";
  document.getElementById("pdfFrame").src = "";
}

window.onclick = function(event) {
  const modal = document.getElementById("pdfModal");
  if (event.target === modal) closeModal();
};

// ------- loader-----//
function showLoader() {
  document.getElementById("loader").classList.remove("loader-hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("loader-hidden");
}

//--------------skeleton loader----//
function showSkeleton() {
  const sectionContainer = document.getElementById("bookSections");
  sectionContainer.innerHTML = "";

  let skeletonHTML = `
    <h2 class="section-title">Loading...</h2>
    <div class="row">
  `;

  // create 8 fake cards
  for (let i = 0; i < 8; i++) {
    skeletonHTML += `<div class="skeleton-card"></div>`;
  }

  skeletonHTML += `</div>`;

  sectionContainer.innerHTML = skeletonHTML;
}

// ================= SEARCH =================
function searchBooks() {
  currentSearch = document.getElementById("search").value.toLowerCase().trim();
  applyFilters();
}

// ================= FILTER =================
function filterBooks(category) {
  currentCategory = category;
  applyFilters();
}

// ================= MAIN RENDER =================
function applyFilters() {

  showSkeleton(); // 🔥 show skeleton first

  setTimeout(() => {

    const sectionContainer = document.getElementById("bookSections");
    sectionContainer.innerHTML = "";

    const categories = [...new Set(books.map(book => book.category))];

    let hasResult = false;

    categories.forEach(cat => {

      if (currentCategory !== "All" && cat !== currentCategory) return;

      let filteredBooks = books.filter(book => book.category === cat);

      if (currentSearch !== "") {
        filteredBooks = filteredBooks.filter(book =>
          book.title.toLowerCase().includes(currentSearch)
        );
      }

      if (filteredBooks.length === 0) return;

      hasResult = true;

      let rowHTML = `
        <h2 class="section-title">${cat}</h2>
        <div class="row">
      `;

      filteredBooks.forEach(book => {
        const fav = JSON.parse(localStorage.getItem("favorites")) || [];
        const isFav = fav.includes(book.title);

        rowHTML += `
          <div class="book">
            <img src="${book.image}">
            <h4>${book.title}</h4>

            <button onclick="openPDF('${book.pdf}')">Preview</button>
            <button onclick="openFullPDF('${book.pdf}')">Read Full</button>

            <button onclick="toggleFavorite('${book.title}')">
              <span class="heart">${isFav ? "❤️" : "🤍"}</span>
            </button>
          </div>
        `;
      });

      rowHTML += `</div>`;
      sectionContainer.innerHTML += rowHTML;
    });

    // ❗ No results message
    if (!hasResult) {
      sectionContainer.innerHTML = `
        <p style="text-align:center; font-size:18px; margin-top:20px;">
          No books found 😔
        </p>
      `;
    }

  }, 400); // smooth loading feel
}

   

// ================= FAVORITES =================
function displayFavorites() {
  if (!favContainer) return;

  const fav = JSON.parse(localStorage.getItem("favorites")) || [];
  const favBooks = books.filter(book => fav.includes(book.title));

  favContainer.innerHTML = "";

  if (favBooks.length === 0) {
    favContainer.innerHTML = "<p>No favorites yet</p>";
    return;
  }

  favBooks.forEach(book => {
    favContainer.innerHTML += `
      <div class="book">
        <img src="${book.image}">
        <h3>${book.title}</h3>

        <button onclick="openPDF('${book.pdf}')">Preview</button>
        <button onclick="openFullPDF('${book.pdf}')">Read Full</button>

        <button onclick="toggleFavorite('${book.title}')">💔</button>
      </div>
    `;
  });
}

function toggleFavorite(title) {
  let fav = JSON.parse(localStorage.getItem("favorites")) || [];

  if (fav.includes(title)) {
    fav = fav.filter(item => item !== title);
    showToast("Removed from favorites 💔");
  } else {
    fav.push(title);
    showToast("Added to favorites ❤️");
  }

  localStorage.setItem("favorites", JSON.stringify(fav));

  applyFilters();     // 🔥 instant UI update
  displayFavorites(); // 🔥 instant update
}

// ================= TOAST =================
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ================= DARK MODE =================
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// ================= LOGIN =================
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("welcomeUser").innerText = "Hello, " + username;
  }
});

// ================= LOGOUT =================
function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

// ================= LOAD =================
applyFilters();
displayFavorites();

window.onload = function () {
  applyFilters();
  displayFavorites();
  hideLoader();
};

// ================= HERO SLIDER =================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

// auto change every 3 seconds
setInterval(changeSlide, 3000);


