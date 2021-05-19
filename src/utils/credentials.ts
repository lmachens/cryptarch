import type { Credential } from '../types';
import { getCredentialsCollection } from './database';
import { chooseService } from './questions';

export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const saveCredential = async (credential: Credential): Promise<void> => {
  await getCredentialsCollection().insertOne(credential);
};

export const selectCredential = async (): Promise<Credential> => {
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
  return selectedCredential;
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
