interface IColorCode {
	name: string;
	code: string;
	kor: string;
}
export const colorCode: IColorCode[] = [
	{ name: "BLACk", code: "#000000", kor: "블랙" },
	{ name: "NAVY", code: "#000080", kor: "네이비" },
	{ name: "BROWN", code: "#8B4513", kor: "브라운" },
	{ name: "BEIGE", code: "#DEB887", kor: "베이지" },
	{ name: "PURPLE", code: "#9932CC", kor: "퍼플" },
	{ name: "WINE", code: "#8B0000", kor: "와인" },
	{ name: "WHITE", code: "#FFFFFF", kor: "화이트" },
	{ name: "LIGHT_BEIGE", code: "#FFFFF0", kor: "라이트 베이지" },
];

export const colorCodes: string[] = colorCode.map((v) => {
	return v.code;
});
