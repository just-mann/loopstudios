let openBtn = document.getElementById('openMenu');
let closeBtn = document.getElementById('closeMenuBtn');
let menu = document.getElementById('menu');
let desktopSize = 1440;

// Function to Open the Responsive Menu
function openMenu() {
  menu.style.display = 'block';
}

// Function to Close the Responsive Menu
function closeMenu() {
  menu.style.display = 'none';
}

// Open the Responsive Menu
openBtn.addEventListener('click', openMenu);

// Close the Responsive Menu
closeBtn.addEventListener('click', closeMenu);

// Close the Responsive Menu on Window Resize
const closeOnResize = () => {
  if (window.innerWidth >= desktopSize) {
    closeMenu();
  }
}

window.onresize = closeOnResize;
