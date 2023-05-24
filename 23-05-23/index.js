//Fetch Method

// fetch("url")

/* The 3 things required in fetch. It takes 3 arguments
1. The request, clean it up with json or data choice of yours .
    don't forget return statements
2. The response
3. What i do with the response

fetch always returns a promise
Fetch is asynchronous and it is not required to be written in front of it
fetch takes two parameters: url and method(get/post)

URL and path are the same but just different in context
*/

// const body = document.body;

// const input = document.querySelector(".city");

// input.addEventListener("click", (e) => {
//     if (e.target.value === "") {
//         console.log(true);
//         alert("Please input a  valid color")
//         // throw meError ("Please input a  valid color")
//     } else {
//         body.style.backgroundColor = e.target.value;
//     }
// })

// "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=73315d7e470feb063d3fb772b00cd98d&units=metric";

let url = "https://api.openweathermap.org/data/2.5/weather?q=abuja&appid=73315d7e470feb063d3fb772b00cd98d&units=metric";

let getWeather = () =>{
    fetch(url).then(response=>{
        return response.json()
    }).then(data =>{
        console.log(data);
        console.log(data.coord);
        console.log(data.main.temp);
     
    })
}

getWeather()