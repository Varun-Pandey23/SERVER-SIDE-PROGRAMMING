function displayClock(date) {
  console.log(date.getHours(), ':', date.getMinutes(), ':', date.getSeconds());
}

function startClock() {
  setInterval(() => {
      const currentDate = new Date();
      displayClock(currentDate);
  }, 1000);
}

startClock();
