/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from "typeorm";

import Session from "../entities/Session";

export async function findUser(token: string) {
	const session = await getRepository(Session).findOne({
		where: {
			token
		}, 
		relations: ["user"]
	});
	if (session) return session.user;
}