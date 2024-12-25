// 定義店家資料的陣列，每個店家包含名稱、網址、評分、價格範圍、距離和照片
const stores = [
    { name: "HUN混", url: "https://maps.app.goo.gl/9TzWFUoW9twxgyhe9", rating: 4.5, price: [200,400], distance: 45, photo: "https://lh5.googleusercontent.com/p/AF1QipNY6s11mygsidwKb1Xv3CkY7qYjDpcc3ZvgZQrd=w426-h240-k-no" },
    { name: "神攻沙威瑪 台中一中店", url: "https://maps.app.goo.gl/zym5fXAwPtKwsT2r9", rating: 4.0, price: [1, 200], distance: 41, photo: "https://lh5.googleusercontent.com/p/AF1QipOZyYhBoCSJiIXLvfv-zXrsXeBcFRvZlmKB4VYa=w408-h544-k-no" },
    { name: "OT蛋餅一中大本營", url: "https://maps.app.goo.gl/p5FUWwgWMzHXTfF27", rating: 4.2, price: [1, 200], distance: 45, photo: "https://example.com/photo3.jpg" },
    { name: "九州日式豚骨拉麵(一中店)", url: "https://maps.app.goo.gl/nZMjQiwrRmfksgL97", rating: 4.1, price: [1, 200], distance: 100, photo: "https://example.com/photo4.jpg" },
    { name: "宅 一中店", url: "https://maps.app.goo.gl/AQYtBcSvRwEBQ5cD8", rating: 4.5, price: [400, 600], distance: 100, photo: "https://lh5.googleusercontent.com/p/AF1QipNPtXY5n3cgY65_VMviciycFdZQHA-_gKH-Dpg5=w408-h272-k-no" },
];

// 定義顯示所有店家的函數
function displayStores(storeList) {
    // 獲取店家列表的容器元素
    const storeListContainer = document.getElementById("store-list");
    storeListContainer.innerHTML = "";

    // 將店家添加到列表中
    storeList.forEach(store => {
        const storeElement = document.createElement("li");
        storeElement.classList.add("store-item");
        storeElement.innerHTML = `
            <div class="store-photo">
                <img src="${store.photo}" alt="${store.name}的照片">
            </div>
            <div>
                <h3>${store.name}</h3>
                <p>距離: ${store.distance} 公尺</p>
                <p>評分: ${store.rating} 顆星</p>
                <p>價格: ${Array.isArray(store.price) ? store.price.join('-') : store.price} 元</p>
            </div>
            <div class="store-link">
                <a href="${store.url}" target="_blank">
                    <button class="map-button">
                        <img src="https://illustration-free.net/thumb/svg/ifn0950.svg" alt="地標圖案">
                    </button>
                </a>
            </div>
        `;
        storeListContainer.appendChild(storeElement);
    });
}

// 定義搜尋店家的函數
function searchStores() {
    // 獲取篩選條件的值
    const rating = document.getElementById("rating").value;
    const priceRange = document.getElementById("priceRange").value;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    const distance = document.getElementById("distance").value;

    // 根據篩選條件過濾店家
    const filteredStores = stores.filter(store => 
        store.rating >= rating &&
        (Array.isArray(store.price) ?
            store.price[0] <= maxPrice && store.price[1] >= minPrice :
            store.price >= minPrice && store.price <= maxPrice) &&
        store.distance <= distance
    );

    // 顯示過濾後的店家
    displayStores(filteredStores);
}

// 在頁面加載時顯示所有店家
window.onload = function() {
    displayStores(stores);
};
