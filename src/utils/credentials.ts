import fs from 'fs/promises';
import type { Credential } from '../types';
import { getCollection } from './database';

type DB = {
  credentials: Credential[];
};

export const readCredentials = async (): Promise<Credential[]> => {
  const response = await fs.readFile('./db.json', 'utf-8');
  const data: DB = JSON.parse(response);
  return data.credentials;
};

export const saveCredential = async (credential: Credential): Promise<void> => {
  // credential.password = encrypt(credential.password);
  await getCollection('credentials').insertOne(credential);
};
