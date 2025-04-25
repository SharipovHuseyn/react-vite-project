import { useState } from "react"
import Button from './Button/Button'
import { differences } from "../data"

export default function ButtonSection(){
    let [contentType, setContentType] = useState(null)
            
    function handeleClick(type){
        setContentType(type)
    }   

    return (
        <section>
            <h4>Чем мы отличаемся от других:</h4>
            <Button isActive={contentType == 'way'} onClick={()=>handeleClick("way")}>Подход</Button>
            <Button isActive={contentType == 'easy'} onClick={()=>handeleClick("easy")}>Доступность</Button>
            <Button isActive={contentType == 'program'} onClick={()=>handeleClick("program")}>Концентрация</Button>
        
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}
      </section>
    )
}