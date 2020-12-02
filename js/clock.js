const timeDisplay = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getUTCSeconds();

  hour = hour < 10 ? (hour = "0" + hour) : (hour = hour); //ha ez az if-es szerkezet nincs itt, a 10-nél kisebb órát, percet és másodpercet csak egy számjeggyel jeleníti meg.
  minute = minute < 10 ? (minute = "0" + minute) : (minute = minute);
  second = second < 10 ? (second = "0" + second) : (second = second);

  const timer = setTimeout(function () {
    timeDisplay();
  }, 1000); // setting timer -- így frissül másodpercenként a display
  const display = document.querySelector(".display");

  const displayContent = `${hour}:${minute}:${second}`;
  display.textContent = displayContent;
};
timeDisplay();
