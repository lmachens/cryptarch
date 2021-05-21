import React from 'react';
import styles from './App.module.css';
import Credential from './components/Credential';
import Hero from './components/Hero';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Hero
        title="cryptarch"
        imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F42%2Fpadlock-157618_960_720.png&f=1&nofb=1"
      />
      <main>
        <ul>
          <Credential service="GitHub" />
          <Credential service="Google" />
        </ul>
      </main>
    </div>
  );
}

export default App;
