import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.json({ msg: "No estas autorizado " + process.env.JWT_SECRET});
  } else {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
        if(err){
            res.json({msg: "No estas autorizado pa" })
        }else{
          console.log('decoded',decoded)

            next();
        }
    });
    }};

    export default auth