const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

let carouselTrack = document.getElementById("carouselTrack");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let autoPlayButton = document.getElementById("autoPlayButton");
let timerDisplay = document.getElementById("timerDisplay");

images.forEach((item) => {
  console.log(item);
  let div = document.createElement("div");
  div.classList.add("carousel-slide");
  let imageElement = document.createElement("img");
  imageElement.src = item.url;
  imageElement.alt = item.caption;
  div.appendChild(imageElement);
  carouselTrack.appendChild(div);
})

let totalCount = images.length;
let currentImageIndex = 0;
let slideWidth = 800;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(${-currentImageIndex * slideWidth}px)`
}

nextButton.addEventListener("click", function () {
  console.log("Button Clicked Nxt");
  if (currentImageIndex < totalCount - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }
  updateCarousel();
});

prevButton.addEventListener("click", function () {
  console.log("Button Clicked Prev");
  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = totalCount - 1;
  }
  updateCarousel();
})

let autoPlayInterval = null;
let countdownInterval = null; // Store countdown interval
let timer = 6;

autoPlayButton.addEventListener("click", function () {
  if (autoPlayInterval) {
    // Stop autoplay
    clearInterval(autoPlayInterval);
    clearInterval(countdownInterval); // Clear countdown as well
    autoPlayInterval = null;
    countdownInterval = null;
    autoPlayButton.textContent = `Start Auto Play`;
    timerDisplay.innerText = "";
  } else {
    // Start autoplay
    timer = 6;
    timerDisplay.innerText = `Next in ${timer}s`;

    autoPlayInterval = setInterval(() => {
      if (currentImageIndex < totalCount - 1) {
        currentImageIndex++;
      } else {
        currentImageIndex = 0;
      }
      updateCarousel();
      timer = 6; // Reset countdown on each image change
    }, 6000);

    countdownInterval = setInterval(() => {
      timer--;
      if (timer > 0) {
        timerDisplay.innerText = `Next in ${timer}s`;
      } else {
        timer = 6;
      }
    }, 1000);

    autoPlayButton.textContent = `Stop Auto Play`;
  }
});