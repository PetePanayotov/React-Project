import React from 'react';
import styles from './app.module.css';
import Header from './components/header';
import Footer from './components/footer';
import Player from './components/player'
import Title from './components/title'

function App() {
  return (
    <div className={styles.app}>
       <Header/>
      <div className={styles.container}>
        <Title />
      </div>
      <Player/>
      <Footer/>
    </div>
  ) 
}



export default App;
