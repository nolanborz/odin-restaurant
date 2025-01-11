export function loadAbout() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h1');
    const story = document.createElement('p');
    
    header.textContent = 'About Us';
    story.innerHTML = "This smalltown pasta kitchen is ran by a 5th generation pasta famiglia. The head of it all is <strong>Nona</strong>, or grandma. This means one thing: <strong>Keep it simple and make it right</strong>. We take these words to heart with every sauce and every noodle we make. That's what keeps our customers coming back. Where else can you indulge in 400 year old recipes? Only here, at Nona's Pasta Italiana. Thanks for your relentless support, and <em>Buona Appetito</em>.";
    
    content.appendChild(header);
    content.appendChild(story);

    // Update active button state
    document.querySelectorAll('.nav-top button').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-top button:nth-child(3)').classList.add('active');
}