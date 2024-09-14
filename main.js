const searchBtn = document.querySelector("button")
const searchBox = document.querySelector("input")

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=` + city + "&appid=56eba171046a8b0d2d02a03fe14fc311")
    const data =await response.json()
    console.log(data)
    document.querySelector(".country").innerHTML = data.sys.country
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp )+ "<sup>o</sup>C"
}
searchBtn.addEventListener("click", () => { checkWeather(searchBox.value) })
