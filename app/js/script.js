// Selectors
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

const worknow = document.querySelector("#work-now");
const worklast = document.querySelector("#work-last");

const playnow = document.querySelector("#play-now");
const playlast = document.querySelector("#play-last");

const studynow = document.querySelector("#study-now");
const studylast = document.querySelector("#study-last");

const exercisenow = document.querySelector("#exercise-now");
const exerciselast = document.querySelector("#exercise-last");

const socialnow = document.querySelector("#social-now");
const sociallast = document.querySelector("#social-last");

const selfnow = document.querySelector("#self-now");
const selflast = document.querySelector("#self-last");

const dots = document.querySelector("#dots");

// Initially set to weekly
fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
    worknow.innerHTML = data[0].timeframes.weekly.current;
    playnow.innerHTML = data[1].timeframes.weekly.current;
    studynow.innerHTML = data[2].timeframes.weekly.current;
    exercisenow.innerHTML = data[3].timeframes.weekly.current;
    socialnow.innerHTML = data[4].timeframes.weekly.current;
    selfnow.innerHTML = data[5].timeframes.weekly.current;

    worklast.innerHTML = data[0].timeframes.weekly.previous;
    playlast.innerHTML = data[1].timeframes.weekly.previous;
    studylast.innerHTML = data[2].timeframes.weekly.previous;
    exerciselast.innerHTML = data[3].timeframes.weekly.previous;
    sociallast.innerHTML = data[4].timeframes.weekly.previous;
    selflast.innerHTML = data[5].timeframes.weekly.previous;
  })
  .catch((error) => console.log(error));

weekly.style.color = "white";

// Event handlers
daily.addEventListener("click", () => {
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      worknow.innerHTML = data[0].timeframes.daily.current;
      playnow.innerHTML = data[1].timeframes.daily.current;
      studynow.innerHTML = data[2].timeframes.daily.current;
      exercisenow.innerHTML = data[3].timeframes.daily.current;
      socialnow.innerHTML = data[4].timeframes.daily.current;
      selfnow.innerHTML = data[5].timeframes.daily.current;

      worklast.innerHTML = data[0].timeframes.daily.previous;
      playlast.innerHTML = data[1].timeframes.daily.previous;
      studylast.innerHTML = data[2].timeframes.daily.previous;
      exerciselast.innerHTML = data[3].timeframes.daily.previous;
      sociallast.innerHTML = data[4].timeframes.daily.previous;
      selflast.innerHTML = data[5].timeframes.daily.previous;
    })
    .catch((error) => console.log(error));
  daily.style.color = "white";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
});

weekly.addEventListener("click", () => {
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      worknow.innerHTML = data[0].timeframes.weekly.current;
      playnow.innerHTML = data[1].timeframes.weekly.current;
      studynow.innerHTML = data[2].timeframes.weekly.current;
      exercisenow.innerHTML = data[3].timeframes.weekly.current;
      socialnow.innerHTML = data[4].timeframes.weekly.current;
      selfnow.innerHTML = data[5].timeframes.weekly.current;

      worklast.innerHTML = data[0].timeframes.weekly.previous;
      playlast.innerHTML = data[1].timeframes.weekly.previous;
      studylast.innerHTML = data[2].timeframes.weekly.previous;
      exerciselast.innerHTML = data[3].timeframes.weekly.previous;
      sociallast.innerHTML = data[4].timeframes.weekly.previous;
      selflast.innerHTML = data[5].timeframes.weekly.previous;
    })
    .catch((error) => console.log(error));
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "white";
  monthly.style.color = "hsl(235, 45%, 61%)";
});

monthly.addEventListener("click", () => {
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      worknow.innerHTML = data[0].timeframes.monthly.current;
      playnow.innerHTML = data[1].timeframes.monthly.current;
      studynow.innerHTML = data[2].timeframes.monthly.current;
      exercisenow.innerHTML = data[3].timeframes.monthly.current;
      socialnow.innerHTML = data[4].timeframes.monthly.current;
      selfnow.innerHTML = data[5].timeframes.monthly.current;

      worklast.innerHTML = data[0].timeframes.monthly.previous;
      playlast.innerHTML = data[1].timeframes.monthly.previous;
      studylast.innerHTML = data[2].timeframes.monthly.previous;
      exerciselast.innerHTML = data[3].timeframes.monthly.previous;
      sociallast.innerHTML = data[4].timeframes.monthly.previous;
      selflast.innerHTML = data[5].timeframes.monthly.previous;
    })
    .catch((error) => console.log(error));
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "white";
});
