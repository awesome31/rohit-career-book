//Debounce returns a function that is debounced.
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

//Throttle returns a function that is throttled.
function throttle(func, wait) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}

const callMe = debounce(() => console.log("Hello"), 1000);

callMe();
setTimeout(() => callMe(), 500);

const callMe2 = throttle(() => console.log("Hello2"), 1000);

callMe2();
callMe2();
setTimeout(() => callMe2(), 500);
