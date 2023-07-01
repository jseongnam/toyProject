// const {mainService} = require("../services");

const mainController = async(req,res)=>{
    try{
        
        return res.status(200).json({message : "main page Success"});
    }catch(error){
        res.status(error.statusCode || 401).json({ message: error.message });
    }
}

module.exports = {mainController};