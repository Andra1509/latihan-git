import { useEffect, useState } from "react"

const Counter = ({start=0}) => {
  const [count, setCount] = useState(start)
  const [warna, setWarna] = useState("red")
//   setCounter(count+1)
  useEffect(()=>{
    if(count > 10){
        setWarna("black")
    }
    setTimeout(()=>{
        setCount(count+1)
    },1000)
},[count])
  return (
    <>
      <h1 style={{color:warna}}>Count : {count}</h1> 
    </>
  )
}

export default Counter