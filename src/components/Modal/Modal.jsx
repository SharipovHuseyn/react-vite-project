import { createPortal } from 'react-dom'
import './Modal.css'
import { useRef, useEffect } from 'react'

export default function Modal({children, open}){
    const dialogRef = useRef()

    useEffect(() => {
        if(open){
            dialogRef.current.show()
        }else{
            dialogRef.current.close()
        }
    }, [open])


    return createPortal(
        <dialog ref={dialogRef} open={open}>{children}</dialog>,
        document.getElementById('modal')
    )
}