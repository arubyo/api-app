import express from "express";

import { createUser, getUsers, getUser, deleteUser, changeUser } from './../controllers/users.js';

const router = express.Router(); 
//all routes will be /users/
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', changeUser);

export default router; 