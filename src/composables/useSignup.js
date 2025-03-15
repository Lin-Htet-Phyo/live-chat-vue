import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";

// Reactive error state
let error = ref("");

const createAccount = async (email, password, displayName) => {
  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (!userCredential) {
      throw new Error("Could not create new user");
    }

    // Update user profile
    await updateProfile(userCredential.user, {
      displayName,
    });

    console.log("Updated user:", userCredential.user);
    return userCredential;
  } catch (err) {
    error.value = err.message;
    console.error("Signup error:", err);
  }
};

// ✅ Correct export
export default function useSignup() {
  return { error, createAccount };
}
