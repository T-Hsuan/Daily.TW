const tripDataForUser =
[
    {
      "trip_id": "trip_01",
      "trip_name": "新竹懷舊之旅",
      "trip_desc": "新竹內灣旅行去，來內灣一日遊要怎麼玩呢？除了內灣老街外，週邊也有一些亮點，像是景觀餐廳、文青景點、咖啡廳，自然景觀，推薦大家可以一同順遊，除了玩內灣，如果有時間，尖石一帶也有一些不錯的景點，可以順著路線玩上去。",
      "trip_author": "小編A",
      "trip_date": "2023/05/01",
      "place_img1": "https://picsum.photos/237/191?random=1",
      "region_name": "新竹",
      "place_tag_name": "#懷舊 #文青 #景觀"
    },
    {
      "trip_id": "trip_02",
      "trip_name": "宜蘭芬多精一日遊",
      "trip_desc": "不知道要去哪裡玩嗎? 精選六個宜蘭知名景點，有吃又有玩，無論是親子出遊、朋友相聚或者是情侶約會保證您都能玩得很盡興。",
      "trip_author": "小編B",
      "trip_date": "2023/05/02",
      "place_img1": "https://picsum.photos/237/191?random=2",
      "region_name": "宜蘭",
      "place_tag_name": "#親子 #農場"
    },
    {
      "trip_id": "trip_03",
      "trip_name": "新北藝術一日遊",
      "trip_desc": "來去新北一日遊，鶯歌、三峽這裡也有蠻多特色景點，不只是逛老街，也可以安排個鶯歌景點一日遊，順便遊三峽景點。不管是季節限定的賞花景點，還是親子同遊必拍，又或者是IG熱門打卡點，通通好玩報你知。",
      "trip_author": "小編A",
      "trip_date": "2023/05/03",
      "place_img1": "https://picsum.photos/237/191?random=3",
      "region_name": "新北",
      "place_tag_name": "#藝術 #賞花 #親子"
    },
    {
      "trip_id": "trip_04",
      "trip_name": "台北泡湯一日遊",
      "trip_desc": "台北一日遊，探索台北的繁華與傳統魅力！不只是泡溫泉，也可以安排個美食之旅，順便去公園遊玩。不管是季節限定的賞花景點，還是親子同遊必拍！",
      "trip_author": "小編B",
      "trip_date": "2023/05/04",
      "place_img1": "https://picsum.photos/237/191?random=4",
      "region_name": "台北",
      "place_tag_name": "#泡湯 #美食 #公園"
    },
    {
      "trip_id": "trip_05",
      "trip_name": "基隆探索大自然之旅",
      "trip_desc": "基隆一日遊，享受基隆的陽光與海洋！不只是拍美美的照片，也可以安排個美食之旅，順便去騎自行車。不管是基隆仙洞巖山，或是智能海洋館！",
      "trip_author": "小編A",
      "trip_date": "2023/05/05",
      "place_img1": "https://picsum.photos/237/191?random=5",
      "region_name": "基隆",
      "place_tag_name": "#大自然 #美食 #海洋"
    },
    {
      "trip_id": "trip_06",
      "trip_name": "苗栗放鬆身心一日遊",
      "trip_desc": "探索苗栗美景：飛牛牧場帶您親近可愛的牛兒，西湖渡假村讓您寧靜享受湖光山色，巧克力雲莊帶來甜蜜的巧克力製作體驗，白沙屯拱天宮感受宗教莊嚴。一天遊覽，盡情享受苗栗之旅！",
      "trip_author": "小編B",
      "trip_date": "2023/05/06",
      "place_img1": "https://picsum.photos/237/191?random=6",
      "region_name": "苗栗",
      "place_tag_name": "#美景 #湖光山色 #宗教"
    },
    {
      "trip_id": "trip_07",
      "trip_name": "台中文青一日遊",
      "trip_desc": "到臺中屯區藝文中心參觀各式展覽與展演廳，並到太平買菸場欣賞本市藝術家陳庭詩鐵雕作品，再來到臺中市中區參觀美化的綠川水岸廊道，中午在第二市場品嚐臺中市各式美食小吃，下午再到審計新村參觀文創聚落感受臺中市文創的魅力，接著前往紙箱王創意園區體驗親手DIY文創商品，帶著滿滿的回憶與紀念品回家。",
      "trip_author": "小編A",
      "trip_date": "2023/05/07",
      "place_img1": "https://picsum.photos/237/191?random=7",
      "region_name": "台中",
      "place_tag_name": "#文青 #美食 #文創"
    },
    {
      "trip_id": "trip_08",
      "trip_name": "彰化活力滿滿一日遊",
      "trip_desc": "樸實無化的彰化地區，除了濃濃的人情味，還有許多宮廟傳統，彰化活力滿滿一日遊，讓你越玩越有活力！",
      "trip_author": "小編B",
      "trip_date": "2023/05/08",
      "place_img1": "https://picsum.photos/237/191?random=8",
      "region_name": "彰化",
      "place_tag_name": "#宮廟 #傳統"
    },
    {
      "trip_id": "trip_09",
      "trip_name": "宜蘭深度之旅",
      "trip_desc": "來一場令人難以忘懷的深度旅程吧!!! 可以讓你深入了解台灣的歷史文明和文化遺產，帶領你穿越時空，探索古老的建築、考古遺址、博物館和文物展覽，並提供了對過去的獨特洞察。",
      "trip_author": "小編A",
      "trip_date": "2023/05/09",
      "place_img1": "https://picsum.photos/237/191?random=9",
      "region_name": "宜蘭",
      "place_tag_name": "#歷史 #文化遺產"
    },
    {
      "trip_id": "trip_10",
      "trip_name": "南投約會一日遊",
      "trip_desc": "讓我們一起遊玩南投！中興新村、星月天空景觀餐廳、猴探井天空之橋、埔里酒廠、水蛙頭步道。漫遊於這些地點，體驗豐富的文化、美食和自然景觀。",
      "trip_author": "小編B",
      "trip_date": "2023/05/10",
      "place_img1": "https://picsum.photos/237/191?random=10",
      "region_name": "南投",
      "place_tag_name": "#文化 #美食 #自然景觀"
    },
    {
      "trip_id": "trip_11",
      "trip_name": "雲林洗滌身心一日遊",
      "trip_desc": "西螺東市場：漫步於古色古香的東市場，品嚐道地的當地美食和傳統小吃，感受濃厚的本地文化氛圍。近水樓台湖畔森林咖啡：坐落在湖畔的森林咖啡館，環境幽靜，盡享美味咖啡與迷人的湖景，放鬆身心，感受大自然的寧靜。小落別院：這個古老而寧靜的廟宇，被綠意環繞，有著悠久的歷史和獨特的建築風格。在這裡，您可以感受到寧靜祥和的氛圍，體味宗教信仰的力量。北港武德宮：北港鎮的標誌性宗教建築，是台灣重要的廟宇之一。參觀武德宮，您可以欣賞到華麗的建築和壯觀的宮廟文化，感受信仰的力量。高地公園：位於山頂的高地公園，是一個欣賞美景和休閒放鬆的理想場所。從這裡，您可以俯瞰整個城市的壯麗景色，感受清新的空氣和寧靜的環境。這個行程將帶您深入西螺的文化、自然和宗教之美，體驗當地的風土人情，感受寧靜和放鬆。無論是品嚐美食、欣賞風景，還是探索宗教廟宇，都將帶給您難忘的旅程。",
      "trip_author": "小編A",
      "trip_date": "2023/05/11",
      "place_img1": "https://picsum.photos/237/191?random=11",
      "region_name": "雲林",
      "place_tag_name": "#美食 #湖景 #宗教"
    },
    {
      "trip_id": "trip_12",
      "trip_name": "嘉義美術之旅",
      "trip_desc": "每段旅程都能讓你洗滌身心！可以讓你深入了解台灣的歷史文明和文化遺產，帶領你穿越時空，探索古老的建築、考古遺址、博物館和文物展覽，並提供了對過去的獨特洞察。",
      "trip_author": "小編B",
      "trip_date": "2023/05/12",
      "place_img1": "https://picsum.photos/237/191?random=12",
      "region_name": "嘉義",
      "place_tag_name": "#藝術 #歷史 #文化遺產"
    },
    {
      "trip_id": "trip_13",
      "trip_name": "台南文化之旅",
      "trip_desc": "台南除了有便宜的美食之外，也有許多流傳多年的古蹟！體現台灣的文化～更有許多漂亮的建築物及藝術品！等你來台南深度旅遊！",
      "trip_author": "小編A",
      "trip_date": "2023/05/13",
      "place_img1": "https://picsum.photos/237/191?random=13",
      "region_name": "台南",
      "place_tag_name": "#古蹟 #美食 #藝術"
    },
    {
      "trip_id": "trip_14",
      "trip_name": "高雄樂園一日遊",
      "trip_desc": "來到南台灣的高雄！除了有許多好吃的美食外，也有許多有特色的樂園，除了當地特色伴手禮，在炎炎夏日下，最受歡迎的就是飄雪樂園！一起來樂園玩雪吧！",
      "trip_author": "小編B",
      "trip_date": "2023/05/14",
      "place_img1": "https://picsum.photos/237/191?random=14",
      "region_name": "高雄",
      "place_tag_name": "#美食 #樂園 #伴手禮"
    },
    {
      "trip_id": "trip_15",
      "trip_name": "屏東親子之旅",
      "trip_desc": "假日不知道去哪裡玩嗎？屏東除了好山好水好風景之外，還有許多可以讓小小孩放電的場所，趕快帶著小小孩來放電吧！",
      "trip_author": "小編A",
      "trip_date": "2023/05/15",
      "place_img1": "https://picsum.photos/237/191?random=15",
      "region_name": "屏東",
      "place_tag_name": "#親子 #美景 #放電"
    },
    {
      "trip_id": "trip_16",
      "trip_name": "台東混水摸魚之旅",
      "trip_desc": "想遠離城市的喧囂嗎？趕快來台東！這邊除了有灌籃高手場景外，也可以深入大自然的懷抱！享受悠閒且樂活的步調！趕快來一起混水摸魚吧！",
      "trip_author": "小編B",
      "trip_date": "2023/05/16",
      "place_img1": "https://picsum.photos/237/191?random=16",
      "region_name": "台東",
      "place_tag_name": "#自然 #灌籃高手 #樂活"
    },
    {
      "trip_id": "trip_17",
      "trip_name": "花蓮快樂一日遊",
      "trip_desc": "來到花蓮總是被寬闊的海景所吸引，想徜徉海洋國度，就來花蓮吧！美麗壯闊的海景、漂亮的拍照打卡景點、美味豐富的美食通通都在等著你！",
      "trip_author": "小編A",
      "trip_date": "2023/05/17",
      "place_img1": "https://picsum.photos/237/191?random=17",
      "region_name": "花蓮",
      "place_tag_name": "#海景 #拍照 #美食"
    },
    {
      "trip_id": "trip_18",
      "trip_name": "澎湖悠閒一日遊",
      "trip_desc": "澎湖經典的雙心石滬、澎湖玄武岩，還包括私房澎湖海灘、最新IG打卡景點和澎湖離島景點，每年4-6月還有舉辦澎湖花火節，快把你的澎湖行程塞滿滿，今夏不留一絲遺憾！",
      "trip_author": "小編B",
      "trip_date": "2023/05/18",
      "place_img1": "https://picsum.photos/237/191?random=18",
      "region_name": "澎湖",
      "place_tag_name": "#澎湖 #海灘 #花火節"
    },
    {
      "trip_id": "trip_19",
      "trip_name": "金門歷史探索之旅",
      "trip_desc": "鄰近廈門的金門，與週遭星羅棋布的十二座島嶼們，共組為金門縣；因為地理位置的關係，過去被定位為戰略據點，歷經古寧頭、大二膽等戰役的洗禮，留下許多的戰後遺跡，也成為當今獨具的觀光景色。當然也別忘了金門經典：古厝與洋樓帶你穿越時空、鸕鶿過境震撼視覺，還有色香味俱全的在地美食，金門總讓旅人超乎想像！",
      "trip_author": "小編A",
      "trip_date": "2023/05/19",
      "place_img1": "https://picsum.photos/237/191?random=19",
      "region_name": "金門",
      "place_tag_name": "#古厝 #洋樓 #美食"
    },
    {
      "trip_id": "trip_20",
      "trip_name": "馬祖一日遊",
      "trip_desc": "說到馬祖第一個你會想到什麼呢？第一個想到的一定就是被列為一輩子都不可以錯過的奇景藍眼淚，其他像是八八坑道、馬祖天后宮、神秘海灘等等必去景點，因為特有的地理位置和軍事重地，留下了許多人文特色的軍事遺跡，濃厚的文化氣息可說是馬祖的特有風格，讓我們帶你一起遊馬祖！",
      "trip_author": "小編B",
      "trip_date": "2023/05/20",
      "place_img1": "https://picsum.photos/237/191?random=20",
      "region_name": "馬祖",
      "place_tag_name": "#藍眼淚 #軍事 #文化"
    }
  ]

  export default tripDataForUser;
  