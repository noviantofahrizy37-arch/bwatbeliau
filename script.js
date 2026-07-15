// Countdown Timer
const target = new Date("2026-07-17");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    countdown.innerHTML = `
      <div class="time-segment">
        <div class="time-value">🎉</div>
        <div class="time-label">Happy</div>
      </div>
      <div class="time-segment">
        <div class="time-value">🎂</div>
        <div class="time-label">Birthday</div>
      </div>
    `;
    return;
  }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  countdown.innerHTML = `
    <div class="time-segment">
      <div class="time-value">${String(d).padStart(2, '0')}</div>
      <div class="time-label">Hari</div>
    </div>
    <div class="time-segment">
      <div class="time-value">${String(h).padStart(2, '0')}</div>
      <div class="time-label">Jam</div>
    </div>
    <div class="time-segment">
      <div class="time-value">${String(m).padStart(2, '0')}</div>
      <div class="time-label">Menit</div>
    </div>
    <div class="time-segment">
      <div class="time-value">${String(s).padStart(2, '0')}</div>
      <div class="time-label">Detik</div>
    </div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Slider functionality
const slides = document.querySelectorAll(".slide");
const dots = document.getElementById("sliderDots");
let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.className = `dot ${index === 0 ? 'active' : ''}`;
  dot.onclick = () => goToSlide(index);
  dots.appendChild(dot);
});

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  document.querySelectorAll(".dot")[currentIndex].classList.remove("active");
  
  currentIndex = index;
  
  slides[currentIndex].classList.add("active");
  document.querySelectorAll(".dot")[currentIndex].classList.add("active");
}

// Auto-advance slides
setInterval(() => {
  goToSlide((currentIndex + 1) % slides.length);
}, 4000);

// Manual slide navigation
document.getElementById("prevBtn").onclick = () => {
  goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
};

document.getElementById("nextBtn").onclick = () => {
  goToSlide((currentIndex + 1) % slides.length);
};

// Letter modal
const letterModal = document.getElementById("letterModal");
const openLetterBtn = document.getElementById("openLetter");
const closeLetterBtn = document.getElementById("closeLetter");

openLetterBtn.onclick = () => {
  letterModal.classList.add("show");
};

closeLetterBtn.onclick = () => {
  letterModal.classList.remove("show");
};

letterModal.onclick = (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove("show");
  }
};

// Cake Modal
const cakeModal = document.getElementById("cakeModal");
const cakeButton = document.getElementById("cakeButton");

cakeButton.onclick = () => {
  cakeModal.classList.add("active");
};

cakeModal.onclick = (e) => {
  if (e.target === cakeModal) {
    cakeModal.classList.remove("active");
  }
};

// Close cake modal when clicking outside
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cakeModal.classList.contains("active")) {
    cakeModal.classList.remove("active");
  }
});

// Interactive particles on click
document.addEventListener("click", (e) => {
  const images = ["img/iconmelayang1.png", "img/iconmelayang2.png", "img/iconmelayang3.png", "img/iconmelayang4.png", "img/iconmelayang5.png"];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  const particle = document.createElement("img");
  particle.src = randomImage;
  particle.alt = "floating particle";
  particle.style.position = "fixed";
  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";
  particle.style.width = "40px";
  particle.style.height = "40px";
  particle.style.objectFit = "contain";
  particle.style.pointerEvents = "none";
  particle.style.animation = "floatUp 1.5s ease-out forwards";
  particle.style.zIndex = "999";
  
  document.body.appendChild(particle);
  
  setTimeout(() => particle.remove(), 1500);
});

// Floating particles background (optional)
function createBackgroundParticles() {
  const particlesContainer = document.getElementById("particles");
  const images = ["img/iconmelayang1.png", "img/iconmelayang2.png", "img/iconmelayang3.png", "img/iconmelayang4.png", "img/iconmelayang5.png"];
  
  // Create a few floating particles
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("img");
    const imageSrc = images[Math.floor(Math.random() * images.length)];
    particle.src = imageSrc;
    particle.alt = "floating particle";
    particle.style.position = "fixed";
    particle.style.width = (Math.random() * 40 + 50) + "px";
    particle.style.height = "auto";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 50 + "%";
    particle.style.pointerEvents = "none";
    particle.style.opacity = "0.6";
    particle.style.objectFit = "contain";
    particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";
    particle.style.zIndex = "-1";
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles when page loads
window.addEventListener("load", () => {
  createBackgroundParticles();
});