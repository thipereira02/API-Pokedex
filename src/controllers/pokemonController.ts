/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

export async function getPokemons(req: Request, res: Response) {
	try{
		return true;
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}