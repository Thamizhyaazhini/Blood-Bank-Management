const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { config } = require("./config");
initializeApp({
  credential: cert(config),
});

const db = getFirestore();

module.exports = { db };
