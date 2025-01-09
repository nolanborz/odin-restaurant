export function loadMenu() {
  const content = document.getElementById('content');
  
  const header = document.createElement('h1');
  const menuList = document.createElement('ul');
  
  header.textContent = 'Our Menu';
  
  const menuItems = [
      { name: 'Spaghetti Carbonara', price: '$16.99' },
      { name: 'Fettuccine Alfredo', price: '$15.99' },
      { name: 'Lasagna', price: '$18.99' },
  ];
  
  menuItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      menuList.appendChild(li);
  });
  
  content.appendChild(header);
  content.appendChild(menuList);
}