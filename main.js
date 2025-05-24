// Main script for GNAAS-UMaT website
document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // Hamburger Menu (Mobile)
  // =========================
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburgerBtn && mobileMenu) {
    // Toggle mobile menu visibility
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
    // Prevent menu from closing when clicking inside
    mobileMenu.addEventListener('click', (e) => e.stopPropagation());
    // Close menu when clicking outside
    document.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
    // Smooth scroll and close menu on link click
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        // Smooth scroll to section after menu closes
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
      // Toggle dropdown visibility
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
      // Prevent dropdown from closing when clicking inside
      dropdown.addEventListener('click', (e) => e.stopPropagation());
      // Close dropdown when clicking outside
      document.addEventListener('click', () => dropdown.classList.add('hidden'));
    }
  });

  // =========================
  // Footer Year
  // =========================
  const dateEl = document.getElementById('date');
  if (dateEl) dateEl.textContent = new Date().getFullYear();

  // =========================
  // Gallery Lightbox Slideshow
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

    // Next/Prev button handlers
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

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'ArrowLeft') showLightbox((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') showLightbox((currentIndex + 1) % images.length);
      if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });

    // Close lightbox on click outside image or on modal background
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });
  }

  // =========================
  // Animate Church Statistics Counting (Looping with 1 min pause)
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
          }, 100000);
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
    // Close modal on close button
    leaderModalClose.onclick = function () {
      leaderModal.classList.add('hidden');
      leaderModal.classList.remove('flex');
    };
    // Close modal when clicking outside the image
    leaderModal.onclick = function (e) {
      if (e.target === this) {
        this.classList.add('hidden');
        this.classList.remove('flex');
      }
    };
  }
});