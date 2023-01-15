import React, {useEffect, useState} from "react"
import {useDispatch, useSelector } from "react-redux"
import {useParams} from "react-router-dom"
import { confirmAcc } from "../../../redux/actions/userAction"
import LogoFanzCars from "../utils/images/logo.png"
import { Spinner } from "../utils/spinner/spinner"
import "./ConfirmAcc.css"


 const ConfirmAcc = ()=>{

    const dispatch = useDispatch()
    const token = useParams("token")
    const message = useSelector((state) => state.user.confirmation)
    
    const [confirm, setConfirm] = useState(true)
    const [time, setTime] = useState(5)

    useEffect(()=>{
        dispatch(confirmAcc(token.token))
      },[])
      
    setTimeout(function(a){
        setConfirm(false)
        console.log(a)
    }, 3500);

    if(!confirm){

        setTimeout(function(){
            window.location.href = "/login";
        }, 5000);
    }
    
    
    
    return( 
        <div>
            <div className="confirm-head">
                <img className="confirm-logo" src={LogoFanzCars} alt="Logo" />
                <h1>FanzCars || Confirmacion de cuenta</h1>
            </div>
        <div className="confirm-loading">
            {confirm?<h3>Por favor espere...<Spinner/></h3>:<>{message.msg?<h3 className="confirm-sucess">{message.msg}</h3>:<h3>UPS, Algo salio mal.. intenalo de nuevo o mas tarde</h3>}</>}    
        </div>
        </div>
    )
}

export default ConfirmAcc