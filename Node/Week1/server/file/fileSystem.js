import fs from 'fs'

import os from 'os'

import path from 'path'
// console.log(fs);



const fileSystem = ()=>{

//   fs.writeFile("data.txt","Text like Node Js Welcome!",(err)=>{

//       if(err){
//         console.log('error',err);
//         return
        
//       }
//       console.log('File Created Successfully');
      

//   })


//   fs.readFile("data.txt","utf-8",(err,data)=>{
//     console.log(data);
    
//   })

// fs.appendFile("data.txt","\n tghis is the new content of node","utf-8",()=>{

//     console.log('FIle Added');
    

// })


// fs.unlink("data.txt",()=>{
//     console.log('file Deleted');
    
// })


// fs.mkdir("images/users/file",{recursive:true},()=>{
//     console.log('folder cerated');
    
// })

// fs.readdir("file",(err,f)=>{
//     console.log(f);
    
// })


// console.log(os.homedir());
// console.log(os.platform());

// const datas = {os:os.homedir(),path:os.platform(),curr:os.arch()}

// console.log(datas);



// const filePath = path.join("file","images","datas","data.txt")


// console.log(filePath);



// const result = path.resolve("datas","data.txt")

// console.log(result);


// const relativePath = path.relative("E:\weekend\Node\Week1\server","E:\weekend\Node\Week1\server\data.txt")

// console.log(relativePath);

}

export default fileSystem



