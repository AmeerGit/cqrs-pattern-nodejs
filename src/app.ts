import express from "express";
import { createUser, getUser } from "./handlers/userHandlers";


const app = express();
app.use(express.json());

app.post("/user", createUser);
app.get("/user", getUser);

export default app;
