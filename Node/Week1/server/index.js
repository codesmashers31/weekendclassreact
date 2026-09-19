import http from 'http'
import fileSystem from './file/fileSystem.js'
import { add, Sub } from './local/math.js'

const PORT = 5000

const app = http.createServer()

fileSystem()


console.log(add(10,27));

console.log(Sub(46,39));



app.listen(PORT,()=>{
    console.log(`Server Started Successfully http://localhost:${PORT}`);
    
})