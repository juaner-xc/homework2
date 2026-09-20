const menuData = [
  { emoji: "🍜", name: "牛肉面", desc: "汤鲜肉嫩，经典招牌", category: "主食", price: "¥28" },
  { emoji: "🍚", name: "卤肉饭", desc: "卤香浓郁，肥而不腻", category: "主食", price: "¥22" },
  { emoji: "🍕", name: "玛格丽特披萨", desc: "番茄芝士，意式风味", category: "主食", price: "¥48" },
  { emoji: "🥤", name: "珍珠奶茶", desc: "Q弹珍珠，奶香十足", category: "饮品", price: "¥12" },
  { emoji: "🍵", name: "抹茶拿铁", desc: "清新抹茶，细腻顺滑", category: "饮品", price: "¥18" },
  { emoji: "🧋", name: "柠檬红茶", desc: "清爽解腻，酸甜可口", category: "饮品", price: "¥10" },
  { emoji: "🍰", name: "草莓蛋糕", desc: "新鲜草莓，绵密奶油", category: "甜点", price: "¥26" },
  { emoji: "🍮", name: "焦糖布丁", desc: "入口即化，香甜嫩滑", category: "甜点", price: "¥16" },
  { emoji: "🍩", name: "甜甜圈", desc: "松软香甜，多种口味", category: "甜点", price: "¥9" },
  { emoji: "🍗", name: "炸鸡翅", desc: "外酥里嫩，香气扑鼻", category: "小吃", price: "¥20" },
  { emoji: "🍟", name: "薯条", desc: "金黄酥脆，现炸现卖", category: "小吃", price: "¥12" },
  { emoji: "🥟", name: "煎饺", desc: "底部焦脆，馅料多汁", category: "小吃", price: "¥15" }
];

const menuGrid = document.getElementById('menuGrid');
const empty = document.getElementById('empty');
const searchInput = document.getElementById('searchInput');
const filters = document.getElementById('filters');

let currentCategory = 'all';
let keyword = '';

function render() {
  const result = menuData.filter((item) => {
    const matchCategory =
      currentCategory === 'all' || item.category === currentCategory;
    const matchKeyword =
      item.name.includes(keyword) || item.desc.includes(keyword);
    return matchCategory && matchKeyword;
  });

  menuGrid.innerHTML = '';

  result.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <div class="bottom">
        <span class="tag">${item.category}</span>
        <span class="price">${item.price}</span>
      </div>
    `;
    menuGrid.appendChild(card);
  });

  empty.hidden = result.length > 0;
}

searchInput.addEventListener('input', (event) => {
  keyword = event.target.value.trim();
  render();
});

filters.addEventListener('click', (event) => {
  if (!event.target.classList.contains('filter')) return;

  document.querySelectorAll('.filter').forEach((btn) => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  currentCategory = event.target.dataset.category;
  render();
});

render();