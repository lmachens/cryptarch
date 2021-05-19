import type { Credential } from '../types';
import { getCredentialsCollection } from './database';
import { chooseService } from './questions';
import CryptoJS from 'crypto-js';

export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const saveCredential = async (
  credential: Credential,
  key: string
): Promise<void> => {
  const encryptedPassword = CryptoJS.TripleDES.encrypt(
    credential.password,
    key
  ).toString();
  await getCredentialsCollection().insertOne({
    ...credential,
    password: encryptedPassword,
  });
};

export const selectCredential = async (key: string): Promise<Credential> => {
  const credentials = await readCredentials();
  const credentialServices = credentials.map(
    (credential) => credential.service
  );
  const service = await chooseService(credentialServices);
  const selectedCredential = credentials.find(
    (credential) => credential.service === service
  );
  if (!selectedCredential) {
    throw new Error('Can not find credential');
  }
  return {
    ...selectedCredential,
    password: CryptoJS.TripleDES.decrypt(
      selectedCredential.password,
      key
    ).toString(CryptoJS.enc.Utf8),
  };
};

export const deleteCredential = async (
  credential: Credential
): Promise<boolean> => {
  const result = await getCredentialsCollection().deleteOne(credential);
  if (result.deletedCount === undefined) {
    return false;
  }
  return result.deletedCount > 0;
};
