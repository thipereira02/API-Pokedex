/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import * as userService from "../services/userService";
import { signUpSchema } from "../schemas/userSchemas";
import userInterface from "../interfaces/userInterface";

export async function signUp (req: Request, res: Response) {
	try {
		const user = req.body as userInterface;

		const validate = signUpSchema.validate(req.body);
		if (validate.error) return res.sendStatus(400);

		const users = await userService.signUp(user);
		if (!users) return res.sendStatus(409);

		return res.sendStatus(201);

	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}
