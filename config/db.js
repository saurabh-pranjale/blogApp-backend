const mongoose = require('mongoose')


const connect = () =>{
mongoose.connect(`mongodb://localhost:27017/app`)
.then(()=>{console.log("db has connected")})
.catch((error)=>{console.log(error)})
}

module.exports = connect