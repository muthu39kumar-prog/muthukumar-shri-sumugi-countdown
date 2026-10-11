// Wedding target: 25 February 2027, 6:00 PM India Standard Time (UTC+05:30).
// Explicit UTC offset keeps the countdown correct regardless of the visitor's time zone.
const weddingDate = new Date("2027-02-25T18:00:00+05:30").getTime();

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  message: document.getElementById("countdown-message")
};

function updateCountdown() {
  const remaining = weddingDate - Date.now();

  if (remaining <= 0) {
    elements.days.textContent = "000";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    elements.message.textContent = "The big day is here! Wishing us a lifetime of love. ♥";
    return;
  }

  const secondsTotal = Math.floor(remaining / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  elements.days.textContent = String(days).padStart(3, "0");
  elements.hours.textContent = String(hours).padStart(2, "0");
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
