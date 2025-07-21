// Generate stars background
function createStars() {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.opacity = 0.2 + Math.random() * 0.8;
    star.style.setProperty("--duration", `${2 + Math.random() * 8}s`);
    starsContainer.appendChild(star);
  }
}

// Generate floating coins
function createCoins() {
  const coinsContainer = document.getElementById("floating-coins");
  const coinTypes = [
    "bitcoin",
    "ethereum",
    "dogecoin",
    "solana",
    "xrp",
    "cardano",
    "polkadot",
    "litecoin",
  ];

  for (let i = 0; i < 30; i++) {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    const type = coinTypes[Math.floor(Math.random() * coinTypes.length)];
    coin.style.left = `${Math.random() * 100}%`;
    coin.style.top = `${Math.random() * 100}%`;
    coin.style.width = `${20 + Math.random() * 40}px`;
    coin.style.height = coin.style.width;
    coin.style.backgroundImage = `url('https://cryptologos.cc/logos/${type}-${
      type === "dogecoin" ? "doge" : type
    }-logo.svg')`;
    coin.style.animationDelay = `${Math.random() * 5}s`;
    coinsContainer.appendChild(coin);
  }
}

// Copy to clipboard functionality
function setupCopyButtons() {
  document.querySelectorAll(".btn-copy").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const text = button.getAttribute("data-text");
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const originalText = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(() => {
            button.innerHTML = originalText;
          }, 2000);
        });
      }
    });
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Navbar scroll effect
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  createStars();
  createCoins();
  setupCopyButtons();
  setupMobileMenu();
  setupNavbarScroll();
});
