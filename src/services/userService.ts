/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import User from "../entities/User";
import Session from "../entities/Session";

import signUpInterface from "../interfaces/signUpInterface";
import signInInterface from "../interfaces/signInInterface";

export async function signUp (user: signUpInterface) {
	const email = user.email;
	const password = user.password;

	const userExists = await getRepository(User).findOne({email});
	if (userExists) return null;

	const users = await getRepository(User).insert({email, password: bcrypt.hashSync(password, 12)});
	return users;
}

export async function signIn(user: signInInterface) {
	const email = user.email;
	const password = user.password;

	const userExists = await getRepository(User).findOne({email});
	if (!userExists) return null;

	const verify = bcrypt.compareSync(password, userExists.password);
	if (!verify) return null;

	const token = uuidv4();
	await getRepository(Session).insert({userId: userExists.id, token});

	return token;
}
