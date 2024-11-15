const jwt = require('jsonwebtoken')


exports.auth = (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        
        if(!token) return res.status(400).json({message:"token is misiing"})

        const decode = jwt.verify(token,"hello")

        if(!decode) return res.status(400).json({message:"invalid token"})
      
        req.user = decode

        next()
    } catch (error) {
        res.status(400).json({message:error})
    }
}