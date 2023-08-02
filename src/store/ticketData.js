const ticketData = [
    {
        id: 1,        
        Name: "斑比山丘",
        img: require("@/assets/img/ticketExample.png"),
        location: "宜蘭",
        tag: "#親子#情侶#農場",
        ticket_details:"大受歡迎的親子景點，園區內有多種動物，可以與梅花鹿、水豚、羊咩咩來場親密的互動。美美子咖啡廳的冰淇淋十分美味，推薦給所有人到店購買品嚐。",
        ticket_addr: "宜蘭縣冬山鄉下湖路285號",
        ticket_addr_link: "https://goo.gl/maps/bT2uJusZ3vYEofDF7",
        price_adultO: "",
        price_adultF: 200,
        price_exO: "",
        price_exF: 50,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 2,
        Name: "蘭陽博物館",
        img: require("@/assets/img/ticket_photo/ticket_photo02.jpg"),
        location: "宜蘭",
        tag: "#親子#情侶#藝文",
        ticket_details:"蘭陽博物館結合在地海洋觀光特色，形成旅遊廊道，在觀光資源區帶上，扮演人文旅遊的窗口，期待再現石港春帆的風華，同時實踐「宜蘭是一座博物館」的理念。",
        ticket_addr: "台灣宜蘭縣頭城鎮青雲路三段750號",
        ticket_addr_link: "https://goo.gl/maps/4o6bFU6S4FTv6koHA",
        price_adultO: 100,
        price_adultF: 90,
        price_exO: 50,
        price_exF: 45,
        discount: "9折",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 3,
        Name: "宜蘭傳統藝術中心",
        img: require("@/assets/img/ticket_photo/ticket_photo03.jpg"),
        location: "宜蘭",
        tag: "#親子#情侶#風景#藝文",
        ticket_details:"園區內有多個場館和設施，提供多樣化的藝術體驗和學習機會。園區內有專門展示台灣傳統藝術的展覽，涵蓋了戲曲、音樂、舞蹈、書法、繪畫、工藝等多個領域。這些展覽和表演不僅讓觀眾欣賞到傳統藝術的精髓，同時也提供了一個交流和學習的平台，讓人們更深入地了解台灣的文化遺產。",
        ticket_addr: "宜蘭縣五結鄉五濱路二段201號",        
        ticket_addr_link: "https://goo.gl/maps/vWNDgB4QKutBLYJCA",
        price_adultO: "",
        price_adultF: 150,
        price_exO: '',
        price_exF: 120,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 4,
        Name: "茶山房肥皂文化體驗",
        img: require("@/assets/img/ticket_photo/ticket_photo04.jpg"),
        location: "新北",
        tag: "#親子#情侶#風景#藝文#放鬆#懷舊",
        ticket_details:"茶山房觀光工廠的前身是「美盛堂」，第一代的製皂師傅林義財先生在三峽這裡創立了美盛堂肥皂工廠，也研發了不傷肌膚的中性肥皂，相信大家應該都有印象，像是以前的「浮樂肥浮水藥皂」，就是出自美盛堂的。而現在工廠不只是工廠，還發展成好玩的肥皂觀光工廠。",
        ticket_addr: "新北市三峽區白雞64-11號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 250,
        price_exO: "",
        price_exF: 50,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 5,
        Name: "士林科教館",
        img: require("@/assets/img/ticket_photo/ticket_photo05.jpg"),
        location: "台北",
        tag: "#親子#小資#藝文#山林#放鬆",
        ticket_details:"推薦士林科教館，科教館裡有很多適合小孩的展覽、也有很多親子設施可玩，屋頂還有條超美的天空步道喔！",
        ticket_addr:"台北市士林區士商路189號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 100,
        price_exO: "",
        price_exF: 70,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 6,
        Name: "基隆潮境智能海洋館",
        img: require("@/assets/img/ticket_photo/ticket_photo06.jpg"),
        location: "基隆",
        tag: "#親子#情侶#風景#樂園#藝文",
        ticket_details:"基隆也有水族館了，最新基隆景點「潮境智能海洋館」，座落在最美的潮境公園裡面，結合4K投影、VR互動、七米高大洋缸，讓你能近距離觀賞海洋生物，也能跟他們互動。四大主題展區各具特色，其中復育海中生物的海洋中心，看到愛護海洋的重要，在潮境智能海洋館不只玩還學到了豐富的知識，很值得來看看 ",
        ticket_addr:"基隆市中正區北寧路369巷61號",
        ticket_addr_link: "",
        price_adultO: 300,
        price_adultF: 250,
        price_exO: "",
        price_exF: 250,
        discount: "85折",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 7,
        Name: "苗栗飛牛牧場",
        img: require("@/assets/img/ticket_photo/ticket_photo07.jpg"),
        location: "苗栗",
        tag: "#親子#風景#山林#放鬆#農場",
        ticket_details:"飛牛牧場位於苗栗縣通霄鎮，東倚火炎山脈，西面台灣海峽，蘊藏豐富的自然資源，擁有多樣生態相一望無際的丘陵中，牛隻、羊群漫步草原間，白牆紅瓦的農舍座落在青青草地上，勾勒出迷人的牧野風情走遍乳牛牧場區、牧場生態區、牧草培育區、有機蔬果區及森林保育區與飼養乳牛、巴貝多黑肚綿羊、黑山羊、迷你馬及水禽、家畜等可愛動物相見歡",
        ticket_addr: "苗栗縣通霄鎮166號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 280,
        price_exO: "",
        price_exF: 140,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 8,
        Name: "星月天空景觀餐廳",
        img: require("@/assets/img/ticket_photo/ticket_photo08.jpg"),
        location: "南投",
        tag: "#親子#情侶#小資#風景#藝文",
        ticket_details:
            "南投夜景聖地，還能跟草泥馬、侏儒羊、鸚鵡、大嘴鳥等小動物近距離接觸。無論情侶約會、親子放電都超適合，和猴探井天空之橋、中興新村一日遊好滿足。",
        ticket_addr: "南投市猴探井街146巷200號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 150,
        price_exO: "",
        price_exF: "",
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 9,
        Name: "鈴鹿賽道樂園",
        img: require("@/assets/img/ticket_photo/ticket_photo09.jpg"),
        location: "高雄",
        tag: "#親子#情侶#小資#樂園#放鬆",
        ticket_details:"高雄鈴鹿賽道樂園(Suzuka Circuit Park) 位於高雄大魯閣草衙道，是全台第一座駕駛主題樂園，同時都是日本鈴鹿賽車場唯一海外授權的樂園，緊鄰著名景點SKM Park，交通便利，是高雄必遊景點之一。前往迷你鈴鹿賽道，在這個以日本原型10:1縮小的卡丁車場地，體驗競速馳騁的極致快感。",
        ticket_addr: "高雄市前鎮區中安路1-1號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 550,
        price_exO: "",
        price_exF: "",
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 10,
        Name: "花蓮遠雄海洋公園",
        img: require("@/assets/img/ticket_photo/ticket_photo10.jpg"),
        location: "花蓮",
        tag: "#親子#情侶#樂園",
        ticket_details:"來到花蓮總是被寬闊的海景所吸引，想徜徉海洋國度，就來花蓮遠雄海洋公園一起悠游！花蓮海洋公園結合遊樂與教育，不僅有八大特色主題區和設施，更特別為大小朋友設計許多海洋體驗活動與最夯夜宿水族館，還有美麗的美人魚與你互動，快帶著帶著全家大小來全場海洋之旅！",
        ticket_addr: "花蓮縣壽豐鄉福德189號",
        ticket_addr_link: "",
        price_adultO: 990,
        price_adultF: 830,
        price_exO: 890,
        price_exF: 690,
        discount: "9折",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 11,
        Name: "澎湖水族館",
        img: require("@/assets/img/ticket_photo/ticket_photo11.jpg"),
        location: "澎湖",
        tag: "#親子#情侶#放鬆",
        ticket_details:"位於澎湖縣白沙鄉白沙養殖場內的「澎湖水族館」，是一座寓教於樂且功能完善的生態教育場域，當中「特產室」、「觀景台」、「視聽室」、「觸摸池」結合了視聽娛樂等設備，不僅可以擁有實際體驗，更能對這些海洋生物有更深的認識，其中大洋池海底隧道，不走上一趟，別說來過澎湖。",
        ticket_addr: "澎湖縣白沙鄉岐頭村58號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 300,
        price_exO: "",
        price_exF: 150,
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },
    {
        id: 12,
        Name: "藍眼淚生態館",
        img: require("@/assets/img/ticket_photo/ticket_photo12.jpg"),
        location: "馬祖",
        tag: "#親子#情侶#藝文",
        ticket_details:"藍眼淚是馬祖當地非常具代表性的生態，是來此必訪的行程。藍眼淚的爆發季節約於每年的4-6月，9月至10月間結束，靜謐的海面上出現了藍色的光點，它其實是一種夜光蟲（渦鞭毛藻），經過海浪及自然風的驚擾會發出淡藍色的螢光，須在無光害的環境下才看得到，也有人稱為「藍海現象」或是「藍色啤酒海」。",
        ticket_addr: "連江縣南竿鄉24號",
        ticket_addr_link: "",
        price_adultO: "",
        price_adultF: 226,
        price_exO: "",
        price_exF: "",
        discount: "",
        count_adult: 0,
        count_ex: 0,
        subtotal: 0,
        singlecard_link: "/ticket/:id",
    },		
];
export default ticketData;
