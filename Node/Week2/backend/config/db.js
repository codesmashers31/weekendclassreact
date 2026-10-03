import mongoose from "mongoose";



const connectDB = async()=>{


  const conn =  await mongoose.connect(process.env.MONGO_URI)

  console.log('successfully done',conn.connection.host);
  


}

export default connectDB