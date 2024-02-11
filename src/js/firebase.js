import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const getFirebaseCreds = () => {
  return {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    databaseURL: import.meta.env.VITE_databaseURL,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
  };
};

const init = () => {
  const app = initializeApp(getFirebaseCreds());
  const db = getDatabase();

  return { app, db };
};

const fetch = async (db, url) => {
  try {
    const snapshot = await get(child(ref(db), url));
    if (snapshot.exists()) return snapshot.val();
  } catch (e) {
    console.log(e);
  }
  return null;
};

const submit = (db, url, data, maxDuration = 5000) => {
  return Promise.race([
    set(ref(db, url), data),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout exceeded")), maxDuration)
    ),
  ]);
};

const { app, db } = init();
export { app, db, fetch, submit };
