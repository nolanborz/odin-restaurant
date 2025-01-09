import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

//import forkIcon from './fork.png';
// const style = document.createElement("style");
// style.textContent = `
//   body {
  //     background-image:
  //     linear-gradient(45deg, #ff0000 25%, transparent 25%),
  //     linear-gradient(-45deg, #ff0000 25%, transparent 25%),
  //     linear-gradient(45deg, transparent 75%, #ff0000 75%),
  //     linear-gradient(-45deg, transparent 75%, #ff0000 75%);
  //   background-size: 40px 40px;
  //   background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
  //   background-color: white;
  //   }
  // `;
  const homeBtn = document.querySelector('nav button:nth-child(1)');
  const menuBtn = document.querySelector('nav button:nth-child(2)');
  const aboutBtn = document.querySelector('nav button:nth-child(3)');
  const content = document.getElementById("content");

homeBtn.addEventListener('click', () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener('click', () => {
  clearContent();
  loadMenu();
});

aboutBtn.addEventListener('click', () => {
  clearContent();
  loadAbout();
});

function clearContent() {
  content.innerHTML = '';
}

loadHome();



// document.head.appendChild(style)

content.appendChild(header);
content.appendChild(paragraph);
content.appendChild(img);


