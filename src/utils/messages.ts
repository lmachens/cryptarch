import { Credential } from '../types';

export const printMainPasswordInvalid = (): void => {
  console.log('Invalid password ╰（‵□′）╯');
};

export const printMainPasswordValid = (): void => {
  console.log('You shell pass (❁´◡`❁)');
};

export const printPassword = (credential: Credential): void => {
  console.log(
    `The password for ${credential.service} is ${credential.password} (￣_,￣ )`
  );
};

export const printDeletedSuccess = (service: string): void => {
  console.log(`${service} deleted (〜￣▽￣)〜`);
};

export const printDeletedFailure = (service: string): void => {
  console.log(`${service} could not be deleted ￣へ￣`);
};

export const printAddedSuccess = (service: string): void => {
  console.log(`${service} added ╰(*°▽°*)╯`);
};
