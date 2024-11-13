const admin = require("firebase-admin");
const serviceAccount = require("../firebaseServiceAccount.json");

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { admin };
