// Main script for GNAAS-UMaT website

document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // Hamburger Menu (Mobile)
  // =========================
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
    mobileMenu.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        const section = document.querySelector(targetId);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      });
    });
  }

  // =========================
  // Dropdown Menus (Desktop & Mobile)
  // =========================
  [
    { btn: 'departments-dropdown-button', menu: 'departments-dropdown' },
    { btn: 'register-dropdown-button', menu: 'register-dropdown' },
    { btn: 'mobile-departments-dropdown-button', menu: 'mobile-departments-dropdown' },
    { btn: 'mobile-register-dropdown-button', menu: 'mobile-register-dropdown' }
  ].forEach(({ btn, menu }) => {
    const button = document.getElementById(btn);
    const dropdown = document.getElementById(menu);
    if (button && dropdown) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
      dropdown.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('click', () => dropdown.classList.add('hidden'));
    }
  });

  // =========================
  // Footer Year
  // =========================
  const dateEl = document.getElementById('date');
  if (dateEl) dateEl.textContent = new Date().getFullYear();

  // =========================
  // Gallery Lightbox Slideshow (Grid Gallery)
  // =========================
  const images = Array.from(document.querySelectorAll('.gallery-img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCounter = document.getElementById('lightbox-counter');
  let currentIndex = 0;

  function showLightbox(index) {
    if (!images[index]) return;
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    if (lightboxCounter) {
      lightboxCounter.textContent = `${index + 1} / ${images.length}`;
    }
  }

  if (images.length && lightbox && lightboxImg) {
    images.forEach((img, idx) => {
      img.addEventListener('click', () => showLightbox(idx));
    });

    if (lightboxPrev) {
      lightboxPrev.onclick = (e) => {
        e.stopPropagation();
        showLightbox((currentIndex - 1 + images.length) % images.length);
      };
    }
    if (lightboxNext) {
      lightboxNext.onclick = (e) => {
        e.stopPropagation();
        showLightbox((currentIndex + 1) % images.length);
      };
    }

    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'ArrowLeft') showLightbox((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') showLightbox((currentIndex + 1) % images.length);
      if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });
  }

  // =========================
  // Animate Church Statistics Counting
  // =========================
  function animateCount(elementId, targetNumber, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    function startCounting() {
      let startTime = null;

      function updateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const increment = Math.floor((progress / duration) * targetNumber);

        if (increment < targetNumber) {
          element.textContent = increment;
          requestAnimationFrame(updateCount);
        } else {
          element.textContent = targetNumber;
          setTimeout(() => {
            element.textContent = 0;
            requestAnimationFrame(updateCount);
            startCounting();
          }, 100000); // 1 min pause before looping
        }
      }

      requestAnimationFrame(updateCount);
    }

    startCounting();
  }

  animateCount("count1", 260, 2000);

  // =========================
  // Leader Image Popup (Modal)
  // =========================
  const leaderImgs = document.querySelectorAll('.leader-img');
  const leaderModal = document.getElementById('leader-lightbox');
  const leaderModalImg = document.getElementById('leader-lightbox-img');
  const leaderModalClose = document.getElementById('leader-lightbox-close');

  if (leaderImgs && leaderModal && leaderModalImg && leaderModalClose) {
    leaderImgs.forEach(img => {
      img.addEventListener('click', function () {
        leaderModalImg.src = this.src;
        leaderModal.classList.remove('hidden');
        leaderModal.classList.add('flex');
      });
    });
    leaderModalClose.onclick = function () {
      leaderModal.classList.add('hidden');
      leaderModal.classList.remove('flex');
    };
    leaderModal.onclick = function (e) {
      if (e.target === this) {
        this.classList.add('hidden');
        this.classList.remove('flex');
      }
    };
  }

  // =========================
  // Professional Gallery Slideshow (Auto & Manual)
  // =========================

  const slides = [
    {
      src: "./Gallery Pictures/WhatsApp Image 2025-03-02 at 05.11.37_dbc7e23f.jpg",
      caption: "Church Service"
    },
    {
      src: "./Gallery Pictures/photo_2025-02-08_13-44-49.jpg",
      caption: "Sabbath Worship"
    },
    {
      src: "./Gallery Pictures/photo_2024-08-31_22-43-02.jpg",
      caption: "Bible Study Night"
    },
    {
      src: "./Gallery Pictures/photo_2024-08-25_12-32-43.jpg",
      caption: "Social Gathering"
    },
    {
      src: "./Gallery Pictures/Rep Your School.jpg",
      caption: "Rep Your School"
    },
    {
      src: "./Gallery Pictures/More/8.jpg",
      caption: "Gentlemen's Day"
    },
    {
      src: "./Gallery Pictures/More/4.jpg",
      caption: "Leadership Seminar"
    },
    {
      src: "./Gallery Pictures/More/9.jpg",
      caption: "Adventist Youth Society"
    },
    {
      src: "./Gallery Pictures/More/10.jpg",
      caption: "Socialization"
    }
    // Add more slides as needed
  ];

  let currentSlide = 0, timer = null;
  const slideshowImages = document.getElementById('slideshow-images');
  const caption = document.getElementById('slideshow-caption');
  const dots = document.getElementById('slideshow-dots');
  const prevBtn = document.getElementById('slideshow-prev');
  const nextBtn = document.getElementById('slideshow-next');

  function showSlide(idx) {
    currentSlide = (idx + slides.length) % slides.length;
    slideshowImages.innerHTML = `
      <img src="${slides[currentSlide].src}" alt="Gallery Image" class="w-full h-72 sm:h-96 object-cover transition-all duration-700 rounded-2xl shadow-xl animate-fade-in" loading="lazy" draggable="false">
    `;
    caption.textContent = slides[currentSlide].caption;
    dots.innerHTML = slides.map((_, i) =>
      `<button class="w-3 h-3 rounded-full ${i === currentSlide ? 'bg-yellow-300' : 'bg-white/40'} border-2 border-white transition" aria-label="Go to slide ${i+1}"></button>`
    ).join('');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
    resetTimer();
  }
  function prevSlide() {
    showSlide(currentSlide - 1);
    resetTimer();
  }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
  }

  // Controls
  if (nextBtn && prevBtn && dots) {
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;
    dots.onclick = e => {
      if (e.target.tagName === 'BUTTON') {
        const idx = Array.from(dots.children).indexOf(e.target);
        showSlide(idx);
        resetTimer();
      }
    };
  }

  // Touch/Swipe support
  let startX = 0;
  if (slideshowImages) {
    slideshowImages.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slideshowImages.addEventListener('touchend', e => {
      let dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prevSlide();
      else if (dx < -50) nextSlide();
    });

    // Keyboard support
    slideshowImages.tabIndex = 0;
    slideshowImages.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });
  }

  // Animation for slideshow
  const style = document.createElement('style');
  style.innerHTML = `
    .animate-fade-in { animation: fadeIn 1s; }
    @keyframes fadeIn { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }
  `;
  document.head.appendChild(style);

  // Init slideshow
  if (slideshowImages && caption && dots) {
    showSlide(0);
    timer = setInterval(nextSlide, 4000);
  }
});