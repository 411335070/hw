// 景點資料庫
const spotsData = [
  {
    id: "fuji-01",
    title: "富士山與新倉山淺間公園",
    jpName: "新倉山浅間公園 (Fujiyoshida)",
    region: "關東",
    category: "必訪名勝",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
    description: "擁有眺望富士山絕景的最佳位置！園內的忠靈塔與遠處壯麗的富士山構成日本經典代表景致，春季更是賞櫻的極致聖地。",
    hours: "24小時開放",
    season: "春季(櫻花) / 秋季(楓葉)",
    access: "富士急行線「下吉田站」徒步約10分鐘即可抵達園區入口",
    mapQuery: "Arakurayama Sengen Park"
  },
  {
    id: "kyoto-kiyomizu",
    title: "清水寺",
    jpName: "清水寺 (Kiyomizu-dera)",
    region: "關西",
    category: "歷史古蹟",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    description: "京都最古老的寺院之一，名列世界文化遺產。著名的「清水舞台」懸空構建於山崖，四季景緻皆令人震撼，尤以秋季夜楓最為人稱道。",
    hours: "06:00 - 18:00 (依季節延長)",
    season: "四季皆宜 (特別推薦秋季)",
    access: "JR京都站搭乘市營巴士至「五條坂」下車徒步10分鐘",
    mapQuery: "Kiyomizu-dera Kyoto"
  },
  {
    id: "tokyo-sensoji",
    title: "淺草寺與雷門",
    jpName: "浅草寺 (Senso-ji)",
    region: "關東",
    category: "歷史古蹟",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583838384210-94e825026049?auto=format&fit=crop&w=800&q=80",
    description: "東京都內最古老的寺廟，巨大的「雷門」紅燈籠是東京的指標性地標。仲見世通商店街提供各式美食與傳統工藝品。",
    hours: "06:00 - 17:00 (境內全天可參觀)",
    season: "全年",
    access: "東京地下鐵銀座線、都營淺草線「淺草站」徒步5分鐘",
    mapQuery: "Sensoji Temple Tokyo"
  },
  {
    id: "hokkaido-biei",
    title: "富良野與美瑛青池",
    jpName: "白金青い池 (Shirogane Aoiike)",
    region: "北海道",
    category: "自然風光",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
    description: "池水富含礦物質，呈現出極具神秘感的夢幻翡翠藍。隨季節與陽光角度變幻不同光澤，與佇立池中的枯木形成奇幻景緻。",
    hours: "24小時開放 (建議白天前往)",
    season: "夏季(池水最藍) / 冬季(夜間點燈)",
    access: "JR美瑛站搭乘道北巴士至「白金青い池」站下車",
    mapQuery: "Shirogane Aoiike Biei"
  },
  {
    id: "osaka-dotonbori",
    title: "道頓堀與心齋橋",
    jpName: "道頓堀 (Dotonbori)",
    region: "關西",
    category: "美食購物",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=80",
    description: "大阪最繁華的代表性商圈！巨型跑者跑道招牌、章魚燒、串炸等天下廚房美食集結於此，夜晚霓虹燈火璀璨無比。",
    hours: "依各店家營業時間而定",
    season: "全年",
    access: "大阪地下鐵御堂筋線「難波站」14號出口徒步3分鐘",
    mapQuery: "Dotonbori Osaka"
  },
  {
    id: "akihabara-01",
    title: "秋葉原電器街",
    jpName: "秋葉原 (Akihabara)",
    region: "關東",
    category: "動漫聖地",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    description: "全球動漫文化與電子產品的次文化聖地！公仔模型、女僕咖啡廳、電玩大樓林立，是御宅族與流行文化愛好者天堂。",
    hours: "10:00 - 21:00 (依店家不同)",
    season: "全年",
    access: "JR山手線 / 總武線「秋葉原站」出站即達",
    mapQuery: "Akihabara Tokyo"
  },
  {
    id: "nara-park",
    title: "奈良公園與東大寺",
    jpName: "奈良公園 (Nara Park)",
    region: "關西",
    category: "自然風光",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    description: "以近距離互動的親人野生梅花鹿聞名！公園鄰近宏偉的木造大佛殿「東大寺」，自然與歷史文化和諧交融。",
    hours: "24小時開放 (東大寺 07:30 - 17:30)",
    season: "春季 / 秋季",
    access: "近鐵「奈良站」徒步約10分鐘",
    mapQuery: "Nara Park"
  },
  {
    id: "okinawa-churaumi",
    title: "美麗海水族館",
    jpName: "沖縄美ら海水族館",
    region: "沖繩",
    category: "必訪名勝",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "擁有巨大的「黑潮之海」水槽，能近距離欣賞巨大鯨鯊與鬼蝠魟優雅游動，是亞洲最震撼的水族館之一。",
    hours: "08:30 - 18:30",
    season: "全年",
    access: "那霸機場搭乘高速巴士至「紀念公園前」站下車",
    mapQuery: "Okinawa Churaumi Aquarium"
  }
];

