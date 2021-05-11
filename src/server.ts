import {
  printInvalidMainPassword,
  printCorrectMainPassword,
  printWelcomeMessage,
} from './utils/messages';
import {
  chooseCommand,
  readMainPassword,
  chooseService,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';
import { handleAdd } from './utils/commands';

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
      await handleAdd();
      break;
    }
  }
};
start();
