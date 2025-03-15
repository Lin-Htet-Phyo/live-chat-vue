import { auth } from "../firebase/config";
import { ref } from "vue";

let user = ref(auth.currentUser);
auth.onAuthStateChanged((_user) => {
    console.log("User statechange. current user is ", _user);
    user.value = _user;
});

export default function getUser()  {
    return { user };
}