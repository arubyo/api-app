import { v4 as uuidv4 } from 'uuid'; 

let users = [];

 export const getUsers = (req, res) => {
     console.log(`users in the database: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4()});
    res.send(`user with the name ${user.firstName} was added to the DB`);
 }

 export const getUser = (req, res) => {
    res.send(req.params.id);
}

export const deleteUser = (req, res) => {
        const { id } = req.params;
    //returns false when finds matches id
    users = users.filter((user) => user.id !== id); 
    console.log(`user with the id: ${id} has been deleted`);
 
}

export const changeUser = (req, res) => {
    const { id } = req.params; 
    const user = users.find((user) => user.id === id);
   user.firstName = req.body.firstName;
   user.lastName = req.body.lastName
    
    res.send(`user with the ${id} has been updated`);
}