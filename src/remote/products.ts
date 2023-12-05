import {collection, getDocs} from "firebase/firestore";
import {store} from './firebase';
import {COLLECTIONS} from '../constants';

export async function  getProducts() {
    const productSnapshot = await getDocs(collection(store, COLLECTIONS.PRODUCT));
    console.log('productSnapshot', productSnapshot)
    return productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as IProduct)
    }))
}