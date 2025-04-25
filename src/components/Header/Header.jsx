import logo from '/logo.svg'
import { useEffect, useState } from 'react'
import './Header.css'
import { styled } from 'styled-components'

const HeaderCountiner = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid rgb(161, 161, 161);
  align-items: center;
`

export default function Header(){
  const [now, setNow] = useState(new Date())

  useEffect(()=>{
  const interval = setInterval(()=>setNow(new Date()), 1000)

  return ()=>{
    clearInterval(interval)
  }
    
  }, [])

  return (
      <HeaderCountiner>
          <img src={logo} alt={"logo"} />
        <span>Время сейчас: {now.toLocaleTimeString()}</span>
      </HeaderCountiner>
  )
  } 