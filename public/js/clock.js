function updateClock() {
    const clockElement = document.getElementsByClassName('clock')[0];
  
    // Get the current time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Format the time as HH:MM:SS
    const timeString = `${hours}:${padZeroes(minutes)}:${padZeroes(seconds)}`;
  
    // Update the clock element with the new time
    clockElement.innerText = timeString;
  }
  
  // Helper function to pad zeroes for single-digit numbers
  function padZeroes(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  // Update the clock immediately and set an interval to update every second
  updateClock();
  setInterval(updateClock, 1000);
