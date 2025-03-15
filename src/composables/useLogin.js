import { auth } from "../firebase/config";
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

let error = ref("");
let signIn = async (email, password) => {
    try {
        let resp = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        if (!resp) {
            throw new Error("Can't login account!")
        }
        console.log(resp);
        return resp;
    } catch (err) {
        error.value = "Can't login account!";
    }
}
export default function useLogin() {
    return { error, signIn };
}
