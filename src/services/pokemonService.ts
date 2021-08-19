/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";

export async function getPokemons() {
	const pokemons = await getRepository(Pokemon).find();
	return pokemons;
}