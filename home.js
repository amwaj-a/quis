let url =
  "https://api.aladhan.com/v1/timingsByAddress/05-06-2024?address=Riyadh%2C+SA";
let details = document.querySelector("details");
let dateH = document.querySelector("#dateH");
let dateHaj = document.querySelector("#dateHaj");
let today = document.querySelector("#today");
let timePray = document.querySelector("#timePray");
let city = document.querySelector("#city");
let tem = document.querySelector("#tem");
let humidity = document.querySelector("#humidity");
let height = document.querySelector("#height");
let width = document.querySelector("#width");
let welcome = document.querySelector("#welcome");

welcome.innerText = localStorage.getItem("name");
// Umm Al-Qura University, Makkah
async function pray() {
  document.querySelector(".pray").style.display = "block";
  let data = await fetch(url);
  let res = await data.json();
  let time = res.data;
  dateH.innerText = time.date.hijri.date;
  today.innerText = time.date.gregorian.weekday.en;

  console.log(time.timings);

  timePray.innerText = `${Object.keys(time.timings)[0]} :${
    Object.values(time.timings)[0]
  }\n
  ${Object.keys(time.timings)[1]} :${Object.values(time.timings)[1]}\n
  ${Object.keys(time.timings)[2]} :${Object.values(time.timings)[2]} \n
  ${Object.keys(time.timings)[3]} :${Object.values(time.timings)[3]} \n
  ${Object.keys(time.timings)[4]} :${Object.values(time.timings)[4]} \n
  ${Object.keys(time.timings)[5]} :${Object.values(time.timings)[5]}  `;
  `;
  //       Object.values(time)[index]
  //     }`;

  dateHaj.addEventListener("click", () => {
    // dateHaj.getAttribute('')
    if (dateHaj.textContent == "التاريخ بالميلادي") {
      dateH.innerText = time.date.gregorian.date;
      dateHaj.innerText = "التاريخ بالهجري";
    } else if (dateHaj.textContent == "التاريخ بالهجري") {
      // dateH.innerText = time.date.gregorian.date;
      dateHaj.innerText = "التاريخ بالميلادي";

      dateH.innerText = time.date.hijri.date;
    }
  });
}

async function weather() {
  document.querySelector("#wethar").style.display = "block";

  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=8a5abe0621157c03ac8be183032feb11";

  // let tem = document.querySelector("#tem");
  // let humidity = document.querySelector("#humidity");
  // let height = document.querySelector("#height");
  // let width = document.querySelector("#width");
  let data = await fetch(urlWeather);
  let res = await data.json();
  console.log(res.coord);
  city.innerText = res.name;
  humidity.innerText = res.main.humidity;
  width.innerText = res.coord.lat;
  height.innerText = res.coord.lon;
}
