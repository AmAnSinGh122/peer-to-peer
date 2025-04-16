import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import fs from "fs";
import serviceAccount from "./firebaseService.json" assert { type: "json" };

import {
    getAuth,
} from "firebase/auth";

import dotenv from "dotenv";
dotenv.config();

const serviceAccount = JSON.parse(fs.readFileSync("/etc/secrets/firebaseService.json", "utf8"));
//const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
    auth,
    admin
};