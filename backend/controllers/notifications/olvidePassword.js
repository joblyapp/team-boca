import nodemailer from "nodemailer"

export const emailOlvidePassword = async (datos)=>{
    const {email, nombre, token} = datos
  
    const transport = nodemailer.createTransport({
      host: process.env.HOST_EMAIL,
      port: process.env.PORT_EMAIL,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      } 
      });
    
    const info = await transport.sendMail({
        from: 'fanzcars.notifications@gmail.com',
        to: email,
        subject: "FanzCars - Reestablece tú password",
        text: "Reestablece tú contraseña",
        html: `<p>Hola: ${nombre}, reestablece tú contraseña en FanzCars</p>
        <p>Para crear un nuevo password sigue el siguiente enlace:</p>
        <a href="http://${process.env.URL_FRONT}/olvide-password/${token}">Reestablecer contraseña</a>
        <br>
        <p>Si tú no solicitaste este cambio, puedes ignorar este mensaje.</p>
        
        `
    })
  }