const regions = ["全部地區", "關東", "關西", "北海道", "沖繩"];
const categories = ["全部主題", "必訪名勝", "歷史古蹟", "自然風光", "美食購物", "動漫聖地"];

// 全局狀態
let currentRegion = "全部地區";
let currentCategory = "全部主題";
let searchQuery = "";
let favorites = JSON.parse(localStorage.getItem('jp_favs') || '[]');
let activeModalSpotId = null;
let toastTimeout = null;

// DOM 元素引用
const spotGrid = document.getElementById('spot-grid');
const emptyState = document.getElementById('empty-state');
const spotCount = document.getElementById('spot-count');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const emptyResetBtn = document.getElementById('empty-reset-btn');
const regionFiltersContainer = document.getElementById('region-filters');
const categoryFiltersContainer = document.getElementById('category-filters');

// 初始化事件監聽與畫面渲染
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initTheme();
  renderFilterChips();
  renderSpots();
  updateFavBadges();

  // 搜尋事件
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle('hidden', !searchQuery);
    renderSpots();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderSpots();
  });

  resetFiltersBtn.addEventListener('click', resetFilters);
  emptyResetBtn.addEventListener('click', resetFilters);

  // 主題模式切換
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

  // 收藏抽屜開關事件
  document.getElementById('fav-open-btn').addEventListener('click', openDrawer);
  document.getElementById('fav-open-btn-mobile').addEventListener('click', openDrawer);
  document.getElementById('drawer-close-btn').addEventListener('click', closeDrawer);
  document.getElementById('drawer-backdrop').addEventListener('click', (e) => {
    if(e.target.id === 'drawer-backdrop') closeDrawer();
  });
  document.getElementById('clear-favs-btn').addEventListener('click', clearFavorites);

  // 景點彈窗關閉事件
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if(e.target.id === 'modal-backdrop') closeModal();
  });
});

// 主題切換邏輯
function initTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
}

// 渲染篩選按鈕
function renderFilterChips() {
  regionFiltersContainer.innerHTML = regions.map(r => `
    <button onclick="setRegion('${r}')" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${currentRegion === r ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}">
      ${r}
    </button>
  `).join('');

  categoryFiltersContainer.innerHTML = categories.map(c => `
    <button onclick="setCategory('${c}')" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${currentCategory === c ? 'bg-sakura-500 text-white shadow-md shadow-sakura-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}">
      ${c}
    </button>
  `).join('');
}

function setRegion(r) {
  currentRegion = r;
  renderFilterChips();
  renderSpots();
}

function setCategory(c) {
  currentCategory = c;
  renderFilterChips();
  renderSpots();
}

function resetFilters() {
  currentRegion = "全部地區";
  currentCategory = "全部主題";
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.classList.add('hidden');
  renderFilterChips();
  renderSpots();
}

// 景點過濾計算
function getFilteredSpots() {
  return spotsData.filter(spot => {
    const matchesRegion = currentRegion === "全部地區" || spot.region === currentRegion;
    const matchesCategory = currentCategory === "全部主題" || spot.category === currentCategory;
    const matchesSearch = !searchQuery || 
      spot.title.toLowerCase().includes(searchQuery) ||
      spot.jpName.toLowerCase().includes(searchQuery) ||
      spot.description.toLowerCase().includes(searchQuery);
    return matchesRegion && matchesCategory && matchesSearch;
  });
}

