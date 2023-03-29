const data = "29-03-2023T12:25:54"
const date =document.getElementById("myDate")
const time =document.getElementById("myTime")

const myDate = data.split("T")[0]
const myTime = data.split("T")[1]
// console.log(date.split("T"))
// console.log(date.replaceAll("-", "/"))
date.innerHTML = myDate.replaceAll("-", "/")
time.innerHTML = myTime