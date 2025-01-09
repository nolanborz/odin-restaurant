export function loadAbout() {
  const content = document.getElementById('content');
  
  const header = document.createElement('h1');
  const story = document.createElement('p');
  
  header.textContent = 'About Us';
  story.textContent = 'Founded in 1925, Nona\'s Pasta Italiana has been serving authentic Italian cuisine for generations. Our recipes have been passed down through our family, preserving the traditional flavors of Italy.';
  
  content.appendChild(header);
  content.appendChild(story);
}