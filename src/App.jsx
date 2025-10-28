import './App.css'
import Form from './components/Form'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { useState } from 'react';

function App() {

  const [valueEmoji, setValueEmoji] = useState('fruit');

  return (
    <>
      <Header/>
      <Form setValueEmoji={setValueEmoji}/>
      <h2>Main</h2>
      <Footer/>
    </>
  )
}

export default App
