const menuData = [
  { id: 1,  emoji: "🍜", name: "红烧牛肉面", desc: "慢炖牛腩，汤鲜味浓", category: "主食", price: 32, rating: 4.8, flavor: "招牌 · 微辣" },
  { id: 2,  emoji: "🍚", name: "台式卤肉饭", desc: "卤香四溢，肥而不腻", category: "主食", price: 26, rating: 4.6, flavor: "经典" },
  { id: 3,  emoji: "🍕", name: "玛格丽特披萨", desc: "番茄芝士，意式风味", category: "主食", price: 48, rating: 4.7, flavor: "素食" },
  { id: 4,  emoji: "🍛", name: "咖喱鸡肉饭", desc: "日式咖喱，浓郁绵密", category: "主食", price: 30, rating: 4.5, flavor: "微辣" },
  { id: 5,  emoji: "🍝", name: "番茄肉酱意面", desc: "酸甜番茄，肉酱丰盈", category: "主食", price: 38, rating: 4.6, flavor: "人气" },
  { id: 6,  emoji: "🍱", name: "蒲烧鳗鱼饭", desc: "鳗鱼肥美，酱汁鲜甜", category: "主食", price: 58, rating: 4.9, flavor: "高级" },

  { id: 7,  emoji: "🥤", name: "黑糖珍珠奶茶", desc: "黑糖挂壁，珍珠Q弹", category: "饮品", price: 16, rating: 4.7, flavor: "热卖" },
  { id: 8,  emoji: "🍵", name: "抹茶拿铁", desc: "清新抹茶，奶香细腻", category: "饮品", price: 22, rating: 4.6, flavor: "低糖可选" },
  { id: 9,  emoji: "🍋", name: "手打柠檬茶", desc: "清爽解腻，酸甜回甘", category: "饮品", price: 14, rating: 4.5, flavor: "少冰可选" },
  { id: 10, emoji: "☕", name: "冷萃冰咖啡", desc: "低温萃取，口感顺滑", category: "饮品", price: 24, rating: 4.8, flavor: "无糖" },
  { id: 11, emoji: "🥭", name: "杨枝甘露", desc: "芒果椰奶，西柚点缀", category: "饮品", price: 26, rating: 4.9, flavor: "招牌" },

  { id: 12, emoji: "🍰", name: "草莓奶油蛋糕", desc: "新鲜草莓，轻盈奶油", category: "甜点", price: 32, rating: 4.8, flavor: "季节限定" },
  { id: 13, emoji: "🍮", name: "焦糖布丁", desc: "入口即化，焦香浓郁", category: "甜点", price: 18, rating: 4.7, flavor: "经典" },
  { id: 14, emoji: "🍫", name: "提拉米苏", desc: "咖啡酒香，绵密醇厚", category: "甜点", price: 28, rating: 4.9, flavor: "人气" },
  { id: 15, emoji: "🧁", name: "芒果班戟", desc: "薄皮包裹，果肉满满", category: "甜点", price: 20, rating: 4.6, flavor: "甜而不腻" },

  { id: 16, emoji: "🍗", name: "脆皮炸鸡翅", desc: "外酥里嫩，汁水丰盈", category: "小吃", price: 24, rating: 4.8, flavor: "微辣" },
  { id: 17, emoji: "🍟", name: "黄金薯条", desc: "现炸现卖，外脆内软", category: "小吃", price: 14, rating: 4.4, flavor: "配番茄酱" },
  { id: 18, emoji: "🥟", name: "冰花煎饺", desc: "底部焦脆，馅料多汁", category: "小吃", price: 18, rating: 4.7, flavor: "招牌" },
  { id: 19, emoji: "🐙", name: "章鱼小丸子", desc: "木鱼花舞动，酱香浓郁", category: "小吃", price: 20, rating: 4.6, flavor: "现做" },
  { id: 20, emoji: "🍢", name: "盐酥鸡", desc: "椒盐酥香，一口一个", category: "小吃", price: 22, rating: 4.7, flavor: "微辣" },

  { id: 21, emoji: "🍲", name: "菌菇鸡汤", desc: "菌菇鲜香，汤底醇厚", category: "汤品", price: 36, rating: 4.9, flavor: "养生" },
  { id: 22, emoji: "🥘", name: "番茄牛腩汤", desc: "番茄浓郁，牛腩软烂", category: "汤品", price: 40, rating: 4.8, flavor: "暖胃" }
];

