const User = require('../models/user');

function isstringvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const signup = async(req, res) =>{
    try{
    const {name, email, password} = req.body;
    console.log(email, name, password);
    if(isstringvalid(name) || isstringvalid(email) || isstringvalid(password)){
        return res.status(400).json({err: "Bad parameters - Something is missing"})
    }

    await User.create({name, email, password})
        res.status(201).json({message: 'Successfuly create new user'})
    }catch(err){
        res.status(500).json(err);
    }
}

const login = (req, res) => {

}

module.exports = {
    signup,
    login
}