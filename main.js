document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
    // Prevent closing when clicking inside mobile menu
    mobileMenu.addEventListener('click', (e) => e.stopPropagation());
    // Close mobile menu when clicking outside
    document.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
    // Close mobile menu and scroll to section on link click
    document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        // Smooth scroll to section
        const section = document.querySelector(targetId);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 200); // Wait for menu to close
        }
      });
    });
  }

  // Dropdowns (desktop & mobile)
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

  // Set current year in footer
  const dateEl = document.getElementById('date');
  if (dateEl) dateEl.textContent = new Date().getFullYear();

  // Gallery Lightbox
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (images && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove('hidden');
      });
    });
    lightbox.addEventListener('click', () => {
      lightbox.classList.add('hidden');
    });
  }

  // Animate church statistics counting
  function animateCount(elementId, targetNumber, duration) {
    const element = document.getElementById(elementId);
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
      }
    }

    requestAnimationFrame(updateCount);
  }

  animateCount("count1", 100, 2000);
  animateCount("count2", 200, 3000);
  animateCount("count3", 300, 4000);
  animateCount("count4", 400, 5000);
});