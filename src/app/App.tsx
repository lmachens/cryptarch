import React from 'react';
import styles from './App.module.css';
import Credential from './components/Credential';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <h1>cryptarch</h1>
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
