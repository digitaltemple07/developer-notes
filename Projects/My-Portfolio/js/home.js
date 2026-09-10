// function countup(element) {
//   const target = Number(element.dataset.target);

//   let current = 0;

//   const counter = setInterval(() => {
//     current++;

//     element.textContent = current;

//     if (current >= target) {
//       clearInterval(counter);
//     }
//   }, 1);
// }

// counters.forEach((counter) => {
//   countup(counter);
// });

console.log("JavaScript is working!");

const counters = document.querySelectorAll(".counter");

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M+";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K+";
  }

  return number;
}

function countup() {
  const duration = 3000;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const current = Math.floor(progress * target);

      counter.textContent = formatNumber(current);
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

countup();
