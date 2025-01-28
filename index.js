function debounce(callback, delay) {
  let timeout = null;
  return function (...args) {
    if (timeout) {
       clearTimeout(timeout);
    }else {
      callback()
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
