const cityName = document.getElementById('cityName');
const btn = document.getElementById('btn');
const cityDisp = document.getElementById('cityDisp');
const tempDisp = document.getElementById('tempDisp');
const descDisp = document.getElementById('description');
btn.addEventListener('click', () => {
    debugger;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value.toLowerCase() + '&appid=b4b79d3a11f01789c479ff5bb43788fc')
        .then(response => response.json())
        .then(data => {
            cityDisp.innerHTML= `City Name: ${data['name']}`;
            tempDisp.innerHTML= `Temparature: ${data['main']['temp']}`;
            descDisp.innerHTML= `Description: ${data['weather'][0]['main']}`;

        })
        .catch(err => alert("Enter Valid City"))
})
