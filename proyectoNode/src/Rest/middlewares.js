import jwt from 'jwt-simple'

export const auth = (req, res, next) => {
    if(req.headers.authorization){
        return res  
            .status(403)
            .send({menssage: "No autorizado"})
    }

    const token = req.headers.authorization.split(" ")[1]
    const playload = jwt.decode(token, req.app.locals.config.TOKEN)

    req.user = playload.email
    next()
}