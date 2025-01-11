import forkIcon from './fork.png';

export function loadHome() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const menuUpdateTitle = document.createElement('h2')
    const menuUpdateText = document.createElement('p');
    const paragraph = document.createElement('p');
    
    header.textContent = "Nona's Pasta Italiana";
    menuUpdateTitle.innerHTML = "Margharita Pizza is <strong>BACK</strong>";
    menuUpdateText.innerHTML = "You spoke, and we listened. The Margharita Pizza is making a comeback on <strong>August 1st</strong>, put your orders in now!";
    paragraph.innerHTML = "This smalltown pasta kitchen is ran by a 5th generation pasta famiglia. The head of it all is <strong>Nona</strong>, or grandma. This means one thing: <strong>Keep it simple and make it right</strong>. We take these words to heart with every sauce and every noodle we make. That's what keeps our customers coming back. Where else can you indulge in 400 year old recipes? Only here, at Nona's Pasta Italiana. Thanks for your relentless support, and <em>Buona Appetito</em>.";
    
    content.appendChild(header);
    content.appendChild(menuUpdateTitle);
    content.appendChild(menuUpdateText);
    content.appendChild(paragraph);
}