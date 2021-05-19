import dotenv from 'dotenv';
dotenv.config();

import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';
import {
  printDeletedSuccess,
  printDeletedFailure,
  printPassword,
  printAddedSuccess,
  printMainPasswordInvalid,
  printMainPasswordValid,
} from './utils/messages';
import { connectDatabase, disconnectDatabase } from './utils/database';
import {
  deleteCredential,
  saveCredential,
  selectCredential,
} from './utils/credentials';

const start = async () => {
  if (process.env.MONGO_URL === undefined) {
    throw new Error('Missing env MONGO_URL');
  }

  await connectDatabase(process.env.MONGO_URL);

  let mainPassword = await askForMainPassword();
  while (!(await isMainPasswordValid(mainPassword))) {
    printMainPasswordInvalid();
    mainPassword = await askForMainPassword();
  }
  printMainPasswordValid();

  const command = await chooseCommand();

  switch (command) {
    case 'list':
    case 'delete':
      {
        const selectedCredential = await selectCredential();
        if (command === 'list') {
          printPassword(selectedCredential.service);
        } else {
          const deleted = await deleteCredential(selectedCredential);
          if (deleted) {
            printDeletedSuccess(selectedCredential.service);
          } else {
            printDeletedFailure(selectedCredential.service);
          }
        }
      }
      break;

    case 'add':
      {
        const newCredential = await askForCredential();
        await saveCredential(newCredential);
        printAddedSuccess(newCredential.service);
      }
      break;
  }

  await disconnectDatabase();
};

start();
