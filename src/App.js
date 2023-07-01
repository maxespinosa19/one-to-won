
import { useState } from 'react';
import './styles/App.css';


function App() {
  const [convertU, setConvertU] = useState("")
  const [won, setWon] = useState()


  const handleConversion = (e) => {
    e.preventDefault()

    const usd = Number(e.target.usd.value)
    const _won = Number(e.target.won.value)

    if (convertU !== "") {
      const convertedWon = usd / 0.00078
      setWon(convertedWon)

    } else {
      const convertedUsd = _won * 0.00078
      setConvertU(convertedUsd)
    }
  }





  return (
    <main>
      <h1> Currency Converter</h1>
      <form onSubmit={handleConversion}>

        <input type='text' name="usd" placeholder="Enter USD amount"
          value={convertU} onChange={e => {
            setConvertU(e.target.value)
            setWon("")
          }}
        />
        <input type='text' name="won" placeholder="Enter Won amount"
          value={won} onChange={e => {
            setWon(e.target.value)
            setConvertU("")
          }} />
        <button type="submit" value="usd" >Convert</button>
      </form>

    </main>



  );
}



export default App;
