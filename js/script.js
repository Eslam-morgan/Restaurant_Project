
const track = document.querySelector(".chefs-track");
const cards = document.querySelectorAll(".chef-card");
const nextBtn = document.getElementById("nextChef");
const prevBtn = document.getElementById("prevChef");

let currentIndex = 0;

function getVisibleCards() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 4;
}

function updateSlider() {
  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, cards.length - visibleCards);

  currentIndex = Math.min(currentIndex, maxIndex);

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(track).gap) || 0;

  track.style.transform =
    `translateX(-${currentIndex * (cardWidth + gap)}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === maxIndex;

  prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}

nextBtn.addEventListener("click", () => {
  const maxIndex = Math.max(0, cards.length - getVisibleCards());

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);

updateSlider();
