const menuData = [
  { id: 1, emoji: "🍜", nameEn: "Braised Beef Noodles", nameZh: "红烧牛肉面", category: "Main Course", categoryZh: "主食", descEn: "Slow-braised beef in a rich, savory broth", descZh: "慢炖牛肉，汤鲜味浓", price: 32, rating: 4.8, flavor: "Signature · 招牌", detailEn: "Tender beef brisket simmered for hours, served with springy noodles in a deeply savory broth.", detailZh: "牛腩慢炖数小时，配以劲道面条和浓郁汤底。", ingredients: ["Beef · 牛肉", "Noodles · 面条", "Broth · 高汤", "Scallion · 香葱"] },
  { id: 2, emoji: "🍚", nameEn: "Braised Pork Rice", nameZh: "台式卤肉饭", category: "Main Course", categoryZh: "主食", descEn: "Fragrant braised pork over steamed rice", descZh: "卤香四溢，肥而不腻", price: 26, rating: 4.6, flavor: "Classic · 经典", detailEn: "Minced pork belly braised in soy sauce and spices, served over fluffy white rice.", detailZh: "五花肉丁以酱油和香料卤制，铺在松软米饭上。", ingredients: ["Pork · 猪肉", "Rice · 米饭", "Soy sauce · 酱油", "Shallot · 红葱"] },
  { id: 3, emoji: "🍕", nameEn: "Margherita Pizza", nameZh: "玛格丽特披萨", category: "Main Course", categoryZh: "主食", descEn: "Tomato, mozzarella and fresh basil", descZh: "番茄、马苏里拉与罗勒", price: 48, rating: 4.7, flavor: "Vegetarian · 素食", detailEn: "Classic Neapolitan pizza topped with San Marzano tomatoes, mozzarella and basil.", detailZh: "经典那不勒斯披萨，铺满番茄、马苏里拉和罗勒。", ingredients: ["Dough · 面团", "Tomato · 番茄", "Mozzarella · 马苏里拉", "Basil · 罗勒"] },
  { id: 4, emoji: "🍛", nameEn: "Chicken Curry Rice", nameZh: "咖喱鸡肉饭", category: "Main Course", categoryZh: "主食", descEn: "Japanese-style curry, rich and creamy", descZh: "日式咖喱，浓郁绵密", price: 30, rating: 4.5, flavor: "Mild · 微辣", detailEn: "Tender chicken and vegetables simmered in a smooth Japanese curry sauce.", detailZh: "嫩鸡肉与蔬菜在顺滑日式咖喱中炖煮。", ingredients: ["Chicken · 鸡肉", "Curry · 咖喱", "Potato · 土豆", "Carrot · 胡萝卜"] },
  { id: 5, emoji: "🍝", nameEn: "Tomato Meat Sauce Pasta", nameZh: "番茄肉酱意面", category: "Main Course", categoryZh: "主食", descEn: "Rich tomato sauce with ground beef", descZh: "酸甜番茄，肉酱丰盈", price: 38, rating: 4.6, flavor: "Popular · 人气", detailEn: "Al dente spaghetti tossed with slow-cooked tomato and beef ragù.", detailZh: "弹牙意面裹满慢炖番茄牛肉酱。", ingredients: ["Spaghetti · 意面", "Tomato · 番茄", "Beef · 牛肉", "Parmesan · 帕玛森"] },
  { id: 6, emoji: "🍱", nameEn: "Grilled Eel Rice", nameZh: "蒲烧鳗鱼饭", category: "Main Course", categoryZh: "主食", descEn: "Grilled eel with sweet soy glaze", descZh: "鳗鱼肥美，酱汁鲜甜", price: 58, rating: 4.9, flavor: "Premium · 高级", detailEn: "Freshwater eel grilled with a sweet soy glaze over seasoned rice.", detailZh: "河鳗以甜酱油汁烤制，铺在调味米饭上。", ingredients: ["Eel · 鳗鱼", "Rice · 米饭", "Soy glaze · 照烧汁", "Seaweed · 海苔"] },

  { id: 7, emoji: "🥤", nameEn: "Brown Sugar Bubble Tea", nameZh: "黑糖珍珠奶茶", category: "Drinks", categoryZh: "饮品", descEn: "Brown sugar pearls, creamy milk tea", descZh: "黑糖挂壁，珍珠Q弹", price: 16, rating: 4.7, flavor: "Best seller · 热卖", detailEn: "Fresh milk shaken with black tea and chewy brown sugar tapioca pearls.", detailZh: "鲜奶与红茶摇匀，加入Q弹黑糖珍珠。", ingredients: ["Black tea · 红茶", "Milk · 鲜奶", "Tapioca · 珍珠", "Brown sugar · 黑糖"] },
  { id: 8, emoji: "🍵", nameEn: "Matcha Latte", nameZh: "抹茶拿铁", category: "Drinks", categoryZh: "饮品", descEn: "Fragrant matcha with silky milk", descZh: "清新抹茶，奶香细腻", price: 22, rating: 4.6, flavor: "Low sugar · 低糖可选", detailEn: "Ceremonial-grade matcha whisked with steamed milk for a smooth, earthy drink.", detailZh: "抹茶与蒸汽奶融合，口感顺滑清香。", ingredients: ["Matcha · 抹茶", "Milk · 牛奶", "Sugar · 糖"] },
  { id: 9, emoji: "🍋", nameEn: "Handmade Lemon Tea", nameZh: "手打柠檬茶", category: "Drinks", categoryZh: "饮品", descEn: "Fresh lemon, crisp and refreshing", descZh: "清爽解腻，酸甜回甘", price: 14, rating: 4.5, flavor: "Light ice · 少冰可选", detailEn: "Fresh lemons muddled by hand and shaken with aromatic tea.", detailZh: "新鲜柠檬手打后与茶底摇匀。", ingredients: ["Lemon · 柠檬", "Tea · 茶底", "Ice · 冰块"] },
  { id: 10, emoji: "☕", nameEn: "Cold Brew Coffee", nameZh: "冷萃冰咖啡", category: "Drinks", categoryZh: "饮品", descEn: "Smooth, low-acidity cold brew", descZh: "低温萃取，口感顺滑", price: 24, rating: 4.8, flavor: "No sugar · 无糖", detailEn: "Coffee slowly extracted in cold water for a smooth, naturally sweet finish.", detailZh: "咖啡低温长时间萃取，口感顺滑、自然回甘。", ingredients: ["Coffee · 咖啡", "Water · 水", "Ice · 冰块"] },
  { id: 11, emoji: "🥭", nameEn: "Mango Pomelo Sago", nameZh: "杨枝甘露", category: "Drinks", categoryZh: "饮品", descEn: "Mango, coconut milk and pomelo", descZh: "芒果椰奶，西柚点缀", price: 26, rating: 4.9, flavor: "Signature · 招牌", detailEn: "A refreshing dessert drink of mango purée, coconut milk, sago and pomelo.", detailZh: "芒果泥、椰奶、西米和西柚制成的清爽甜品。", ingredients: ["Mango · 芒果", "Coconut milk · 椰奶", "Sago · 西米", "Pomelo · 西柚"] },

  { id: 12, emoji: "🍰", nameEn: "Strawberry Cream Cake", nameZh: "草莓奶油蛋糕", category: "Desserts", categoryZh: "甜点", descEn: "Fresh strawberries, light cream", descZh: "新鲜草莓，轻盈奶油", price: 32, rating: 4.8, flavor: "Seasonal · 季节限定", detailEn: "Soft sponge layered with fresh cream and ripe seasonal strawberries.", detailZh: "柔软海绵蛋糕夹入鲜奶油与当季草莓。", ingredients: ["Strawberry · 草莓", "Cream · 奶油", "Sponge · 海绵蛋糕"] },
  { id: 13, emoji: "🍮", nameEn: "Crème Caramel", nameZh: "焦糖布丁", category: "Desserts", categoryZh: "甜点", descEn: "Silky custard with golden caramel", descZh: "入口即化，焦香浓郁", price: 18, rating: 4.7, flavor: "Classic · 经典", detailEn: "Silky vanilla custard baked beneath a layer of golden caramel.", detailZh: "香草布丁表面覆盖金黄焦糖，口感丝滑。", ingredients: ["Egg · 鸡蛋", "Milk · 牛奶", "Sugar · 糖", "Vanilla · 香草"] },
  { id: 14, emoji: "🍫", nameEn: "Tiramisu", nameZh: "提拉米苏", category: "Desserts", categoryZh: "甜点", descEn: "Coffee, mascarpone and cocoa", descZh: "咖啡酒香，绵密醇厚", price: 28, rating: 4.9, flavor: "Popular · 人气", detailEn: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.", detailZh: "浸泡浓缩咖啡的手指饼干与马斯卡彭层层叠加。", ingredients: ["Mascarpone · 马斯卡彭", "Coffee · 咖啡", "Cocoa · 可可", "Ladyfinger · 手指饼干"] },
  { id: 15, emoji: "🧁", nameEn: "Mango Pancake", nameZh: "芒果班戟", category: "Desserts", categoryZh: "甜点", descEn: "Thin crepe, fresh mango filling", descZh: "薄皮包裹，果肉满满", price: 20, rating: 4.6, flavor: "Not too sweet · 甜而不腻", detailEn: "Delicate crepe wrapped around whipped cream and fresh mango chunks.", detailZh: "薄可丽饼包裹鲜奶油与大块芒果。", ingredients: ["Mango · 芒果", "Crepe · 可丽饼", "Cream · 奶油"] },

  { id: 16, emoji: "🍗", nameEn: "Crispy Chicken Wings", nameZh: "脆皮炸鸡翅", category: "Snacks", categoryZh: "小吃", descEn: "Golden, crunchy and juicy", descZh: "外酥里嫩，汁水丰盈", price: 24, rating: 4.8, flavor: "Mild · 微辣", detailEn: "Chicken wings fried until golden and crisp, juicy on the inside.", detailZh: "鸡翅炸至金黄酥脆，内里多汁。", ingredients: ["Chicken wings · 鸡翅", "Flour · 面粉", "Spices · 香料"] },
  { id: 17, emoji: "🍟", nameEn: "Golden Fries", nameZh: "黄金薯条", category: "Snacks", categoryZh: "小吃", descEn: "Crispy outside, fluffy inside", descZh: "现炸现卖，外脆内软", price: 14, rating: 4.4, flavor: "With ketchup · 配番茄酱", detailEn: "Hand-cut potatoes fried to order and served with ketchup.", detailZh: "现切土豆现炸，配番茄酱。", ingredients: ["Potato · 土豆", "Salt · 盐", "Oil · 油"] },
  { id: 18, emoji: "🥟", nameEn: "Golden Fried Dumplings", nameZh: "冰花煎饺", category: "Snacks", categoryZh: "小吃", descEn: "Crispy base, juicy filling", descZh: "底部焦脆，馅料多汁", price: 18, rating: 4.7, flavor: "Signature · 招牌", detailEn: "Pan-fried dumplings with a delicate crispy lattice base.", detailZh: "煎饺底部形成酥脆冰花。", ingredients: ["Dough · 面皮", "Pork · 猪肉", "Cabbage · 白菜"] },
  { id: 19, emoji: "🐙", nameEn: "Takoyaki", nameZh: "章鱼小丸子", category: "Snacks", categoryZh: "小吃", descEn: "Octopus balls with bonito flakes", descZh: "木鱼花舞动，酱香浓郁", price: 20, rating: 4.6, flavor: "Made fresh · 现做", detailEn: "Crispy octopus balls topped with takoyaki sauce and dancing bonito flakes.", detailZh: "酥脆章鱼小丸子淋酱，撒上舞动的木鱼花。", ingredients: ["Octopus · 章鱼", "Batter · 面糊", "Bonito · 木鱼花", "Sauce · 酱料"] },
  { id: 20, emoji: "🍢", nameEn: "Taiwanese Popcorn Chicken", nameZh: "盐酥鸡", category: "Snacks", categoryZh: "小吃", descEn: "Crispy bites with basil", descZh: "椒盐酥香，一口一个", price: 22, rating: 4.7, flavor: "Mild · 微辣", detailEn: "Bite-sized chicken seasoned with pepper salt and fried with fresh basil.", detailZh: "小块鸡肉以椒盐调味，与九层塔同炸。", ingredients: ["Chicken · 鸡肉", "Basil · 九层塔", "Pepper salt · 椒盐"] },

  { id: 21, emoji: "🍲", nameEn: "Mushroom Chicken Soup", nameZh: "菌菇鸡汤", category: "Soups", categoryZh: "汤品", descEn: "Earthy mushrooms, nourishing broth", descZh: "菌菇鲜香，汤底醇厚", price: 36, rating: 4.9, flavor: "Healthy · 养生", detailEn: "Slow-simmered chicken broth with assorted mushrooms for a deep, umami flavor.", detailZh: "多种菌菇与鸡汤慢炖，鲜香醇厚。", ingredients: ["Chicken · 鸡肉", "Mushroom · 菌菇", "Ginger · 姜"] },
  { id: 22, emoji: "🥘", nameEn: "Tomato Beef Brisket Soup", nameZh: "番茄牛腩汤", category: "Soups", categoryZh: "汤品", descEn: "Tangy tomato, tender beef brisket", descZh: "番茄浓郁，牛腩软烂", price: 40, rating: 4.8, flavor: "Comforting · 暖胃", detailEn: "Beef brisket simmered in a rich tomato broth until meltingly tender.", detailZh: "牛腩在浓郁番茄汤中炖至软烂。", ingredients: ["Beef brisket · 牛腩", "Tomato · 番茄", "Potato · 土豆"] }
];

const grid = document.getElementById("menuGrid");
const empty = document.getElementById("empty");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const filters = document.getElementById("filters");
const favFilter = document.getElementById("favFilter");
const favCount = document.getElementById("favCount");

const detailPanel = document.getElementById("detailPanel");
const detailClose = document.getElementById("detailClose");
const detailVisual = document.getElementById("detailVisual");
const detailEmoji = document.getElementById("detailEmoji");
const detailCategory = document.getElementById("detailCategory");
const detailRating = document.getElementById("detailRating");
const detailName = document.getElementById("detailName");
const detailSub = document.getElementById("detailSub");
const detailDesc = document.getElementById("detailDesc");
const detailIngredients = document.getElementById("detailIngredients");
const detailPrice = document.getElementById("detailPrice");
const detailFavBtn = document.getElementById("detailFavBtn");
const detailFavText = document.getElementById("detailFavText");

let currentCategory = "all";
let keyword = "";
let favOnly = false;
let selectedId = null;

let favorites = new Set();
try {
  favorites = new Set(JSON.parse(localStorage.getItem("menuFavorites") || "[]"));
} catch (error) {
  favorites = new Set();
}

function saveFavorites() {
  localStorage.setItem("menuFavorites", JSON.stringify([...favorites]));
}

function renderFilters() {
  const categories = ["all", ...new Set(menuData.map((item) => item.category))];
  const labels = {
    all: "All · 全部",
    "Main Course": "Main Course · 主食",
    Drinks: "Drinks · 饮品",
    Desserts: "Desserts · 甜点",
    Snacks: "Snacks · 小吃",
    Soups: "Soups · 汤品"
  };

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "chip" + (category === currentCategory ? " active" : "");
    button.dataset.category = category;
    button.textContent = labels[category] || category;
    filters.appendChild(button);
  });

  favFilter.className = "chip chip-fav";
  favFilter.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 21s-7.5-4.7-10-9.3C.4 8.5 2.4 4.5 6.2 4.5c2.2 0 3.6 1.2 4.6 2.8 1-1.6 2.4-2.8 4.6-2.8 3.8 0 5.8 4 4.2 7.2C17.1 16.3 12 21 12 21Z"/>
    </svg>
    Favorites · 只看收藏 <span id="favCount">${favorites.size}</span>
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
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const text = `${item.nameEn} ${item.nameZh} ${item.descEn} ${item.descZh} ${item.flavor} ${item.category} ${item.categoryZh}`.toLowerCase();
    const matchKeyword = text.includes(keyword.toLowerCase());
    const matchFav = !favOnly || favorites.has(item.id);
    return matchCategory && matchKeyword && matchFav;
  });

  grid.innerHTML = "";

  result.forEach((item) => {
    const card = document.createElement("article");
    card.className = "dish";
    card.dataset.id = item.id;
    card.innerHTML = `
      <div class="visual" data-category="${item.category}">
        <span class="emoji">${item.emoji}</span>
        <button class="heart ${favorites.has(item.id) ? "fav" : ""}" data-id="${item.id}" aria-label="Favorite">
          ${heartSvg()}
        </button>
      </div>
      <div class="info">
        <div class="top">
          <span class="tag">${item.category} · ${item.categoryZh}</span>
          <span class="rating">★ ${item.rating}</span>
        </div>
        <h3>${item.nameEn}</h3>
        <p class="zh">${item.nameZh}</p>
        <p class="desc">${item.descEn} · ${item.descZh}</p>
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

  if (selectedId && !result.some((item) => item.id === selectedId)) {
    detailPanel.hidden = true;
    selectedId = null;
  }
}

function showDetail(item) {
  selectedId = item.id;
  detailVisual.dataset.category = item.category;
  detailEmoji.textContent = item.emoji;
  detailCategory.textContent = `${item.category} · ${item.categoryZh}`;
  detailRating.textContent = `★ ${item.rating}`;
  detailName.textContent = item.nameEn;
  detailSub.textContent = item.nameZh;
  detailDesc.textContent = `${item.detailEn} ${item.detailZh}`;
  detailPrice.textContent = `¥${item.price}`;

  detailIngredients.innerHTML = "";
  item.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    detailIngredients.appendChild(li);
  });

  detailFavBtn.classList.toggle("fav", favorites.has(item.id));
  detailFavText.textContent = favorites.has(item.id)
    ? "Saved · 已收藏"
    : "Save to favorites · 收藏";

  detailPanel.hidden = false;
  detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function updateFavFilter() {
  const countEl = document.getElementById("favCount");
  if (countEl) countEl.textContent = favorites.size;
  favFilter.classList.toggle("active", favOnly);
}

grid.addEventListener("click", (event) => {
  const heart = event.target.closest(".heart");
  if (heart) {
    const id = Number(heart.dataset.id);
    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }
    saveFavorites();
    render();
    updateFavFilter();
    return;
  }

  const card = event.target.closest(".dish");
  if (!card) return;
  const item = menuData.find((dish) => dish.id === Number(card.dataset.id));
  if (item) showDetail(item);
});

filters.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  if (chip === favFilter) {
    favOnly = !favOnly;
    updateFavFilter();
    render();
    return;
  }

  document.querySelectorAll(".chip[data-category]").forEach((btn) => {
    btn.classList.remove("active");
  });
  chip.classList.add("active");
  currentCategory = chip.dataset.category;
  render();
});

searchInput.addEventListener("input", (event) => {
  keyword = event.target.value.trim();
  clearBtn.hidden = keyword.length === 0;
  render();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  keyword = "";
  clearBtn.hidden = true;
  searchInput.focus();
  render();
});

detailClose.addEventListener("click", () => {
  detailPanel.hidden = true;
  selectedId = null;
});

detailFavBtn.addEventListener("click", () => {
  const item = menuData.find((dish) => dish.id === selectedId);
  if (!item) return;

  if (favorites.has(item.id)) {
    favorites.delete(item.id);
  } else {
    favorites.add(item.id);
  }
  saveFavorites();
  detailFavBtn.classList.toggle("fav", favorites.has(item.id));
  detailFavText.textContent = favorites.has(item.id)
    ? "Saved · 已收藏"
    : "Save to favorites · 收藏";
  render();
  updateFavFilter();
});

renderFilters();
updateFavFilter();
render();