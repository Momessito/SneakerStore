import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBw9llzkSff2l4o52JbmY--TKO061QnaB0",
    authDomain: "sneakerdataba.firebaseapp.com",
    projectId: "sneakerdataba",
    storageBucket: "sneakerdataba.appspot.com",
    messagingSenderId: "163128391755",
    appId: "1:163128391755:web:5cf45f7083c898527ab5ce",
    measurementId: "G-3EQ6Y4PZLW"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const { FieldValue } = firebase.firestore;

export const auth = firebase.auth();
export {db , FieldValue };
export default {firebase};

export const addCalcados = async (Cor, Marca,Nome,Tamanho) => {
  await db.collection("Calcados").add({
    Cor,
    Marca,Nome,Tamanho
  });
};

export const getCalcados = async () => {
    try {
      const snapshot = await db.collection("Calcados").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Calcados:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar Calcados:", error);
      throw error;
    }
  };
  