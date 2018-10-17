function animateIcon() {
    var info = document.getElementById("info");
    info.innerHTML = "&#xf129;";
    
    setTimeout(function(){
        info.innerHTML = "&#xf05a;";
    }, 1000);
}

animateIcon();

setInterval(animateIcon, 4000);


let city = document.querySelector("#title");
let country = document.querySelector("#country");
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let date = document.querySelector('#date');

function getWeather(woeid) {
    fetch(`https://www.metaweather.com/api/location/${woeid}`) 

.then(result => {
    return result.json();
})

.then(data => {
    
    const today = data.consolidated_weather[0];
    date.textContent = `${today.applicable_date}`;
    let min_temp = Math.trunc(`${today.min_temp}`);
        
    let max_temp = Math.trunc(`${today.max_temp}`);
        
    min.textContent = `Min: ${min_temp}\xB0C`;
    max.textContent = `Max: ${max_temp}\xB0C`;
    
})
.catch(err => 
    console.log(err));

}

getWeather(44418);
