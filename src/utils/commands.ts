import { readCredential } from './questions';
import { serviceExists } from './validation';
import {
  printAddCredentialSuccess,
  printServiceAlreadyExists,
} from './messages';

export const handleAdd = async (): Promise<void> => {
  const credential = await readCredential();
  if (serviceExists(credential.service)) {
    printServiceAlreadyExists();
    await handleAdd();
  } else {
    printAddCredentialSuccess();
  }
};
