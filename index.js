document
  .getElementById("btn")
  .addEventListener("click", debounce(handler, 5000));

function handler() {
  console.log("clicked");
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn(...args), delay);
  };
}
