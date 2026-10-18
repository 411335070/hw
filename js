// 景點資料庫 (JSON Array 結構)
const attractions = [
  {
    id: 1,
    name: "東京淺草寺",
    region: "kanto",
    regionName: "關東地區",
    image: "https://images.unsplash.com/photo-1583838423196-857201c107bf?q=80&w=800&auto=format&fit=crop",
    shortDesc: "東京都內最古老的寺廟，雷門大紅燈籠為代表性地標。",
    fullDesc: "淺草寺建於公元 628 年，是東京歷史最悠久的寺廟。來到這裡可以參觀標誌性的「雷門」與巨大提燈，沿著仲見世通商店街品嚐各式傳統日本點心與購買紀念品。"
  },
  {
    id: 2,
    name: "京都伏見稻荷大社",
    region: "kansai",
    regionName: "關西地區",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    shortDesc: "以綿延不絕的「千本鳥居」聞名世界的神社。",
    fullDesc: "伏見稻荷大社是全日本稻荷神社的總本社，主要供奉商業繁榮與五穀豐收之神。沿著稻荷山延伸的千本鳥居形成極為壯觀的紅色隧道，吸引無數旅客參訪。"
  },
  {
    id: 3,
    name: "北海道富良野花田",
    region: "hokkaido",
    regionName: "北海道",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800&auto=format&fit=crop",
    shortDesc: "夏季盛開的紫色薰衣草花海與彩虹花田。",
    fullDesc: "富良野以廣闊的花田景緻聞名，每年 7 月中旬至下旬是薰衣草盛開的最佳季節。如彩虹般排列的花海搭配遠處的山脈，是北海道代表性的自然景觀。"
  },
  {
    id: 4,
    name: "沖繩美麗海水族館",
    region: "okinawa",
    regionName: "沖繩",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    shortDesc: "擁有巨大水槽「黑潮之海」，可近距離觀察鯨鯊。",
    fullDesc: "位於海洋博公園內的美麗海水族館，最著名的「黑潮之海」水槽容量達 7,500 立方公尺，展示著巨大鯨鯊與鬼蝠魟，帶給遊客身歷其境的大海震撼。"
  },
  {
    id: 5,
    name: "富士山河口湖",
    region: "kanto",
    regionName: "關東地區",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    shortDesc: "欣賞富士山倒影（逆富士）的絕佳景觀勝地。",
    fullDesc: "富士五湖之一的河口湖，交通便利且四季皆有不同美景。春天賞櫻、秋季賞楓，在清晨微風靜止時，還能拍攝到完美的「逆富士」倒影。"
  }
];

// DOM 元素選取
const grid = document.getElementById("attractionsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");

let currentRegion = "all";
let searchKeyword = "";

// 渲染卡片
function renderCards() {
  grid.innerHTML = "";
  
  const filtered = attractions.filter(item => {
    const matchesRegion = currentRegion === "all" || item.region === currentRegion;
    const matchesSearch = item.name.includes(searchKeyword) || item.shortDesc.includes(searchKeyword);
    return matchesRegion && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">找不到符合條件的景點。</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="card-body">
        <span class="badge">${item.regionName}</span>
        <h3>${item.name}</h3>
        <p>${item.shortDesc}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    grid.appendChild(card);
  });
}

// 彈窗（Modal）操作
function openModal(item) {
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalRegion").textContent = item.regionName;
  document.getElementById("modalDescription").textContent = item.fullDesc;
  modal.style.display = "flex";
}

modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// 地區篩選事件
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentRegion = btn.dataset.region;
    renderCards();
  });
});

// 即時搜尋事件
searchInput.addEventListener("input", (e) => {
  searchKeyword = e.target.value.trim();
  renderCards();
});

// 初始化載入
renderCards();
