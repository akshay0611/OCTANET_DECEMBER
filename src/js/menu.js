export const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '₹250', description: 'Rich and bold single shot' },
      { name: 'Cappuccino', price: '₹350', description: 'Espresso with steamed milk foam' },
      { name: 'Latte', price: '₹375', description: 'Espresso with steamed milk' }
    ]
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: '₹225', description: 'Buttery and flaky' },
      { name: 'Muffin', price: '₹200', description: 'Freshly baked daily' }
    ]
  }
];

export function renderMenu() {
  const menuSection = document.querySelector('.menu__grid');
  
  menuItems.forEach(category => {
    const categoryEl = document.createElement('div');
    categoryEl.className = 'menu-category';
    
    categoryEl.innerHTML = `
      <h3 class="menu-category__title">${category.category}</h3>
      <div class="menu-items">
        ${category.items.map(item => `
          <div class="menu-item" data-aos="fade-up">
            <div class="menu-item__header">
              <h4 class="menu-item__name">${item.name}</h4>
              <span class="menu-item__price">${item.price}</span>
            </div>
            <p class="menu-item__description">${item.description}</p>
          </div>
        `).join('')}
      </div>
    `;
    
    menuSection.appendChild(categoryEl);
  });
}
