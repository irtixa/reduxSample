import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreater  from './state/indexx';


const  Shop =() =>  {
const dispatch = useDispatch();
 const balance = useSelector(state => state.amount)
const {withdrawmoney, depositmoney} = bindActionCreators(actionCreater,dispatch);


    return (
        <div>
             <button  onClick={ () => {withdrawmoney(10000)}}>-</button>
             wdraw  or depo  ({balance})
          
            <button  onClick={ () => {depositmoney(10000)}}>+</button>
        </div>
    )
}
export default Shop