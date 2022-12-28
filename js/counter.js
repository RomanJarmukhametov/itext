const counter = document.querySelectorAll(".counter");
const achievements = document.querySelector("#achievements");

// Function to update the counter
const updateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const c = +counter.innerText;
  let increment = target / 200;

  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`;
    requestAnimationFrame(() => updateCounter(counter));
  } else {
    counter.innerText = target;
  }
};

// Function to start the count up process for a single counter
const startCounter = (counter) => {
  counter.innerText = "0";
  updateCounter(counter);
};

// Function to stop the count up process for a single counter
const stopCounter = (counter) => {
  counter.innerText = counter.getAttribute("data-target");
};

// Create an IntersectionObserver to start and stop the count up process for each counter
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
    } else {
      stopCounter(entry.target);
    }
  });
});

// Observe all counters
counter.forEach((counter) => {
  observer.observe(counter);
});
