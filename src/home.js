import forkIcon from './fork.png';

export function loadHome() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h1');
    const paragraph = document.createElement('p');
    const img = new Image();
    
    img.classList.add('fork-icon');
    img.src = forkIcon;
    
    header.textContent = "Nona's Pasta Italiana";
    paragraph.textContent = "This pasta kitchen revolutionizes pasta as we know it, and the best part? It comes all from Nona's kitchen.";
    
    content.appendChild(header);
    content.appendChild(paragraph);
    content.appendChild(img);
}
