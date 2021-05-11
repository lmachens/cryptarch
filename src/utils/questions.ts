import inquirer from 'inquirer';

export const readMainPassword = (): Promise<string> => {
  return inquirer
    .prompt<{ mainPassword: string }>([
      {
        type: 'password',
        name: 'mainPassword',
      },
    ])
    .then((answers) => answers.mainPassword);
};
