interface IProduct {
    // productId: number;
    // serialNumber: string;
    imageUrl: string[];
    name: string;
    brand: string;
    price: number;
    like: number;
    discount: number;
    mainCtgr: string;
    subCtgr: string;
    sex: "W" | "M" | "U";
    season: string;
    color: string[];
    size: string[];
}

const mainCtrg = [
    {label: "상의", value: "TOP"},
    {label: "아우터", value: "OUTER"},
    {label: "바지", value: "PANTS"},
    {label: "원피스", value: "ONEPIECE"},
    {label: "스커트", value: "SKIRT"},
    {label: "신발", value: "SHOES"},
    {label: "가방", value: "BAG"},
    {label: "속옷", value: "UNDERWEAR"},
    {label: "액세서리", value: "ACCESSORY"},
];
const subCtrg = [
    {main: "TOP", label: "니트", value: "KNIT"},
    {main: "TOP", label: "후드", value: "HOOD"},
    {main: "TOP", label: "맨투맨", value: "MTOM"},
    {main: "TOP", label: "긴소매 티셔츠", value: "LONG_SLEEVE"},
    {main: "TOP", label: "셔츠", value: "SHIRT"},
    {main: "TOP", label: "반소매 티셔츠", value: "SHORT_SLEEVE"},
    {main: "OUTER", label: "레더 재킷", value: "LEATHER_JACKET"},
    {main: "OUTER", label: "카디건", value: "CARDIGAN"},
    {main: "OUTER", label: "플리스", value: "FLEECE"},
    {main: "OUTER", label: "싱글코트", value: "SINGLE_COAT"},
    {main: "OUTER", label: "더블코트", value: "DOUBLE_COAT"},
    {main: "OUTER", label: "푸퍼", value: "PUFFER"},
    {main: "OUTER", label: "무스탕", value: "MUSTANG"},
    {main: "PANTS", label: "데님 팬츠", value: "DENIM"},
    {main: "PANTS", label: "코튼 팬츠", value: "COTTON"},
    {main: "PANTS", label: "슈트 팬츠", value: "SUIT"},
    {main: "PANTS", label: "트레이닝 팬츠", value: "TRAINING"},
    {main: "PANTS", label: "레깅스", value: "YOGA_PANTS"},
    {main: "ONEPIECE", label: "미니 원피스", value: "MINI"},
    {main: "ONEPIECE", label: "미디 원피스", value: "MIDI"},
    {main: "ONEPIECE", label: "맥시 원피스", value: "MAXI"},
    {main: "SKIRT", label: "미니 스커트", value: "MINI"},
    {main: "SKIRT", label: "미디 스커트", value: "MIDI"},
    {main: "SKIRT", label: "롱 스커트", value: "LONG"},
    {main: "SHOES", label: "로퍼", value: "LOAFERS"},
    {main: "SHOES", label: "힐", value: "HEEL"},
    {main: "SHOES", label: "플랫슈즈", value: "FLAT"},
    {main: "SHOES", label: "슬리퍼", value: "SLIPPER"},
    {main: "SHOES", label: "부츠", value: "BOOTS"},
    {main: "SHOES", label: "스니커즈", value: "SNEAKERS"},
    {main: "BAG", label: "백팩", value: "BACKPACK"},
    {main: "BAG", label: "크로스백", value: "CROSS"},
    {main: "BAG", label: "숄더백", value: "SHOULDER"},
    {main: "BAG", label: "에코백", value: "ECHO"},
    {main: "BAG", label: "웨이스트백", value: "WAIST"},
    {main: "UNDERWEAR", label: "속옷 상의", value: "TOP"},
    {main: "UNDERWEAR", label: "속옷 하의", value: "BOTTOM"},
    {main: "UNDERWEAR", label: "속옷 세트", value: "SET"},
    {main: "UNDERWEAR", label: "홈웨어", value: "HOME_WEAR"},
    {main: "ACCESSORY", label: "키링", value: "KEY_RING"},
    {main: "ACCESSORY", label: "벨트", value: "BELT"},
    {main: "ACCESSORY", label: "넥타이", value: "TIE"},
    {main: "ACCESSORY", label: "스카프", value: "SCARF"},
    {main: "ACCESSORY", label: "반지", value: "RING"},
    {main: "ACCESSORY", label: "목걸이", value: "NECKLACE"},
];
const brand = [
    {label: "구호", value: "KUHO"},
];
const color = [
    ["BLACK", "NAVY"],
    ["BLACK", "BROWN", "BEIGE"],
    ["PINK", "RED"],
    ["WHITE, LIGHT_BEIGE"]
];
const size = [
    ["S", "M", "L"],
    ["90", "95", "100", "105"],
    ["F"],
]