import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);
//First, select the element//
const content = document.getElementById("content");
//Create the elements you want to inject//
const header = document.createElement("h1");
const paragraph = document.createElement("p");
//Add content to the elements//
header.textContent = "Nona's Pasta Italiana";
paragraph.textContent = "This pasta kitchen revolutionizes pasta as we know it, and the best part? It comes all from Nona's kitchen.";



//Append the new elements to the target div//
content.appendChild(header);
content.appendChild(paragraph);

