
let datas = []

export const createData = (req,res)=>{

    // console.log(req.body);

    const {name,age} = req.body
    
    if(name==="" || age===""){
        res.status(401).json({msg:"Please fill the form"})
        return
    }

    const saveData = {name,age}
    datas.push(saveData)

    // console.log('datas',datas);

    res.status(200).json({msg:"Successfully done",datas})
    


}


export const getDatas = (req,res)=>{


   res.status(201).json({msg:"Get Datas", datas})


}

export const getParams = (req,res)=>{

    console.log(req.params.id);
    

}


export const getquery = (req,res)=>{

    console.log(req.query);
    

}

export const getheaders = (req,res)=>{


    console.log(req.headers.mydata);
    

}


// request - Body,params,query,headers
// response - status, json(), text()