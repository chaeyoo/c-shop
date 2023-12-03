import {store} from "@/remote/firebase";
import {doc, collection, writeBatch } from 'firebase/firestore';
import {COLLECTIONS} from '@/constants';
import {clothes, brand, clothesColor, clothesSize} from "@/mock/product_w";
// import {clothes, brand, clothesColor, clothesSize} from "@/mock/product_m";
// import {shoes, brand, shoesSize, shoesColor} from "@/mock/product_w";

// import {shoes, brand, shoesSize, shoesColor} from "@/mock/product_m";
// import {oneSize, brand, onesizeSize, onesizeColor} from "@/mock/product_m";

export default function ProductButton() {
    const batch = writeBatch(store);
    const handleAddBtn = () => {
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
                            // gender: "M",
                            imageUrl: ["https://cataas.com/cat?width=300&height=500"],
                            like: Math.floor(Math.random() * 101),
                            mainCtgr: clothes[i].main,
                            monthSaleVol:Math.floor(Math.random() * (1000 - 50 + 1)) + 50,
                            name: `${brand[j].label} ${clothes[i].label} ${k+1}`,
                            price:  Math.round(Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000/100)*100,
                            regDt: new Date(),
                            season: `23FW`,
                            size: clothesSize[k%3],
                            subCtgr: clothes[i].value,
                            weekSaleVol: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
                            yearSaleVol: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
                        }
                    )
                }
            }
        }
        console.log(clothesProduct)
        clothesProduct.forEach((product: any) => {
            const productDocRef = doc(collection(store, COLLECTIONS.PRODUCT));
            batch.set(productDocRef, product)
        })
        batch.commit();
    }

    return (
        <div>
            <button onClick={handleAddBtn}>추가</button>
        </div>

    )
}