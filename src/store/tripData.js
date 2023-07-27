const tripData = [
    {
        id: 1,
        img: require('@/assets/img/place/place_001.png'),
        tag: "新竹・#親子 #情侶 #風景 #藝文 #放鬆 #懷舊",
        name: "新竹懷舊之旅",
        desc: "新竹內灣旅行去，來內灣一日遊要怎麼玩呢？除了內灣老街外，週邊也有一些亮點，像是景觀餐廳、文青景點、咖啡廳，自然景觀，推薦大家可以一同順遊，除了玩內灣，如果有時間，尖石一帶也有一些不錯的景點，可以順著路線玩上去。",
        author: "小編A",
        date: "2023 / 7 / 9",
        link: "/trip_info",
    },
    {
        id: 2,
        img: require('@/assets/img/place/place_006-1.png'),
        tag: "宜蘭・#親子 #情侶 #風景",
        name: "宜蘭芬多精一日遊",
        desc: "不知道要去哪裡玩嗎？精選六個宜蘭知名景點，有吃又有玩，無論是親子出遊、朋友相聚或者是情侶約會保證您都能玩得很盡興。",
        author: "小編B",
        date: "2023 / 7 / 12",
        link: "/trip_info",
    },
    {
        id: 3,
        img: require('@/assets/img/place/place_012.png'),
        tag: "新北・#親子 #情侶 #風景 #海邊 #放鬆",
        name: "新北藝術一日遊",
        desc: "來去新北一日遊，鶯歌、三峽這裡也有蠻多特色景點，不只是逛老街，也可以安排個鶯歌景點一日遊，順便遊三峽景點。不管是季節限定的賞花景點，還是親子同遊必拍，又或者是IG熱門打卡點，通通好玩報你知。",
        author: "小編A",
        date: "2023 / 7 / 13",
        link: "/trip_info",
    },
    {
        id: 4,
        img: require('@/assets/img/place/place_019-1.png'),
        tag: "台北・#親子 #藝文 #放鬆",
        name: "台北泡湯一日遊",
        desc: "台北一日遊，探索台北的繁華與傳統魅力！不只是泡溫泉，也可以安排個美食之旅，順便去公園遊玩。不管是季節限定的賞花景點，還是親子同遊必拍！。",
        author: "小編A",
        date: "2023 / 7 / 16",
        link: "/trip_info",
    },
    {
        id: 5,
        img: require('@/assets/img/place/place_029.png'),
        tag: "基隆・#小資 #風景 #海邊 #放鬆 #懷舊",
        name: "基隆探索大自然之旅",
        desc: "基隆一日遊，享受基隆的陽光與海洋！不只是拍美美的照片，也可以安排個美食之旅，順便去騎自行車。不管是基隆仙洞巖山，或是智能海洋館！。",
        author: "小編B",
        date: "2023 / 7 / 18",
        link: "/trip_info",
    },
    {
        id: 6,
        img: require('@/assets/img/place/place_037-1.png'),
        tag: "苗栗・#親子 #風景 #山林 #放鬆 #農場",
        name: "苗栗放鬆身心一日遊",
        desc: "探索苗栗美景：飛牛牧場帶您親近可愛的牛兒，西湖渡假村讓您寧靜享受湖光山色，巧克力雲莊帶來甜蜜的巧克力製作體驗，白沙屯拱天宮感受宗教莊嚴。一天遊覽，盡情享受苗栗之旅！",
        author: "小編A",
        date: "2023 / 7 / 19",
        link: "/trip_info",
    },
    {
        id: 7,
        img: require('@/assets/img/place/place_052-2.png'),
        tag: "台中・#親子 #情侶 #小資 #風景 #藝文",
        name: "台中文青一日遊",
        desc: "到臺中屯區藝文中心參觀各式展覽與展演廳，並到太平買菸場欣賞本市藝術家陳庭詩鐵雕作品，再來到臺中市中區參觀美化的綠川水岸廊道，中午在第二市場品嚐臺中市各式美食小吃，下午再到審計新村參觀文創聚落感受臺中市文創的魅力，接著前往紙箱王創意園區體驗親手DIY文創商品，帶著滿滿的回憶與紀念品回家。",
        author: "小編C",
        date: "2023 / 7 / 22",
        link: "/trip_info",
    },
    {
        id: 8,
        img: require('@/assets/img/place/place_056.png'),
        tag: "彰化・#親子 #情侶 #風景 #樂園 #山林 #放鬆",
        name: "彰化活力滿滿一日遊",
        desc: "樸實無化的彰化地區，除了濃濃的人情味，還有許多宮廟傳統，彰化活力滿滿一日遊，讓你越玩越有活力！",
        author: "小編B",
        date: "2023 / 7 / 22",
        link: "/trip_info",
    },
    {
        id: 9,
        img: require('@/assets/img/place/place_130-1.png'),
        tag: "宜蘭・#親子 #情侶 #藝文",
        name: "宜蘭深度之旅",
        desc: "來一場令人難以忘懷的深度旅程吧!!!可以讓你深入了解台灣的歷史文明和文化遺產，帶領你穿越時空，探索古老的建築、考古遺址、博物館和文物展覽，並提供了對過去的獨特洞察。",
        author: "小編B",
        date: "2023 / 7 / 23",
        link: "/trip_info",
    },
    {
        id: 10,
        img: require('@/assets/img/place/place_064.png'),
        tag: "南投・#情侶 #小資 #風景 #放鬆 #懷舊",
        name: "南投約會一日遊",
        desc: "讓我們一起遊玩南投！中興新村、星月天空景觀餐廳、猴探井天空之橋、埔里酒廠、水蛙頭步道。漫遊於這些地點，體驗豐富的文化、美食和自然景觀。",
        author: "小編A",
        date: "2023 / 7 / 25",
        link: "/trip_info",
    },
    {
        id: 11,
        img: require('@/assets/img/place/place_074.png'),
        tag: "雲林・#親子 #情侶 #小資 #風景 #藝文 #放鬆",
        name: "雲林洗滌身心一日遊",
        desc: "西螺東市場：漫步於古色古香的東市場，品嚐道地的當地美食和傳統小吃，感受濃厚的本地文化氛圍。近水樓台湖畔森林咖啡：坐落在湖畔的森林咖啡館，環境幽靜，盡享美味咖啡與迷人的湖景，放鬆身心，感受大自然的寧靜。小落別院：這個古老而寧靜的廟宇，被綠意環繞，有著悠久的歷史和獨特的建築風格。在這裡，您可以感受到寧靜祥和的氛圍，體味宗教信仰的力量。北港武德宮：北港鎮的標誌性宗教建築，是台灣重要的廟宇之一。參觀武德宮，您可以欣賞到華麗的建築和壯觀的宮廟文化，感受信仰的力量。高地公園：位於山頂的高地公園，是一個欣賞美景和休閒放鬆的理想場所。從這裡，您可以俯瞰整個城市的壯麗景色，感受清新的空氣和寧靜的環境。這個行程將帶您深入西螺的文化、自然和宗教之美，體驗當地的風土人情，感受寧靜和放鬆。無論是品嚐美食、欣賞風景，還是探索宗教廟宇，都將帶給您難忘的旅程。",
        author: "小編C",
        date: "2023 / 7 / 26",
        link: "/trip_info",
    },
    {
        id: 12,
        img: require('@/assets/img/place/place_084-1.png'),
        tag: "嘉義・#親子 #情侶 #小資 #風景 #藝文 #放鬆",
        name: "嘉義美術之旅",
        desc: "每段旅程都能讓你洗滌身心！可以讓你深入了解台灣的歷史文明和文化遺產，帶領你穿越時空，探索古老的建築、考古遺址、博物館和文物展覽，並提供了對過去的獨特洞察。",
        author: "小編A",
        date: "2023 / 7 / 29",
        link: "/trip_info",
    },
];
export default tripData;
