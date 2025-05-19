const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.dropdown').forEach(dropdown => {
//       dropdown.addEventListener('click', function() {
//         this.querySelector('.dropdown-menu').classList.toggle('hidden');
//       });
//     });
//   });
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
      event.preventDefault();
      this.querySelector('.dropdown-menu').classList.toggle('hidden');
    });
  });
});
document.addEventListener('DOMContentLoaded',initApp)
document.getElementById("date").innerHTML = new Date().getFullYear();


     
// Toggle desktop dropdown
const departmentsDropdownButton = document.getElementById('departments-dropdown-button');
const departmentsDropdown = document.getElementById('departments-dropdown');

departmentsDropdownButton.addEventListener('click', () => {
  departmentsDropdown.classList.toggle('hidden');
});

// Toggle mobile dropdown


// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  if (!departmentsDropdownButton.contains(event.target) && !departmentsDropdown.contains(event.target)) {
    departmentsDropdown.classList.add('hidden');
  }
  if (!mobileDepartmentsDropdownButton.contains(event.target) && !mobileDepartmentsDropdown.contains(event.target)) {
    mobileDepartmentsDropdown.classList.add('hidden');
  }
});

// Toggle mobile dropdown
const mobileDepartmentsDropdownButton = document.getElementById('mobile-departments-dropdown-button');
const mobileDepartmentsDropdown = document.getElementById('mobile-departments-dropdown');

mobileDepartmentsDropdownButton.addEventListener('click', (event) => {
  // Prevent the click event from propagating to the document listener
  event.stopPropagation();
  mobileDepartmentsDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileDepartmentsDropdownButton.contains(event.target) && !mobileDepartmentsDropdown.contains(event.target)) {
    mobileDepartmentsDropdown.classList.add('hidden');
  }
});

    // Function to animate counting
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

    // Start counting animations
    animateCount("count1", 100, 2000); // Count to 100 in 2 seconds
    animateCount("count2", 200, 3000); // Count to 200 in 3 seconds
    animateCount("count3", 300, 4000); // Count to 300 in 4 seconds
    animateCount("count4", 400, 5000); // Count to 400 in 5 seconds
//Gallery
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
        });
    });
    
    lightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Desktop Register Dropdown
  document.addEventListener('DOMContentLoaded', function () {
    // Desktop Register Dropdown
    const registerBtn = document.getElementById('register-dropdown-button');
    const registerDropdown = document.getElementById('register-dropdown');
    if (registerBtn && registerDropdown) {
      registerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        registerDropdown.classList.toggle('hidden');
      });
      document.addEventListener('click', function (e) {
        if (!registerDropdown.classList.contains('hidden')) {
          registerDropdown.classList.add('hidden');
        }
      });
      registerDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    // Mobile Register Dropdown
    const mobileRegisterBtn = document.getElementById('mobile-register-dropdown-button');
    const mobileRegisterDropdown = document.getElementById('mobile-register-dropdown');
    if (mobileRegisterBtn && mobileRegisterDropdown) {
      mobileRegisterBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileRegisterDropdown.classList.toggle('hidden');
      });
      document.addEventListener('click', function (e) {
        if (!mobileRegisterDropdown.classList.contains('hidden')) {
          mobileRegisterDropdown.classList.add('hidden');
        }
      });
      mobileRegisterDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  });