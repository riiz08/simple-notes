import { atom } from "recoil";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref, set, push, child, remove, update } from "firebase/database";
import { auth } from ".././config/firebase";
import { database } from ".././config/firebase";


//CEK USER IS LOGGED IN
export const authenticated = atom({
  key: "user-auth",
  default: false,
});


//CEK IF USER GUEST/NO LOGGED IN
export const guest = atom({
  key: "guest-auth",
  default: false,
});

//REGISTER USING EMAIL AND PASSWORD ONLY
export const registerWithEmail = async (email, password) => {
  const register = await createUserWithEmailAndPassword(auth, email, password);
  return register;
};


//UPDATE NOTE
export const updateNote = (uid, tempUid, title, content) => {
  update(ref(database, "notes/" + uid + `/${tempUid}`), {
    title,
    content,
    uid: tempUid,
  });
  return update;
};


//DELETE NOTE
export const deleteNote = (uid, notesUid) => {
  remove(ref(database, "notes/" + uid + `/${notesUid}`));
  return remove;
};


//WRITE NOTE
export const writeNote = (uid, nid, title, content) => {
  set(ref(database, "notes/" + uid + `/${nid}`), {
    title,
    content,
    uid: nid,
  });
  return set;
};
