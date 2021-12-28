import React from 'react'
import { useSelector } from 'react-redux'

const Nav =() => {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h1>State Bank</h1>
      <button> your balance ={amount} </button>
     
        </div>
    )
}
export default  Nav