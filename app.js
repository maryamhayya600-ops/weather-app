let apiKey = "0ed704d1b972f9817fd5ba7de05aff0e";

document.getElementById("btn").addEventListener("click", function () {

    let city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

    if (data.cod === "404") {
        document.getElementById("result").innerHTML = "City not found ❌";
        return;
    }

    let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}">
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
})
        .catch(error => {
            console.log("Error:", error);
        });

});