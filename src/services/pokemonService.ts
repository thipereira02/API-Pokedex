/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";
import PokemonUser from "../entities/PokemonUser";
import User from "../entities/User";

export async function getPokemons() {
	const pokemons = await getRepository(Pokemon).find();
	return pokemons;
}

export async function addPokemons(user: User, pokemonId: number) {
	await getRepository(PokemonUser).insert({userId: user.id, pokemonId});
}

export async function removePokemons(user: User, pokemonId: number) {
	await getRepository(PokemonUser).delete({userId: user.id, pokemonId});
}