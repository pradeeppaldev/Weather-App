const search = document.getElementById('button');

search.addEventListener('click', () => {

    const place = document.getElementById('city').value;

    function updateTemp(data){
        document.querySelector('.weatherNumber').innerHTML = `${data.current.temp_c}`;

        document.querySelector('.Hvalue').innerHTML = `${data.current.humidity}`;

        document.querySelector('.Wvalue').innerHTML = `${data.current.wind_kph}`;

        document.querySelector('.weatherIcon').innerHTML = `<img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">`;

        document.querySelector('.weatherCondition').innerHTML = `${data.current.condition.text}`;

        document.querySelector('.city').innerHTML = `${place}`;
    }

    const proms = fetch(`https://api.weatherapi.com/v1/current.json?key=a3b4bad6ac5345ecad0160048252701&q=${place}&aqi=no`);

    proms
    .then(response => response.json())
    .then(data => updateTemp(data))
    .catch((error) => console.log("Error:", error));

});