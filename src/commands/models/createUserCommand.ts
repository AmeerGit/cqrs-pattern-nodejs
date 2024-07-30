
export interface CreateUserCommand {
    name: string;
    email: string;
    password: string;
}

const createUserCommand = (name : string, email : string, password : string ) : CreateUserCommand=> { 
    return {
        name,
        email,
        password
    }
    
}

export {createUserCommand};