/* ============================================
   JOLLOF LIFE — Menu Data & Filter Logic
   ============================================ */

const menuItems = [
  // --- Rice Dishes ---
  { name: "Jollof Rice", category: "rice", description: "The iconic one-pot rice cooked in a rich tomato, pepper, and onion sauce with aromatic spices", image: "https://images.unsplash.com/photo-1634324092526-91f5e878b72f?w=600&q=80", popular: true, special: false },
  { name: "Fried Rice", category: "rice", description: "Nigerian-style fried rice with mixed vegetables, liver, and seasoned to perfection", image: "https://images.unsplash.com/photo-1604329756574-bda1f2cada6f?w=600&q=80", popular: false, special: false },
  { name: "Coconut Rice", category: "rice", description: "Fragrant rice cooked in creamy coconut milk with a hint of sweetness and spice", image: "https://images.unsplash.com/photo-1634324092526-91f5e878b72f?w=600&q=80", popular: false, special: false },
  { name: "Exclusive Ofada Rice", category: "rice", description: "Our signature — local Ofada rice served with rich ayamase designer stew", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80", popular: true, special: true },
  { name: "White Rice & Stew", category: "rice", description: "Perfectly steamed white rice served with our rich, peppery tomato stew", image: "https://images.unsplash.com/photo-1770164678239-89706708a496?w=600&q=80", popular: false, special: false },
  { name: "Jollof Spaghetti", category: "rice", description: "Spaghetti cooked the Nigerian way — in a spicy tomato and pepper sauce", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80", popular: false, special: false },
  { name: "Native Rice", category: "rice", description: "Traditional palm oil rice cooked with crayfish, leafy greens, and local seasonings", image: "https://images.unsplash.com/photo-1770164678239-89706708a496?w=600&q=80", popular: false, special: false },
  { name: "Rice & Beans (Ewa Riro)", category: "rice", description: "Rice and beans cooked together with palm oil, peppers, and aromatic seasonings", image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=600&q=80", popular: false, special: false },

  // --- Swallow Dishes ---
  { name: "Pounded Yam", category: "swallow", description: "Smooth, elastic yam dough — the king of swallow dishes, perfect with any soup", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80", popular: true, special: false },
  { name: "Amala", category: "swallow", description: "Dark, smooth yam flour dough with a distinctive earthy flavor and silky texture", image: "https://images.unsplash.com/photo-1634324092526-91f5e878b72f?w=600&q=80", popular: false, special: false },
  { name: "Eba (Garri)", category: "swallow", description: "Cassava-based dough with a slight tang — a staple across West Africa", image: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?w=600&q=80", popular: false, special: false },
  { name: "Fufu", category: "swallow", description: "Soft, stretchy fermented cassava dough — classic comfort food", image: "https://images.unsplash.com/photo-1661588669110-81142a5b9e57?w=600&q=80", popular: false, special: false },
  { name: "Pounded Plantains", category: "swallow", description: "A lighter, sweeter alternative to pounded yam made from ripe plantains", image: "https://images.unsplash.com/photo-1683531731340-ff35378582a4?w=600&q=80", popular: false, special: true },
  { name: "Semolina (Semo)", category: "swallow", description: "Light and fluffy wheat-based swallow, smooth with a mild flavor", image: "https://images.unsplash.com/photo-1665332561290-cc6757172890?w=600&q=80", popular: false, special: false },

  // --- Soups ---
  { name: "Egusi Soup", category: "soups", description: "Rich ground melon seed soup with leafy vegetables, assorted meats, and stockfish", image: "https://images.unsplash.com/photo-1763048443535-1243379234e2?w=600&q=80", popular: true, special: false },
  { name: "Pepper Soup", category: "soups", description: "Spicy, aromatic broth with goat meat, catfish, or assorted proteins and herbs", image: "https://images.unsplash.com/photo-1705088293125-063256c88cf5?w=600&q=80", popular: true, special: false },
  { name: "Okra Soup", category: "soups", description: "Thick, hearty okra soup with assorted proteins — perfect for dipping swallow", image: "https://images.unsplash.com/photo-1703956000348-cb83145e7278?w=600&q=80", popular: false, special: false },
  { name: "Ogbono Soup", category: "soups", description: "Draw soup made from ground ogbono seeds — thick, slippery, and deeply savory", image: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?w=600&q=80", popular: false, special: false },
  { name: "Efo Riro", category: "soups", description: "Yoruba-style vegetable soup with spinach, assorted meats, and palm oil", image: "https://images.unsplash.com/photo-1665332305771-e49a5dd5ba80?w=600&q=80", popular: false, special: false },
  { name: "Oha Soup", category: "soups", description: "Traditional Igbo soup with tender oha leaves, cocoyam thickener, and proteins", image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=600&q=80", popular: false, special: false },
  { name: "Bitterleaf Soup", category: "soups", description: "Hearty, slightly bitter soup made with washed bitterleaf and cocoyam paste", image: "https://images.unsplash.com/photo-1665332398215-825114bbb355?w=600&q=80", popular: false, special: false },
  { name: "Gbegiri (Bean Soup)", category: "soups", description: "Smooth, creamy bean soup — often paired with ewedu and amala for a classic combo", image: "https://images.unsplash.com/photo-1583946193644-49fe1fe958cf?w=600&q=80", popular: false, special: false },

  // --- Side Dishes ---
  { name: "Beef Suya", category: "sides", description: "Smoky grilled beef skewers coated in spicy ground peanut and chili mix", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", popular: true, special: false },
  { name: "Moi Moi", category: "sides", description: "Steamed bean pudding with eggs, corned beef, and peppers — rich and savory", image: "https://images.unsplash.com/photo-1613764816537-a43baeb559c1?w=600&q=80", popular: true, special: false },
  { name: "Akara", category: "sides", description: "Deep-fried bean cakes — crispy on the outside, fluffy and seasoned inside", image: "https://images.unsplash.com/photo-1593275513770-0566f717f3a5?w=600&q=80", popular: false, special: true },
  { name: "Fried Plantain (Dodo)", category: "sides", description: "Sweet ripe plantain slices fried to golden perfection — the perfect side", image: "https://images.unsplash.com/photo-1762884601729-0eeeafbdfb8a?w=600&q=80", popular: true, special: false },
  { name: "Coleslaw", category: "sides", description: "Fresh, creamy coleslaw with shredded cabbage, carrots, and a tangy dressing", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80", popular: false, special: false },
  { name: "Puff Puff", category: "sides", description: "Fried dough balls — light, airy, and dusted with sugar. The perfect snack", image: "https://images.unsplash.com/photo-1605704873349-631c8f0fa42c?w=600&q=80", popular: false, special: false },
  { name: "Nigerian Meat Pie", category: "sides", description: "Golden pastry filled with seasoned ground beef, potatoes, and carrots", image: "https://images.unsplash.com/photo-1667980971586-9c2b44a752a6?w=600&q=80", popular: false, special: false },
  { name: "Spring Rolls", category: "sides", description: "Crispy fried rolls stuffed with seasoned vegetables and minced meat", image: "https://images.unsplash.com/photo-1632852576480-c10a8e19496a?w=600&q=80", popular: false, special: false },

  // --- Breakfast ---
  { name: "Akamu (Ogi/Pap)", category: "breakfast", description: "Smooth corn porridge served warm — a traditional Nigerian breakfast staple", image: "https://images.unsplash.com/photo-1577281475566-78b57c5dfd4e?w=600&q=80", popular: false, special: false },
  { name: "Akara & Pap", category: "breakfast", description: "Classic breakfast combo — crispy bean fritters with warm corn porridge", image: "https://images.unsplash.com/photo-1665332305771-e49a5dd5ba80?w=600&q=80", popular: false, special: false },
  { name: "Ewa Agoyin", category: "breakfast", description: "Mashed beans served with a fiery dried pepper sauce — bold and satisfying", image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=600&q=80", popular: false, special: true },

  // --- Drinks ---
  { name: "Zobo", category: "drinks", description: "Chilled hibiscus flower drink infused with ginger, cloves, and pineapple", image: "https://images.unsplash.com/photo-1594026290778-b00634357f20?w=600&q=80", popular: true, special: false },
  { name: "Chapman", category: "drinks", description: "Nigeria's signature cocktail — a fruity, fizzy blend of Fanta, Sprite, and bitters", image: "https://images.unsplash.com/photo-1594026290778-b00634357f20?w=600&q=80", popular: false, special: false },
  { name: "Malt Drink", category: "drinks", description: "Classic non-alcoholic malt beverage — sweet, rich, and refreshing", image: "https://images.unsplash.com/photo-1654923064899-2d78d94a7f80?w=600&q=80", popular: false, special: false },
  { name: "Palm Wine", category: "drinks", description: "Traditional naturally fermented palm sap — mildly sweet with a tangy finish", image: "https://images.unsplash.com/photo-1594026290778-b00634357f20?w=600&q=80", popular: false, special: false },
];

// Category display names
const categories = {
  all: 'All Dishes',
  popular: 'Most Popular',
  special: 'Specials',
  rice: 'Rice Dishes',
  swallow: 'Swallow Dishes',
  soups: 'Soups',
  sides: 'Side Dishes',
  breakfast: 'Breakfast',
  drinks: 'Drinks',
};

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('menu-grid');
  const tabsContainer = document.querySelector('.menu-filter__tabs');
  if (!grid || !tabsContainer) return;

  let activeFilter = 'all';

  // Build filter tabs
  Object.entries(categories).forEach(([key, label]) => {
    const tab = document.createElement('button');
    tab.className = 'menu-filter__tab' + (key === 'all' ? ' menu-filter__tab--active' : '');
    tab.textContent = label;
    tab.dataset.filter = key;
    tab.addEventListener('click', () => {
      activeFilter = key;
      document.querySelectorAll('.menu-filter__tab').forEach(t => t.classList.remove('menu-filter__tab--active'));
      tab.classList.add('menu-filter__tab--active');
      renderMenu(key);
    });
    tabsContainer.appendChild(tab);
  });

  function renderMenu(filter) {
    let filtered;
    if (filter === 'all') {
      filtered = menuItems;
    } else if (filter === 'popular') {
      filtered = menuItems.filter(i => i.popular);
    } else if (filter === 'special') {
      filtered = menuItems.filter(i => i.special);
    } else {
      filtered = menuItems.filter(i => i.category === filter);
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 3rem; color: var(--text-light);">No dishes in this category yet.</p>';
      return;
    }

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${index * 60}ms`;

      const badges = [];
      if (item.popular) badges.push('Popular');
      if (item.special) badges.push('Special');

      card.innerHTML = `
        <div class="menu-card__image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${badges.length > 0 ? `<span class="menu-card__badge">${badges.join(' & ')}</span>` : ''}
        </div>
        <div class="menu-card__body">
          <h3 class="menu-card__name">${item.name}</h3>
          <p class="menu-card__desc">${item.description}</p>
          <div class="menu-card__footer">
            <span class="menu-card__category">${categories[item.category] || item.category}</span>
            <a href="https://jollof-life-restaurant.square.site/" target="_blank" rel="noopener" class="btn btn--primary btn--sm">Order</a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // Initial render
  renderMenu('all');
});
