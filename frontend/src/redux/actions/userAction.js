import axios from 'axios'
import { getUser, confirmCuenta } from '../slices/userSlice'

const url = process.env.REACT_APP_HOST
// Ejemplo proyecto Pasado
export const logIn = (data) => (dispatch) => {
    try {
        dispatch(getUser(data))
        return data


    } catch (e) {
        let respuesta = JSON.parse(e.request.response.msg);
        console.log(respuesta)
    }

}
export const logOut = () => async (dispatch) => {
    try {
        let user = JSON.parse(sessionStorage.getItem('userdata'))
        let res = await axios.post(`http://${url}/user/logout`, user)
        dispatch(getUser(res.data.loggedUser))
        return res.data.loggedUser
    } catch (error) {
        console.log(error)
    }

}


export const confirmAcc = (token) => async (dispatch) => {
    try {
        let res = await axios.get(`https://${url}/api/usuarios/confirm/${token}`)
        dispatch(confirmCuenta(res.data))
    } catch (e) {
        let respuesta = JSON.parse(e.request.response);

        if(respuesta){
        dispatch(confirmCuenta(respuesta.msg))
        } else{
            alert("Ups, ocurrio un error")
        }
    }
}


export const postRegister = (payload) => async (dispatch) => {
    try {
        let res = await axios.post(`https://${url}/api/usuarios`, payload)

        if (res) {
            alert(res.data.msg)
        }
        else {
            alert("ups, algo salio mal")
        }

    } catch (err) {
        let respuesta = JSON.parse(err.request.response);

        if (respuesta) {
            alert(respuesta.msg)
        } else {
            alert("Ups, ocurrio un error")
        }
    }
}