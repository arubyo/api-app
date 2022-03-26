import express from 'express'; 
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'; 

const app = express();
const PORT = 5000; 


//initialise bodyParser 
app.use(bodyParser.json());

app.use('/users', usersRoutes);

//create routes
app.get('/', (req, res) => {
    console.log('home page');
    res.send('home page');
})



//app needs to listen
app.listen(PORT, () => console.log(`server is running on port: http://localhistory:${PORT}`));

