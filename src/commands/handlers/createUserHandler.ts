
import {createUserCommand} from "../models/createUserCommand";
import { pool } from "../../db/db";
import { createUsersTable } from "../../migration/createTable";

const createUserHandler = async (name : string, email : string, password : string) => {
    createUsersTable().catch((err) => console.error('Error in createUsersTable', err));
    const command = createUserCommand(name, email, password);
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const user = await client.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *', [command.name, command.email, command.password]);
        await client.query('COMMIT');
        return user.rows[0];
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
}

export  {createUserHandler};