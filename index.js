/* function debounce(callback, delay) {
  let timeout = null;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    } else {
      callback();
    }
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedFn = debounce(() => {
  console.log("clicked button");
}, 2000);

const btn = document.querySelector("button");

btn.addEventListener("click", debouncedFn);
 */
//debouncing text
const typed = document.getElementById("default");
const debounced = document.getElementById("debounce");
const input = document.querySelector("input");

function debounce(callback, delay) {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncing = debounce((text) => {
  debounced.textContent = text;
}, 3000);

input.addEventListener("input", (e) => debouncing(e.target.value));
