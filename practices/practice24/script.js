// const grid = document.getElementById("gridWrapper");
// async function getUser () {

//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     const users = data.users;
//     console.log(users);
//     users.forEach((item)=> {
//         const element = document.createElement("div");
//         element.classList.add("item");

//         element.innerHTML = `<img src=${item.image}/>
//         <div class= "column">
//         <span style="font-weight: 700; font-size: 18px">${item.firstName} ${item.lastName} </span>
//         <span style="font-size: 14px">${item.email} </span>
//         </div>`;
//         grid.appendChild(element);
//     });
// }
// getUser();

const info = document.getElementById("WeatherInfo");
async function mainWeather() {
  const city = document.getElementById(`city-input`).value;
  if (city) {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?
q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6
bb25a7f582a7a`
    );
    const data = await weather.json();
    console.log(data);
        info.innerHTML = `
        <h2> ${data.name}, ${data.sys.country}</h2>
        <p> Temperatur: ${data.main.temp}°C</p>
        <p> Weather: ${data.weather[0].description}</p>
        <p> Humidity: ${data.main.humidity} %</p>
        <p> Wind: ${data.wind.speed}</p>`;        
     } 
}
