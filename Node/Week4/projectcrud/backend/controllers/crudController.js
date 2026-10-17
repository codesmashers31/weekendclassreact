import crudModel from "../modles/curdModle.js";

export const AddUser = async(req,res)=>{

    try {

    //   console.log(req.body);

    const {username,userage,useremail} = req.body

   if(!username || !userage || !useremail){
       res.status(404).json({msg:"Please Fill the Form"})
       return
    }


   const checkEmail = await crudModel.findOne({useremail})

   //console.log(checkEmail);
   
   if(checkEmail){
      
    res.status(404).json({msg:"Already The Email Register Try New"})
    return   
}

    const adding = await crudModel.create({username,userage,useremail})

    res.status(201).json({msg:"Successfully"})
      
        
    } catch (error) {

        console.log('Error',error);
        
        
    }


}


export const getData = async (req,res)=>{

    try {
        const get = await crudModel.find()

        if(!get){
            res.status(400).json({msg:"DatabAse issue"})
        }

        res.status(200).json({msg:"Success",get})

    } catch (error) {

        console.log(error);
        
        
    }

}


export const updateData = async(req,res)=>{



    try {

        const {userid} = req.params
        const {username,userage,useremai} =  req.body

        const updateData = await crudModel.findByIdAndUpdate(userid,{username,userage,useremai},{returnDocument:"after"})

        res.status(200).json({msg:"Successfully Updated"})
        
    } catch (error) {
        console.log(error);
    }

}

export const deleteData = async(req,res)=>{

    try {
        const {userid} = req.params

        
        
        const deleteDatas = await crudModel.findByIdAndDelete(userid)
        res.status(200).json({msg:"Successfully Deleted"})
    
    } catch (error) {

        console.log('Error',error);
        
        
    }
}