// 渲染景點卡片列表
function renderSpots() {
  const filtered = getFilteredSpots();
  spotCount.textContent = filtered.length;

  const isFiltered = currentRegion !== "全部地區" || currentCategory !== "全部主題" || searchQuery !== "";
  resetFiltersBtn.classList.toggle('hidden', !isFiltered);

  if (filtered.length === 0) {
    spotGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  spotGrid.innerHTML = filtered.map(spot => {
    const isFav = favorites.includes(spot.id);
    return `
      <div class="group bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer" onclick="openModal('${spot.id}')">
        <div class="relative h-48 sm:h-52 overflow-hidden">
          <img src="${spot.image}" alt="${spot.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          
          <span class="absolute top-3 left-3 bg-slate-900/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
            ${spot.region}
          </span>

          <button onclick="toggleFav(event, '${spot.id}')" class="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform ${isFav ? 'text-sakura-500 fill-current' : ''}">
            <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-sakura-500 text-sakura-500' : ''}"></i>
          </button>

          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
            <span class="text-xs bg-sakura-500 px-2 py-0.5 rounded font-medium">${spot.category}</span>
            <div class="flex items-center gap-1 text-xs font-bold text-amber-300">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <span>${spot.rating}</span>
            </div>
          </div>
        </div>

        <div class="p-5 flex-grow flex flex-col justify-between space-y-3">
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sakura-500 transition-colors line-clamp-1">
              ${spot.title}
            </h3>
            <p class="text-xs text-slate-400 font-medium mb-2">${spot.jpName}</p>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
              ${spot.description}
            </p>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sakura-500"></i>
              ${spot.region}
            </span>
            <span class="font-medium text-sakura-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              查看詳情
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 景點詳情 Modal 邏輯
function openModal(spotId) {
  const spot = spotsData.find(s => s.id === spotId);
  if (!spot) return;

  activeModalSpotId = spotId;

  document.getElementById('modal-img').src = spot.image;
  document.getElementById('modal-region').textContent = spot.region;
  document.getElementById('modal-rating').textContent = spot.rating;
  document.getElementById('modal-title').textContent = spot.title;
  document.getElementById('modal-jpname').textContent = spot.jpName;
  document.getElementById('modal-desc').textContent = spot.description;
  document.getElementById('modal-hours').textContent = spot.hours;
  document.getElementById('modal-season').textContent = spot.season;
  document.getElementById('modal-access').textContent = spot.access;
  document.getElementById('modal-map-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`;

  document.getElementById('modal-tags').innerHTML = `
    <span class="px-2.5 py-1 rounded-lg bg-sakura-50 dark:bg-slate-800 text-sakura-600 dark:text-sakura-400 text-xs font-semibold"># ${spot.category}</span>
    <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold"># ${spot.region}</span>
  `;

  updateModalFavBtn();

  const backdrop = document.getElementById('modal-backdrop');
  const card = document.getElementById('modal-card');

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  document.body.style.overflow = 'hidden';

  document.getElementById('modal-fav-btn').onclick = (e) => {
    toggleFav(e, spotId);
    updateModalFavBtn();
  };
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const card = document.getElementById('modal-card');

  backdrop.classList.add('opacity-0', 'pointer-events-none');
  card.classList.remove('scale-100');
  card.classList.add('scale-95');

  document.body.style.overflow = '';
  activeModalSpotId = null;
}

function updateModalFavBtn() {
  if (!activeModalSpotId) return;
  const isFav = favorites.includes(activeModalSpotId);
  const textSpan = document.getElementById('modal-fav-text');
  const btn = document.getElementById('modal-fav-btn');

  if (isFav) {
    textSpan.textContent = "已收藏景點";
    btn.classList.add('border-sakura-500', 'text-sakura-500', 'bg-sakura-50', 'dark:bg-slate-800');
  } else {
    textSpan.textContent = "加入收藏";
    btn.classList.remove('border-sakura-500', 'text-sakura-500', 'bg-sakura-50', 'dark:bg-slate-800');
  }
}

// 收藏功能與 localStorage 管理
function toggleFav(event, spotId) {
  if(event) event.stopPropagation();

  const index = favorites.indexOf(spotId);
  let isAdded = false;

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(spotId);
    isAdded = true;
  }

  localStorage.setItem('jp_favs', JSON.stringify(favorites));
  updateFavBadges();
  renderSpots();
  if(document.getElementById('drawer-backdrop').classList.contains('opacity-100')) {
    renderDrawerList();
  }

  showToast(isAdded ? "已新增至我的收藏！" : "已從收藏中移除");
}

function clearFavorites() {
  if (favorites.length === 0) return;
  if (confirm('確定要清空所有收藏的景點嗎？')) {
    favorites = [];
    localStorage.setItem('jp_favs', JSON.stringify(favorites));
    updateFavBadges();
    renderSpots();
    renderDrawerList();
    showToast("已清空所有收藏");
  }
}

function updateFavBadges() {
  const count = favorites.length;
  document.getElementById('fav-badge').textContent = count;
  document.getElementById('fav-badge-mobile').textContent = count;
}

// 側邊收藏抽屜邏輯
function openDrawer() {
  renderDrawerList();
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('drawer');

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100');
  drawer.classList.remove('translate-x-full');

  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('drawer');

  backdrop.classList.add('opacity-0', 'pointer-events-none');
  backdrop.classList.remove('opacity-100');
  drawer.classList.add('translate-x-full');

  document.body.style.overflow = '';
}

function renderDrawerList() {
  const listContainer = document.getElementById('drawer-list');
  const favSpots = spotsData.filter(s => favorites.includes(s.id));

  if (favSpots.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 space-y-3">
        <div class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <i data-lucide="heart-off" class="w-6 h-6"></i>
        </div>
        <p class="text-slate-500 dark:text-slate-400 text-sm">目前尚無收藏景點</p>
        <p class="text-xs text-slate-400">點擊景點卡片上的愛心按鈕即可收藏！</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  listContainer.innerHTML = favSpots.map(spot => `
    <div class="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 group">
      <img src="${spot.image}" alt="${spot.title}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0">
      <div class="flex-grow min-w-0">
        <h4 class="font-bold text-sm text-slate-900 dark:text-white truncate">${spot.title}</h4>
        <p class="text-xs text-slate-400 truncate mb-1">${spot.jpName}</p>
        <span class="text-[10px] bg-sakura-100 dark:bg-sakura-950 text-sakura-600 dark:text-sakura-400 px-2 py-0.5 rounded-md font-medium">${spot.region}</span>
      </div>
      <button onclick="toggleFav(event, '${spot.id}')" class="p-2 text-slate-400 hover:text-rose-500 transition-colors">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');

  lucide.createIcons();
}

// Toast 動態提示訊息
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}
