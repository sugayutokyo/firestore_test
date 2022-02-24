const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../firebase-test-serviceAccount.json');
const admin = require('firebase-admin');

export default async (req: any, res: { statusCode: number }) => {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore();
  const docRef = db.collection('users').doc('test2');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
};
