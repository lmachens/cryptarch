import inquirer from 'inquirer';
import type { Command, Credential } from '../types';

export const readMainPassword = (): Promise<string> => {
  return inquirer
    .prompt<{ mainPassword: string }>({
      type: 'password',
      name: 'mainPassword',
    })
    .then((answers) => answers.mainPassword);
};

export const chooseCommand = (): Promise<Command> => {
  return inquirer
    .prompt<{ command: Command }>({
      type: 'list',
      name: 'command',
      message: 'What do you want to do?',
      choices: [
        { name: 'List password names', value: 'list' },
        { name: 'Add new credential', value: 'add' },
      ],
    })
    .then((answers) => answers.command);
};

export const chooseService = (services: string[]): Promise<string> => {
  return inquirer
    .prompt<{ service: string }>({
      type: 'list',
      name: 'service',
      message: 'Please choose a password',
      choices: services,
    })
    .then((answers) => answers.service);
};

export const readCredential = (): Promise<Credential> => {
  return inquirer
    .prompt<Credential>([
      {
        type: 'text',
        name: 'service',
        message: 'Please enter name of the service',
      },
      {
        type: 'text',
        name: 'username',
        message: 'Please enter username',
      },
      {
        type: 'password',
        name: 'password',
        message: 'Please enter password ',
      },
    ])
    .then((answers) => answers);
};
