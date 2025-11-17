import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('Loading...')

  useEffect(()=>{
    fetch('http://13.222.60.75:5000/api/hello')
      .then(r=>r.json())
      .then(j=>setMsg(j.message))
      .catch(e=>setMsg('Could not reach API'))
  },[])

  return (
    <div style={{fontFamily:'sans-serif',padding:20}}>
      <h1>My App</h1>
      <p>API say: <strong>{msg}</strong></p>
    </div>
  )
}
