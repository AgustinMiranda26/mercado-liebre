const path = require ('path');
const userController =  {   

    register:(req,res) => {
        res.sendFile(path.join(__dirname,'../views/register.html'))
    },


    login: (req,res) => {
        res.sendFile(path.join(__dirname,'../views/login.html'))
    }
}

module.exports = userController