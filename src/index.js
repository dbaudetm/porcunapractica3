const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");

function weatherUpdate() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${"Porcuna"}&appid=ded8fb24404261afff13e88870c2cf84&lang=sp`);

    http: xhr.send();
    xhr.onload = () => {
        if (xhr.status === 404) {
            Temp.innerHTML = "Api no disponible.";
        } else {
            var data = JSON.parse(xhr.response);
            console.log(data);

            if (data.message === "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.") {
                Temp.innerHTML = `Se hs superado las llamadas a la api `;

                main.innerHTML = "En un tiempo volvera a estar disponible";
            } else {
                Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;

                main.innerHTML = data.weather[0].description;
            }
        }
    };
}

weatherUpdate();
