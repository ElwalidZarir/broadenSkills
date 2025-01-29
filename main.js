function debounce(callback, delay) {
  let flag;
  return (...args) => {
    clearInterval(flag);
    flag = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}


