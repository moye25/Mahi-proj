const now = new Date();
const yearTo = now.getFullYear() + 1;

const year = document.querySelector(".year");
year.textContent = yearTo;

const newYearDate = new Date(`${yearTo}-01-01T00:00:00`);

const loader = document.querySelector(".loader");
const countdown = document.querySelector(".countdown");
const message = document.querySelector(".message");

function formatClockUnits(time, part) {
    if (time.length === 2) {
        document.querySelector(`.${part}1`).textContent = time[0];
        document.querySelector(`.${part}2`).textContent = time[1];
    } else {
        document.querySelector(`.${part}1`).textContent = 0;
        document.querySelector(`.${part}2`).textContent = time[0];
    }
}

function updateClock() {
    const timeRemaining = newYearDate.getTime() - new Date().getTime();
    if (timeRemaining <= 0) {
        countdown.innerHTML = `<h1 class="new-year-message">Happy New Year!</h1>`;
        return;
    }
    formatClockUnits(String(Math.floor((timeRemaining / 1000) % 60)), "seconds");
    formatClockUnits(String(Math.floor((timeRemaining / 1000 / 60) % 60)), "minutes");
    formatClockUnits(String(Math.floor((timeRemaining / 1000 / 60 / 60) % 24)), "hours");
    formatClockUnits(String(Math.floor((timeRemaining / 1000 / 60 / 60 / 24))), "days");
}

setInterval(updateClock, 1000);

setTimeout(() => {
    loader.classList.add("hidden");
    countdown.classList.add("visible");
}, 1000);

// Preview button functionality
const previewButton = document.querySelector("#preview-button");
previewButton.addEventListener("click", () => {
    const happyNewYearMessage = document.createElement("div");
    happyNewYearMessage.classList.add("happy-new-year");
    happyNewYearMessage.textContent = "HAPPY NEW YEAR!! ";
  
    // Add animation styles
    happyNewYearMessage.style.position = "fixed";
    happyNewYearMessage.style.top = "50%";
    happyNewYearMessage.style.left = "50%";
    happyNewYearMessage.style.transform = "translate(-50%, -50%)";
    happyNewYearMessage.style.fontSize = "5rem";
    happyNewYearMessage.style.color = "white";
    happyNewYearMessage.style.background = "rgba(51, 2, 100, 0.8)";
    happyNewYearMessage.style.padding = "20px";
    happyNewYearMessage.style.borderRadius = "15px";
    happyNewYearMessage.style.textAlign = "center";
    happyNewYearMessage.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.8)";
    happyNewYearMessage.style.zIndex = "1000";
    happyNewYearMessage.style.animation = "fadeInOut 5s forwards";
  
    document.body.appendChild(happyNewYearMessage);
  
    setTimeout(() => {
      happyNewYearMessage.remove(); 
    }, 10000);
  });

