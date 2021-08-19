/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";

import User from "../entities/User";
import userInterface from "../interfaces/userInterface";

export async function signUp (user: userInterface) {
	const users = await getRepository(User).insert({email: user.email, password: user.password});
  
	return users;
}
