import admin from 'firebase-admin';

import { googleApplicationCredentials, connectionString } from './settings';

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: connectionString
});

export const messaging = admin.messaging();