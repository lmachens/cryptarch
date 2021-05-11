import {
  printInvalidMainPassword,
  printCorrectMainPassword,
  printWelcomeMessage,
} from './utils/messages';
import { readMainPassword } from './utils/questions';
import { isMainPasswordValid } from './utils/validation';

const start = async (): Promise<void> => {
  printWelcomeMessage();

  let mainPassword = await readMainPassword();
  while (!isMainPasswordValid(mainPassword)) {
    printInvalidMainPassword();
    mainPassword = await readMainPassword();
  }

  printCorrectMainPassword();
};

start();
