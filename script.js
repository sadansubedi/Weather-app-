const form = document.querySelector('form');
const search = document.querySelector('.search_bar');
const weather = document.querySelector('.weather');
const buttons = document.querySelector('button');
//console.log(buttons);
//console.log(search);
//console.log(buttons);
const API_KEY =`ea6e48e90fddee0e1bb84738a2fe0b40`;


const getweather =async (city)=>{ // async--> it  returned promises ok.
    const API_CALL_TO =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}` //--> here &units=metric& gives temp in celcius ok default it is fareinheit 
    const response = await fetch(API_CALL_TO);//await-->keep executing other line of code instead of waiting for it to complete before proceeding
                                                    //after completing other line of code now its turn
    //console.log(response);
    const data = await response.json();
    //console.log(data);
     return showweather(data);
}

const city =document.querySelector('.city');
const temp =document.querySelector('.temp');
const description =document.querySelector('.description');
const humidity =document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const img= document.querySelector('img');

const showweather =(data) =>{
    if(data.cod=="404"){
        weather.innerHTML ="<h2>please write correct place name</h2>";
    }
    city.innerHTML=`Weather in ${data.name}`;
    temp.innerHTML=`TEMP : ${data.main.temp}°C`;
    description.innerHTML=`Weather Description :${data.weather[0].description}`;
    humidity.innerHTML=`HUMIDITY : ${data.main.humidity} %`;
    wind.innerHTML=`WIND SPEED : ${data.wind.speed} kmh `;
    img.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.querySelector('button');
    myButton.addEventListener('click', function() {
        getweather(search.value);
    });
  });

/*
buttons.addEventListener('click',function(e){
    getweather(search.value);
    e.preventDefault();
});
it gives error coz we try to  access the addEventListener property of a null value.
 so To load in the DOM before JavaScript code runs.
 we solve this by wrapping JavaScript code in a DOMContentLoaded which is above given code
*/


/*When an async function is called, the function is executed asynchronously and the program execution
continues to the next line of code without waiting for the function to complete. The async keyword allows
the functionto be executed in the background and enables the program to continue execution without blocking the thread.
*/ 
