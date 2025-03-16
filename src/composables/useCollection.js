import { collection, addDoc } from "firebase/firestore"; // ✅ Correct import
import { db } from "../firebase/config";
import { ref } from "vue";

export default function useCollection(collectionName) {
    let error = ref(null);

    let addDocument = async (doc) => { // ✅ Renamed function to avoid recursion
        error.value = null;
        try {
            await addDoc(collection(db, collectionName), doc); // ✅ Now correctly calls Firestore's `addDoc`
        } catch (err) {
            console.error("Firestore error:", err);
            error.value = "Could not add chat message!";
        }
    };

    return { error, addDocument };
}
