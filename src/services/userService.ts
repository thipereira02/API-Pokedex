/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";

import User from "../entities/User";
import userInterface from "../interfaces/userInterface";

export async function signUp (user: userInterface) {
	const email = user.email;
	const password = user.password;

	const userExists = await getRepository(User).findOne({email});
	if (userExists) return null;

	const users = await getRepository(User).insert({email, password});
	return users;
}
