import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../firebase-test-serviceAccount.json');
const admin = require('firebase-admin');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();
  switch (req.method) {
    case 'GET':
      const { operation } = req.query;
      switch (operation) {
        case 'allUser':
          const querySnapshot = await db.collection('users').get();
          const records = querySnapshot.docs.map((elem: { data: () => object }) => elem.data());
          res.status(200).json({ records });
          break;
      }
      break;
    case 'POST':
      const docRef = db.collection('users').doc('test3next');

      const record = await docRef.set({
        first: 'Satou',
        last: 'Yusuke',
        born: 1999,
      });
      res.status(200).json({ record });
      break;

    case 'PATCH':
      const doc = await db.collection('users').doc('test3next').update({
        first: 'updated ken',
      });
      res.status(200).json({ doc });
      break;

    case 'DELETE':
      const deletedDoc = await db.collection('users').doc('test3next').delete();
      res.status(200).json({ deletedDoc });
      break;

    default:
      res.status(405).end();
      break;
  }
}
