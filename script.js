document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let message =
`New Order:
Name: ${name}
Service: ${service}
Description: ${desc}`;

let phone = "201080403165";

window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");

});

});
