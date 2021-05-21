import React from 'react';
import { Credential as CredentialType } from '../types';
import styles from './App.module.css';
import Credential from './components/Credential';
import Hero from './components/Hero';

function App(): JSX.Element {
  const credentials: CredentialType[] = [
    {
      service: 'GitHub',
      username: 'lmachens',
      password: '123',
    },
    {
      service: 'Google',
      username: 'lmachens',
      password: '321',
    },
    {
      service: 'Zoom',
      username: 'zoomio',
      password: 'zoomzoom',
    },
  ];
  const crendentialElements = credentials.map((credential) => (
    <Credential key={credential.service} credential={credential} />
  ));

  return (
    <div className={styles.App}>
      <Hero
        title="cryptarch"
        imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F42%2Fpadlock-157618_960_720.png&f=1&nofb=1"
      />
      <main>
        <ul>{crendentialElements}</ul>
      </main>
    </div>
  );
}

export default App;
