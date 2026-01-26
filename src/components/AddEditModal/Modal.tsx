import React from 'react'
import "./modal.scss"

type Props = {}

const Modal = (props: Props) => {
  return (
    <div className='overlay'>
        
    <div className='modal'>
        <div className="modal__top">
        <h2>Add/Edit</h2>
        <button><img src="/src/assets/icons/close.svg" alt="" /></button>

        </div>

    </div>
    </div>
  )
}

export default Modal