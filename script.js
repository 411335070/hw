// 景點資料庫 (包含 12 個熱門景點、對應的實際場景圖片與外部官方介紹連結)
const attractions = [
  {
    id: 1,
    name: "東京淺草寺",
    region: "kanto",
    regionName: "關東地區",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0aIsRFFOIAGFFYalkMVgcDBQ0VpGpYIYnyPtifI99sGB945dsSF07QBbdvMQTd4cUKtESDFjkY2cUMA6YTg71LjkH2ZC3USaqqWnik-r8y8Q-dg4lYd6_xf4D2oeaay_tAixmFC4vVMuEL2tEsbgXU_nNUaoUKr48spTKV0-icE5O2-nMqgitOpiUZjFVH0yX6WOv", // image_2.png
    shortDesc: "東京都內最古老的寺廟，雷門大紅燈籠為代表性地標。",
    fullDesc: "淺草寺建於公元 628 年，是東京歷史最悠久的寺廟。來到這裡可以參觀標誌性的「雷門」與巨大提燈，沿著仲見世通商店街品嚐各式傳統日本點心與購買紀念品。",
    url: "https://www.senso-ji.jp/"
  },
  {
    id: 2,
    name: "京都伏見稻荷大社",
    region: "kansai",
    regionName: "關西地區",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGx9njGUd0fOz_rSElOzdHeCu8pWCUnfW4cnQVQ_iLPMTZzS5tQkpbb515xud3RALhchRYYwxPQ-9utxhiOmIELpT_WjyS6XZd4qTy_vV9uKNweiJB1PVCOWTqqqpetzMrxWSuhESTN0CV9FNvVKKI3OdOQiFd2", // image_3.png
    shortDesc: "以綿延不絕的「千本鳥居」聞名世界的宗教勝地。",
    fullDesc: "伏見稻荷大社是全日本稻荷神社的總本社，主要供奉商業繁榮與五穀豐收之神。沿著稻荷山延伸的千本鳥居形成極為壯觀的紅色隧道，吸引無數旅客參訪。",
    url: "https://inari.jp/"
  },
  {
    id: 3,
    name: "北海道富良野花田",
    region: "hokkaido",
    regionName: "北海道",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4s5aIfPVpLwJLLy8MtVHfUrvrWg8yTSqkYvw-22LPVWw9zXD2v7F7yjJ18xiB-mCcsByEx5PtWfRYySfjkaOWez7HbB1jW_kScSEHYNPo-WeC6Lk7X8h8bPB_0ClkTAC8d_I2eqAWCZCTkPzBA38=", // image_5.png
    shortDesc: "夏季盛開的紫色薰衣草花海與彩虹花田。",
    fullDesc: "富良野以廣闊的花田景緻聞名，每年 7 月中旬至下旬是薰衣草盛開的最佳季節。如彩虹般排列的花海搭配遠處的山脈，是北海道代表性的自然景觀。",
    url: "https://www.farm-tomita.co.jp/"
  },
  {
    id: 4,
    name: "沖繩美麗海水族館",
    region: "okinawa",
    regionName: "沖繩",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFRqedp2gcxYrHKYCO6w_TwcZUbZ8JSi8nQpQinqcrh-bkqrRSWbebjXeV116ERQk2_iIbrTJNxijsisUmS3Yg4yYnnE1ibhyG1wTR-Eyx07-_1i7RdMlmX6-B9SF1M4Tjb15k4BbqAA9fmxnzJgwqqEyugfBmBkAFjqLWAmw==", // image_7.png
    shortDesc: "擁有巨大水槽「黑潮之海」，可近距離觀察鯨鯊。",
    fullDesc: "位於海洋博公園內的美麗海水族館，最著名的「黑潮之海」水槽容量達 7,500 立方公尺，展示著巨大鯨鯊與鬼蝠魟，帶給遊客身歷其境的大海震撼。",
    url: "https://churaumi.okinawa/"
  },
  {
    id: 5,
    name: "富士山河口湖",
    region: "kanto",
    regionName: "關東地區",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGCut_2YOs-XovSR923VvAVfR7MZS7gH3Jf2AnadrfIS_m0Bat8U_r6DdnOGabYf5uwvMl0spWaRUwEtAWVz-OJG2IaZyf-WXfq9Sdh0K_BNz-4XlNBY2mOxXAAT2_M3qABfJhV0wH4cwjZWuaqS2tddeeHdY1mt-56ec1sl-rYZ0ki4c=", // image_10.png
    shortDesc: "欣賞富士山與櫻花倒影（逆富士）的絕佳景觀勝地。",
    fullDesc: "富士五湖之一的河口湖，交通便利且四季皆有不同美景。春天賞櫻、秋季賞楓，在清晨微風靜止時，還能拍攝到完美的「逆富士」倒影。",
    url: "https://fujisan.ne.jp/"
  },
  {
    id: 6,
    name: "大阪城天守閣",
    region: "kansai",
    regionName: "關西地區",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHw1qiEnw3LN5ZGvoK1Z8Yx7NV9bcLyNrFesudiu8eTu3y5AWoMTghIyyvuEBXeCsOPROhE0JxmPQt9U5i1KELRwY4Sa01U9XVY7jepgkDX1waihnJcdcy1Ld7vxKrFRa5gX6p-MKYIvg8CbpHcTYnyNAh1", // image_11.png
    shortDesc: "日本三大名城之一，象徵大阪歷史與文化的標誌建築。",
    fullDesc: "由豐臣秀吉於 16 世紀建造的大阪城，天守閣內展示著豐富的戰國時代歷史文物，登頂可俯瞰大阪市區全景。周邊的大阪城公園也是賞櫻名勝。",
    url: "https://www.osakacastle.net/"
  },
  {
    id: 7,
    name: "奈良公園",
    region: "kansai",
    regionName: "關西地區",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHALa2cpwVP_EhKUsJW10TXRZTSBsBz__dfJ01NryVV0IaA5DfPLztStQnqFX2eF6QJUYngbuizEhmS0w3Y5xlSCOozFrzCj3nwg6PQPkxBk7mnM1WregfhlDdzjW51sPguXzO6SjXVWj9DSoaCFITjRxOYmNhmHLC0gKc=", // image_13.png
    shortDesc: "歷史悠久的公園，以自由漫步的野生梅花鹿聞名。",
    fullDesc: "奈良公園涵蓋了東大寺、興福寺、春日大社等多座世界遺產。園內有超過上千隻野生鹿群自由漫步，遊客可購買鹿餅與牠們進行親密互動。",
    url: "https://www.pref.nara.jp/1717.htm"
  },
  {
    id: 8,
    name: "北海道小樽運河",
    region: "hokkaido",
    regionName: "北海道",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU1i-R6fn2J7fIQUHZXXlYrAlI-ENJNVd0SBtJsu7BDrlrOMW-4dadhPnpxmba8rHyUhyyipyh363dLQiMhzs1hNDVPIOjhFrvHTtq5z8HLhJILanOVYiOUpZbCcN3kQ25pJA1uJV_hXwmdFQQMCcWuNkUvrWhLLIhc1hRJ7-TkESueWlR2qGjUxVPNju5XloJd2bw5pvr5Zg=", // image_15.png
    shortDesc: "充滿復古懷舊情調的運河，兩旁散布著磚造倉庫群。",
    fullDesc: "小樽運河開鑿於 1923 年，曾是北海道重要的物流樞紐。如今沿岸的煤氣路燈與磚造倉庫改建為餐廳與工藝館，傍晚點燈後呈現極為浪漫異國風情景致。",
    url: "https://otaru.gr.jp/"
  },
  {
    id: 9,
    name: "廣島嚴島神社（海上鳥居）",
    region: "other",
    regionName: "其他地區（中國地方）",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0qwrBCJwAt10UpWi7rXdSBRYXOtY69kAmjOoKPBZafax7X9ILfwBgcSHxJxpmcAt_RevTJRkeDeLKE-qenfLKeXs_h-aPRC-HE2UEZmL2kddCqOxcxHvcOVsvYaMTouFssSjSHCyjD4-8C30ltF-qfIpZHq5TsN6crUW5uO58GNdBngiiNlmr9sD-2gH3qbmtRZc=", // image_17.png
    shortDesc: "世界文化遺產，聳立於海面上的壯觀朱紅色大鳥居。",
    fullDesc: "位於廣島縣宮島的嚴島神社擁有超過千年歷史。最具代表性的木造大鳥居立於海灘上，漲潮時宛如飄浮於大海之中，退潮時則可步行至鳥居下方近距離欣賞。",
    url: "https://www.itsukushimajinja.jp/"
  },
  {
    id: 10,
    name: "沖繩古宇利大橋",
    region: "okinawa",
    regionName: "沖繩",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0EOZdyDE65NHuXYmQ23QCwr7n1cy4BtED4T7JD1RwPXC_wYbm6MlIORN1V3BbYgBK4mXuegFkUazbs1dVjDhA-gUtqAoYGR5llLsHZSiDGJig4Rp2idkbDsXGeMy9bo5YBz6Nl6Bh0hlWmNvKHK-BsWaqAKQhDyc9usDVQqzqxw28hY1vVqiEO8jWrHYnPQ==", // image_19.png
    shortDesc: "跨越漸層玻璃海的長橋，直通古宇利島。",
    fullDesc: "古宇利大橋全長約 1,960 公尺，連結屋我地島與古宇利島。開車行駛於大橋上，兩側可盡情欣賞清澈透明的「古宇利藍」海水，為沖繩必訪的絕美自駕路線。",
    url: "https://www.nakijin.jp/"
  },
  {
    id: 11,
    name: "名古屋城",
    region: "other",
    regionName: "其他地區（中部地區）",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHVGO_MnwEOwsPJWb5R4sfTmYscaIiMymDe8r1rh-d_m9owugA__x2wcxm9bovypKpuABepA7vh63rdQ7HKciWe1irhkPSCWrp0IDJ2pLtgyUlmwYyJv7mWloX_KGUyCuDWCHrp-S162Gh4zTyQPSozAPB28tZ0Dkoy4pET2fF18DSk4z7YzhMLoxKSkhE=", // image_22.png
    shortDesc: "屋頂上飾有金碧輝煌的「金鯱」，為德川家康所建名城。",
    fullDesc: "名古屋城由德川家康於 1612 年下令修建，天守閣屋頂兩端的金鯱為其最具代表性的標誌。近年重建完成的「本丸御殿」極具工藝美感，展示了繁複精美的金箔壁畫。",
    url: "https://www.nagoyacastle.jp/"
  },
  {
    id: 12,
    name: "福岡太宰府天滿宮",
    region: "other",
    regionName: "其他地區（九州）",
    image: "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHePGCoQvJQ1tETDjnI6nR8zYwrVog4BzjoZ5oOuciXvf0UANUsyuJI0035sX8OLEa9DMxtMqHS1jbfcI8w0tFIDX9iiEhAx_TnlGUuisBmNHJk9-3eGPSBKOgYl19pTK8tyNF1AKyjcwIiPnmYQWyItln5Tj8L7FUGcUEMD4G64JiCShyh4yDVhLjVAS2txsyJ0lL0Gy_hz81Dv_KdArJs8NM-nA8=", // image_24.png
    shortDesc: "祈求學業進步的信仰中心，參道上的梅枝餅極具特色。",
    fullDesc: "太宰府天滿宮供奉學問之神菅原道真，全日本考生常遠道而來祈求考運昌隆。境內種植有數千株梅花，參道上更有著名建築師隈研吾設計的星巴克與現烤名產「梅枝餅」。",
    url: "https://www.dazaifutenmangu.or.jp/"
  }
];

// DOM 元素選取
const grid = document.getElementById("attractionsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalLink = document.getElementById("modalLink");

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
  
  // 設定外部網站連結
  modalLink.href = item.url;
  
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
