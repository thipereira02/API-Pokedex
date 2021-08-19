/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response) {
	try{
		const pokemons = await pokemonService.getPokemons();
		return res.send(pokemons);

	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}