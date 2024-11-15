const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
    const { username, email, password } = req.body
    try {

        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: hashPassword })
        await user.save()
        res.status(201).json({ message: "Registration Successfull 😎" })
    } catch (error) {
        res.status(401).json({ message: error })
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if(!user) return res.status(400).json("invalid credentials")

        const compare = await bcrypt.compare(password,user.password)

       
        if(!compare) return res.status(400).json({message:"wrong password"})
                 
        const token = jwt.sign({id:user._id,},"hello")
        console.log(token)
        res.status(200).json({messag:"login successfull"})
                    
    } catch (error) {
        res.status(401).json({ message: error })
    }
}