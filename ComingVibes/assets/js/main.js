const launchDate = new Date("Dec 31, 2025 23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("wisam-countdown").innerHTML = "We’re Live 🚀";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("wisam-countdown").innerHTML =
    `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);
