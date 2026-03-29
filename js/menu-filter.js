/* ============================================
   JOLLOF LIFE — Menu Data & Filter Logic
   ============================================ */

const menuItems = [
  // --- Rice Dishes ---
  { name: "Jollof Rice", category: "rice", description: "The iconic one-pot rice cooked in a rich tomato, pepper, and onion sauce with aromatic spices", image: "https://images.unsplash.com/photo-1590166223826-12dee1677420?w=600&q=80", popular: true, special: false },
  { name: "Fried Rice", category: "rice", description: "Nigerian-style fried rice with mixed vegetables, liver, and seasoned to perfection", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80", popular: false, special: false },
  { name: "Coconut Rice", category: "rice", description: "Fragrant rice cooked in creamy coconut milk with a hint of sweetness and spice", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=600&q=80", popular: false, special: false },
  { name: "Exclusive Ofada Rice", category: "rice", description: "Our signature — local Ofada rice served with rich ayamase designer stew", image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80", popular: true, special: true },
  { name: "White Rice & Stew", category: "rice", description: "Perfectly steamed white rice served with our rich, peppery tomato stew", image: "https://images.unsplash.com/photo-1536304993881-460e32f50dc2?w=600&q=80", popular: false, special: false },
  { name: "Jollof Spaghetti", category: "rice", description: "Spaghetti cooked the Nigerian way — in a spicy tomato and pepper sauce", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80", popular: false, special: false },
  { name: "Native Rice", category: "rice", description: "Traditional palm oil rice cooked with crayfish, leafy greens, and local seasonings", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80", popular: false, special: false },
  { name: "Rice & Beans (Ewa Riro)", category: "rice", description: "Rice and beans cooked together with palm oil, peppers, and aromatic seasonings", image: "https://images.unsplash.com/photo-1543339308-d595c4590fc5?w=600&q=80", popular: false, special: false },

  // --- Swallow Dishes ---
  { name: "Pounded Yam", category: "swallow", description: "Smooth, elastic yam dough — the king of swallow dishes, perfect with any soup", image: "https://images.unsplash.com/photo-1567364241895-3135b8a50d1a?w=600&q=80", popular: true, special: false },
  { name: "Amala", category: "swallow", description: "Dark, smooth yam flour dough with a distinctive earthy flavor and silky texture", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", popular: false, special: false },
  { name: "Eba (Garri)", category: "swallow", description: "Cassava-based dough with a slight tang — a staple across West Africa", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", popular: false, special: false },
  { name: "Fufu", category: "swallow", description: "Soft, stretchy fermented cassava dough — classic comfort food", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", popular: false, special: false },
  { name: "Pounded Plantains", category: "swallow", description: "A lighter, sweeter alternative to pounded yam made from ripe plantains", image: "https://images.unsplash.com/photo-1528825871115-3581a5e31e37?w=600&q=80", popular: false, special: true },
  { name: "Semolina (Semo)", category: "swallow", description: "Light and fluffy wheat-based swallow, smooth with a mild flavor", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80", popular: false, special: false },

  // --- Soups ---
  { name: "Egusi Soup", category: "soups", description: "Rich ground melon seed soup with leafy vegetables, assorted meats, and stockfish", image: "https://images.unsplash.com/photo-1643293228196-1ad8cb251aee?w=600&q=80", popular: true, special: false },
  { name: "Pepper Soup", category: "soups", description: "Spicy, aromatic broth with goat meat, catfish, or assorted proteins and herbs", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", popular: true, special: false },
  { name: "Okra Soup", category: "soups", description: "Thick, hearty okra soup with assorted proteins — perfect for dipping swallow", image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80", popular: false, special: false },
  { name: "Ogbono Soup", category: "soups", description: "Draw soup made from ground ogbono seeds — thick, slippery, and deeply savory", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80", popular: false, special: false },
  { name: "Efo Riro", category: "soups", description: "Yoruba-style vegetable soup with spinach, assorted meats, and palm oil", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", popular: false, special: false },
  { name: "Oha Soup", category: "soups", description: "Traditional Igbo soup with tender oha leaves, cocoyam thickener, and proteins", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80", popular: false, special: false },
  { name: "Bitterleaf Soup", category: "soups", description: "Hearty, slightly bitter soup made with washed bitterleaf and cocoyam paste", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80", popular: false, special: false },
  { name: "Gbegiri (Bean Soup)", category: "soups", description: "Smooth, creamy bean soup — often paired with ewedu and amala for a classic combo", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", popular: false, special: false },

  // --- Side Dishes ---
  { name: "Beef Suya", category: "sides", description: "Smoky grilled beef skewers coated in spicy ground peanut and chili mix", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", popular: true, special: false },
  { name: "Moi Moi", category: "sides", description: "Steamed bean pudding with eggs, corned beef, and peppers — rich and savory", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", popular: true, special: false },
  { name: "Akara", category: "sides", description: "Deep-fried bean cakes — crispy on the outside, fluffy and seasoned inside", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80", popular: false, special: true },
  { name: "Fried Plantain (Dodo)", category: "sides", description: "Sweet ripe plantain slices fried to golden perfection — the perfect side", image: "https://images.unsplash.com/photo-1528825871115-3581a5e31e37?w=600&q=80", popular: true, special: false },
  { name: "Coleslaw", category: "sides", description: "Fresh, creamy coleslaw with shredded cabbage, carrots, and a tangy dressing", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80", popular: false, special: false },
  { name: "Puff Puff", category: "sides", description: "Fried dough balls — light, airy, and dusted with sugar. The perfect snack", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", popular: false, special: false },
  { name: "Nigerian Meat Pie", category: "sides", description: "Golden pastry filled with seasoned ground beef, potatoes, and carrots", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", popular: false, special: false },
  { name: "Spring Rolls", category: "sides", description: "Crispy fried rolls stuffed with seasoned vegetables and minced meat", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", popular: false, special: false },

  // --- Breakfast ---
  { name: "Akamu (Ogi/Pap)", category: "breakfast", description: "Smooth corn porridge served warm — a traditional Nigerian breakfast staple", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&q=80", popular: false, special: false },
  { name: "Akara & Pap", category: "breakfast", description: "Classic breakfast combo — crispy bean fritters with warm corn porridge", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80", popular: false, special: false },
  { name: "Ewa Agoyin", category: "breakfast", description: "Mashed beans served with a fiery dried pepper sauce — bold and satisfying", image: "https://images.unsplash.com/photo-1543339308-d595c4590fc5?w=600&q=80", popular: false, special: true },

  // --- Drinks ---
  { name: "Zobo", category: "drinks", description: "Chilled hibiscus flower drink infused with ginger, cloves, and pineapple", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80", popular: true, special: false },
  { name: "Chapman", category: "drinks", description: "Nigeria's signature cocktail — a fruity, fizzy blend of Fanta, Sprite, and bitters", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80", popular: false, special: false },
  { name: "Malt Drink", category: "drinks", description: "Classic non-alcoholic malt beverage — sweet, rich, and refreshing", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80", popular: false, special: false },
  { name: "Palm Wine", category: "drinks", description: "Traditional naturally fermented palm sap — mildly sweet with a tangy finish", image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=600&q=80", popular: false, special: false },
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
