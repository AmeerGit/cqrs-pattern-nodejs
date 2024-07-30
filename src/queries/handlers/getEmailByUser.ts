import { pool} from "../../db/db";

const getUserByEmail = async (email  : any ) => {
    try{
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows;
    }catch(e){
        return e;
    }
}
export {getUserByEmail};