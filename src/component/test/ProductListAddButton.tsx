import {PRODUCT_NAMES, IMAGES} from '../../mock/data'
import {store} from "@/remote/firebase";
import {doc, collection, writeBatch } from 'firebase/firestore';
import {COLLECTIONS} from '@/constants';
export default function ProductButton() {
    function random (min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const batch = writeBatch(store);
    const handleAddBtn = () => {
        const products = PRODUCT_NAMES.map((v, i) => {
            return {
                name: v,
                imageUrl: IMAGES[i],
                price: random(20000, 1000000),
                category: 'top'
            }
        });
        products.forEach((product: any) => {
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