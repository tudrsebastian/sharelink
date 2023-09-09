import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyDnhhWVNmd3EvATcOUxqkv6IuOOizjZhrI",
  authDomain: "sveltekit-course-8895f.firebaseapp.com",
  projectId: "sveltekit-course-8895f",
  storageBucket: "sveltekit-course-8895f.appspot.com",
  messagingSenderId: "355246856218",
  appId: "1:355246856218:web:f05d9da9e596f5babf19a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;
  
    if (!auth || !globalThis.window) {
      console.warn('Auth is not initialized or not in browser');
      const { subscribe } = writable<User | null>(null);
      return {
        subscribe,
      }
    }
  
    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        set(user);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
    };
  }
  
  export const user = userStore();
  export function docStore<T>(
    path: string,
  ) {
    let unsubscribe: () => void;
  
    const docRef = doc(db, path);
  
    const { subscribe } = writable<T | null>(null, (set) => {
      unsubscribe = onSnapshot(docRef, (snapshot) => {
        set((snapshot.data() as T) ?? null);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
      ref: docRef,
      id: docRef.id,
    };
  }
  interface UserData {
    username: string;
    bio: string;
    photoURL: string;
    links: any[];
  }
  
  export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
    if ($user) {
      return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    } else {
      set(null); 
    }
  });

