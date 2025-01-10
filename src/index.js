import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import forkIcon from './fork.png';

const homeBtn = document.querySelector('.nav-top button:nth-child(1)');
const menuBtn = document.querySelector('.nav-top button:nth-child(2)');
const aboutBtn = document.querySelector('.nav-top button:nth-child(3)');
const navBottom = document.querySelector('.nav-bottom');
const content = document.getElementById("content");


const forkIndicator = new Image();
forkIndicator.src = forkIcon;
forkIndicator.classList.add('fork-indicator');
navBottom.appendChild(forkIndicator);

function updateForkPosition(button) {
  const buttonRect = button.getBoundingClientRect();
  const navRect = document.querySelector('.nav-top').getBoundingClientRect();
  const navBottomRect = document.querySelector('.nav-bottom').getBoundingClientRect();

  const centerPosition = (buttonRect.left + buttonRect.width/2) - navBottomRect.left - (forkIndicator.width/2);
  forkIndicator.style.left = `${centerPosition}px`;
}

homeBtn.addEventListener('click', () => {
  clearContent();
  loadHome();
  updateForkPosition(homeBtn);
});

menuBtn.addEventListener('click', () => {
  clearContent();
  loadMenu();
  updateForkPosition(menuBtn);
});

aboutBtn.addEventListener('click', () => {
  clearContent();
  loadAbout();
  updateForkPosition(aboutBtn);
});

function clearContent() {
  content.innerHTML = '';
}

loadHome();
window.addEventListener('load', () => updateForkPosition(homeBtn));
window.addEventListener('resize', () => {
    const activeButton = document.querySelector('.nav-top button.active') || homeBtn;
    updateForkPosition(activeButton);
});

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