import { Request, Response } from "express";
import {createUserCommand} from "../commands/models/createUserCommand";
import {createUserHandler} from "../commands/handlers/createUserHandler";
import { getUserByEmail } from "../queries/handlers/getEmailByUser";

const createUser = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        //const command = createUserCommand();
        try{
            const user = await createUserHandler(name, email, password);
            res.status(201).json({ message : "User created successfully", user });
        }catch(e){
            res.status(500).send(e);
            
    }}

const getUser = async (req: Request, res: Response) => {
    const { email } = req.query;
    try{
        const user = await getUserByEmail(email);
        console.log(user);
        res.status(200).json(user);
    }catch(e){
        res
        .status(500)
        .send
        (e);
    }
}

export {createUser , getUser};