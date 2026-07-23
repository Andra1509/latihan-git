import Welcome from './components/Welcome'
import Counter from './components/counter'
import { useState } from 'react'
import './components/style.css'

function App() {
    const [count, setCount] = useState(0)

  let peserta = [
    {nama:"Andra", kota:"Samarinda", umur:"17"},
    {nama:"Rendra", kota:"Balikpapan", umur:"20"},
    {nama:"Desta", kota:"Samarinda", umur:"19"},
    {nama:"Daffa", kota:"Balikpapan", umur:"18"},
    {nama:"Taufik", kota:"Samarinda", umur:"22"},
    {nama:"Heldi", kota:"Tenggarong", umur:"21"}
  ]

  return (
    <>
      <div className='container'>
       <Welcome name="michael" job="desainer" age={24}></Welcome>
       <Welcome name="alex" job="arsitek" age={22}></Welcome>
       <Welcome name="mich" job="kuli" age={62}></Welcome>
      </div>

      <div className='container'>
      {peserta.map((item, index) => {
      return (
      <Welcome key={index}name={item.nama} job={item.kota} age={item.umur}></Welcome>      
    )
    })
    }
      </div>
      <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Counter></Counter>

        
    </>
  )
}

export default App
