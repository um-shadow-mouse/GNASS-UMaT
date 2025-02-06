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
document.getElementById('date').innerHTML=new Date().getFullYear()