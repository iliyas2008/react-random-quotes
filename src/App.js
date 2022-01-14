import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import QuoteView from './components/QuoteView';

function App() {
  
  const [quoteData, setQuoteData] = useState({})
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy=()=>{
    navigator.clipboard.writeText(quoteData.content)
    const alert = document.querySelector('#myalert')
    alert.style=`display:block; color:greenyellow`
    setTimeout(function(){ 
      alert.style=`display:none`
  }, 2000);
    setCopySuccess("Copied !")
}
  useEffect(()=>{
    axios.get("https://api.quotable.io/random")
    .then(res=> {
      setTimeout(() => {
      setQuoteData(res.data)
      }, 5000);
    })
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Random Quotes Generator</h1>
        <p>It generates random quotes every 5 seconds.</p>
        <p>Refer github <a style={{textDecoration:"none", 
        color:"lightseagreen", fontWeight:"700"}} 
        
        href="https://github.com/iliyas2008/" rel="noreferrer" target="_blank">Repo</a></p>
      </header>
      <section className="App-body">
      {<p id="myalert" style={{display:"none"}} >{copySuccess}</p>}
      <QuoteView 
      text={quoteData.content}
      citation={quoteData.author}
      click={handleCopy}
      />
      </section>
    </div>
  );
}

export default App;
