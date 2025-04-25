import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import { useCallback, useEffect, useState } from "react"
import useInput from "./hooks/useInput"

export default function EffectSection(){
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const input = useInput()

    const getFetchUsers = useCallback(async()=>{
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            console.log("Error on uploading users data!")
            return;
        }
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(()=>{
        getFetchUsers()
    }, [getFetchUsers])
    
    return (
        <section>
            <h3 style={{color: 'white'}}>Effects</h3>

            <Button onClick={()=>setModal(true)}>Открыть информацию</Button>

            <Modal open={modal}>
                <h2>Hello world!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur possimus ipsam perferendis alias repellat praesentium sapiente explicabo rem sint saepe esse eaque, tenetur natus obcaecati odio nemo cupiditate eos.</p>
                <Button onClick={()=>{setModal(false)}}>Close modal</Button>
            </Modal>
            {!loading && (
               <>
               <input type="text" className="control" {...input}/>
                <ul>
                    {users.filter((user)=> user.name.toLowerCase().includes(input.value.toLowerCase())).map((user, i) => (
                    <li style={{color: 'white'}} key={i}>{user.name}</li>
                    ))}
                </ul>
               </>
            )}
        </section>
    )
}