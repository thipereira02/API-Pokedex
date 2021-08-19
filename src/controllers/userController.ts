/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import * as userService from "../services/userService";
import { signUpSchema } from "../schemas/userSchemas";
import { signInSchema } from "../schemas/userSchemas";
import signUpInterface from "../interfaces/signUpInterface";
import signInInterface from "../interfaces/signInInterface";

export async function signUp (req: Request, res: Response) {
	try {
		const user = req.body as signUpInterface;

		const validate = signUpSchema.validate(user);
		if (validate.error) return res.sendStatus(400);

		const users = await userService.signUp(user);
		if (!users) return res.sendStatus(409);

		return res.sendStatus(201);

	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

export async function signIn(req: Request, res: Response) {
	try{
		const user = req.body as signInInterface;

		const validate = signInSchema.validate(user);
		if (validate.error) return res.sendStatus(400);

		const token = await userService.signIn(user);
		if (!token) return res.sendStatus(401);

		return res.send(token);

	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}