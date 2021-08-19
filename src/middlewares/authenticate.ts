/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from "express";

import * as sessionService from "../services/sessionService";

export default async function authenticate(req: Request, res: Response, next: NextFunction) {
	const authorization = req.headers["authorization"];
	const token = authorization?.split("Bearer ")[1];
	if (!token) return res.sendStatus(401);

	const user = await sessionService.findUser(token);
	if (!user) return res.sendStatus(401);

	next();
}