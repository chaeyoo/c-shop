import {collection, getDocs, QuerySnapshot, query, limit, startAfter, orderBy} from "firebase/firestore";
import {store} from './firebase';
import {COLLECTIONS} from '../constants';

export async function  getProducts(pageParam?: QuerySnapshot<IProduct>) {
    const productQuery =
        !pageParam
        ? query(collection(store, COLLECTIONS.PRODUCT), limit(10))
        : query(
            collection(store, COLLECTIONS.PRODUCT),
                startAfter(pageParam),
                limit(10)
            );
    const productSnapshot = await getDocs(productQuery);

    const lastVisible = productSnapshot.docs[productSnapshot.docs.length - 1];
    const items = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as IProduct)
    }));

    return {items, lastVisible}
}