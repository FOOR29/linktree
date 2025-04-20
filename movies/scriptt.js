const categories = {
  best: [
    { title: "Forrest Gump", rating: "9.1/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033981/b27eb4f9265e3b8c95e87ff0d4a64184_xu8vsd.jpg" },
    { title: "The Notebook", rating: "9/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033986/IMG_20250418_223414_eiwscm.jpg" },
    { title: "Interestelar", rating: "9.7/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033984/IMG_20250418_212427_t7v3yn.jpg" },
    { title: "Good Will Hunting", rating: "8.5/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033974/IMG_20250418_223601_zntjuu.jpg" },
    { title: "Blade Runner 2049", rating: "8.9/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033969/IMG_20250418_223537_lnz30q.jpg" },
    { title: "En busca de la felicidad", rating: "8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033990/IMG_20250418_223216_ei0km8.jpg" },
    { title: "Avengers: Endgame", rating: "8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033971/IMG_20250418_223430_fr2re5.jpg" },
    { title: "Transformers: Dark of the Moon", rating: "8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033986/5697faf92245f8ceb4fd8b33bd564f47_yq1nme.jpg" },
    { title: "Avatar: La forma del agua", rating: "9/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033977/avatar_2_vxidqi.jpg" },
    { title: "The Batman", rating: "8.7/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033975/IMG_20250418_223458_het2cs.jpg" },
    { title: "El hombre araña", rating: "8.4/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033977/el_hombre_ara%C3%B1a_nqwpkf.jpg" },
    { title: "Fragmentado", rating: "8.2/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto,f_auto/v1745033980/IMG_20250418_223258_s8aq95.jpg" }
  ],
  animadas: [
    { title: "Spider-Man: Across the Spider-Verse", rating: "9.4/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/cd11a6d3d751eb6659658a9f549280a2_ozoijl.jpg" },
    { title: "El Gato con Botas: El Último Deseo", rating: "9/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/bf51c6d1dff9133aade315defa76125b_gp7az5.jpg" },
    { title: "Pinocho (Guillermo del Toro)", rating: "9.2/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132516_nwydtk.jpg" },
    { title: "Shrek", rating: "9/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/98d2a40559914060b9e057fe0d5485fd_ixadnf.jpg" },
    { title: "Soul", rating: "8.8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132550_qder7n.jpg" },
    { title: "Rango", rating: "8.7/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/f54d4f2b1b6bd9c54cd86ee4241a934f_ggzep9.jpg" },
    { title: "Los Boxtrolls", rating: "8.3/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132903_z9a6cd.jpg" },
    { title: "Coraline", rating: "8.6/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/0cb4bc8b86dfeeb919cd2d87298808f3_h5w8gm.jpg" },
    { title: "Monster University", rating: "8.4/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/767485e81c2266daf0820ccda9d64988_xxevu4.jpg" },
    { title: "Cars 3", rating: "8.3/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/fd943ad6188cf02ef132511dd45ef17d_livz8u.jpg" },
    { title: "Toy Story 4", rating: "8.2/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132416_oyxjgz.jpg" },
    { title: "Lo Que el Agua se Llevó", rating: "8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132335_jque7l.jpg" },
    { title: "Bee Movie", rating: "7.8/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/IMG_20250419_132439_twn7xz.jpg" },
    { title: "Paranorman", rating: "7.6/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/f_auto,q_auto/v1745102752/IMG_20250419_174517_d5waws.jpg" },
    { title: "La Familia del Futuro", rating: "7.5/10", img: "https://res.cloudinary.com/dlxii2hkq/image/upload/q_auto:eco,f_auto,w_500/d2381dd551fe7741f47a08f11d7820da_wgnqp9.jpg" }
  ],
  /*  terror: [
    { title: "Forrest Gump", rating: "9/10", img: "/movies/portadas/prueba.jpg" },
    { title: "The Notebook", rating: "8.5/10", img: "/movies/portadas/prueba 2.jpg" },
    { title: "Interstellar", rating: "9.2/10", img: "img/interstellar.jpg" },
    { title: "Good Will Hunting", rating: "8.9/10", img: "img/good-will-hunting.jpg" },
    { title: "Blade Runner 2049", rating: "8.7/10", img: "img/blade-runner-2049.jpg" }
  ],
  scifi: [
    { title: "Forrest Gump", rating: "9/10", img: "/movies/portadas/prueba.jpg" },
    { title: "The Notebook", rating: "8.5/10", img: "/movies/portadas/prueba 2.jpg" },
    { title: "Interstellar", rating: "9.2/10", img: "img/interstellar.jpg" },
    { title: "Good Will Hunting", rating: "8.9/10", img: "img/good-will-hunting.jpg" },
    { title: "Blade Runner 2049", rating: "8.7/10", img: "img/blade-runner-2049.jpg" }
  ],
  anime: [
    { title: "Forrest Gump", rating: "9/10", img: "/movies/portadas/prueba.jpg" },
    { title: "The Notebook", rating: "8.5/10", img: "/movies/portadas/prueba 2.jpg" },
    { title: "Interstellar", rating: "9.2/10", img: "img/interstellar.jpg" },
    { title: "Good Will Hunting", rating: "8.9/10", img: "img/good-will-hunting.jpg" },
    { title: "Blade Runner 2049", rating: "8.7/10", img: "img/blade-runner-2049.jpg" }
  ] */
};

const movieGrid = document.getElementById("movieGrid");
const categoryTitle = document.getElementById("categoryTitle");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

function renderMovies(category) {
  movieGrid.innerHTML = "";

  // Utilizando fragmentos de documento para optimizar el renderizado
  const fragment = document.createDocumentFragment();

  categories[category].forEach((movie, i) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.style.animationDelay = `${i * 50}ms`;
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}" class="movie-img" />
      <div class="info">
        <h3>${movie.title}</h3>
        <p class="rating">${movie.rating} ⭐</p>
      </div>
    `;
    fragment.appendChild(card);
  });

  // Agregar todas las cards al contenedor
  movieGrid.appendChild(fragment);

  // Scroll hacia arriba al cambiar categoría
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle menú hamburguesa
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Ocultar menú si se da click afuera
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove("show");
  }
});

// Cambiar de categoría
document.querySelectorAll(".menu li").forEach(li => {
  li.addEventListener("click", () => {
    const cat = li.dataset.category;
    categoryTitle.textContent = li.textContent;
    renderMovies(cat);
    menu.classList.remove("show");
  });
});

// Cargar Best por defecto
renderMovies("best");