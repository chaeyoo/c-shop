// interface IProduct {
// 	imageUrl: string[];
// 	name: string;
// 	brand: string;
// 	price: number;
// 	like: number;
// 	discount: number;
// 	mainCtgr: string;
// 	subCtgr: string;
// 	season: string; // "19SS"
// 	gender: "W" | "M" | "U";
// 	color: string[];
// 	size: string[];
// 	regDt: string; // 등록일 (신상품순)
// 	weekSaleVol: number; // 주간판매량 (판매수량순)
// 	monthSaleVol: number; // 월간판매량 (판매수량순)
// 	yearSaleVol: number; // 연간판매량 (판매수량순)
// }


export const clothes: any[] = [
    { main: "TOP", label: "니트", value: "KNIT" },
    { main: "TOP", label: "후드", value: "HOOD" },
    { main: "TOP", label: "맨투맨", value: "MTOM" },
    { main: "TOP", label: "긴소매 티셔츠", value: "LONG_SLEEVE" },
    { main: "TOP", label: "셔츠", value: "SHIRT" },
    { main: "TOP", label: "반소매 티셔츠", value: "SHORT_SLEEVE" },
    { main: "OUTER", label: "레더 재킷", value: "LEATHER_JACKET" },
    { main: "OUTER", label: "카디건", value: "CARDIGAN" },
    { main: "OUTER", label: "플리스", value: "FLEECE" },
    { main: "OUTER", label: "싱글코트", value: "SINGLE_COAT" },
    { main: "OUTER", label: "더블코트", value: "DOUBLE_COAT" },
    { main: "OUTER", label: "푸퍼", value: "PUFFER" },
    { main: "OUTER", label: "무스탕", value: "MUSTANG" },
    { main: "PANTS", label: "데님 팬츠", value: "DENIM" },
    { main: "PANTS", label: "코튼 팬츠", value: "COTTON" },
    { main: "PANTS", label: "슈트 팬츠", value: "SUIT" },
    { main: "PANTS", label: "트레이닝 팬츠", value: "TRAINING" },
    { main: "PANTS", label: "레깅스", value: "YOGA_PANTS" },
];

export const shoes: any[] = [
    { main: "SHOES", label: "로퍼", value: "LOAFERS" },
    { main: "SHOES", label: "슬리퍼", value: "SLIPPER" },
    { main: "SHOES", label: "부츠", value: "BOOTS" },
    { main: "SHOES", label: "스니커즈", value: "SNEAKERS" },
];

export const oneSize = [
    { main: "BAG", label: "백팩", value: "BACKPACK" },
    { main: "BAG", label: "크로스백", value: "CROSS" },
    { main: "BAG", label: "숄더백", value: "SHOULDER" },
    { main: "BAG", label: "에코백", value: "ECHO" },
    { main: "BAG", label: "웨이스트백", value: "WAIST" },
    { main: "ACCESSORY", label: "키링", value: "KEY_RING" },
    { main: "ACCESSORY", label: "벨트", value: "BELT" },
    { main: "ACCESSORY", label: "넥타이", value: "TIE" },
    { main: "ACCESSORY", label: "스카프", value: "SCARF" },
    { main: "ACCESSORY", label: "반지", value: "RING" },
    { main: "ACCESSORY", label: "목걸이", value: "NECKLACE" },
];

export const brand = [
    { label: "구호", value: "KUHO" },
    { label: "인사일런스", value: "INSILENCE" },
    { label: "아미", value: "AMI" },
    { label: "빈폴", value: "BEANPOLE" },
    { label: "메종키츠네", value: "MAISON_KISUNE" },
    { label: "비이커", value: "BEAKER" },
    { label: "띠어리", value: "THEORY" },
    { label: "가니", value: "GANNI" },
    { label: "커버낫", value: "COVERNAT" },
    { label: "마인드브릿지", value: "MIND_BRIDGE" },
];

export const clothesColor = [
    ["BLACK", "NAVY"],
    ["BLACK", "BROWN", "BEIGE"],
    ["PURPLE", "WINE"],
    ["WHITE, LIGHT_BEIGE"]
];
export const clothesSize = [
    ["S", "M", "L"],
    ["95", "100", "105"],
    ["FREE"],
]

export const shoesSize = [
    [ "250", "255", "260", "265", "270", "275", "280", "285"]
];

export const shoesColor = [
    "BLACK",
    "BROWN",
    "NAVY",
    "WHILE"
]

export const onesizeSize = ["FREE"];
export const onesizeColor = ["SILVER", "BLACK", "WHITE"]
const clothesProduct = [];

// 옷반복문
for (let i=0 ; i<clothes.length; i++) {
    for (let j=0 ; j<brand.length; j++) {
        for (let k=0; k<5; k++) {
            clothesProduct.push(
                {
                    brand: brand[j].value,
                    color: clothesColor[k%4],
                    discount: Math.floor(Math.random() * 21),
                    gender: "W",
                    imageUrl: ["https://cataas.com/cat?width=300&height=500"],
                    like: Math.floor(Math.random() * 101),
                    mainCtgr: clothes[i].main,
                    monthSaleVol:Math.floor(Math.random() * (1000 - 50 + 1)) + 50,
                    name: `${brand[j].label} ${clothes[i].label} ${k+1}`,
                    price:  Math.round(Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000/100)*100,
                    regDt: new Date(),
                    season: `23FW`,
                    size: clothesSize[k%3],
                    subCtgr: clothes[i].label,
                    weekSaleVol: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
                    yearSaleVol: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
                }
            )
        }
    }
}

console.log(clothesProduct);
console.log(clothesProduct.length);