import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "A...k",
  authDomain: "netf...com",
  projectId: "netf...",
  storageBucket: "netf...app",
  messagingSenderId: "1...3",
  appId: "1....4",
  measurementId: "G...X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password)
       const user = res.user;
       await addDoc(collection(db, 'user'),{
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
       }) 
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password) 
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const signout = async () => {
    await signOut(auth)
}

export { auth, db, signin, signup, signout}
