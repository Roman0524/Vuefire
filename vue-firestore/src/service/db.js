import firebase from "firebase/app";
import "firebase/firestore";
import { config } from "@/config/database";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    ...config.firebase
  })
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
