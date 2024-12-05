const contact = require("../models/contact")

exports.AddContact = async(req,res)=>{

    try {
        var found = await contact.findOne({email: req.body.email})
        if(found){
            res.status(400).send({msg : 'Email already exist ' })
        }
    
        const novContact = new contact(req.body)
         await novContact.save()
    
    
        res.status(200).send({msg: 'contact id added'.novContact})
    
        
        
    } catch (error) {
        res.status(500).send({msg : 'could not add contact'})
    }
    
    
    }



    exports.GetContact = async(req,res)=>{
        try {
           const contacts = contact.find()
   
         res.status(200).send({msg : 'contact list ', contacts})
   
   
       } catch (error) {
           res.status(500).send({msg : 'could not get contact'})
        }
   
   }


   exports.DeleteContact = async(req,res)=>{
    try {
        console.log(req.params.djeja)
        const {id} = req.params


        await contact.findByIdAndDelete(id)
    
    
    res.status(200).send({msg : 'contact deleted'})
    
    } catch (error) {
        res.status(500).send({msg : 'could not delete contact'})
    }
}




exports.UpdateContact = async(req,res)=>{
    try {
      const {id} = req.params

     await contact.findByIdAndUpdate(id,{$set : req.body})
   res.status(200).send({msg : "contact updated"})
    } catch (error) {
        res.status(500).send({msg : 'could not updated contact'})
    }
}





exports.GetOneContact = async(req,res)=>{
    try {
       const {id} = req.params
       const found =contact.findById(id) 
    
    res.status(200).send({msg :'contact',found})
    } catch (error) {
        res.status(500).send({msg : 'could not get contact'})
    }
}