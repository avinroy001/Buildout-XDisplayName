import { useState } from 'react'
import './App.css'

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [flag,setFlag] = useState(false)
  function fullName(e){
    e.preventDefault();
    setFlag(true);
  }

  return (
    <>
    <form onSubmit={fullName}>
        <h1>Full Name Display</h1>
        <br/>
        <div>
        <label>First Name:<input type='text' onChange={(e)=>setFirst(e.target.value)} required/></label>
        </div>
       <div>
       <label>Last Name:<input type='text' onChange={(e)=>setLast(e.target.value)} required/></label>
       </div>
        <button type='submit'>Submit</button>
    </form>
    {flag?(<p>Full Name: {first} {last}</p>):""}
    </>
  )
}

export default App
