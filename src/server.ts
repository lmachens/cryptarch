import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from './utils/questions';
import { isMainPasswordValid } from './utils/validation';
import { printPassword } from './utils/messages';

// function start() {
const start = async () => {
  /* Solution with while */
  let mainPassword = await askForMainPassword();
  while (!isMainPasswordValid(mainPassword)) {
    console.log('Is invalid');
    mainPassword = await askForMainPassword();
  }
  console.log('Is valid');

  const command = await chooseCommand();

  switch (command) {
    case 'list':
      {
        const service = await chooseService(['Github', 'Codewars', 'Google']);
        printPassword(service);
      }
      break;
    case 'add':
      {
        const newCredential = await askForCredential();
        console.log(newCredential);
      }
      break;
  }

  /* Solution with recursion */
  //   const mainPassword = await askForMainPassword();
  //   if (!isMainPasswordValid(mainPassword)) {
  //     console.log('Is invalid');
  //     start(); // Recursion
  //   } else {
  //     console.log('Is valid');
  //   }

  /* ToDo */
  // askForCommand();
};

start();
