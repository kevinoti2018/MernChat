
const express =  require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const rooms = ['general','tech','finance','crypto'];
const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use('/users',userRoutes)
require('./connection')

const server  = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server,{
    cors:{
        origin: 'http://locslhost3000',
        methods:['GET','POST']
    }
});

server.listen(PORT,()=>{console.log('listening on  port', PORT)

});
