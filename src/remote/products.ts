import {collection, getDocs, QuerySnapshot, query, limit, startAfter, where} from "firebase/firestore";
import {store} from './firebase';
import {COLLECTIONS} from '../constants';

export async function  getProducts(
    mainCtgr: any,
    subCtgr: any,
    pageParam?: QuerySnapshot<IProduct>
) {
    console.log('mainCtgr::', mainCtgr );
    console.log('subCtgr::', subCtgr);
    let productQuery;
    if (subCtgr === "all") {
        productQuery =
            !pageParam
                ? query(collection(store, COLLECTIONS.PRODUCT)
                    , where("mainCtgr", "==", mainCtgr.toUpperCase())
                    , limit(10))
                : query(
                    collection(store, COLLECTIONS.PRODUCT)
                    ,startAfter(pageParam)
                    , where("mainCtgr", "==", mainCtgr.toUpperCase())
                    ,limit(10)
                );
    } else {
        productQuery =
            !pageParam
                ? query(collection(store, COLLECTIONS.PRODUCT)
                    , where("mainCtgr", "==", mainCtgr.toUpperCase())
                    , where("subCtgr", "==", subCtgr.toUpperCase())
                    , limit(10))
                : query(
                    collection(store, COLLECTIONS.PRODUCT)
                    ,startAfter(pageParam)
                    , where("mainCtgr", "==", mainCtgr.toUpperCase())
                    , where("subCtgr", "==", subCtgr.toUpperCase())
                    ,limit(10)
                );
    }

    const productSnapshot = await getDocs(productQuery);

    const lastVisible = productSnapshot.docs[productSnapshot.docs.length - 1];
    const items = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as IProduct)
    }));

    return {items, lastVisible}
}