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
  // 全件取得
  const querySnapshot = await db.collection('users').get();
  const records = querySnapshot.docs.map((elem: { data: () => object }) => elem.data());

  console.log(111, records);
};
