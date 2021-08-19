/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signUp", userController.signUp);
app.post("/signIn", userController.signIn);

export async function init () {
	await connectDatabase();
}

export default app;
