import axios from 'axios'
import { getUser, confirmCuenta } from '../slices/userSlice'


const url = "localhost:3002"

// Ejemplo proyecto Pasado
export const logIn = (email, password) => async (dispatch) =>{
    try {
        let res = await axios.post(`http://${url}/user/login`, email, password)
        dispatch(getUser(res.data))
        return res.data
        
        
    } catch (e) {
        let respuesta = JSON.parse(e.request.response).message;
        console.log(respuesta)
    }

}
export const logOut = ()  => async (dispatch) =>{
    try {
            let user =  JSON.parse(sessionStorage.getItem('userdata')) 
            let res = await axios.post(`http://${url}/user/logout`,user)
            dispatch(getUser(res.data.loggedUser))
            return res.data.loggedUser
    } catch (error) {
        console.log(error)
    }

}


export const confirmAcc =(token)=> async (dispatch) => {
    try{
        
        let res = await axios.get(`http://${url}/api/usuarios/confirm/${token}`)
        
        dispatch(confirmCuenta(res.data))
        
    }catch(e){
        
        console.log(e + "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    }
}

