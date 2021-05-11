import {
  printInvalidMainPassword,
  printCorrectMainPassword,
  printWelcomeMessage,
} from './utils/messages';
import {
  chooseCommand,
  readMainPassword,
  chooseService,
  readCredential,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';

const start = async (): Promise<void> => {
  printWelcomeMessage();

  let mainPassword = await readMainPassword();
  while (!isMainPasswordValid(mainPassword)) {
    printInvalidMainPassword();
    mainPassword = await readMainPassword();
  }

  printCorrectMainPassword();

  const command = await chooseCommand();

  switch (command) {
    case 'list': {
      await chooseService(['Leon', 'Christopher', 'Philipp']);
      break;
    }
    case 'add': {
      await readCredential();
      break;
    }
  }
};

start();