const grid = document.getElementById('menuGrid');
const empty = document.getElementById('empty');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const filters = document.getElementById('filters');
const favFilter = document.getElementById('favFilter');
const favCount = document.getElementById('favCount');

let currentCategory = 'all';
let keyword = '';
let favOnly = false;

let favorites = new Set();
try {
  favorites = new Set(JSON.parse(localStorage.getItem('menuFavorites') || '[]'));
} catch (error) {
  favorites = new Set();
}

function saveFavorites() {
  localStorage.setItem('menuFavorites', JSON.stringify([...favorites]));
}

function renderFilters() {
  const categories = ['all', ...new Set(menuData.map((item) => item.category))];
  const labels = { all: '全部' };

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = 'chip' + (category === currentCategory ? ' active' : '');
    button.dataset.category = category;
    button.textContent = labels[category] || category;
    filters.appendChild(button);
  });

  favFilter.classList.add('chip', 'chip-fav');
  favFilter.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 21s-7.5-4.7-10-9.3C.4 8.5 2.4 4.5 6.2 4.5c2.2 0 3.6 1.2 4.6 2.8 1-1.6 2.4-2.8 4.6-2.8 3.8 0 5.8 4 4.2 7.2C17.1 16.3 12 21 12 21Z"/>
    </svg>
    只看收藏 <span id="favCount">${favorites.size}</span>
  `;
  filters.appendChild(favFilter);
}

function heartSvg() {
  return `
    <svg viewBox="0 0 24 24">
      <path d="M12 21s-7.5-4.7-10-9.3C.4 8.5 2.4 4.5 6.2 4.5c2.2 0 3.6 1.2 4.6 2.8 1-1.6 2.4-2.8 4.6-2.8 3.8 0 5.8 4 4.2 7.2C17.1 16.3 12 21 12 21Z"/>
    </svg>
  `;
}

function render() {
  const result = menuData.filter((item) => {
    const matchCategory =
      currentCategory === 'all' || item.category === currentCategory;
    const matchKeyword =
      item.name.includes(keyword) ||
      item.desc.includes(keyword) ||
      item.flavor.includes(keyword) ||
      item.category.includes(keyword);
    const matchFav = !favOnly || favorites.has(item.id);
    return matchCategory && matchKeyword && matchFav;
  });

  grid.innerHTML = '';

  result.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'dish';
    card.innerHTML = `
      <div class="visual" data-category="${item.category}">
        <span class="emoji">${item.emoji}</span>
        <button class="heart ${favorites.has(item.id) ? 'fav' : ''}" data-id="${item.id}" aria-label="收藏">
          ${heartSvg()}
        </button>
      </div>
      <div class="info">
        <div class="top">
          <span class="tag">${item.category}</span>
          <span class="rating">★ ${item.rating}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="desc">${item.desc}</p>
        <div class="footer">
          <span class="price">¥${item.price}</span>
          <span class="flavor">${item.flavor}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  resultCount.textContent = result.length;
  empty.hidden = result.length > 0;
}

function updateFavFilter() {
  document.getElementById('favCount').textContent = favorites.size;
  favFilter.classList.toggle('active', favOnly);
}

grid.addEventListener('click', (event) => {
  const heart = event.target.closest('.heart');
  if (!heart) return;

  const id = Number(heart.dataset.id);
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  saveFavorites();
  heart.classList.toggle('fav', favorites.has(id));
  updateFavFilter();
  render();
});

filters.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;

  if (chip === favFilter) {
    favOnly = !favOnly;
    updateFavFilter();
    render();
    return;
  }

  document.querySelectorAll('.chip[data-category]').forEach((btn) => {
    btn.classList.remove('active');
  });
  chip.classList.add('active');
  currentCategory = chip.dataset.category;
  render();
});

searchInput.addEventListener('input', (event) => {
  keyword = event.target.value.trim();
  clearBtn.hidden = keyword.length === 0;
  render();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  keyword = '';
  clearBtn.hidden = true;
  searchInput.focus();
  render();
});

renderFilters();
updateFavFilter();
render();